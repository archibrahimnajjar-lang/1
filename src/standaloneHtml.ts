export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Arch. Ibrahim Al-Najjar — Architectural Engineer & Educator</title>
  <meta name="description" content="Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray." />
  <meta property="og:title" content="Arch. Ibrahim Al-Najjar — Architectural Engineer & Educator" />
  <meta property="og:description" content="Thoughtful architecture. Knowledge worth sharing. Complete BIM & architectural visualization mastery." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts: Plus Jakarta Sans & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

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
            sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
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
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
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
      <a href="#" class="text-xs md:text-sm font-semibold tracking-[0.16em] text-[#F5F5F5] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity">
        IBRAHIM AL-NAJJAR
      </a>

      <!-- Zone 2: Primary Navigation Links -->
      <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
        <a href="#about" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">About</a>
        <a href="#academy" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Academy</a>
        <a href="#student-work" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Student work</a>
        <a href="#contact" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Let's talk</a>
      </nav>

      <!-- Zone 3: Primary Action / Mobile Trigger -->
      <div class="flex items-center gap-4 shrink-0">
        <a href="#contact" class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap shrink-0">
          Let's talk
        </a>
        <button id="mobile-menu-btn" type="button" aria-label="Toggle Menu" aria-expanded="false" class="md:hidden p-2 text-[#888888] hover:text-[#F5F5F5] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path id="mobile-menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-[#1F1F1F] bg-[#0A0A0A] px-6 py-5 space-y-3">
      <a href="#about" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors">About</a>
      <a href="#academy" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors">Academy</a>
      <a href="#student-work" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors">Student work</a>
      <a href="#contact" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#F5F5F5] transition-colors">Let's talk</a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#1F1F1F]">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Micro-label -->
        <p class="font-mono text-xs tracking-[0.18em] text-[#888888] mb-6">
          ARCHITECTURAL ENGINEER &amp; EDUCATOR
        </p>

        <!-- Identity Row: 96x96 Circular Profile Image + Huge Bold Heading -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-12 md:mb-16">
          <div class="relative w-24 h-24 rounded-full overflow-hidden border border-[#1F1F1F] bg-[#121212] shrink-0">
            <img
              src="./profile.jpg"
              alt="Arch. Ibrahim Al-Najjar"
              referrerpolicy="no-referrer"
              class="w-full h-full rounded-full object-cover"
              onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.profile;"
            />
          </div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.06] headline-balance">
            Arch. Ibrahim Al-Najjar
          </h1>
        </div>

        <!-- Editorial Split Row Below -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#1F1F1F] mb-12 md:mb-16 items-start">
          <div class="lg:col-span-5">
            <h2 class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#F5F5F5] leading-[1.25] headline-balance">
              Thoughtful architecture. Knowledge worth sharing.
            </h2>
          </div>
          <div class="lg:col-span-7">
            <p class="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[68ch]">
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
            <span class="font-mono text-[11px] sm:text-xs tracking-[0.16em] text-[#F5F5F5]">
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
            <p class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums">
              01 / THE PRACTICE
            </p>
          </div>
          <div class="lg:col-span-8">
            <h2 class="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15] mb-6 headline-balance">
              Good design begins with understanding.
            </h2>
            <p class="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[70ch]">
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
              <div class="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] tabular-nums mb-2">
                Since 2023
              </div>
              <p class="text-sm text-[#888888]">
                Professional Experience &amp; Instruction
              </p>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <span class="font-mono text-xs text-[#888888] tabular-nums mb-6">02</span>
            <div>
              <div class="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] tabular-nums mb-2">
                600+
              </div>
              <p class="text-sm text-[#888888]">
                Students Trained Worldwide
              </p>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <span class="font-mono text-xs text-[#888888] tabular-nums mb-6">03</span>
            <div>
              <div class="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] tabular-nums mb-2">
                6 Core Tools
              </div>
              <p class="text-sm text-[#888888]">
                Complete BIM &amp; Rendering Ecosystem
              </p>
            </div>
          </div>
        </div>

        <!-- Software Stack Bar -->
        <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="text-xs font-mono tracking-[0.14em] text-[#888888] shrink-0">
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
            <p class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums">
              02 / THE ACADEMY
            </p>
          </div>
          <div class="lg:col-span-8">
            <h2 class="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
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
                <p class="font-mono text-xs tracking-[0.14em] text-[#888888] mb-3">
                  FLAGSHIP ONLINE COURSE
                </p>
                <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
                  Revit Masterclass
                </h3>
                <p class="text-sm sm:text-base text-[#888888] leading-[1.7] mb-8">
                  Complete architectural BIM mastery from initial concept and precision 3D modeling to full technical working drawings and rendering export.
                </p>
              </div>

              <div class="pt-4 border-t border-[#1F1F1F]">
                <a
                  href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20the%20Revit%20Masterclass."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Enroll in Revit Masterclass</span>
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- Right Column: Interactive Curriculum Accordion (4 Modules) -->
            <div class="lg:col-span-7">
              <div class="text-xs font-mono tracking-[0.14em] text-[#888888] mb-4">
                CURRICULUM SYLLABUS · 4 MODULES
              </div>

              <div class="divide-y divide-[#1F1F1F] border-t border-b border-[#1F1F1F]" id="curriculum-accordion">
                <!-- Module 01 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded="true"
                  >
                    <span class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
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
                      <p class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Interface mastery, templates, levels, grids, and architectural workflow.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Module 02 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded="false"
                  >
                    <span class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
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
                      <p class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Complex walls, curtain systems, vertical circulation, roofs, and custom parametric families.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Module 03 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded="false"
                  >
                    <span class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
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
                      <p class="pb-4 text-sm text-[#888888] leading-relaxed">
                        Detailed floor plans, sections, elevations, quantity schedules, and professional sheet layouts.
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Module 04 -->
                <div class="accordion-item">
                  <button
                    type="button"
                    class="accordion-trigger w-full py-4 flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded="false"
                  >
                    <span class="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Module 04: Visualization Bridge &amp; Export
                    </span>
                    <span class="accordion-icon w-6 h-6 flex items-center justify-between rounded border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] shrink-0 transition-transform duration-200 justify-center">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div class="accordion-content">
                    <div class="accordion-inner">
                      <p class="pb-4 text-sm text-[#888888] leading-relaxed">
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
              <p class="font-mono text-xs text-[#888888] mb-3">
                SPECIALIZED TRACK · LUMION / ENSCAPE / V-RAY
              </p>
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                Architectural Visualization Bootcamp
              </h3>
              <p class="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                Mastering twilight lighting, realistic materials, and cinematic atmosphere using Lumion, Enscape, and V-Ray.
              </p>
            </div>
            <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
              <span class="text-xs font-mono text-[#888888]">Lighting · Materials · Atmosphere</span>
              <a
                href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20the%20Architectural%20Visualization%20Bootcamp."
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
              >
                Inquire via WhatsApp →
              </a>
            </div>
          </div>

          <!-- Secondary Course 2 -->
          <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
            <div>
              <p class="font-mono text-xs text-[#888888] mb-3">
                SPECIALIZED TRACK · AUTOCAD / PHOTOSHOP
              </p>
              <h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                Technical Drafting &amp; Post-Production
              </h3>
              <p class="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                Precision 2D CAD documentation and studio-grade architectural post-processing in Adobe Photoshop.
              </p>
            </div>
            <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
              <span class="text-xs font-mono text-[#888888]">2D Execution · Matte Post-Processing</span>
              <a
                href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20Technical%20Drafting%20%26%20Post-Production."
                target="_blank"
                rel="noopener noreferrer"
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
            <p class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums">
              03 / STUDENT WORK
            </p>
          </div>
          <div class="lg:col-span-8">
            <h2 class="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
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
                alt="Student Project 01 — Brutalist Concrete Courtyard"
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
                <h3 class="text-base font-semibold text-[#F5F5F5]">Monolithic Cultural Pavilion</h3>
                <p class="text-xs text-[#888888] mt-1">BIM Massing · Dusk Atmospheric Study</p>
              </div>
              <span class="font-mono text-xs text-[#888888] tabular-nums">2025</span>
            </div>
          </article>

          <!-- Work Item 02 -->
          <article class="group bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col">
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src="./work-2.jpg"
                alt="Student Project 02 — Parametric Timber & Glass Atrium"
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
                <h3 class="text-base font-semibold text-[#F5F5F5]">Cantilevered Cliffside Residence</h3>
                <p class="text-xs text-[#888888] mt-1">Curtain Systems · Interior Illumination</p>
              </div>
              <span class="font-mono text-xs text-[#888888] tabular-nums">2025</span>
            </div>
          </article>

          <!-- Work Item 03 -->
          <article class="group bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col">
            <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
              <img
                src="./work-3.jpg"
                alt="Student Project 03 — Desert Sanctuary Residence"
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
                <h3 class="text-base font-semibold text-[#F5F5F5]">Arid Stone Courtyard Villa</h3>
                <p class="text-xs text-[#888888] mt-1">Materiality · Twilight Post-Production</p>
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
          <p class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums mb-4">
            04 / LET'S TALK
          </p>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.12] max-w-2xl mb-10 headline-balance">
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
              <span>WhatsApp</span>
              <span class="font-mono text-xs text-[#0A0A0A]/80 tabular-nums">+963 998 401 013</span>
            </a>

            <!-- Email CTA -->
            <a
              href="mailto:arch.ibrahim.najjar@gmail.com"
              class="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap"
            >
              <span class="text-[#888888] font-normal">Email</span>
              <span class="font-mono text-xs sm:text-sm text-[#F5F5F5]">arch.ibrahim.najjar@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="border-t border-[#1F1F1F] py-8">
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
      <p>© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.</p>
      <p class="font-mono tracking-wider">ARCHITECTURAL STUDIO &amp; ACADEMY</p>
    </div>
  </footer>

  <!-- Vanilla JavaScript: Fallback Architectural Placeholders, Accordion & Mobile Nav -->
  <script>
    // Sleek dark architectural SVG fallbacks in case local images are not uploaded yet
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
          <!-- Architectural Cantilevered Pavilion Silhouette -->
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

    // Interactive Curriculum Accordion
    document.querySelectorAll('.accordion-trigger').forEach(function (button) {
      button.addEventListener('click', function () {
        var item = button.closest('.accordion-item');
        var content = item.querySelector('.accordion-content');
        var icon = item.querySelector('.accordion-icon');
        var isOpen = content.classList.contains('open');

        // Close all items
        document.querySelectorAll('#curriculum-accordion .accordion-item').forEach(function (otherItem) {
          otherItem.querySelector('.accordion-content').classList.remove('open');
          otherItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.accordion-icon').classList.remove('rotate-45');
        });

        // Toggle clicked item
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
