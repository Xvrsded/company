import type { Metadata } from 'next';
import './globals.css';
import { PostHogProvider } from '@/components/posthog-provider';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'NOVA Studio — AI/SaaS Creative Agency',
  description:
    'Modern company profile for AI/SaaS startup growth: branding, conversion UX, and storytelling landing architecture.',
  keywords: ['web agency', 'ai startup', 'saas', 'branding', 'conversion ux'],
  openGraph: {
    title: 'NOVA Studio — AI/SaaS Creative Agency',
    description: 'Conversion-focused digital creative studio',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const saved = localStorage.getItem('theme');
              const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const dark = saved ? saved === 'dark' : systemDark;
              document.documentElement.classList.toggle('dark', dark);
            })();`
          }}
        />
        <PostHogProvider />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
