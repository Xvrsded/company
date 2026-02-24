import Link from 'next/link';
import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function IndustriesPage() {
  await routeLoadingDelay();
  const segments = [
    {
      title: 'Early-Stage Startups',
      desc: 'Technical foundation setup, MVP delivery, and scalable architecture planning for fast launches.'
    },
    {
      title: 'SaaS Product Teams',
      desc: 'Platform optimization, release acceleration, and product reliability improvements for growth-stage SaaS.'
    },
    {
      title: 'E-Commerce & Retail Platforms',
      desc: 'Performance upgrades, checkout optimization, and data-driven customer journey improvements.'
    },
    {
      title: 'Fintech & Regulated Products',
      desc: 'Secure engineering practices, traceable workflows, and resilient infrastructure for sensitive systems.'
    },
    {
      title: 'Corporate Innovation Teams',
      desc: 'Rapid prototyping, internal product acceleration, and modernization support across business units.'
    },
    {
      title: 'Scaling Digital Businesses',
      desc: 'Cloud cost optimization, engineering governance, and performance tuning for sustained growth.'
    }
  ];

  const commonNeeds = [
    'Faster product release cycles with reliable deployment workflows.',
    'Scalable infrastructure that supports traffic and feature growth.',
    'Better cross-team engineering visibility and technical governance.',
    'Continuous upskilling for internal teams to reduce delivery bottlenecks.'
  ];

  return (
    <main className="relative min-h-screen px-4 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <SiteNav />

        <section className="premium-card grid items-center gap-8 rounded-3xl border border-border/70 bg-card/55 p-8 shadow-glass backdrop-blur-2xl md:grid-cols-2 sm:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="status-dot" />
              Industries
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Technology sectors we support with precision</h1>
            <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">
              We partner with diverse digital businesses using practical, execution-focused methods—from cloud
              operations to product engineering and data platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="premium-link inline-flex items-center text-sm font-semibold text-foreground">
                Discuss Your Needs
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-border/70 bg-background/55 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/45"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="float-soft overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1500&q=80"
              alt="Cross-functional technology team collaboration"
              width={1500}
              height={900}
              className="h-72 w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl lg:col-span-2">
            <h2 className="text-xl font-bold">Engagement Focus</h2>
            <p className="mt-3 text-sm text-muted">
              Every sector has unique product and engineering challenges. We adapt delivery cadence, documentation,
              and monitoring standards to match your operational profile.
            </p>
            <div className="my-5 shimmer-divider" />
            <p className="text-sm text-muted">
              Each engagement produces clear, actionable outputs so product, engineering, and leadership teams stay
              aligned and execution-ready.
            </p>
          </article>
          <article className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold">Best fit for</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Teams that need faster execution with stronger engineering discipline.</li>
              <li>• Organizations requiring clearer technical documentation and standards.</li>
              <li>• Companies scaling products and infrastructure to the next stage.</li>
            </ul>
          </article>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment, index) => (
            <article key={segment.title} className="premium-card rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Segmen 0{index + 1}</p>
              <p className="mt-2 text-lg font-semibold">{segment.title}</p>
              <p className="mt-3 text-sm text-muted">{segment.desc}</p>
              <Link href="/contact" className="premium-link mt-4 inline-block text-sm font-semibold text-foreground">
                Talk to our team
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Common Priorities We Solve</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            These are the most frequent priorities we address when partnering with growing technology organizations.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {commonNeeds.map((item, index) => (
              <article key={item} className="premium-card rounded-2xl border border-border/70 bg-background/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Priority {index + 1}</p>
                <p className="mt-2 text-base text-muted">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
