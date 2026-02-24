"use client";

import Link from 'next/link';
import { useHeaderActivity } from '@/components/use-header-activity';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' }
];

export function SiteNav() {
  const isVisible = useHeaderActivity(3200);

  return (
    <>
      <div className="mb-10 h-16 sm:h-20" aria-hidden="true" />
      <nav
        className={`fixed left-1/2 top-4 z-40 flex w-[calc(100%-2rem)] max-w-[92rem] -translate-x-1/2 items-center justify-between rounded-2xl border border-border/60 bg-card/60 px-4 py-4 shadow-glass backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <p className="text-base font-bold tracking-wide sm:text-lg">Your Company</p>
        <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false} className="premium-link wavy-link text-muted transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
