import Link from 'next/link';
import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  await routeLoadingDelay();
  const services = [
    {
      title: 'Cloud & DevOps Engineering',
      desc: 'Scalable cloud architecture, CI/CD pipelines, and infrastructure automation for high-velocity teams.',
      items: ['Cloud migration & optimization', 'CI/CD implementation', 'Observability & reliability monitoring']
    },
    {
      title: 'AI & Data Solutions',
      desc: 'Practical AI and analytics solutions to improve operations, customer insight, and business decision-making.',
      items: ['Data platform architecture', 'Applied AI workflows', 'Executive analytics dashboards']
    },
    {
      title: 'Product Development',
      desc: 'End-to-end development for web and mobile products with modern UX and maintainable code quality.',
      items: ['Full-stack web apps', 'Mobile app development', 'Product performance optimization']
    }
  ];

  const workflow = [
    'Discovery session to align goals, constraints, and technical priorities.',
    'Solution blueprint and execution timeline planning.',
    'Implementation by specialist team with transparent progress tracking.',
    'Continuous review with optimization recommendations.'
  ];

  return (
    <main className="relative min-h-screen px-4 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <SiteNav />

        <section className="rounded-3xl border border-border/70 bg-card/55 p-8 shadow-glass backdrop-blur-2xl sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="status-dot" />
            Our Services
          </div>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Three core services for technology-driven growth</h1>
          <p className="mt-4 max-w-4xl text-base text-muted sm:text-lg">
            Our delivery model is tailored to your product stage and team capacity, with measurable outcomes and
            practical implementation.
          </p>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="premium-card overflow-hidden rounded-2xl border border-border/70 bg-card/50 lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80"
              alt="Technology consulting workshop"
              width={1500}
              height={900}
              className="h-72 w-full object-cover"
            />
          </article>
          <article className="premium-card float-soft rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold">Why teams choose us</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Fast response time and clear communication channels.</li>
              <li>• Hands-on guidance from strategy to implementation.</li>
              <li>• Structured documentation for visibility and governance.</li>
            </ul>
          </article>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="premium-card rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-2xl">
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 text-base text-muted">{service.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link href="/contact" className="premium-link mt-5 inline-block text-sm font-semibold text-foreground">
                Schedule a Consultation
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How We Work</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item, index) => (
              <article key={item} className="premium-card rounded-2xl border border-border/70 bg-background/50 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">Stage {index + 1}</p>
                <p className="mt-2 text-sm text-muted">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
