import Link from 'next/link';
import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  await routeLoadingDelay();
  const services = [
    {
      title: 'Pajak & Akuntansi',
      desc: 'Pelaporan pajak dan pembukuan bisnis secara akurat sesuai ketentuan terbaru.',
      items: ['PPh & PPN periodik', 'Laporan keuangan bulanan', 'Review kepatuhan regulasi']
    },
    {
      title: 'Pelatihan Pajak',
      desc: 'Pelatihan praktis untuk individu dan perusahaan agar paham kewajiban perpajakan harian.',
      items: ['Kelas internal tim finance', 'Pelatihan owner/management', 'Modul praktik kasus nyata']
    },
    {
      title: 'Layanan Legalitas',
      desc: 'Bantuan pendirian badan usaha dan pengurusan dokumen legal secara cepat dan terpercaya.',
      items: ['Pendirian CV/PT/Yayasan', 'Perubahan data perusahaan', 'Dokumen perizinan pendukung']
    }
  ];

  const workflow = [
    'Konsultasi kebutuhan bisnis dan target.',
    'Penyusunan proposal layanan & timeline.',
    'Eksekusi oleh tim specialist dan monitoring progres.',
    'Evaluasi berkala dengan rekomendasi perbaikan.'
  ];

  return (
    <main className="relative min-h-screen px-4 pb-20 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[92rem]">
        <SiteNav />

        <section className="rounded-3xl border border-border/70 bg-card/55 p-8 shadow-glass backdrop-blur-2xl sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="status-dot" />
            Layanan Kami
          </div>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Tiga layanan utama untuk kebutuhan bisnis modern</h1>
          <p className="mt-4 max-w-4xl text-base text-muted sm:text-lg">
            Layanan disusun fleksibel mengikuti skala usaha, dengan pendekatan praktis dan hasil yang terukur untuk
            membantu bisnis lebih siap tumbuh.
          </p>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="premium-card overflow-hidden rounded-2xl border border-border/70 bg-card/50 lg:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1500&q=80"
              alt="Kegiatan konsultasi layanan bisnis"
              width={1500}
              height={900}
              className="h-72 w-full object-cover"
            />
          </article>
          <article className="premium-card float-soft rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <h2 className="text-xl font-bold">Kenapa klien memilih kami?</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Respons cepat dan jalur komunikasi jelas.</li>
              <li>• Pendampingan tidak hanya administratif, tapi juga edukatif.</li>
              <li>• Proses dokumentasi rapi untuk audit dan evaluasi.</li>
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
                Konsultasi Sekarang
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/50 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Cara Kerja Layanan</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {workflow.map((item, index) => (
              <article key={item} className="premium-card rounded-2xl border border-border/70 bg-background/50 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">Tahap {index + 1}</p>
                <p className="mt-2 text-sm text-muted">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
