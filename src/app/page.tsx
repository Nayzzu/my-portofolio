"use client";

import dynamic from "next/dynamic";

// Import komponen template secara dinamis tanpa SSR untuk mencegah Hydration Mismatch
const MarginaliaPortfolioTemplate = dynamic(
  () => import("@/components/ui/marginalia-portfolio-template"),
  { ssr: false },
);

// -----------------------------------------------------------------------------
// DATA PORTOFOLIO: KANAYA TRAYLINGGA PRATAMA (NAYZZU)
// -----------------------------------------------------------------------------
const MY_DATA = {
  name: "Kanaya Traylingga Pratama",
  role: "Informatics Student & Developer",
  year: "2026",
  location: "Bandar Lampung, Indonesia",
  title: "Portfolio",
  docLabel: "Curriculum Vitae",

  portrait:
    "https://lh3.googleusercontent.com/a/ACg8ocKoYF-KgZ5AkarHBwzPofcP3SXv2g1-OzKBkPUehlCLvVI4kiEYtQ=s360-c-no",
  traits: [
    "systems thinker",
    "full stack dev",
    "IoT enthusiast",
    "teliti",
    "problem solver",
    "calm",
  ],

  greeting: "Halo.",
  bio: "Saya mahasiswa Teknik Informatika Universitas Lampung yang berfokus pada pengembangan *aplikasi web modern* (PHP, Laravel, React), platform jurnal akademik, serta [otomasi server Linux & IoT]. Aktif di HIMATRO Unila dan UKM-U Gradien Unila.",

  educationIntro:
    "Perjalanan akademik dan pengalaman aktivitas organisasi di kampus.",
  education: [
    {
      title: "S1 Teknik Informatika",
      place: "Universitas Lampung (Unila)",
      period: "2024 — Sekarang",
      circled: true,
    },
    {
      title: "Ketua Pelaksana HIMATRO Peduli Lingkungan",
      place: "HIMATRO Unila",
      period: "2026",
      circled: true,
    },
    {
      title: "Media & Public Relations",
      place: "UKM-U Gradien Unila",
      period: "2026",
    },
    {
      title: "Staf Departemen Sosial & Kewirausahaan",
      place: "HIMATRO Unila",
      period: "2025 — Sekarang",
    },
  ],
  cvUrl: "https://nayzzu.web.id",
  cvNote: "kunjungi website saya",
  languages: [
    { name: "Indonesia", level: "Native", value: 1 },
    { name: "Inggris", level: "Professional", value: 0.85 },
  ],

  tools: [
    {
      name: "PHP",
      mark: "PHP",
      bg: "#777bb4",
      fg: "#ffffff",
      note: "bahasa utama web native & sistem backend",
    },
    {
      name: "Laravel",
      mark: "Lv",
      bg: "#ff2d20",
      fg: "#ffffff",
      note: "framework backend andalan (Laravel 12/13)",
    },
    {
      name: "React",
      mark: "Re",
      bg: "#23272f",
      fg: "#58c4dc",
      note: "untuk antarmuka web yang interaktif",
    },
    {
      name: "Tailwind",
      mark: "TW",
      bg: "#0b1120",
      fg: "#38bdf8",
      note: "styling cepat dan responsif",
    },
    {
      name: "Python",
      mark: "Py",
      bg: "#3776ab",
      fg: "#ffffff",
      note: "face recognition & script otomasi",
    },
    {
      name: "Linux / Docker",
      mark: "Lx",
      bg: "#1e1e1e",
      fg: "#ffffff",
      note: "Ubuntu server, Cloudflare Tunnel, & n8n",
    },
  ],
  toolNote: "hover ikon di atas untuk melihat detail",
  skillsIntro:
    "Kemampuan teknis mencakup pemodelan perangkat lunak, administrasi jaringan, hingga IoT.",
  skills: [
    "Web Development (PHP Native, Laravel, React)",
    "OJS (Open Journal System) Publishing & Management",
    "Linux Server & Cloudflare Self-Hosting",
    "IoT & Embedded Systems (ESP32 / Arduino)",
    "Facial Recognition & Python Automation",
    "Computer Networking (Cisco, MikroTik, Wireshark)",
    "Workflow Automation (n8n & Docker Containers)",
    "Database Management (MySQL / MariaDB / PDO)",
  ],

  books: [
    { title: "Clean Code", color: "#1f2a2b" },
    { title: "Laravel Docs", color: "#e0613a" },
    { title: "Networking Essentials", color: "#efe8dc" },
  ],
  booksNote: "referensi teknis saya",

  projectsNote: "5 proyek yang telah saya kembangkan",
  projects: [
    {
      name: "KARVIA",
      tagline: "Career Vision & Action — Platform bimbingan karier siswa.",
      kind: "PHP Native · Tailwind CSS · MySQL",
      year: "2026",
      summary:
        "Platform bimbingan karier siswa SMA/MA untuk mengenali potensi diri, menjelajahi profesi, dan menyusun [rencana langkah masa depan] bersama *Guru BK secara terstruktur dan privat*.",
      challenge:
        "Menyediakan ruang eksplorasi karier interaktif dengan alur refleksi diri yang ramah pengguna.",
      stats: [
        { value: 5, label: "tahapan eksplorasi karier" },
        { value: 100, suffix: "%", label: "privasi catatan siswa terjaga" },
      ],
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      ],
      screens: ["cover", "feed", "detail"],
      accent: "#224f35",
      tag: "shipped",
      href: "https://karvia.my.id/",
    },
    {
      name: "Journal MedTechno",
      tagline: "Journal of Medical and Technology — Universitas Lampung.",
      kind: "OJS Platform · Medical Tech · Web Publishing",
      year: "2026",
      summary:
        "Platform publikasi jurnal ilmiah terbitan Universitas Lampung yang berfokus pada penelitian teknologi medis, mencakup [IoT kesehatan, kecerdasan buatan (AI)], *telemedicine, dan perangkat biomedis*.",
      challenge:
        "Menyediakan ekosistem publikasi ilmiah open-access yang kredibel bagi peneliti dan akademisi.",
      stats: [
        { value: 2, label: "ISSN (Online & Print Registered)" },
        { value: 100, suffix: "%", label: "open access policy" },
      ],
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514",
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
      ],
      screens: ["feed", "detail", "cover"],
      accent: "#0055ff",
      tag: "academic",
    },
    {
      name: "SIMPEL",
      tagline: "Sistem Informasi Manajemen Peminjaman Elektro.",
      kind: "Laravel 12 · React · Tailwind CSS",
      year: "2026",
      summary:
        "Sistem peminjaman fasilitas laboratorium Jurusan Teknik Elektro Unila. Memangkas birokrasi manual menjadi [alur peminjaman digital terintegrasi] dengan *status pengajuan real-time*.",
      challenge:
        "Menyediakan alur persetujuan peminjaman berkas yang cepat dan responsif.",
      stats: [
        { value: 100, suffix: "%", label: "digitalisasi peminjaman lab" },
        { value: 24, label: "jam sistem siap diakses" },
      ],
      images: [
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      ],
      screens: ["feed", "cover", "detail"],
      accent: "#1f6f6b",
      tag: "shipped",
      href: "https://nayzzu.web.id",
    },
    {
      name: "Attendara",
      tagline: "Presensi kelas otomatis berbasis pengenalan wajah.",
      kind: "Python · OpenCV · PHP MySQL",
      year: "2026",
      summary:
        "Sistem presensi kelas berbasis kiosk menggunakan library `face_recognition` Python. Mengganti lembar absensi fisik dengan [pencatatan presensi otomatis] yang terhubung langsung ke *database web sekolah*.",
      note: "dikembangkan untuk integrasi sistem absensi",
      images: [
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      ],
      screens: ["stats", "cover", "detail"],
      accent: "#e0613a",
      tag: "coursework",
    },
    {
      name: "Nayzzu AI",
      tagline: "Smart home IoT berbasis perintah suara.",
      kind: "IoT · ESP32 · n8n · Python",
      year: "2026",
      summary:
        "Sistem asisten rumah pintar yang mengintegrasikan Xiaozhi AI, webhook n8n, dan mikrokontroler ESP32 untuk [kontrol 6 indikator LED] serta *pemantauan sensor suhu dan jarak*.",
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        "https://images.unsplash.com/photo-1532012197267-da84d127e765",
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      ],
      screens: ["detail", "feed", "cover"],
      accent: "#8a5a2b",
      tag: "passion project",
    },
  ],

  factsNote: "aktivitas di luar koding",
  facts: [
    {
      doodle: "dumbbell",
      text: "Latihan beban 5x/minggu (PR deadlift 180 kg)",
    },
    {
      doodle: "guitar",
      text: "Suka musik dan gitar elektrik ",
    },
    {
      doodle: "headphones",
      text: "Penggemar Formula 1 & endurance racing (Le Mans)",
    },
    {
      doodle: "plant",
      text: "Ketua Pelaksana penanaman pohon Taman Kehati 2026",
    },
    {
      doodle: "coffee",
      text: "Rutin jalan cepat 35 menit & 10.000 langkah sehari",
    },
    { doodle: "cat", text: "Bermain Valorant, FiveM, dan Roblox saat santai" },
  ],

  thanks: "Terima Kasih.",
  email: "kanayaaa19@gmail.com",
  links: [
    { label: "Website", href: "https://nayzzu.web.id" },
    { label: "GitHub", href: "https://github.com/Nayzzu" },
    { label: "LinkedIn", href: "https://id.linkedin.com/in/kanaya-traylingga" },
  ],
  letter:
    "Terima kasih sudah melihat portofolio ini.\n\nJika Anda berminat untuk berdiskusi seputar proyek web development, platform jurnal, integrasi IoT, atau peluang kolaborasi lainnya, jangan ragu untuk menghubungi saya!",

  colors: {
    paper: "#efe8dc",
    night: "#1f2a2b",
    ink: "#2a2420",
    pen: "#e0613a",
  },
};

// -----------------------------------------------------------------------------
// RENDER TEMPLATE
// -----------------------------------------------------------------------------
export default function Page() {
  return (
    <MarginaliaPortfolioTemplate
      name={MY_DATA.name}
      role={MY_DATA.role}
      year={MY_DATA.year}
      location={MY_DATA.location}
      title={MY_DATA.title}
      docLabel={MY_DATA.docLabel}
      portrait={MY_DATA.portrait}
      traits={MY_DATA.traits}
      greeting={MY_DATA.greeting}
      bio={MY_DATA.bio}
      educationIntro={MY_DATA.educationIntro}
      education={MY_DATA.education as any}
      cvUrl={MY_DATA.cvUrl}
      cvNote={MY_DATA.cvNote}
      languages={MY_DATA.languages as any}
      tools={MY_DATA.tools as any}
      toolNote={MY_DATA.toolNote}
      skillsIntro={MY_DATA.skillsIntro}
      skills={MY_DATA.skills}
      books={MY_DATA.books as any}
      booksNote={MY_DATA.booksNote}
      projectsNote={MY_DATA.projectsNote}
      projects={MY_DATA.projects as any}
      factsNote={MY_DATA.factsNote}
      facts={MY_DATA.facts as any}
      thanks={MY_DATA.thanks}
      email={MY_DATA.email}
      links={MY_DATA.links as any}
      letter={MY_DATA.letter}
      colors={MY_DATA.colors}
    />
  );
}
