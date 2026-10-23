export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Arch. Ibrahim Al-Najjar — Architectural Engineer & Educator</title>
  <meta name="description" content="Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray." />
  <meta property="og:title" content="Arch. Ibrahim Al-Najjar — Architectural Engineer & Educator" />
  <meta property="og:description" content="Thoughtful architecture. Knowledge worth sharing. Complete BIM & architectural visualization mastery." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts: Plus Jakarta Sans, IBM Plex Sans Arabic & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            canvas: '#0A0A0A',
            surface: '#121212',
            surfaceHover: '#171717',
            primaryText: '#F5F5F5',
            mutedText: '#888888',
            hairline: '#1F1F1F',
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Arabic"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            mono: ['"JetBrains Mono"', '"IBM Plex Sans Arabic"', 'monospace'],
          }
        }
      }
    };
  </script>

  <style>
    html {
      scroll-behavior: smooth;
      background-color: #0A0A0A;
      color: #F5F5F5;
    }
    body {
      background-color: #0A0A0A;
      color: #F5F5F5;
      font-family: 'Plus Jakarta Sans', 'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    html[dir="rtl"] body {
      font-family: 'IBM Plex Sans Arabic', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .tabular-nums {
      font-variant-numeric: tabular-nums;
    }
    .headline-balance {
      text-wrap: balance;
    }
    .accordion-content {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      opacity: 0;
    }
    .accordion-content.open {
      grid-template-rows: 1fr;
      opacity: 1;
    }
    .accordion-inner {
      overflow: hidden;
    }
  </style>
</head>
<body class="bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A]">

  <!-- TOP NAVIGATION BAR (3-Zone Architectural Header) -->
  <header class="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]">
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
      <!-- Zone 1: Brand Wordmark -->
      <a href="#" data-i18n="brand" class="text-xs md:text-sm font-semibold tracking-[0.16em] text-[#F5F5F5] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity">
        IBRAHIM AL-NAJJAR
      </a>

      <!-- Zone 2: Primary Navigation Links -->
      <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
        <a href="#about" data-i18n="navAbout" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">About</a>
        <a href="#academy" data-i18n="navAcademy" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Academy</a>
        <a href="#student-work" data-i18n="navStudentWork" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Student work</a>
        <a href="#contact" data-i18n="navContact" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Let's talk</a>
      </nav>

      <!-- Zone 3: Language Switcher & Mobile Menu Button -->
      <div class="flex items-center gap-3 shrink-0">
        <button
          id="lang-toggle-btn"
          type="button"
          aria-label="Switch Language"
          class="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F5] bg-[#121212] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span id="lang-toggle-label">العربية</span>
        </button>

        <button id="mobile-menu-btn" type="button" aria-label="Toggle Menu" aria-expanded="false" class="md:hidden p-2 text-[#888888] hover:text-[#F5F5F5] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-[#1F1F1F] bg-[#0A0A0A] px-6 py-5 space-y-3">
      <a href="#about" data-i18n="navAbout" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors">About</a>
      <a href="#academy" data-i18n="navAcademy" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors">Academy</a>
      <a href="#student-work" data-i18n="navStudentWork" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors">Student work</a>
      <a href="#contact" data-i18n="navContact" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#F5F5F5] transition-colors">Let's talk</a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#1F1F1F]">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Micro-label -->
        <p data-i18n="heroLabel" class="font-mono text-xs tracking-[0.18em] text-[#888888] mb-6">
          ARCHITECTURAL ENGINEER &amp; EDUCATOR
        </p>

        <!-- Identity Row: 96x96 Circular Profile Image + Huge Bold Heading -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-12 md:mb-16">
          <div class="relative w-24 h-24 rounded-full overflow-hidden border border-[#1F1F1F] bg-[#121212] shrink-0">
            <img
              src="./profile.jpg"
              alt="Arch. Ibrahim Al-Najjar"
              referrerpolicy="no-referrer"
              class="w-24 h-24 rounded-full object-cover"
              onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.profile;"
            />
          </div>
          <h1 data-i18n="heroName" class="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.08] headline-balance">
            Arch. Ibrahim Al-Najjar
          </h1>
        </div>

        <!-- Editorial Split Row Below -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#1F1F1F] mb-12 md:mb-16 items-start">
          <div class="lg:col-span-5">
            <h2 data-i18n="heroMotto" class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#F5F5F5] leading-[1.3] headline-balance">
              Thoughtful architecture. Knowledge worth sharing.
            </h2>
          </div>
          <div class="lg:col-span-7">
            <p data-i18n="heroBio" class="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[68ch]">
              Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in transforming complex architectural concepts into high-end visual masterpieces using Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray.
            </p>
          </div>
        </div>

        <!-- Hero Image Showcase: Full-width architectural render (aspect-video, object-cover) -->
        <div class="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#121212] group">
          <img
            src="./hero-render.jpg"
            alt="Twilight Architectural Render"
            referrerpolicy="no-referrer"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.hero;"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>
          <!-- Floating Dark Badge in Bottom-Left Corner -->
          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#1F1F1F] px-3.5 py-2 rounded">
            <span data-i18n="heroBadge" class="font-mono text-[11px] sm:text-xs tracking-[0.16em] text-[#F5F5F5]">
              FORM / LIGHT / ATMOSPHERE
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 01: THE PRACTICE (#about) -->
    <section id="about" class="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Section Label & Heading -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div class="lg:col-span-4">
            <p data-i18n="practiceLabel" class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums">
              01 / THE PRACTICE
            </p>
          </div>
          <div class="lg:col-span-8">
            <h2 data-i18n="practiceHeading" class="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.18] mb-6 headline-balance">
              Good design begins with understanding.
            </h2>
            <p data-i18n="practiceNarrative" class="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[70ch]">
              I'm Arch. Ibrahim Al-Najjar, an architectural engineer and dedicated educator. My journey in professional architectural training started in 2023, and since then, I’ve had the privilege of teaching and empowering over 600+ students and engineers worldwide. My approach bridges the gap between creative architectural design and precise technical execution. I specialize in mastering and teaching the industry's most powerful software stack: Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray. My mission is to help aspiring architects transform complex concepts into stunning, realistic visual stories.
            </p>
          </div>
        </div>

        <!-- Stats Grid (3 Columns) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Stat 1 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <span class="font-mono text-xs text-[#888888] tabular-nums mb-6">01</span>
            <div>
              <div data-i18n="stat1Value" class="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] tabular-nums mb-2">
                Since 2023
              </div>
              <p data-i18n="stat1Desc" class="text-sm text-[#888888]">
                Professional Experience &amp; Instruction
              </p>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <span class="font-mono text-xs text-[#888888] tabular-nums mb-6">02</span>
            <div>
              <div data-i18n="stat2Value" class="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] tabular-nums mb-2">
                600+
              </div>
              <p data-i18n="stat2Desc" class="text-sm text-[#888888]">
                Students Trained Worldwide
              </p>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <span class="font-mono text-xs text-[#888888] tabular-nums mb-6">03</span>
            <div>
              <div data-i18n="stat3Value" class="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] tabular-nums mb-2">
                6 Core Tools
              </div>
              <p data-i18n="stat3Desc" class="text-sm text-[#888888]">
                Complete BIM &amp; Rendering Ecosystem
              </p>
            </div>
          </div>
        </div>

        <!-- Software Stack Bar -->
        <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div data-i18n="softwareEcosystemLabel" class="text-xs font-mono tracking-[0.14em] text-[#888888] shrink-0">
            CORE SOFTWARE ECOSYSTEM
          </div>
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap">Revit</span>
            <span class="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap">AutoCAD</span>
            <span class="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap">Enscape</span>
            <span class="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap">Lumion</span>
            <span class="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap">Photoshop</span>
            <span class="px-3.5 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded whitespace-nowrap">V-Ray</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 02: THE ACADEMY (#academy) -->
    <section id="academy" class="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Section Header -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          <div class="lg:col-span-4">
            <p data-i18n="academyLabel" class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums">
              02 / THE ACADEMY
            </p>
          </div>
          <div class="lg:col-span-8">
            <h2 data-i18n="academyHeading" class="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.18] headline-balance">
              Build precision. Render emotion.
            </h2>
          </div>
        </div>

        <!-- Flagship Course Card: "Revit Masterclass" -->
        <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 sm:p-8 md:p-10 mb-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <!-- Left Column: Course Overview & Direct Enrollment CTA -->
            <div class="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <p data-i18n="flagshipTag" class="font-mono text-xs tracking-[0.14em] text-[#888888] mb-3">
                  FLAGSHIP ONLINE COURSE
                </p>
                <h3 data-i18n="flagshipTitle" class="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
                  Revit Masterclass
                </h3>
                <p data-i18n="flagshipOverview" class="text-sm sm:text-base text-[#888888] leading-[1.7] mb-8">
                  Complete architectural BIM mastery from initial concept and precision 3D modeling to full technical working drawings and rendering export.
                </p>
              </div>

              <div class="pt-4 border-t border-[#1F1F1F]">
                <a
                  href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20the%20Revit%20Masterclass."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
                >
                  <span data-i18n="flagshipCta">Enroll in Revit Masterclass</span>
                  <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Right Column: Interactive Curriculum Accordion (4 Modules) -->
            <div class="lg:col-span-7">
              <div data-i18n="syllabusLabel" class="text-xs font-mono tracking-[0.14em] text-[#888888] mb-4">
                CURRICULUM SYLLABUS · 4 MODULES
              </div>

              <div class="divide-y divide-[#1F1F1F] border-t border-b border-[#1F1F1F]" id="curriculum-accordion">
                <!-- Module 01 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-start group focus:outline-none"
                    aria-expanded="true"
                  >
                    <span data-i18n="mod1Title" class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Module 01: BIM Fundamentals &amp; Project Setup
                    </span>
                    <span class="accordion-icon w-6 h-6 flex items-center justify-center rounded border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] shrink-0 transition-transform duration-200 rotate-45">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div class="accordion-content open">
                    <div class="accordion-inner">
                      <p data-i18n="mod1Desc" class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Interface mastery, templates, levels, grids, and architectural workflow.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Module 02 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-start group focus:outline-none"
                    aria-expanded="false"
                  >
                    <span data-i18n="mod2Title" class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Module 02: Advanced 3D Modeling &amp; Massing
                    </span>
                    <span class="accordion-icon w-6 h-6 flex items-center justify-center rounded border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] shrink-0 transition-transform duration-200">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-inner">
                      <p data-i18n="mod2Desc" class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Complex walls, curtain systems, vertical circulation, roofs, and custom parametric families.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Module 03 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-start group focus:outline-none"
                    aria-expanded="false"
                  >
                    <span data-i18n="mod3Title" class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Module 03: Technical Documentation &amp; Execution
                    </span>
                    <span class="accordion-icon w-6 h-6 flex items-center justify-center rounded border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] shrink-0 transition-transform duration-200">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-inner">
                      <p data-i18n="mod3Desc" class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Detailed floor plans, sections, elevations, quantity schedules, and professional sheet layouts.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Module 04 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-start group focus:outline-none"
                    aria-expanded="false"
                  >
                    <span data-i18n="mod4Title" class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Module 04: Visualization Bridge &amp; Export
                    </span>
                    <span class="accordion-icon w-6 h-6 flex items-center justify-center rounded border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] shrink-0 transition-transform duration-200">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-inner">
                      <p data-i18n="mod4Desc" class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Preparing and exporting models seamlessly to Lumion, Enscape, and V-Ray for realistic lighting and rendering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Secondary Courses Grid (2 Cards) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Secondary Course 1 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <div>
              <p data-i18n="course1Tag" class="font-mono text-xs text-[#888888] mb-3">
                SPECIALIZED TRACK · LUMION / ENSCAPE / V-RAY
              </p>
              <h3 data-i18n="course1Title" class="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                Architectural Visualization Bootcamp
              </h3>
              <p data-i18n="course1Desc" class="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                Mastering twilight lighting, realistic materials, and cinematic atmosphere using Lumion, Enscape, and V-Ray.
              </p>
            </div>
            <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
              <span data-i18n="course1Meta" class="text-xs font-mono text-[#888888]">Lighting · Materials · Atmosphere</span>
              <a
                href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20the%20Architectural%20Visualization%20Bootcamp."
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="inquireWhatsapp"
                class="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
              >
                Inquire via WhatsApp →
              </a>
            </div>
          </div>

          <!-- Secondary Course 2 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <div>
              <p data-i18n="course2Tag" class="font-mono text-xs text-[#888888] mb-3">
                SPECIALIZED TRACK · AUTOCAD / PHOTOSHOP
              </p>
              <h3 data-i18n="course2Title" class="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                Technical Drafting &amp; Post-Production
              </h3>
              <p data-i18n="course2Desc" class="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                Precision 2D CAD documentation and studio-grade architectural post-processing in Adobe Photoshop.
              </p>
            </div>
            <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
              <span data-i18n="course2Meta" class="text-xs font-mono text-[#888888]">2D Execution · Post-Processing</span>
              <a
                href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20Technical%20Drafting%20%26%20Post-Production."
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="inquireWhatsapp"
                class="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
              >
                Inquire via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 03: STUDENT WORK (#student-work) -->
    <section id="student-work" class="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Section Header -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          <div class="lg:col-span-4">
            <p data-i18n="studentWorkLabel" class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums">
              03 / STUDENT WORK
            </p>
          </div>
          <div class="lg:col-span-8">
            <h2 data-i18n="studentWorkHeading" class="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.18] headline-balance">
              Selected works by our 600+ students.
            </h2>
          </div>
        </div>

        <!-- 3-Column Architectural Showcase Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Work Item 01 -->
          <article class="group bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col">
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src="./work-1.jpg"
                alt="Student Project 01 — Monolithic Cultural Pavilion"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.work1;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
              <span class="absolute bottom-3 left-3 font-mono text-[11px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">
                01 / REVIT + V-RAY
              </span>
            </div>
            <div class="p-5 flex items-center justify-between gap-4">
              <div>
                <h3 data-i18n="work1Title" class="text-base font-semibold text-[#F5F5F5]">Monolithic Cultural Pavilion</h3>
                <p data-i18n="work1Sub" class="text-xs text-[#888888] mt-1">BIM Massing · Dusk Atmospheric Study</p>
              </div>
              <span class="font-mono text-xs text-[#888888] tabular-nums">2025</span>
            </div>
          </article>

          <!-- Work Item 02 -->
          <article class="group bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col">
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src="./work-2.jpg"
                alt="Student Project 02 — Cantilevered Cliffside Residence"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.work2;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
              <span class="absolute bottom-3 left-3 font-mono text-[11px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">
                02 / REVIT + ENSCAPE
              </span>
            </div>
            <div class="p-5 flex items-center justify-between gap-4">
              <div>
                <h3 data-i18n="work2Title" class="text-base font-semibold text-[#F5F5F5]">Cantilevered Cliffside Residence</h3>
                <p data-i18n="work2Sub" class="text-xs text-[#888888] mt-1">Curtain Systems · Interior Illumination</p>
              </div>
              <span class="font-mono text-xs text-[#888888] tabular-nums">2025</span>
            </div>
          </article>

          <!-- Work Item 03 -->
          <article class="group bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col">
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src="./work-3.jpg"
                alt="Student Project 03 — Arid Stone Courtyard Villa"
                referrerpolicy="no-referrer"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.work3;"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
              <span class="absolute bottom-3 left-3 font-mono text-[11px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">
                03 / LUMION + PHOTOSHOP
              </span>
            </div>
            <div class="p-5 flex items-center justify-between gap-4">
              <div>
                <h3 data-i18n="work3Title" class="text-base font-semibold text-[#F5F5F5]">Arid Stone Courtyard Villa</h3>
                <p data-i18n="work3Sub" class="text-xs text-[#888888] mt-1">Materiality · Twilight Post-Production</p>
              </div>
              <span class="font-mono text-xs text-[#888888] tabular-nums">2026</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SECTION 04: CONTACT & FOOTER (#contact) -->
    <section id="contact" class="py-20 md:py-28 scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-8 sm:p-10 md:p-14">
          <p data-i18n="contactLabel" class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums mb-4">
            04 / LET'S TALK
          </p>
          <h2 data-i18n="contactHeading" class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.16] max-w-2xl mb-10 headline-balance">
            Ready to elevate your architectural workflow?
          </h2>

          <!-- Direct Contact Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <!-- WhatsApp CTA -->
            <a
              href="https://wa.me/963998401013"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
            >
              <span data-i18n="whatsappBtnLabel">WhatsApp</span>
              <span dir="ltr" class="font-mono text-xs text-[#0A0A0A]/80 tabular-nums">+963 998 401 013</span>
            </a>

            <!-- Email CTA -->
            <a
              href="mailto:arch.ibrahim.najjar@gmail.com"
              class="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap"
            >
              <span data-i18n="emailBtnLabel" class="text-[#888888] font-normal">Email</span>
              <span dir="ltr" class="font-mono text-xs sm:text-sm text-[#F5F5F5]">arch.ibrahim.najjar@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="border-t border-[#1F1F1F] py-8">
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
      <p data-i18n="footerCopy">© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.</p>
      <p data-i18n="footerTag" class="font-mono tracking-wider">ARCHITECTURAL STUDIO &amp; ACADEMY</p>
    </div>
  </footer>

  <!-- Vanilla JavaScript: Bilingual Dictionary (EN/AR), Fallbacks, Accordion & Mobile Nav -->
  <script>
    window.__FALLBACK_IMAGES = {
      profile: "data:image/svg+xml;utf8," + encodeURIComponent(\`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
          <defs>
            <radialGradient id="pg" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#262626"/>
              <stop offset="100%" stop-color="#0A0A0A"/>
            </radialGradient>
          </defs>
          <rect width="200" height="200" fill="url(#pg)"/>
          <circle cx="100" cy="76" r="34" fill="#1F1F1F" stroke="#333333" stroke-width="1.5"/>
          <path d="M40 185 C40 138 160 138 160 185" fill="#1F1F1F" stroke="#333333" stroke-width="1.5"/>
          <text x="100" y="84" text-anchor="middle" fill="#F5F5F5" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="2">IA</text>
        </svg>
      \`),
      hero: "data:image/svg+xml;utf8," + encodeURIComponent(\`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#07090E"/>
              <stop offset="55%" stop-color="#101520"/>
              <stop offset="100%" stop-color="#0A0A0A"/>
            </linearGradient>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#D99B52" stop-opacity="0.05"/>
              <stop offset="50%" stop-color="#F5B05B" stop-opacity="0.32"/>
              <stop offset="100%" stop-color="#D99B52" stop-opacity="0.05"/>
            </linearGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#sky)"/>
          <g stroke="#1F1F1F" stroke-width="1" opacity="0.55">
            <line x1="0" y1="620" x2="1600" y2="620"/>
            <line x1="260" y1="0" x2="260" y2="900"/>
            <line x1="1180" y1="0" x2="1180" y2="900"/>
          </g>
          <rect x="260" y="310" width="920" height="40" fill="#1A1A1A" stroke="#2A2A2A"/>
          <rect x="320" y="350" width="760" height="170" fill="url(#glow)" stroke="#2E2E2E"/>
          <rect x="200" y="520" width="1040" height="100" fill="#121212" stroke="#242424"/>
          <line x1="540" y1="350" x2="540" y2="520" stroke="#1F1F1F" stroke-width="3"/>
          <line x1="820" y1="350" x2="820" y2="520" stroke="#1F1F1F" stroke-width="3"/>
          <rect x="340" y="490" width="440" height="6" fill="#F5B05B" opacity="0.65"/>
        </svg>
      \`),
      work1: "data:image/svg+xml;utf8," + encodeURIComponent(\`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="600" fill="#0D0D0D"/>
          <g stroke="#1F1F1F" stroke-width="1">
            <line x1="120" y1="0" x2="120" y2="600"/>
            <line x1="680" y1="0" x2="680" y2="600"/>
            <line x1="0" y1="440" x2="800" y2="440"/>
          </g>
          <polygon points="160,440 160,180 460,130 460,440" fill="#151515" stroke="#2A2A2A"/>
          <polygon points="460,440 460,210 640,250 640,440" fill="#1B1B1B" stroke="#2E2E2E"/>
          <rect x="290" y="260" width="90" height="180" fill="#E6A145" fill-opacity="0.22" stroke="#E6A145" stroke-opacity="0.4"/>
        </svg>
      \`),
      work2: "data:image/svg+xml;utf8," + encodeURIComponent(\`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="600" fill="#0B0E13"/>
          <rect x="120" y="170" width="560" height="260" fill="#141820" stroke="#262B36"/>
          <rect x="160" y="200" width="480" height="130" fill="#F0A84B" fill-opacity="0.18" stroke="#333947"/>
          <line x1="320" y1="200" x2="320" y2="330" stroke="#262B36" stroke-width="2"/>
          <line x1="480" y1="200" x2="480" y2="330" stroke="#262B36" stroke-width="2"/>
          <rect x="80" y="430" width="640" height="45" fill="#121212" stroke="#1F1F1F"/>
        </svg>
      \`),
      work3: "data:image/svg+xml;utf8," + encodeURIComponent(\`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
          <rect width="800" height="600" fill="#0E0C0A"/>
          <rect x="140" y="230" width="320" height="210" fill="#191614" stroke="#2C2623"/>
          <rect x="380" y="180" width="280" height="260" fill="#141210" stroke="#2A2420"/>
          <rect x="430" y="290" width="140" height="150" fill="#D98A3C" fill-opacity="0.2" stroke="#D98A3C" stroke-opacity="0.35"/>
          <line x1="0" y1="440" x2="800" y2="440" stroke="#1F1F1F"/>
        </svg>
      \`)
    };

    var TRANSLATIONS = {
      en: {
        brand: "IBRAHIM AL-NAJJAR",
        navAbout: "About",
        navAcademy: "Academy",
        navStudentWork: "Student work",
        navContact: "Let's talk",
        heroLabel: "ARCHITECTURAL ENGINEER & EDUCATOR",
        heroName: "Arch. Ibrahim Al-Najjar",
        heroMotto: "Thoughtful architecture. Knowledge worth sharing.",
        heroBio: "Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in transforming complex architectural concepts into high-end visual masterpieces using Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray.",
        heroBadge: "FORM / LIGHT / ATMOSPHERE",
        practiceLabel: "01 / THE PRACTICE",
        practiceHeading: "Good design begins with understanding.",
        practiceNarrative: "I'm Arch. Ibrahim Al-Najjar, an architectural engineer and dedicated educator. My journey in professional architectural training started in 2023, and since then, I’ve had the privilege of teaching and empowering over 600+ students and engineers worldwide. My approach bridges the gap between creative architectural design and precise technical execution. I specialize in mastering and teaching the industry's most powerful software stack: Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray. My mission is to help aspiring architects transform complex concepts into stunning, realistic visual stories.",
        stat1Value: "Since 2023",
        stat1Desc: "Professional Experience & Instruction",
        stat2Value: "600+",
        stat2Desc: "Students Trained Worldwide",
        stat3Value: "6 Core Tools",
        stat3Desc: "Complete BIM & Rendering Ecosystem",
        softwareEcosystemLabel: "CORE SOFTWARE ECOSYSTEM",
        academyLabel: "02 / THE ACADEMY",
        academyHeading: "Build precision. Render emotion.",
        flagshipTag: "FLAGSHIP ONLINE COURSE",
        flagshipTitle: "Revit Masterclass",
        flagshipOverview: "Complete architectural BIM mastery from initial concept and precision 3D modeling to full technical working drawings and rendering export.",
        flagshipCta: "Enroll in Revit Masterclass",
        syllabusLabel: "CURRICULUM SYLLABUS · 4 MODULES",
        mod1Title: "Module 01: BIM Fundamentals & Project Setup",
        mod1Desc: "Interface mastery, templates, levels, grids, and architectural workflow.",
        mod2Title: "Module 02: Advanced 3D Modeling & Massing",
        mod2Desc: "Complex walls, curtain systems, vertical circulation, roofs, and custom parametric families.",
        mod3Title: "Module 03: Technical Documentation & Execution",
        mod3Desc: "Detailed floor plans, sections, elevations, quantity schedules, and professional sheet layouts.",
        mod4Title: "Module 04: Visualization Bridge & Export",
        mod4Desc: "Preparing and exporting models seamlessly to Lumion, Enscape, and V-Ray for realistic lighting and rendering.",
        course1Tag: "SPECIALIZED TRACK · LUMION / ENSCAPE / V-RAY",
        course1Title: "Architectural Visualization Bootcamp",
        course1Desc: "Mastering twilight lighting, realistic materials, and cinematic atmosphere using Lumion, Enscape, and V-Ray.",
        course1Meta: "Lighting · Materials · Atmosphere",
        course2Tag: "SPECIALIZED TRACK · AUTOCAD / PHOTOSHOP",
        course2Title: "Technical Drafting & Post-Production",
        course2Desc: "Precision 2D CAD documentation and studio-grade architectural post-processing in Adobe Photoshop.",
        course2Meta: "2D Execution · Post-Processing",
        inquireWhatsapp: "Inquire via WhatsApp →",
        studentWorkLabel: "03 / STUDENT WORK",
        studentWorkHeading: "Selected works by our 600+ students.",
        work1Title: "Monolithic Cultural Pavilion",
        work1Sub: "BIM Massing · Dusk Atmospheric Study",
        work2Title: "Cantilevered Cliffside Residence",
        work2Sub: "Curtain Systems · Interior Illumination",
        work3Title: "Arid Stone Courtyard Villa",
        work3Sub: "Materiality · Twilight Post-Production",
        contactLabel: "04 / LET'S TALK",
        contactHeading: "Ready to elevate your architectural workflow?",
        whatsappBtnLabel: "WhatsApp",
        emailBtnLabel: "Email",
        footerCopy: "© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.",
        footerTag: "ARCHITECTURAL STUDIO & ACADEMY"
      },
      ar: {
        brand: "إبراهيم النجار",
        navAbout: "عن المكتب",
        navAcademy: "الأكاديمية",
        navStudentWork: "أعمال الطلاب",
        navContact: "تواصل معنا",
        heroLabel: "مهندس معماري ومدرّب محترف",
        heroName: "المهندس إبراهيم النجار",
        heroMotto: "عمارة مدروسة. ومعرفة تستحق المشاركة.",
        heroBio: "مهندس معماري ومدرّب ذو خبرة احترافية منذ عام 2023، قام بتدريب وتأهيل أكثر من 600+ طالب ومهندس حول العالم. متخصص في تحويل الأفكار المعمارية المعقدة إلى لوحات بصرية استثنائية باستخدام Revit و AutoCAD و Enscape و Lumion و Photoshop و V-Ray.",
        heroBadge: "الكتلة / الضوء / الأجواء",
        practiceLabel: "01 / الممارسة المعمارية",
        practiceHeading: "التصميم الجيد يبدأ من الفهم العميق.",
        practiceNarrative: "أنا المهندس المعماري إبراهيم النجار، مهندس معماري ومدرّب شغوف بنقل المعرفة. بدأت رحلتي في التدريب المعماري الاحترافي عام 2023، ومنذ ذلك الحين تشرفت بتدريب وتمكين أكثر من 600+ طالب ومهندس حول العالم. يجمع منهجي بين الإبداع في التصميم المعماري والدقة الهندسية في التنفيذ، مع التخصص في إتقان وتدريس أقوى البرمجيات الهندسية: Revit و AutoCAD و Enscape و Lumion و Photoshop و V-Ray. رسالتي هي مساعدة المعماريين الطموحين على تحويل مفاهيمهم المعقدة إلى قصص بصرية واقعية ومؤثرة.",
        stat1Value: "منذ 2023",
        stat1Desc: "خبرة احترافية وتدريب معماري",
        stat2Value: "+600",
        stat2Desc: "طالب ومهندس تم تدريبهم حول العالم",
        stat3Value: "6 برامج أساسية",
        stat3Desc: "منظومة متكاملة للبيم والإظهار المعماري",
        softwareEcosystemLabel: "منظومة البرامج الهندسية المعتمدة",
        academyLabel: "02 / الأكاديمية",
        academyHeading: "ابنِ بدقة. وأظهر بروحٍ سينمائية.",
        flagshipTag: "الدورة التدريبية الرئيسية عن بُعد",
        flagshipTitle: "ماستر كلاس الريفيت المعماري (Revit Masterclass)",
        flagshipOverview: "إتقان شامل لمنظومة الـ BIM المعماري بدءاً من الفكرة الأولية والنمذجة ثلاثية الأبعاد الدقيقة وصولاً إلى المخططات التنفيذية الكاملة والتصدير لبرامج الإظهار.",
        flagshipCta: "سجّل الآن في ماستر كلاس الريفيت",
        syllabusLabel: "منهج الدورة التدريبية · 4 وحدات",
        mod1Title: "الوحدة 01: أساسيات الـ BIM وإعداد المشروع",
        mod1Desc: "إتقان واجهة البرنامج، القوالب الاحترافية، المناسيب، المحاور، وسير العمل المعماري الصحيح.",
        mod2Title: "الوحدة 02: النمذجة ثلاثية الأبعاد المتقدمة والكتل",
        mod2Desc: "الجدران المعقدة، الواجهات الزجاجية (Curtain Systems)، عناصر الحركة الرأسية، الأسقف، والعائلات البارامترية المخصصة.",
        mod3Title: "الوحدة 03: التوثيق التقني والمخططات التنفيذية",
        mod3Desc: "المساقط الأفقية التفصيلية، المقاطع، الواجهات، جداول حصر الكميات، وإخراج اللوحات الاحترافية.",
        mod4Title: "الوحدة 04: جسر الإظهار المعماري والتصدير",
        mod4Desc: "تجهيز وتصدير النماذج بسلاسة إلى Lumion و Enscape و V-Ray للحصول على إضاءة وريندر واقعي.",
        course1Tag: "مسار تخصصي · LUMION / ENSCAPE / V-RAY",
        course1Title: "معسكر الإظهار المعماري الاحترافي",
        course1Desc: "إتقان إضاءة الغسق (Twilight)، والخامات الواقعية، والأجواء السينمائية باستخدام Lumion و Enscape و V-Ray.",
        course1Meta: "الإضاءة · الخامات · الأجواء البصرية",
        course2Tag: "مسار تخصصي · AUTOCAD / PHOTOSHOP",
        course2Title: "الرسم التنفيذي والمعالجة البصرية (Post-Production)",
        course2Desc: "توثيق المخططات ثنائية الأبعاد بدقة عالية في AutoCAD، والإخراج المعماري الاحترافي عبر Adobe Photoshop.",
        course2Meta: "التنفيذ ثنائي الأبعاد · الإخراج الفني",
        inquireWhatsapp: "استفسر عبر واتساب ←",
        studentWorkLabel: "03 / أعمال الطلاب",
        studentWorkHeading: "أعمال مختارة من إبداع أكثر من 600+ طالب.",
        work1Title: "جناح ثقافي خرساني معاصر",
        work1Sub: "تشكيل الكتل BIM · دراسة أجواء الغسق",
        work2Title: "فيلا معلّقة على الجرف الصخري",
        work2Sub: "أنظمة الواجهات الزجاجية · الإضاءة الداخلية",
        work3Title: "فيلا الفناء الحجري الصحراوي",
        work3Sub: "دراسة الخامات · معالجة ليلية في فوتوشوب",
        contactLabel: "04 / لنتحدث",
        contactHeading: "هل أنت مستعد للارتقاء بسير عملك المعماري؟",
        whatsappBtnLabel: "واتساب",
        emailBtnLabel: "البريد الإلكتروني",
        footerCopy: "© 2026 المهندس المعماري إبراهيم النجار. جميع الحقوق محفوظة.",
        footerTag: "استوديو وأكاديمية العمارة"
      }
    };

    var currentLang = 'en';
    var langBtn = document.getElementById('lang-toggle-btn');
    var langLabel = document.getElementById('lang-toggle-label');

    function setLanguage(lang) {
      currentLang = lang;
      var dict = TRANSLATIONS[lang];
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

      if (langLabel) {
        langLabel.textContent = lang === 'en' ? 'العربية' : 'EN';
      }

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict && dict[key]) {
          el.textContent = dict[key];
        }
      });
    }

    if (langBtn) {
      langBtn.addEventListener('click', function () {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
      });
    }

    // Interactive Curriculum Accordion
    document.querySelectorAll('.accordion-trigger').forEach(function (button) {
      button.addEventListener('click', function () {
        var item = button.closest('.accordion-item');
        var content = item.querySelector('.accordion-content');
        var icon = item.querySelector('.accordion-icon');
        var isOpen = content.classList.contains('open');

        document.querySelectorAll('#curriculum-accordion .accordion-item').forEach(function (otherItem) {
          otherItem.querySelector('.accordion-content').classList.remove('open');
          otherItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.accordion-icon').classList.remove('rotate-45');
        });

        if (!isOpen) {
          content.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
          icon.classList.add('rotate-45');
        }
      });
    });

    // Mobile Menu Toggle
    var mobileBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', function () {
        var isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileBtn.setAttribute('aria-expanded', 'true');
        } else {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  </script>
</body>
</html>`;
