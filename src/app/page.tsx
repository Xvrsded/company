import { LandingPage } from '@/components/landing-page';
import { getCompanyContent } from '@/lib/cms';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function Page() {
  await routeLoadingDelay();
  const content = await getCompanyContent();

  return <LandingPage content={content} />;
}
