import { fallbackContent } from '@/lib/content';
import { CompanyContent } from '@/types/content';

const CMS_ENDPOINT = process.env.NEXT_PUBLIC_CMS_ENDPOINT;
const CMS_TOKEN = process.env.CMS_ACCESS_TOKEN;
const CMS_PROVIDER = process.env.CMS_PROVIDER;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT ?? 'master';
const CONTENTFUL_ENTRY_ID = process.env.CONTENTFUL_ENTRY_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_COLLECTION = process.env.STRAPI_COLLECTION ?? 'company-content';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = process.env.SANITY_DATASET ?? 'production';
const SANITY_API_VERSION = process.env.SANITY_API_VERSION ?? '2025-02-01';
const SANITY_READ_TOKEN = process.env.SANITY_READ_TOKEN;
const SANITY_QUERY = process.env.SANITY_QUERY;

function isCompanyContent(data: unknown): data is CompanyContent {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const candidate = data as Partial<CompanyContent>;
  return !!candidate.hero && Array.isArray(candidate.features) && Array.isArray(candidate.storySteps);
}

async function fetchGenericEndpoint(): Promise<CompanyContent | null> {
  if (!CMS_ENDPOINT) {
    return null;
  }

  const response = await fetch(CMS_ENDPOINT, {
    headers: CMS_TOKEN
      ? {
          Authorization: `Bearer ${CMS_TOKEN}`
        }
      : undefined,
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as unknown;
  return isCompanyContent(data) ? data : null;
}

function mapContentfulFields(rawFields: Record<string, unknown>): CompanyContent | null {
  const data = {
    hero: rawFields.hero,
    metrics: rawFields.metrics,
    features: rawFields.features,
    storySteps: rawFields.storySteps,
    testimonials: rawFields.testimonials,
    cta: rawFields.cta
  } as unknown;

  return isCompanyContent(data) ? data : null;
}

async function fetchContentful(): Promise<CompanyContent | null> {
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ENTRY_ID || !CONTENTFUL_ACCESS_TOKEN) {
    return null;
  }

  const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries/${CONTENTFUL_ENTRY_ID}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
    },
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { fields?: Record<string, unknown> };
  if (!payload.fields) {
    return null;
  }

  return mapContentfulFields(payload.fields);
}

async function fetchStrapi(): Promise<CompanyContent | null> {
  if (!STRAPI_URL) {
    return null;
  }

  const normalizedBase = STRAPI_URL.replace(/\/$/, '');
  const response = await fetch(`${normalizedBase}/api/${STRAPI_COLLECTION}`, {
    headers: STRAPI_TOKEN
      ? {
          Authorization: `Bearer ${STRAPI_TOKEN}`
        }
      : undefined,
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as {
    data?: { attributes?: unknown } | Array<{ attributes?: unknown }>;
  };

  const source = Array.isArray(payload.data)
    ? payload.data[0]?.attributes
    : payload.data?.attributes;

  return isCompanyContent(source) ? source : null;
}

async function fetchSanity(): Promise<CompanyContent | null> {
  if (!SANITY_PROJECT_ID) {
    return null;
  }

  const query =
    SANITY_QUERY ??
    `*[_type == "companyContent"][0]{
      hero,
      metrics,
      features,
      storySteps,
      testimonials,
      cta
    }`;

  const endpoint = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;
  const response = await fetch(endpoint, {
    headers: SANITY_READ_TOKEN
      ? {
          Authorization: `Bearer ${SANITY_READ_TOKEN}`
        }
      : undefined,
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as { result?: unknown };
  return isCompanyContent(payload.result) ? payload.result : null;
}

export async function getCompanyContent(): Promise<CompanyContent> {
  try {
    const provider = CMS_PROVIDER?.toLowerCase();

    if (provider === 'contentful') {
      const contentfulData = await fetchContentful();
      if (contentfulData) {
        return contentfulData;
      }
    }

    if (provider === 'strapi') {
      const strapiData = await fetchStrapi();
      if (strapiData) {
        return strapiData;
      }
    }

    if (provider === 'sanity') {
      const sanityData = await fetchSanity();
      if (sanityData) {
        return sanityData;
      }
    }

    const genericData = await fetchGenericEndpoint();
    if (genericData) {
      return genericData;
    }

    const contentfulFallback = await fetchContentful();
    if (contentfulFallback) {
      return contentfulFallback;
    }

    const strapiFallback = await fetchStrapi();
    if (strapiFallback) {
      return strapiFallback;
    }

    const sanityFallback = await fetchSanity();
    if (sanityFallback) {
      return sanityFallback;
    }

    return fallbackContent;
  } catch {
    return fallbackContent;
  }
}
