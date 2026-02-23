import Link from 'next/link';
import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function IndustriesPage() {
  await routeLoadingDelay();
  const segments = [
    {
      title: 'Orang Pribadi / Freelancer',
      desc: 'Pendampingan pajak individu, pencatatan pemasukan, dan kepatuhan tahunan.'
    },
    {
      title: 'UMKM dan Toko Retail',
      desc: 'Pembukuan sederhana hingga pelaporan pajak periodik yang konsisten.'
    },
    {
      title: 'Yayasan dan Komunitas',
      desc: 'Tata kelola administrasi, pelaporan, serta legalitas organisasi non-profit.'
    },
    {
      title: 'CV dan PT (Skala Kecil-Menengah)',
      desc: 'Sistem pelaporan lebih terstruktur, kontrol dokumen, dan minim risiko kepatuhan.'
    },
    {
      title: 'Perusahaan dengan Pelatihan Internal',
      desc: 'Program training perpajakan untuk meningkatkan kompetensi tim operasional.'
    },
    {
      title: 'Bisnis Tahap Ekspansi',
      desc: 'Penyesuaian legalitas dan tata kelola agar siap scaling ke level berikutnya.'
    }
  ];

  const commonNeeds = [
    'Kebutuhan pelaporan pajak yang tepat waktu.',
    'Kebutuhan pembukuan yang rapi dan mudah diaudit.',
    'Kebutuhan legalitas bisnis untuk operasional aman.',
    'Kebutuhan edukasi tim agar minim kesalahan administratif.'
  ];

  return (
    <main className="relative min-h-screen px-4 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <SiteNav />

        <section className="premium-card grid items-center gap-8 rounded-3xl border border-border/70 bg-card/55 p-8 shadow-glass backdrop-blur-2xl md:grid-cols-2 sm:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="status-dot" />
              Bidang Usaha
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Bisnis yang kami tangani secara profesional</h1>
            <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">
              Tim kami mendampingi berbagai tipe usaha dengan pendekatan praktis, mulai dari pembukuan, pelaporan pajak,
              hingga penguatan legalitas usaha.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="premium-link inline-flex items-center text-sm font-semibold text-foreground">
                Konsultasi Kebutuhan
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-border/70 bg-background/55 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/45"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>

          <div className="float-soft overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1500&q=80"
              alt="Kolaborasi lintas bidang usaha"
              width={1500}
              height={900}
              className="h-72 w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl lg:col-span-2">
            <h2 className="text-xl font-bold">Fokus Pendampingan</h2>
            <p className="mt-3 text-sm text-muted">
              Setiap bidang usaha memiliki karakter administrasi berbeda. Tim kami menyesuaikan alur kerja, format
              dokumen, dan jadwal monitoring berdasarkan profil bisnis Anda.
            </p>
            <div className="my-5 shimmer-divider" />
            <p className="text-sm text-muted">
              Output pendampingan dibuat mudah ditindaklanjuti agar owner, tim finance, dan operasional dapat bekerja
              dengan alur yang lebih sinkron.
            </p>
          </article>
          <article className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold">Cocok untuk siapa?</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Bisnis yang ingin proses administrasi lebih tertib.</li>
              <li>• Tim internal yang butuh SOP dokumentasi lebih jelas.</li>
              <li>• Perusahaan yang sedang bertumbuh dan butuh sistem.</li>
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
                Diskusikan kebutuhan
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Kebutuhan Umum yang Kami Bantu</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
            Area berikut paling sering menjadi fokus awal saat kami mulai mendampingi berbagai skala bisnis.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {commonNeeds.map((item, index) => (
              <article key={item} className="premium-card rounded-2xl border border-border/70 bg-background/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Prioritas {index + 1}</p>
                <p className="mt-2 text-base text-muted">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
