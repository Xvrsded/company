import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' }
];

export function SiteNav() {
  return (
    <nav className="mb-10 flex items-center justify-between rounded-2xl border border-border/60 bg-card/60 px-4 py-4 shadow-glass backdrop-blur-xl sm:px-6">
      <p className="text-base font-bold tracking-wide sm:text-lg">Your Company</p>
      <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} prefetch={false} className="premium-link wavy-link text-muted transition hover:text-foreground">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
