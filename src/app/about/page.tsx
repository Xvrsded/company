import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  await routeLoadingDelay();

  const strengths = [
    'Experienced in supporting startups, scale-ups, and enterprise teams across diverse technology stacks.',
    'Continuous delivery support that helps products stay stable, secure, and performance-focused.',
    'Cost-efficient execution compared to building large specialized teams from scratch.',
    'Data privacy, engineering quality, and transparent collaboration are core principles in every engagement.'
  ];

  const process = [
    {
      title: 'Discovery Assessment',
      desc: 'We evaluate product goals, current architecture, and technical priorities with your core stakeholders.'
    },
    {
      title: 'Delivery Planning',
      desc: 'Our team designs a measurable execution plan for cloud, product, data, and engineering workflows.'
    },
    {
      title: 'Build & Monitoring',
      desc: 'Every phase is implemented with regular progress updates, quality checks, and performance tracking.'
    },
    {
      title: 'Continuous Improvement',
      desc: 'We run periodic reviews to improve reliability, scalability, and long-term product efficiency.'
    }
  ];

  return (
    <main className="relative min-h-screen px-4 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <SiteNav />

        <section className="premium-card grid items-center gap-8 rounded-3xl border border-border/70 bg-card/55 p-8 shadow-glass backdrop-blur-2xl md:grid-cols-2 sm:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="status-dot" />
              About Us
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Strategic technology partner for modern digital product teams
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">
              Your Company helps organizations build and scale digital products through practical engineering,
              cloud-native architecture, and data-driven decision making. We enable your team to focus on innovation
              while we optimize technical execution.
            </p>
          </div>

          <div className="float-soft overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80"
              alt="Technology team workshop"
              width={1400}
              height={900}
              className="h-72 w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {strengths.map((point) => (
            <article key={point} className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
              <p className="text-base text-foreground">{point}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl lg:col-span-2">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-base text-muted">
              To become a trusted technology partner for organizations building resilient, scalable, and user-centered
              digital products in a rapidly evolving market.
            </p>
            <div className="my-5 shimmer-divider" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <ul className="mt-3 space-y-2 text-base text-muted">
              <li>• Deliver professional engineering services with consistent quality standards.</li>
              <li>• Maintain transparent workflows so every stakeholder understands progress and outcomes.</li>
              <li>• Help businesses adopt modern technology practices for sustainable long-term growth.</li>
            </ul>
          </article>

          <article className="premium-card overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-xl">
            <Image
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1100&q=80"
              alt="Engineering collaboration and code review"
              width={1100}
              height={900}
              className="h-full min-h-64 w-full object-cover"
            />
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/55 p-8 backdrop-blur-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Collaboration Workflow</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <article key={step.title} className="premium-card rounded-2xl border border-border/70 bg-background/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/55 p-8 backdrop-blur-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Commitment</h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            To be a long-term, responsive, and transparent partner in helping your business scale through strong
            engineering foundations and sustainable technology operations.
          </p>
        </section>
      </div>
    </main>
  );
}
