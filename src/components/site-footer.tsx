import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang Kami' },
  { href: '/services', label: 'Layanan' },
  { href: '/industries', label: 'Bidang Usaha' },
  { href: '/contact', label: 'Kontak' }
];

export function SiteFooter() {
  return (
    <footer className="mt-12 px-4 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <section className="footer-shell premium-card rounded-3xl border border-border/70 bg-card/60 p-6 shadow-glass backdrop-blur-2xl sm:p-8">
          <div className="footer-glow" aria-hidden="true" />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary">
                <span className="status-dot" />
                Your Company
              </div>
              <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
                Partner profesional untuk kebutuhan perpajakan, pembukuan, pelatihan, dan legalitas bisnis yang
                modern.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 sm:text-base" aria-label="Footer menu">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} prefetch={false} className="premium-link text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="my-5 shimmer-divider" />

          <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <p className="footer-pulse">Dibangun dengan pendekatan elegan, cepat, dan terukur.</p>
          </div>
        </section>
      </div>
    </footer>
  );
}