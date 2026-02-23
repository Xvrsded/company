import { CompanyContent } from '@/types/content';

export const fallbackContent: CompanyContent = {
  hero: {
    badge: 'Konsultan Pajak & Legalitas Bisnis',
    title: 'Pendampingan Pajak, Akuntansi, dan Legalitas untuk Bisnis Anda',
    subtitle:
      'Kami membantu UMKM dan perusahaan membangun fondasi usaha yang rapi, patuh regulasi, dan siap bertumbuh berkelanjutan.',
    primaryCta: 'Konsultasi Sekarang',
    secondaryCta: 'Lihat Layanan'
  },
  metrics: [
    { label: 'Klien Ditangani', value: '120+' },
    { label: 'Laporan/Bulan', value: '500+' },
    { label: 'Tim Profesional', value: '15+' },
    { label: 'Tahun Pengalaman', value: '8+' }
  ],
  features: [
    {
      title: 'Pajak & Akuntansi',
      description:
        'Pengelolaan pembukuan, pelaporan pajak berkala, hingga penyusunan laporan keuangan yang rapi dan sesuai ketentuan.',
      tag: 'Core Service'
    },
    {
      title: 'Pelatihan Pajak',
      description:
        'Program pelatihan praktis untuk tim internal agar memahami proses perpajakan, administrasi, dan kepatuhan usaha.',
      tag: 'Training'
    },
    {
      title: 'Layanan Legalitas',
      description:
        'Pendampingan pembuatan badan usaha, perubahan data perusahaan, dan pengurusan dokumen legal untuk kebutuhan operasional.',
      tag: 'Legal'
    },
    {
      title: 'Pendampingan Berkala',
      description:
        'Skema pendampingan bulanan agar kewajiban administrasi dan perpajakan berjalan konsisten tanpa mengganggu fokus bisnis.',
      tag: 'Support'
    },
    {
      title: 'Konsultasi Strategi Kepatuhan',
      description:
        'Saran taktis untuk menekan risiko, meningkatkan efisiensi biaya, dan memastikan proses bisnis patuh regulasi.',
      tag: 'Consulting'
    }
  ],
  storySteps: [
    {
      title: 'Analisis Kebutuhan Bisnis',
      description: 'Kami memetakan kondisi perpajakan, pembukuan, dan legalitas agar solusi yang diberikan tepat sasaran.'
    },
    {
      title: 'Implementasi & Pendampingan',
      description: 'Tim kami mengeksekusi proses administrasi dan laporan dengan standar kerja yang terukur dan transparan.'
    },
    {
      title: 'Monitoring & Evaluasi Rutin',
      description: 'Hasil kerja dievaluasi berkala untuk menjaga kepatuhan, ketepatan laporan, dan keberlanjutan operasional.'
    }
  ],
  testimonials: [
    {
      quote:
        'Pendampingannya jelas dan responsif. Kami jadi lebih tenang karena laporan pajak dan pembukuan tersusun lebih rapi.',
      name: 'Dina Prameswari',
      role: 'Owner, UMKM Retail'
    },
    {
      quote:
        'Tim sangat membantu proses legalitas perusahaan kami dari awal hingga selesai. Prosesnya cepat dan komunikatif.',
      name: 'Rafi Kurniawan',
      role: 'Direktur, PT Jaya Persada'
    }
  ],
  cta: {
    title: 'Butuh partner pajak dan legalitas yang bisa diandalkan?',
    subtitle: 'Hubungi tim kami untuk konsultasi awal dan rencana pendampingan yang sesuai kebutuhan usaha Anda.',
    button: 'Hubungi Tim Kami'
  }
};
