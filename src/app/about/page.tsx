import Image from 'next/image';
import { SiteNav } from '@/components/site-nav';
import { routeLoadingDelay } from '@/lib/route-loading';

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  await routeLoadingDelay();

  const strengths = [
    'Berpengalaman menangani UMKM, Yayasan, CV, hingga PT dengan kebutuhan beragam.',
    'Pendampingan periodik yang membantu bisnis tetap tertib pajak dan administrasi.',
    'Biaya lebih efisien dibanding menambah beban payroll tim internal untuk fungsi tertentu.',
    'Kerahasiaan data dan ketepatan proses menjadi prinsip utama dalam setiap layanan.'
  ];

  const process = [
    {
      title: 'Asesmen Awal',
      desc: 'Kami memetakan kebutuhan bisnis, status dokumen, dan prioritas utama perusahaan.'
    },
    {
      title: 'Perencanaan Layanan',
      desc: 'Tim menyusun rencana kerja terukur untuk pajak, akuntansi, pelatihan, atau legalitas.'
    },
    {
      title: 'Eksekusi & Monitoring',
      desc: 'Setiap tahap dieksekusi dengan update progres berkala agar klien selalu terinformasi.'
    },
    {
      title: 'Evaluasi Berkala',
      desc: 'Kami melakukan review periodik untuk menjaga kualitas, kepatuhan, dan efisiensi proses.'
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
              Tentang Kami
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Partner strategis untuk urusan pajak, pembukuan, dan legalitas usaha
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg">
              PT SMN SURYA INDONESIA berfokus membantu pelaku usaha agar tetap patuh regulasi dengan proses kerja
              cepat, jelas, dan terpercaya. Kami hadir agar Anda bisa fokus mengembangkan bisnis tanpa dibebani urusan
              administratif yang kompleks.
            </p>
          </div>

          <div className="float-soft overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Tim profesional berdiskusi"
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
            <h2 className="text-2xl font-bold">Visi Kami</h2>
            <p className="mt-3 text-base text-muted">
              Menjadi mitra terpercaya bagi pelaku usaha Indonesia dalam membangun fondasi bisnis yang sehat, legal,
              dan berkelanjutan melalui layanan pajak, akuntansi, serta legalitas yang modern dan adaptif.
            </p>
            <div className="my-5 shimmer-divider" />
            <h3 className="text-xl font-semibold">Misi Kami</h3>
            <ul className="mt-3 space-y-2 text-base text-muted">
              <li>• Memberikan layanan profesional dengan standar kualitas yang konsisten.</li>
              <li>• Menjaga transparansi proses agar klien memahami setiap langkah kerja.</li>
              <li>• Mendorong literasi pajak agar bisnis lebih siap bertumbuh jangka panjang.</li>
            </ul>
          </article>

          <article className="premium-card overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-xl">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
              alt="Kolaborasi tim bisnis"
              width={1100}
              height={900}
              className="h-full min-h-64 w-full object-cover"
            />
          </article>
        </section>

        <section className="mt-8 rounded-3xl border border-border/70 bg-card/55 p-8 backdrop-blur-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Alur Kolaborasi</h2>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Komitmen Kami</h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            Menjadi mitra jangka panjang yang responsif, transparan, dan solutif dalam membantu bisnis Indonesia tumbuh
            dengan fondasi legalitas serta tata kelola perpajakan yang kuat.
          </p>
        </section>
      </div>
    </main>
  );
}
