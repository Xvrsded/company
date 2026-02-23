import Link from 'next/link';
import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  await routeLoadingDelay();

  const consultTopics = [
    'Konsultasi Pajak & Akuntansi Berkala',
    'Konsultasi Pelatihan Pajak untuk Tim Internal',
    'Konsultasi Legalitas dan Dokumen Usaha',
    'Konsultasi Perbaikan Proses Administrasi Keuangan'
  ];

  return (
    <main className="relative min-h-screen px-4 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <SiteNav />

        <section className="rounded-3xl border border-border/70 bg-card/55 p-8 shadow-glass backdrop-blur-2xl sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="status-dot" />
            Kontak
          </div>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Kontak kami, siap bantu kebutuhan bisnis Anda</h1>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Tim kami siap merespons konsultasi layanan pajak, akuntansi, pelatihan, dan legalitas usaha.
          </p>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="premium-card overflow-hidden rounded-2xl border border-border/70 bg-card/50 lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=80"
              alt="Kantor layanan konsultasi"
              width={1500}
              height={900}
              className="h-72 w-full object-cover"
            />
          </article>
          <article className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold">Jam Operasional</h2>
            <p className="mt-3 text-sm text-muted">Senin - Jumat: 08.30 - 17.30</p>
            <p className="mt-1 text-sm text-muted">Sabtu: 09.00 - 14.00</p>
            <p className="mt-1 text-sm text-muted">Minggu/Hari Libur: By Appointment</p>
          </article>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="premium-card rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-widest text-muted">Kontak Telepon</p>
            <a href="https://wa.me/6281234567890" className="mt-2 block text-2xl font-bold">(+62) 812-3456-7890</a>
          </article>

          <article className="premium-card rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-widest text-muted">Email</p>
            <a href="mailto:hello@yourcompany.com" className="mt-2 block text-lg font-semibold">hello@yourcompany.com</a>
            <a href="mailto:sales@yourcompany.com" className="mt-1 block text-lg font-semibold">sales@yourcompany.com</a>
          </article>

          <article className="premium-card rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-widest text-muted">Alamat</p>
            <p className="mt-2 text-base font-semibold">Jl. Contoh Bisnis No. 123, Jakarta, Indonesia</p>
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Topik Konsultasi Populer</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {consultTopics.map((topic) => (
              <article key={topic} className="premium-card rounded-2xl border border-border/70 bg-background/50 p-5">
                <p className="text-base text-muted">{topic}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold">Media Sosial</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="https://www.instagram.com/yourcompany" className="premium-btn rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-sm font-semibold">Instagram</Link>
            <Link href="https://youtube.com/@yourcompany" className="premium-btn rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-sm font-semibold">YouTube</Link>
            <Link href="https://www.tiktok.com/@yourcompany" className="premium-btn rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-sm font-semibold">TikTok</Link>
          </div>
          <div className="my-6 shimmer-divider" />
          <p className="text-sm text-muted">
            Untuk respon lebih cepat, silakan klik WhatsApp atau kirim email dengan subjek sesuai layanan yang Anda
            butuhkan.
          </p>
        </section>
      </div>
    </main>
  );
}
