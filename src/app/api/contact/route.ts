import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  email?: string;
  company?: string;
  source?: string;
  website?: string;
};

const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;
const CONTACT_WEBHOOK_TOKEN = process.env.CONTACT_WEBHOOK_TOKEN;
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;
const HUBSPOT_PRIVATE_APP_TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM;
const RESEND_TO = process.env.RESEND_TO;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendToWebhook(payload: { email: string; company: string; source: string }) {
  if (!CONTACT_WEBHOOK_URL) {
    return false;
  }

  const response = await fetch(CONTACT_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(CONTACT_WEBHOOK_TOKEN ? { Authorization: `Bearer ${CONTACT_WEBHOOK_TOKEN}` } : {})
    },
    body: JSON.stringify({
      ...payload,
      createdAt: new Date().toISOString()
    }),
    cache: 'no-store'
  });

  return response.ok;
}

async function sendToHubSpot(payload: { email: string; company: string; source: string }) {
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_ID) {
    return false;
  }

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(HUBSPOT_PRIVATE_APP_TOKEN ? { Authorization: `Bearer ${HUBSPOT_PRIVATE_APP_TOKEN}` } : {})
    },
    body: JSON.stringify({
      fields: [
        { name: 'email', value: payload.email },
        { name: 'company', value: payload.company || 'Unknown' },
        { name: 'message', value: `Lead Source: ${payload.source}` }
      ],
      context: {
        pageUri: `${SITE_URL}/#contact`,
        pageName: 'Landing Contact CTA'
      }
    }),
    cache: 'no-store'
  });

  return response.ok;
}

async function sendResendNotification(payload: { email: string; company: string; source: string }) {
  if (!RESEND_API_KEY || !RESEND_FROM || !RESEND_TO) {
    return false;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [RESEND_TO],
      subject: `New Website Lead: ${payload.email}`,
      html: `<p><strong>Email:</strong> ${payload.email}</p><p><strong>Company:</strong> ${payload.company || '-'}</p><p><strong>Source:</strong> ${payload.source}</p>`
    }),
    cache: 'no-store'
  });

  return response.ok;
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request payload.' }, { status: 400 });
  }

  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ message: 'Submission received.' }, { status: 200 });
  }

  const email = body.email?.trim() ?? '';
  const company = body.company?.trim() ?? '';
  const source = body.source?.trim() ?? 'Website CTA';

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ message: 'Please provide a valid email.' }, { status: 400 });
  }

  const payload = { email, company, source };

  try {
    const configuredDestinations =
      Number(Boolean(CONTACT_WEBHOOK_URL)) +
      Number(Boolean(HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID)) +
      Number(Boolean(RESEND_API_KEY && RESEND_FROM && RESEND_TO));

    if (configuredDestinations === 0) {
      return NextResponse.json({ message: 'Success! Your request has been recorded.' }, { status: 200 });
    }

    const deliveryResults = await Promise.allSettled([
      sendToWebhook(payload),
      sendToHubSpot(payload),
      sendResendNotification(payload)
    ]);

    const hasSuccess = deliveryResults.some((result) => result.status === 'fulfilled' && result.value);

    if (!hasSuccess) {
      return NextResponse.json({ message: 'Unable to send request right now. Please retry.' }, { status: 502 });
    }

    return NextResponse.json({ message: 'Thank you. We will contact you shortly.' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Network issue. Please try again.' }, { status: 502 });
  }
}
