/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  Menu,
  Plus,
  X,
} from 'lucide-react';
import { STANDALONE_HTML } from './standaloneHtml';

interface CurriculumModule {
  id: string;
  title: string;
  description: string;
}

interface StudentWorkItem {
  id: string;
  index: string;
  src: string;
  fallbackKey: 'work1' | 'work2' | 'work3';
  alt: string;
  title: string;
  subtitle: string;
  stack: string;
  year: string;
}

const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'module-01',
    title: 'Module 01: BIM Fundamentals & Project Setup',
    description:
      'Interface mastery, templates, levels, grids, and architectural workflow.',
  },
  {
    id: 'module-02',
    title: 'Module 02: Advanced 3D Modeling & Massing',
    description:
      'Complex walls, curtain systems, vertical circulation, roofs, and custom parametric families.',
  },
  {
    id: 'module-03',
    title: 'Module 03: Technical Documentation & Execution',
    description:
      'Detailed floor plans, sections, elevations, quantity schedules, and professional sheet layouts.',
  },
  {
    id: 'module-04',
    title: 'Module 04: Visualization Bridge & Export',
    description:
      'Preparing and exporting models seamlessly to Lumion, Enscape, and V-Ray for realistic lighting and rendering.',
  },
];

const SOFTWARE_STACK = [
  'Revit',
  'AutoCAD',
  'Enscape',
  'Lumion',
  'Photoshop',
  'V-Ray',
];

const FALLBACK_SVGS = {
  profile:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        <defs>
          <radialGradient id="pg" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#262626"/>
            <stop offset="100%" stop-color="#0A0A0A"/>
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill="url(#pg)"/>
        <circle cx="100" cy="76" r="34" fill="#181818" stroke="#2E2E2E" stroke-width="1.5"/>
        <path d="M40 185 C40 138 160 138 160 185" fill="#181818" stroke="#2E2E2E" stroke-width="1.5"/>
        <text x="100" y="84" text-anchor="middle" fill="#F5F5F5" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="700" letter-spacing="2">IA</text>
      </svg>
    `),
  hero:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#07090E"/>
            <stop offset="58%" stop-color="#111722"/>
            <stop offset="100%" stop-color="#0A0A0A"/>
          </linearGradient>
          <linearGradient id="warmGlass" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#D99B52" stop-opacity="0.06"/>
            <stop offset="45%" stop-color="#F5B05B" stop-opacity="0.34"/>
            <stop offset="80%" stop-color="#E0913E" stop-opacity="0.22"/>
            <stop offset="100%" stop-color="#D99B52" stop-opacity="0.04"/>
          </linearGradient>
          <linearGradient id="waterReflect" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F5B05B" stop-opacity="0.14"/>
            <stop offset="100%" stop-color="#0A0A0A" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#sky)"/>
        <!-- Subtle Architectural Grid Construction Lines -->
        <g stroke="#1F1F1F" stroke-width="1" opacity="0.65">
          <line x1="0" y1="610" x2="1600" y2="610"/>
          <line x1="240" y1="0" x2="240" y2="900"/>
          <line x1="1260" y1="0" x2="1260" y2="900"/>
          <line x1="0" y1="290" x2="1600" y2="290" stroke-dasharray="4 8"/>
        </g>
        <!-- Upper Cantilever Volume -->
        <rect x="240" y="290" width="1020" height="52" fill="#171717" stroke="#2B2B2B" stroke-width="1.5"/>
        <!-- Illuminated Glass Pavilion Core -->
        <rect x="310" y="342" width="820" height="178" fill="url(#warmGlass)" stroke="#333333" stroke-width="1.5"/>
        <!-- Mullions & Structural Columns -->
        <line x1="510" y1="342" x2="510" y2="520" stroke="#1A1A1A" stroke-width="4"/>
        <line x1="760" y1="342" x2="760" y2="520" stroke="#1A1A1A" stroke-width="4"/>
        <line x1="980" y1="342" x2="980" y2="520" stroke="#1A1A1A" stroke-width="4"/>
        <!-- Warm Linear Ceiling Light Strip -->
        <rect x="340" y="352" width="760" height="3" fill="#FFD28E" opacity="0.75"/>
        <rect x="340" y="498" width="520" height="4" fill="#F5B05B" opacity="0.65"/>
        <!-- Brutalist Concrete Plinth & Reflection Pool -->
        <rect x="180" y="520" width="1140" height="90" fill="#121212" stroke="#242424" stroke-width="1.5"/>
        <rect x="310" y="610" width="820" height="180" fill="url(#waterReflect)"/>
      </svg>
    `),
  work1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
        <rect width="800" height="600" fill="#0D0D0D"/>
        <g stroke="#1F1F1F" stroke-width="1">
          <line x1="120" y1="0" x2="120" y2="600"/>
          <line x1="680" y1="0" x2="680" y2="600"/>
          <line x1="0" y1="450" x2="800" y2="450"/>
        </g>
        <polygon points="150,450 150,170 470,120 470,450" fill="#151515" stroke="#2B2B2B" stroke-width="1.5"/>
        <polygon points="470,450 470,200 650,245 650,450" fill="#1B1B1B" stroke="#2F2F2F" stroke-width="1.5"/>
        <rect x="285" y="255" width="95" height="195" fill="#E6A145" fill-opacity="0.24" stroke="#E6A145" stroke-opacity="0.45"/>
      </svg>
    `),
  work2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
        <rect width="800" height="600" fill="#0B0E13"/>
        <g stroke="#1B202B" stroke-width="1">
          <line x1="100" y1="0" x2="100" y2="600"/>
          <line x1="700" y1="0" x2="700" y2="600"/>
        </g>
        <rect x="120" y="165" width="560" height="270" fill="#141820" stroke="#282E3A" stroke-width="1.5"/>
        <rect x="160" y="198" width="480" height="135" fill="#F0A84B" fill-opacity="0.2" stroke="#363E4D"/>
        <line x1="320" y1="198" x2="320" y2="333" stroke="#282E3A" stroke-width="2.5"/>
        <line x1="480" y1="198" x2="480" y2="333" stroke="#282E3A" stroke-width="2.5"/>
        <rect x="80" y="435" width="640" height="48" fill="#121212" stroke="#222222"/>
      </svg>
    `),
  work3:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
        <rect width="800" height="600" fill="#0E0C0A"/>
        <rect x="135" y="225" width="320" height="220" fill="#191614" stroke="#2E2723" stroke-width="1.5"/>
        <rect x="380" y="175" width="285" height="270" fill="#141210" stroke="#2A2420" stroke-width="1.5"/>
        <rect x="435" y="285" width="145" height="160" fill="#D98A3C" fill-opacity="0.22" stroke="#D98A3C" stroke-opacity="0.4"/>
        <line x1="0" y1="445" x2="800" y2="445" stroke="#1F1F1F" stroke-width="1.5"/>
      </svg>
    `),
};

const STUDENT_WORKS: StudentWorkItem[] = [
  {
    id: 'work-1',
    index: '01 / REVIT + V-RAY',
    src: './work-1.jpg',
    fallbackKey: 'work1',
    alt: 'Student Work 01 — Monolithic Cultural Pavilion',
    title: 'Monolithic Cultural Pavilion',
    subtitle: 'BIM Massing · Dusk Atmospheric Study',
    stack: 'Revit · V-Ray · Photoshop',
    year: '2025',
  },
  {
    id: 'work-2',
    index: '02 / REVIT + ENSCAPE',
    src: './work-2.jpg',
    fallbackKey: 'work2',
    alt: 'Student Work 02 — Cantilevered Cliffside Residence',
    title: 'Cantilevered Cliffside Residence',
    subtitle: 'Curtain Systems · Interior Illumination',
    stack: 'Revit · Enscape · Photoshop',
    year: '2025',
  },
  {
    id: 'work-3',
    index: '03 / LUMION + PHOTOSHOP',
    src: './work-3.jpg',
    fallbackKey: 'work3',
    alt: 'Student Work 03 — Arid Stone Courtyard Villa',
    title: 'Arid Stone Courtyard Villa',
    subtitle: 'Materiality · Twilight Post-Production',
    stack: 'AutoCAD · Revit · Lumion · Photoshop',
    year: '2026',
  },
];

export default function App() {
  const [openModuleId, setOpenModuleId] = useState<string>('module-01');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeLightbox, setActiveLightbox] = useState<StudentWorkItem | null>(
    null
  );
  const [codeDrawerOpen, setCodeDrawerOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleToggleModule = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? '' : id));
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(STANDALONE_HTML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback copy via textarea
      const textarea = document.createElement('textarea');
      textarea.value = STANDALONE_HTML;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([STANDALONE_HTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A]">
      {/* TOP NAVBAR (Strict 3-Zone Architectural Contract) */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="text-xs md:text-sm font-semibold tracking-[0.16em] text-[#F5F5F5] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
          >
            IBRAHIM AL-NAJJAR
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]"
          >
            <a
              href="#about"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#academy"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Academy
            </a>
            <a
              href="#student-work"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Student work
            </a>
            <a
              href="#contact"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Let's talk
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              Let's talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1F1F1F] bg-[#0A0A0A] px-6 py-5 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              About
            </a>
            <a
              href="#academy"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              Academy
            </a>
            <a
              href="#student-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              Student work
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#F5F5F5] transition-colors"
            >
              Let's talk
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO HEADER */}
        <section className="pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#1F1F1F]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            {/* Micro-label */}
            <p className="font-mono-tabular text-xs tracking-[0.18em] text-[#888888] mb-6">
              ARCHITECTURAL ENGINEER &amp; EDUCATOR
            </p>

            {/* Identity Row: 96px x 96px Circular Profile Image + Huge Bold Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-[#1F1F1F] bg-[#121212] shrink-0">
                <img
                  src="./profile.jpg"
                  alt="Arch. Ibrahim Al-Najjar"
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FALLBACK_SVGS.profile) {
                      target.src = FALLBACK_SVGS.profile;
                    }
                  }}
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.06] headline-balance">
                Arch. Ibrahim Al-Najjar
              </h1>
            </div>

            {/* Editorial Split Row Below */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#1F1F1F] mb-12 md:mb-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#F5F5F5] leading-[1.25] headline-balance">
                  Thoughtful architecture. Knowledge worth sharing.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[68ch]">
                  Architectural engineer and instructor with professional
                  experience since 2023, having successfully trained over 600+
                  students worldwide. Specializing in transforming complex
                  architectural concepts into high-end visual masterpieces using
                  Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray.
                </p>
              </div>
            </div>

            {/* Hero Image Showcase: Full-width architectural render (aspect-video, object-cover) */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#121212] group">
              <img
                src="./hero-render.jpg"
                alt="Twilight Architectural Render"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== FALLBACK_SVGS.hero) {
                    target.src = FALLBACK_SVGS.hero;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              {/* Floating Dark Badge in Bottom-Left Corner */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#1F1F1F] px-3.5 py-2 rounded">
                <span className="font-mono-tabular text-[11px] sm:text-xs tracking-[0.16em] text-[#F5F5F5]">
                  FORM / LIGHT / ATMOSPHERE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01: THE PRACTICE (#about) */}
        <section
          id="about"
          className="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
              <div className="lg:col-span-4">
                <p className="font-mono-tabular text-xs tracking-[0.16em] text-[#888888]">
                  01 / THE PRACTICE
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15] mb-6 headline-balance">
                  Good design begins with understanding.
                </h2>
                <p className="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[70ch]">
                  I'm Arch. Ibrahim Al-Najjar, an architectural engineer and
                  dedicated educator. My journey in professional architectural
                  training started in 2023, and since then, I’ve had the
                  privilege of teaching and empowering over 600+ students and
                  engineers worldwide. My approach bridges the gap between
                  creative architectural design and precise technical execution.
                  I specialize in mastering and teaching the industry's most
                  powerful software stack: Revit, AutoCAD, Enscape, Lumion,
                  Photoshop, and V-Ray. My mission is to help aspiring
                  architects transform complex concepts into stunning, realistic
                  visual stories.
                </p>
              </div>
            </div>

            {/* Stats Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <span className="font-mono-tabular text-xs text-[#888888] mb-6">
                  01
                </span>
                <div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] font-mono-tabular mb-2">
                    Since 2023
                  </div>
                  <p className="text-sm text-[#888888]">
                    Professional Experience &amp; Instruction
                  </p>
                </div>
              </div>

              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <span className="font-mono-tabular text-xs text-[#888888] mb-6">
                  02
                </span>
                <div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] font-mono-tabular mb-2">
                    600+
                  </div>
                  <p className="text-sm text-[#888888]">
                    Students Trained Worldwide
                  </p>
                </div>
              </div>

              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <span className="font-mono-tabular text-xs text-[#888888] mb-6">
                  03
                </span>
                <div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] font-mono-tabular mb-2">
                    6 Core Tools
                  </div>
                  <p className="text-sm text-[#888888]">
                    Complete BIM &amp; Rendering Ecosystem
                  </p>
                </div>
              </div>
            </div>

            {/* Software Stack Bar */}
            <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-xs font-mono-tabular tracking-[0.14em] text-[#888888] shrink-0">
                CORE SOFTWARE ECOSYSTEM
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOFTWARE_STACK.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: THE ACADEMY (#academy) */}
        <section
          id="academy"
          className="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
              <div className="lg:col-span-4">
                <p className="font-mono-tabular text-xs tracking-[0.16em] text-[#888888]">
                  02 / THE ACADEMY
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
                  Build precision. Render emotion.
                </h2>
              </div>
            </div>

            {/* Flagship Course Card: "Revit Masterclass" */}
            <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 sm:p-8 md:p-10 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Column: Course Overview & Direct WhatsApp CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <p className="font-mono-tabular text-xs tracking-[0.14em] text-[#888888] mb-3">
                      FLAGSHIP ONLINE COURSE
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
                      Revit Masterclass
                    </h3>
                    <p className="text-sm sm:text-base text-[#888888] leading-[1.7] mb-8">
                      Complete architectural BIM mastery from initial concept
                      and precision 3D modeling to full technical working
                      drawings and rendering export.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F1F1F]">
                    <a
                      href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20the%20Revit%20Masterclass."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
                    >
                      <span>Enroll in Revit Masterclass</span>
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Interactive Curriculum Accordion (4 Modules) */}
                <div className="lg:col-span-7">
                  <div className="text-xs font-mono-tabular tracking-[0.14em] text-[#888888] mb-4">
                    CURRICULUM SYLLABUS · 4 MODULES
                  </div>

                  <div className="divide-y divide-[#1F1F1F] border-t border-b border-[#1F1F1F]">
                    {CURRICULUM_MODULES.map((mod) => {
                      const isOpen = openModuleId === mod.id;
                      return (
                        <div key={mod.id}>
                          <button
                            type="button"
                            onClick={() => handleToggleModule(mod.id)}
                            aria-expanded={isOpen}
                            className="w-full py-4 flex items-center justify-between gap-4 text-left group focus:outline-none"
                          >
                            <span className="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                              {mod.title}
                            </span>
                            <span
                              className={`w-6 h-6 flex items-center justify-center rounded border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-45 text-[#F5F5F5]' : ''
                              }`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </span>
                          </button>
                          {isOpen && (
                            <div className="pb-4 text-sm text-[#888888] leading-relaxed">
                              {mod.description}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Courses Grid (2 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <p className="font-mono-tabular text-xs text-[#888888] mb-3">
                    SPECIALIZED TRACK · LUMION / ENSCAPE / V-RAY
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                    Architectural Visualization Bootcamp
                  </h3>
                  <p className="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                    Mastering twilight lighting, realistic materials, and
                    cinematic atmosphere using Lumion, Enscape, and V-Ray.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
                  <span className="text-xs font-mono-tabular text-[#888888]">
                    Lighting · Materials · Atmosphere
                  </span>
                  <a
                    href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20the%20Architectural%20Visualization%20Bootcamp."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
                  >
                    Inquire via WhatsApp →
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <p className="font-mono-tabular text-xs text-[#888888] mb-3">
                    SPECIALIZED TRACK · AUTOCAD / PHOTOSHOP
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                    Technical Drafting &amp; Post-Production
                  </h3>
                  <p className="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                    Precision 2D CAD documentation and studio-grade
                    architectural post-processing in Adobe Photoshop.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
                  <span className="text-xs font-mono-tabular text-[#888888]">
                    2D Execution · Post-Processing
                  </span>
                  <a
                    href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20Technical%20Drafting%20%26%20Post-Production."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
                  >
                    Inquire via WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: STUDENT WORK (#student-work) */}
        <section
          id="student-work"
          className="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
              <div className="lg:col-span-4">
                <p className="font-mono-tabular text-xs tracking-[0.16em] text-[#888888]">
                  03 / STUDENT WORK
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
                  Selected works by our 600+ students.
                </h2>
              </div>
            </div>

            {/* 3-Column Architectural Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STUDENT_WORKS.map((work) => (
                <article
                  key={work.id}
                  onClick={() => setActiveLightbox(work)}
                  className="group cursor-pointer bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={work.src}
                      alt={work.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = FALLBACK_SVGS[work.fallbackKey];
                        if (target.src !== fallback) {
                          target.src = fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-3 font-mono-tabular text-[11px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">
                      {work.index}
                    </span>
                  </div>
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-xs text-[#888888] mt-1">
                        {work.subtitle}
                      </p>
                    </div>
                    <span className="font-mono-tabular text-xs text-[#888888]">
                      {work.year}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 04: CONTACT & FOOTER (#contact) */}
        <section id="contact" className="py-20 md:py-28 scroll-mt-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-8 sm:p-10 md:p-14">
              <p className="font-mono-tabular text-xs tracking-[0.16em] text-[#888888] mb-4">
                04 / LET'S TALK
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.12] max-w-2xl mb-10 headline-balance">
                Ready to elevate your architectural workflow?
              </h2>

              {/* Direct Contact Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/963998401013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
                >
                  <span>WhatsApp</span>
                  <span className="font-mono-tabular text-xs text-[#0A0A0A]/80">
                    +963 998 401 013
                  </span>
                </a>

                <a
                  href="mailto:arch.ibrahim.najjar@gmail.com"
                  className="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap"
                >
                  <span className="text-[#888888] font-normal">Email</span>
                  <span className="font-mono-tabular text-xs sm:text-sm text-[#F5F5F5]">
                    arch.ibrahim.najjar@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMALIST FOOTER */}
      <footer className="border-t border-[#1F1F1F] py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <p>© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setCodeDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 font-mono-tabular text-xs text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Export Single-File index.html</span>
            </button>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL FOR STUDENT WORK */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F1F1F]">
              <div>
                <span className="font-mono-tabular text-xs text-[#888888]">
                  {activeLightbox.index}
                </span>
                <h3 className="text-lg font-semibold text-[#F5F5F5]">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close preview"
                className="p-2 text-[#888888] hover:text-[#F5F5F5] rounded border border-[#1F1F1F]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video w-full bg-[#0A0A0A] overflow-hidden">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = FALLBACK_SVGS[activeLightbox.fallbackKey];
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />
            </div>
            <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#888888] border-t border-[#1F1F1F]">
              <span>{activeLightbox.subtitle}</span>
              <span className="font-mono-tabular">
                Workflow: {activeLightbox.stack} · {activeLightbox.year}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* STANDALONE GITHUB PAGES HTML EXPORT MODAL */}
      {codeDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setCodeDrawerOpen(false)}
        >
          <div
            className="max-w-4xl w-full bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#1F1F1F] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F5]">
                  GitHub Pages Single-File Export (index.html)
                </h3>
                <p className="text-xs text-[#888888]">
                  Place alongside ./profile.jpg, ./hero-render.jpg, ./work-1.jpg, ./work-2.jpg, and ./work-3.jpg
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy HTML</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadHtml}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download index.html</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCodeDrawerOpen(false)}
                  aria-label="Close modal"
                  className="p-1.5 text-[#888888] hover:text-[#F5F5F5]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <pre className="p-6 text-xs font-mono-tabular text-[#888888] overflow-auto leading-relaxed select-all bg-[#0A0A0A]">
              <code>{STANDALONE_HTML}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
