"use client";

import { FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { RubikHeroCube } from '@/components/rubik-hero-cube';
import { ScrollFloat, ScrollReveal, ShinyText, SplitText } from '@/components/text-animations';
import { ThemeToggle } from '@/components/theme-toggle';
import { CompanyContent } from '@/types/content';

type LandingPageProps = {
  content: CompanyContent;
};

export function LandingPage({ content }: LandingPageProps) {
  const storyRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const blobYLeft = useTransform(scrollY, [0, 1600], [0, -130]);
  const blobYRight = useTransform(scrollY, [0, 1600], [0, 160]);
  const blobYCenter = useTransform(scrollY, [0, 1800], [0, -100]);
  const gridY = useTransform(scrollY, [0, 1400], [0, -70]);
  const progressGlow = useTransform(scrollYProgress, [0, 1], [0.25, 0.9]);
  const cardRotateX = useMotionValue(0);
  const cardRotateY = useMotionValue(0);
  const smoothRotateX = useSpring(cardRotateX, { stiffness: 120, damping: 24, mass: 1.05 });
  const smoothRotateY = useSpring(cardRotateY, { stiffness: 120, damping: 24, mass: 1.05 });
  const glareX = useTransform(smoothRotateY, [-7, 7], ['20%', '80%']);
  const glareY = useTransform(smoothRotateX, [-6, 6], ['72%', '18%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), rgba(255,255,255,0.02) 42%, transparent 64%)`;
  const dynamicShadow = useTransform([smoothRotateX, smoothRotateY], (latestValues) => {
    const [x, y] = latestValues as [number, number];
    const horizontal = -y * 1.4;
    const vertical = 26 + x * 1.6;
    return `${horizontal}px ${vertical}px 55px rgba(2, 8, 23, 0.36)`;
  });
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [orbFlipped, setOrbFlipped] = useState(false);

  const businessFields = [
    {
      title: 'Pajak & Akuntansi',
      description:
        'Pendampingan pelaporan pajak dan penyusunan pembukuan secara periodik agar bisnis tetap tertib administrasi dan sesuai regulasi.'
    },
    {
      title: 'Pelatihan Pajak',
      description:
        'Program pelatihan praktis untuk tim perusahaan maupun individu agar lebih memahami kewajiban perpajakan sehari-hari.'
    },
    {
      title: 'Layanan Legalitas',
      description:
        'Bantuan pengurusan legalitas usaha mulai dari pendirian badan usaha, perubahan data, hingga dokumen pendukung operasional.'
    }
  ];

  const faqs = [
    {
      question: 'Bagaimana proses kerja sama dimulai?',
      answer:
        'Kami mulai dari sesi konsultasi awal untuk memetakan kondisi bisnis, lalu menyusun rencana layanan yang paling relevan untuk kebutuhan Anda.'
    },
    {
      question: 'Apakah layanan dapat disesuaikan kebutuhan?',
      answer:
        'Ya. Layanan dapat disesuaikan untuk UMKM, yayasan, CV, maupun PT, baik untuk kebutuhan insidental maupun pendampingan bulanan.'
    },
    {
      question: 'Berapa estimasi durasi pengerjaan proyek?',
      answer:
        'Durasi bergantung jenis layanan. Setelah asesmen awal, kami akan memberikan estimasi timeline dan tahapan kerja secara transparan.'
    }
  ];

  const heroServices = [
    {
      title: 'Pajak & Akuntansi',
      description: 'Pelaporan berkala, pembukuan, dan kepatuhan pajak.'
    },
    {
      title: 'Pelatihan Pajak',
      description: 'Program praktis untuk tim internal perusahaan.'
    },
    {
      title: 'Layanan Legalitas',
      description: 'Pendirian dan pengurusan dokumen badan usaha.'
    }
  ];

  const serviceHighlights = [
    'Pajak & Akuntansi: laporan rutin, review kepatuhan, optimasi administrasi.',
    'Pelatihan Pajak: kelas internal tim finance, HR, dan owner.',
    'Legalitas Usaha: pendirian/perubahan badan usaha serta dokumen pendukung.'
  ];

  const handleOrbMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateYValue = ((x / rect.width) - 0.5) * 9;
    const rotateXValue = (0.5 - y / rect.height) * 8;

    cardRotateX.set(rotateXValue);
    cardRotateY.set(rotateYValue);
  };

  const resetOrbTilt = () => {
    cardRotateX.set(0);
    cardRotateY.set(0);
  };

  useEffect(() => {
    let mounted = true;
    let scrollTriggerRef: { getAll: () => Array<{ kill: () => void }> } | null = null;

    const setup = async () => {
      const gsapModule = await import('gsap');
      const triggerModule = await import('gsap/dist/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      scrollTriggerRef = ScrollTrigger;

      if (!mounted || !storyRef.current) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const steps = storyRef.current.querySelectorAll('.story-step');
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              once: true
            }
          }
        );
      });
    };

    setup();

    return () => {
      mounted = false;
      if (scrollTriggerRef) {
        scrollTriggerRef.getAll().forEach((t: { kill: () => void }) => t.kill());
      }
    };
  }, []);

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const website = String(formData.get('website') ?? '');

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
      setFeedback({ type: 'error', message: 'Please enter a valid work email.' });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: trimmedEmail,
          company: company.trim(),
          source: 'Landing CTA',
          website
        })
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setFeedback({
          type: 'error',
          message: data.message ?? 'Submission failed. Please try again.'
        });
        return;
      }

      setEmail('');
      setCompany('');
      setFeedback({
        type: 'success',
        message: data.message ?? 'Thanks! We will contact you shortly.'
      });
    } catch {
      setFeedback({
        type: 'error',
        message: 'Network error. Please try again in a moment.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative overflow-hidden text-base sm:text-lg">
      <motion.div
        style={{ scaleX: scrollYProgress, opacity: progressGlow }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"
      />

      <div className="lux-bg-noise pointer-events-none fixed inset-0 -z-20" />

      <motion.div
        style={{ y: gridY }}
        className="lux-bg-grid pointer-events-none fixed inset-0 -z-20 opacity-70"
      />

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="lux-liquid-layer" />
        <div className="lux-liquid-core" />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-20 animate-gradient bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,.24),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(139,92,246,.2),transparent_36%),radial-gradient(circle_at_78%_82%,rgba(6,182,212,.2),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.03),rgba(17,24,39,0.07),rgba(255,255,255,0.03))] bg-[length:220%_220%]" />

      <motion.div
        style={{ y: blobYLeft }}
        className="pointer-events-none fixed -left-24 top-28 -z-10 h-[26rem] w-[26rem] rounded-full bg-cyan-400/20 blur-[110px]"
      />

      <motion.div
        style={{ y: blobYRight }}
        className="pointer-events-none fixed -right-28 bottom-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-[120px]"
      />

      <motion.div
        style={{ y: blobYCenter }}
        className="pointer-events-none fixed left-1/2 top-1/3 -z-10 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-sky-400/12 blur-[95px]"
      />

      <section className="mx-auto w-full max-w-[92rem] px-4 pb-24 pt-8 sm:px-8 lg:px-12">
        <nav className="mb-12 flex items-center justify-between rounded-2xl border border-border/60 bg-card/50 px-4 py-4 shadow-glass backdrop-blur-xl sm:px-6">
          <p className="text-base font-bold tracking-wide sm:text-lg">Your Company</p>
          <div className="flex items-center gap-4">
            <Link href="/about" prefetch={false} className="premium-link wavy-link hidden text-base text-muted md:block">
              Tentang
            </Link>
            <Link href="/services" prefetch={false} className="premium-link wavy-link hidden text-base text-muted md:block">
              Layanan
            </Link>
            <Link href="/industries" prefetch={false} className="premium-link wavy-link hidden text-base text-muted md:block">
              Bidang Usaha
            </Link>
            <Link href="/contact" prefetch={false} className="premium-link wavy-link hidden text-base text-muted md:block">
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium uppercase tracking-widest text-muted backdrop-blur-md">
              <ScrollFloat text={content.hero.badge} />
            </span>
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Solusi Jasa
              <ShinyText text="Pajak, Pelatihan, & Legalitas" className="block" speed={2.1} spread={124} playOnce />
              untuk Bisnis Anda
            </h1>
            <ScrollReveal text={content.hero.subtitle} className="max-w-2xl text-lg text-muted sm:text-xl" />

            <div className="grid gap-3 sm:grid-cols-3">
              {heroServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.45 }}
                  className="premium-card rounded-xl border border-border/70 bg-background/50 p-3 backdrop-blur-md"
                >
                  <p className="text-sm font-semibold text-foreground">{service.title}</p>
                  <p className="mt-1 text-sm text-muted">{service.description}</p>
                </motion.article>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="premium-btn rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition hover:shadow-[0_14px_36px_rgba(56,189,248,0.45)]"
              >
                <span>{content.hero.primaryCta}</span>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                className="premium-btn rounded-xl border border-border/70 bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur-md transition hover:border-primary/70"
              >
                <span>{content.hero.secondaryCta}</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="max-w-2xl rounded-2xl border border-primary/40 bg-primary/10 p-4 backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary sm:text-sm">
                <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1">Konsultasi Gratis 30 Menit</span>
                <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1">Pendampingan Bulanan</span>
                <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1">Tim Profesional</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative [perspective:1600px]"
            onMouseMove={handleOrbMouseMove}
            onMouseLeave={resetOrbTilt}
          >
            <motion.div
              style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, boxShadow: dynamicShadow }}
              onClick={() => setOrbFlipped((state) => !state)}
              className="premium-card relative cursor-pointer rounded-3xl border border-border/70 bg-card/40 p-6 shadow-glass backdrop-blur-2xl [transform-style:preserve-3d]"
            >
              <motion.div
                aria-hidden="true"
                style={{ background: glareBackground }}
                className="pointer-events-none absolute inset-0 z-10 rounded-3xl opacity-80"
              />

              <motion.div
                animate={{ rotateY: orbFlipped ? 180 : 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="relative [transform-style:preserve-3d]"
              >
                <div className="relative grid gap-4 [backface-visibility:hidden]">
                  <motion.div
                    animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
                  />

                  <RubikHeroCube />

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-2 top-8 rounded-xl border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold backdrop-blur-md"
                  >
                    ⏱️ Respon Cepat
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute right-2 top-20 rounded-xl border border-border/70 bg-background/70 px-4 py-2 text-sm font-semibold backdrop-blur-md"
                  >
                    ✅ Patuh Regulasi
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-4 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-primary/30 bg-slate-950/70 p-4 pr-24 backdrop-blur-xl sm:pr-6"
                  >
                    <p className="text-sm uppercase tracking-widest text-primary">Fokus Layanan</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-200">
                      Pajak & Akuntansi • Pelatihan Pajak • Legalitas Usaha
                    </p>
                  </motion.div>
                </div>

                <div className="absolute inset-0 rounded-3xl border border-border/70 bg-slate-950/90 p-6 text-slate-100 backdrop-blur-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm uppercase tracking-widest text-cyan-300">Informasi Penting</p>
                  <h3 className="mt-2 text-2xl font-bold">Bidang Usaha & Jasa Utama</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    {serviceHighlights.map((item) => (
                      <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-cyan-200/90">Klik kartu untuk balik ke sisi depan.</p>
                </div>
              </motion.div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOrbFlipped((state) => !state);
                }}
                className="premium-btn absolute bottom-3 right-3 rounded-lg border border-border/70 bg-background/75 px-3 py-2 text-sm font-semibold backdrop-blur-md"
              >
                <span>{orbFlipped ? 'Lihat Sisi Depan' : 'Lihat Info Lain'}</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[92rem] grid-cols-2 gap-4 px-4 pb-20 sm:grid-cols-4 sm:px-8 lg:px-12">
        {content.metrics.map((metric) => (
          <div key={metric.label} className="premium-card rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md">
            <p className="text-3xl font-bold">{metric.value}</p>
            <p className="text-base text-muted">{metric.label}</p>
          </div>
        ))}
      </section>

      <section id="about" className="mx-auto w-full max-w-[92rem] px-4 pb-24 sm:px-8 lg:px-12">
        <div className="premium-card grid gap-6 rounded-3xl border border-border/70 bg-card/50 p-8 shadow-glass backdrop-blur-xl md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-muted">Tentang Perusahaan</p>
            <SplitText
              tag="h2"
              splitType="words"
              text="Partner strategis untuk kepatuhan pajak dan legalitas bisnis"
              className="text-3xl font-bold sm:text-4xl"
              staggerMs={45}
            />
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/70">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
                alt="Professional business discussion"
                width={1400}
                height={900}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Kami berpengalaman mendampingi pelaku usaha dari berbagai skala untuk menjalankan administrasi pajak,
              akuntansi, dan legalitas secara rapi, tepat, dan sesuai ketentuan yang berlaku.
            </p>
            <p>
              Dengan proses kerja yang terstruktur dan komunikasi yang responsif, kami membantu klien fokus
              mengembangkan bisnis tanpa terbebani urusan administratif yang kompleks.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-[92rem] px-4 pb-24 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted">Layanan Kami</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Solusi lengkap untuk kebutuhan perusahaan modern</h2>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
              alt="Tax and accounting services"
              width={1200}
              height={800}
              className="h-44 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Corporate training session"
              width={1200}
              height={800}
              className="h-44 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/70">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Legal business paperwork"
              width={1200}
              height={800}
              className="h-44 w-full object-cover"
            />
          </div>
        </div>

        <div className="grid auto-rows-[minmax(160px,auto)] gap-4 md:grid-cols-6">
          {content.features.map((feature, index) => {
            const span = index === 0 ? 'md:col-span-3 md:row-span-2' : index === 1 ? 'md:col-span-3' : 'md:col-span-2';
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`premium-card ${span} rounded-2xl border border-border/70 bg-card/50 p-5 shadow-glass backdrop-blur-xl`}
              >
                <span className="mb-3 inline-flex rounded-lg bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  {feature.tag}
                </span>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted">{feature.description}</p>
                <p className="mt-3 text-xs text-muted">
                  Solusi disusun sesuai profil bisnis Anda agar implementasi lebih efektif, hemat waktu, dan minim risiko.
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="industries" className="mx-auto w-full max-w-[92rem] px-4 pb-24 sm:px-8 lg:px-12">
        <p className="mb-3 text-sm uppercase tracking-widest text-muted">Bidang Usaha</p>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Lini bisnis yang kami tangani</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {businessFields.map((field, index) => (
            <article key={field.title} className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 shadow-glass backdrop-blur-xl">
              <div className="mb-4 overflow-hidden rounded-xl border border-border/60">
                <Image
                  src={
                    index === 0
                      ? 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80'
                      : index === 1
                        ? 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
                        : 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt={field.title}
                  width={1200}
                  height={800}
                  className="h-36 w-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{field.title}</h3>
              <p className="text-sm text-muted">{field.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section ref={storyRef} className="mx-auto w-full max-w-[88rem] px-6 pb-24 sm:px-8 lg:px-12">
        <p className="mb-3 text-sm uppercase tracking-widest text-muted">Alur Kerja</p>
        <SplitText
          tag="h2"
          splitType="words"
          text="Tahapan kolaborasi yang terstruktur"
          className="mb-8 text-3xl font-bold sm:text-4xl"
          staggerMs={38}
        />
        <div className="space-y-6">
          {content.storySteps.map((step, index) => (
            <article
              key={step.title}
              className="story-step premium-card rounded-2xl border border-border/70 bg-card/50 p-6 shadow-glass backdrop-blur-xl"
            >
              <p className="mb-2 text-xs uppercase tracking-widest text-primary">Step {index + 1}</p>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[88rem] px-6 pb-24 sm:px-8 lg:px-12">
        <p className="mb-3 text-sm uppercase tracking-widest text-muted">FAQ</p>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Pertanyaan umum perusahaan</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="premium-card rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="text-sm text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[92rem] px-4 pb-20 sm:px-8 lg:px-12">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Testimoni Klien</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.testimonials.map((item) => (
            <article key={item.name} className="premium-card rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-xl">
              <p className="mb-4 text-lg">“{item.quote}”</p>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-muted">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-[88rem] px-6 pb-24 sm:px-8 lg:px-12">
        <div className="premium-card rounded-3xl border border-border/70 bg-card/60 p-8 text-center shadow-glass backdrop-blur-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{content.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">{content.cta.subtitle}</p>
          <form onSubmit={submitContact} className="mx-auto mt-8 flex max-w-xl flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Company (optional)"
                className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 outline-none ring-primary/40 transition focus:ring"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your work email"
                className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 outline-none ring-primary/40 transition focus:ring"
              />
              <button
                disabled={submitting}
                className="premium-btn rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65"
              >
                <span>{submitting ? 'Sending...' : content.cta.button}</span>
              </button>
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            {feedback && (
              <p className={`text-sm ${feedback.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {feedback.message}
              </p>
            )}
          </form>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            <div className="premium-card rounded-xl border border-border/70 bg-background/50 p-4">
              <p className="text-xs uppercase tracking-widest text-muted">Telepon</p>
              <p className="mt-1 text-sm font-semibold">(+62) 856-7769-690</p>
            </div>
            <div className="premium-card rounded-xl border border-border/70 bg-background/50 p-4">
              <p className="text-xs uppercase tracking-widest text-muted">Email</p>
              <p className="mt-1 text-sm font-semibold">info@company.co.id</p>
            </div>
            <div className="premium-card rounded-xl border border-border/70 bg-background/50 p-4">
              <p className="text-xs uppercase tracking-widest text-muted">Alamat</p>
              <p className="mt-1 text-sm font-semibold">Bekasi Timur, Jawa Barat</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
