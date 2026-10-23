/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  ImagePlus,
  Menu,
  Plus,
  RotateCcw,
  Upload,
  X,
} from 'lucide-react';
import { STANDALONE_HTML } from './standaloneHtml';

type Language = 'en' | 'ar';
type ImageSlotKey = 'profile' | 'hero' | 'work1' | 'work2' | 'work3';

interface CurriculumModule {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

interface StudentWorkItem {
  id: string;
  index: string;
  src: string;
  slotKey: 'work1' | 'work2' | 'work3';
  alt: string;
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  stack: string;
  year: string;
}

const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    id: 'module-01',
    title: {
      en: 'Module 01: BIM Fundamentals & Project Setup',
      ar: 'الوحدة 01: أساسيات الـ BIM وإعداد المشروع',
    },
    description: {
      en: 'Interface mastery, templates, levels, grids, and architectural workflow.',
      ar: 'إتقان واجهة البرنامج، القوالب الاحترافية، المناسيب، المحاور، وسير العمل المعماري الصحيح.',
    },
  },
  {
    id: 'module-02',
    title: {
      en: 'Module 02: Advanced 3D Modeling & Massing',
      ar: 'الوحدة 02: النمذجة ثلاثية الأبعاد المتقدمة والكتل',
    },
    description: {
      en: 'Complex walls, curtain systems, vertical circulation, roofs, and custom parametric families.',
      ar: 'الجدران المعقدة، الواجهات الزجاجية (Curtain Systems)، عناصر الحركة الرأسية، الأسقف، والعائلات البارامترية المخصصة.',
    },
  },
  {
    id: 'module-03',
    title: {
      en: 'Module 03: Technical Documentation & Execution',
      ar: 'الوحدة 03: التوثيق التقني والمخططات التنفيذية',
    },
    description: {
      en: 'Detailed floor plans, sections, elevations, quantity schedules, and professional sheet layouts.',
      ar: 'المساقط الأفقية التفصيلية، المقاطع، الواجهات، جداول حصر الكميات، وإخراج اللوحات الاحترافية.',
    },
  },
  {
    id: 'module-04',
    title: {
      en: 'Module 04: Visualization Bridge & Export',
      ar: 'الوحدة 04: جسر الإظهار المعماري والتصدير',
    },
    description: {
      en: 'Preparing and exporting models seamlessly to Lumion, Enscape, and V-Ray for realistic lighting and rendering.',
      ar: 'تجهيز وتصدير النماذج بسلاسة إلى Lumion و Enscape و V-Ray للحصول على إضاءة وريندر واقعي.',
    },
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

const UI_COPY = {
  en: {
    brand: 'IBRAHIM AL-NAJJAR',
    navAbout: 'About',
    navAcademy: 'Academy',
    navStudentWork: 'Student work',
    navContact: "Let's talk",
    switchLangLabel: 'العربية',
    heroLabel: 'ARCHITECTURAL ENGINEER & EDUCATOR',
    heroName: 'Arch. Ibrahim Al-Najjar',
    heroMotto: 'Thoughtful architecture. Knowledge worth sharing.',
    heroBio:
      'Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in transforming complex architectural concepts into high-end visual masterpieces using Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray.',
    heroBadge: 'FORM / LIGHT / ATMOSPHERE',
    practiceLabel: '01 / THE PRACTICE',
    practiceHeading: 'Good design begins with understanding.',
    practiceNarrative:
      "I'm Arch. Ibrahim Al-Najjar, an architectural engineer and dedicated educator. My journey in professional architectural training started in 2023, and since then, I’ve had the privilege of teaching and empowering over 600+ students and engineers worldwide. My approach bridges the gap between creative architectural design and precise technical execution. I specialize in mastering and teaching the industry's most powerful software stack: Revit, AutoCAD, Enscape, Lumion, Photoshop, and V-Ray. My mission is to help aspiring architects transform complex concepts into stunning, realistic visual stories.",
    stat1Value: 'Since 2023',
    stat1Desc: 'Professional Experience & Instruction',
    stat2Value: '600+',
    stat2Desc: 'Students Trained Worldwide',
    stat3Value: '6 Core Tools',
    stat3Desc: 'Complete BIM & Rendering Ecosystem',
    softwareEcosystemLabel: 'CORE SOFTWARE ECOSYSTEM',
    academyLabel: '02 / THE ACADEMY',
    academyHeading: 'Build precision. Render emotion.',
    flagshipTag: 'FLAGSHIP ONLINE COURSE',
    flagshipTitle: 'Revit Masterclass',
    flagshipOverview:
      'Complete architectural BIM mastery from initial concept and precision 3D modeling to full technical working drawings and rendering export.',
    flagshipCta: 'Enroll in Revit Masterclass',
    syllabusLabel: 'CURRICULUM SYLLABUS · 4 MODULES',
    course1Tag: 'SPECIALIZED TRACK · LUMION / ENSCAPE / V-RAY',
    course1Title: 'Architectural Visualization Bootcamp',
    course1Desc:
      'Mastering twilight lighting, realistic materials, and cinematic atmosphere using Lumion, Enscape, and V-Ray.',
    course1Meta: 'Lighting · Materials · Atmosphere',
    course2Tag: 'SPECIALIZED TRACK · AUTOCAD / PHOTOSHOP',
    course2Title: 'Technical Drafting & Post-Production',
    course2Desc:
      'Precision 2D CAD documentation and studio-grade architectural post-processing in Adobe Photoshop.',
    course2Meta: '2D Execution · Post-Processing',
    inquireWhatsapp: 'Inquire via WhatsApp →',
    studentWorkLabel: '03 / STUDENT WORK',
    studentWorkHeading: 'Selected works by our 600+ students.',
    contactLabel: "04 / LET'S TALK",
    contactHeading: 'Ready to elevate your architectural workflow?',
    whatsappBtnLabel: 'WhatsApp',
    emailBtnLabel: 'Email',
    footerCopy: '© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.',
    exportBtn: 'Export Single-File index.html',
    manageImagesBtn: 'Upload Site Photos',
    workflowLabel: 'Workflow',
  },
  ar: {
    brand: 'إبراهيم النجار',
    navAbout: 'عن المكتب',
    navAcademy: 'الأكاديمية',
    navStudentWork: 'أعمال الطلاب',
    navContact: 'تواصل معنا',
    switchLangLabel: 'EN',
    heroLabel: 'مهندس معماري ومدرّب محترف',
    heroName: 'المهندس إبراهيم النجار',
    heroMotto: 'عمارة مدروسة. ومعرفة تستحق المشاركة.',
    heroBio:
      'مهندس معماري ومدرّب ذو خبرة احترافية منذ عام 2023، قام بتدريب وتأهيل أكثر من 600+ طالب ومهندس حول العالم. متخصص في تحويل الأفكار المعمارية المعقدة إلى لوحات بصرية استثنائية باستخدام Revit و AutoCAD و Enscape و Lumion و Photoshop و V-Ray.',
    heroBadge: 'الكتلة / الضوء / الأجواء',
    practiceLabel: '01 / الممارسة المعمارية',
    practiceHeading: 'التصميم الجيد يبدأ من الفهم العميق.',
    practiceNarrative:
      'أنا المهندس المعماري إبراهيم النجار، مهندس معماري ومدرّب شغوف بنقل المعرفة. بدأت رحلتي في التدريب المعماري الاحترافي عام 2023، ومنذ ذلك الحين تشرفت بتدريب وتمكين أكثر من 600+ طالب ومهندس حول العالم. يجمع منهجي بين الإبداع في التصميم المعماري والدقة الهندسية في التنفيذ، مع التخصص في إتقان وتدريس أقوى البرمجيات الهندسية: Revit و AutoCAD و Enscape و Lumion و Photoshop و V-Ray. رسالتي هي مساعدة المعماريين الطموحين على تحويل مفاهيمهم المعقدة إلى قصص بصرية واقعية ومؤثرة.',
    stat1Value: 'منذ 2023',
    stat1Desc: 'خبرة احترافية وتدريب معماري',
    stat2Value: '+600',
    stat2Desc: 'طالب ومهندس تم تدريبهم حول العالم',
    stat3Value: '6 برامج أساسية',
    stat3Desc: 'منظومة متكاملة للبيم والإظهار المعماري',
    softwareEcosystemLabel: 'منظومة البرامج الهندسية المعتمدة',
    academyLabel: '02 / الأكاديمية',
    academyHeading: 'ابنِ بدقة. وأظهر بروحٍ سينمائية.',
    flagshipTag: 'الدورة التدريبية الرئيسية عن بُعد',
    flagshipTitle: 'ماستر كلاس الريفيت المعماري (Revit Masterclass)',
    flagshipOverview:
      'إتقان شامل لمنظومة الـ BIM المعماري بدءاً من الفكرة الأولية والنمذجة ثلاثية الأبعاد الدقيقة وصولاً إلى المخططات التنفيذية الكاملة والتصدير لبرامج الإظهار.',
    flagshipCta: 'سجّل الآن في ماستر كلاس الريفيت',
    syllabusLabel: 'منهج الدورة التدريبية · 4 وحدات',
    course1Tag: 'مسار تخصصي · LUMION / ENSCAPE / V-RAY',
    course1Title: 'معسكر الإظهار المعماري الاحترافي',
    course1Desc:
      'إتقان إضاءة الغسق (Twilight)، والخامات الواقعية، والأجواء السينمائية باستخدام Lumion و Enscape و V-Ray.',
    course1Meta: 'الإضاءة · الخامات · الأجواء البصرية',
    course2Tag: 'مسار تخصصي · AUTOCAD / PHOTOSHOP',
    course2Title: 'الرسم التنفيذي والمعالجة البصرية (Post-Production)',
    course2Desc:
      'توثيق المخططات ثنائية الأبعاد بدقة عالية في AutoCAD، والإخراج المعماري الاحترافي عبر Adobe Photoshop.',
    course2Meta: 'التنفيذ ثنائي الأبعاد · الإخراج الفني',
    inquireWhatsapp: 'استفسر عبر واتساب ←',
    studentWorkLabel: '03 / أعمال الطلاب',
    studentWorkHeading: 'أعمال مختارة من إبداع أكثر من 600+ طالب.',
    contactLabel: '04 / لنتحدث',
    contactHeading: 'هل أنت مستعد للارتقاء بسير عملك المعماري؟',
    whatsappBtnLabel: 'واتساب',
    emailBtnLabel: 'البريد الإلكتروني',
    footerCopy: '© 2026 المهندس المعماري إبراهيم النجار. جميع الحقوق محفوظة.',
    exportBtn: 'تصدير ملف index.html لـ GitHub Pages',
    manageImagesBtn: 'رفع وتجربة صور الموقع',
    workflowLabel: 'البرامج المستخدمة',
  },
};

const FALLBACK_SVGS: Record<ImageSlotKey, string> = {
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
        <g stroke="#1F1F1F" stroke-width="1" opacity="0.65">
          <line x1="0" y1="610" x2="1600" y2="610"/>
          <line x1="240" y1="0" x2="240" y2="900"/>
          <line x1="1260" y1="0" x2="1260" y2="900"/>
          <line x1="0" y1="290" x2="1600" y2="290" stroke-dasharray="4 8"/>
        </g>
        <rect x="240" y="290" width="1020" height="52" fill="#171717" stroke="#2B2B2B" stroke-width="1.5"/>
        <rect x="310" y="342" width="820" height="178" fill="url(#warmGlass)" stroke="#333333" stroke-width="1.5"/>
        <line x1="510" y1="342" x2="510" y2="520" stroke="#1A1A1A" stroke-width="4"/>
        <line x1="760" y1="342" x2="760" y2="520" stroke="#1A1A1A" stroke-width="4"/>
        <line x1="980" y1="342" x2="980" y2="520" stroke="#1A1A1A" stroke-width="4"/>
        <rect x="340" y="352" width="760" height="3" fill="#FFD28E" opacity="0.75"/>
        <rect x="340" y="498" width="520" height="4" fill="#F5B05B" opacity="0.65"/>
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
    slotKey: 'work1',
    alt: 'Student Work 01 — Monolithic Cultural Pavilion',
    title: {
      en: 'Monolithic Cultural Pavilion',
      ar: 'جناح ثقافي خرساني معاصر',
    },
    subtitle: {
      en: 'BIM Massing · Dusk Atmospheric Study',
      ar: 'تشكيل الكتل BIM · دراسة أجواء الغسق',
    },
    stack: 'Revit · V-Ray · Photoshop',
    year: '2025',
  },
  {
    id: 'work-2',
    index: '02 / REVIT + ENSCAPE',
    src: './work-2.jpg',
    slotKey: 'work2',
    alt: 'Student Work 02 — Cantilevered Cliffside Residence',
    title: {
      en: 'Cantilevered Cliffside Residence',
      ar: 'فيلا معلّقة على الجرف الصخري',
    },
    subtitle: {
      en: 'Curtain Systems · Interior Illumination',
      ar: 'أنظمة الواجهات الزجاجية · الإضاءة الداخلية',
    },
    stack: 'Revit · Enscape · Photoshop',
    year: '2025',
  },
  {
    id: 'work-3',
    index: '03 / LUMION + PHOTOSHOP',
    src: './work-3.jpg',
    slotKey: 'work3',
    alt: 'Student Work 03 — Arid Stone Courtyard Villa',
    title: {
      en: 'Arid Stone Courtyard Villa',
      ar: 'فيلا الفناء الحجري الصحراوي',
    },
    subtitle: {
      en: 'Materiality · Twilight Post-Production',
      ar: 'دراسة الخامات · معالجة ليلية في فوتوشوب',
    },
    stack: 'AutoCAD · Revit · Lumion · Photoshop',
    year: '2026',
  },
];

const IMAGE_SLOTS_META: Array<{
  key: ImageSlotKey;
  fileName: string;
  labelAr: string;
  labelEn: string;
}> = [
  {
    key: 'profile',
    fileName: './profile.jpg',
    labelAr: 'الصورة الشخصية (96×96)',
    labelEn: 'Profile Picture',
  },
  {
    key: 'hero',
    fileName: './hero-render.jpg',
    labelAr: 'ريندر الواجهة الرئيسية (Hero Render)',
    labelEn: 'Main Hero Render',
  },
  {
    key: 'work1',
    fileName: './work-1.jpg',
    labelAr: 'عمل الطالب الأول (Work 1)',
    labelEn: 'Student Work 01',
  },
  {
    key: 'work2',
    fileName: './work-2.jpg',
    labelAr: 'عمل الطالب الثاني (Work 2)',
    labelEn: 'Student Work 02',
  },
  {
    key: 'work3',
    fileName: './work-3.jpg',
    labelAr: 'عمل الطالب الثالث (Work 3)',
    labelEn: 'Student Work 03',
  },
];

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [openModuleId, setOpenModuleId] = useState<string>('module-01');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeLightbox, setActiveLightbox] = useState<StudentWorkItem | null>(
    null
  );
  const [codeDrawerOpen, setCodeDrawerOpen] = useState<boolean>(false);
  const [imageManagerOpen, setImageManagerOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [customImages, setCustomImages] = useState<
    Partial<Record<ImageSlotKey, string>>
  >(() => {
    try {
      const saved = localStorage.getItem('alnajjar_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const t = UI_COPY[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  const handleUploadSlot = (
    key: ImageSlotKey,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomImages((prev) => {
        const next = { ...prev, [key]: result };
        try {
          localStorage.setItem('alnajjar_custom_images', JSON.stringify(next));
        } catch {
          // Ignore storage quota overflow for large raw files
        }
        return next;
      });
    };
    reader.readAsDataURL(file);
  };

  const handleResetSlot = (key: ImageSlotKey) => {
    setCustomImages((prev) => {
      const next = { ...prev };
      delete next[key];
      try {
        localStorage.setItem('alnajjar_custom_images', JSON.stringify(next));
      } catch {
        // Ignore
      }
      return next;
    });
  };

  // Build HTML export with any uploaded custom images automatically injected if present
  const getExportHtml = () => {
    let html = STANDALONE_HTML;
    if (customImages.profile) {
      html = html.replace('src="./profile.jpg"', `src="${customImages.profile}"`);
    }
    if (customImages.hero) {
      html = html.replace(
        'src="./hero-render.jpg"',
        `src="${customImages.hero}"`
      );
    }
    if (customImages.work1) {
      html = html.replace('src="./work-1.jpg"', `src="${customImages.work1}"`);
    }
    if (customImages.work2) {
      html = html.replace('src="./work-2.jpg"', `src="${customImages.work2}"`);
    }
    if (customImages.work3) {
      html = html.replace('src="./work-3.jpg"', `src="${customImages.work3}"`);
    }
    return html;
  };

  const handleToggleModule = (id: string) => {
    setOpenModuleId((prev) => (prev === id ? '' : id));
  };

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleCopyCode = async () => {
    const exportCode = getExportHtml();
    try {
      await navigator.clipboard.writeText(exportCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = exportCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleDownloadHtml = () => {
    const exportCode = getExportHtml();
    const blob = new Blob([exportCode], {
      type: 'text/html;charset=utf-8',
    });
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
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A]"
    >
      {/* TOP NAVBAR (Strict 3-Zone Architectural Contract) */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className={`text-xs md:text-sm font-semibold ${
              isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
            } text-[#F5F5F5] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity`}
          >
            {t.brand}
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
              {t.navAbout}
            </a>
            <a
              href="#academy"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {t.navAcademy}
            </a>
            <a
              href="#student-work"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {t.navStudentWork}
            </a>
            <a
              href="#contact"
              className="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {t.navContact}
            </a>
          </nav>

          {/* Zone 3: Language Switcher Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleToggleLanguage}
              aria-label="Switch Language"
              className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F5] bg-[#121212] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.switchLangLabel}
            </button>

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
              {t.navAbout}
            </a>
            <a
              href="#academy"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              {t.navAcademy}
            </a>
            <a
              href="#student-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              {t.navStudentWork}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#F5F5F5] transition-colors"
            >
              {t.navContact}
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO HEADER */}
        <section className="pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#1F1F1F]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            {/* Micro-label */}
            <p
              className={`font-mono-tabular text-xs ${
                isRtl ? 'tracking-normal' : 'tracking-[0.18em]'
              } text-[#888888] mb-6`}
            >
              {t.heroLabel}
            </p>

            {/* Identity Row: 96px x 96px Circular Profile Image + Huge Bold Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-[#1F1F1F] bg-[#121212] shrink-0">
                <img
                  src={customImages.profile || './profile.jpg'}
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.08] headline-balance">
                {t.heroName}
              </h1>
            </div>

            {/* Editorial Split Row Below */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#1F1F1F] mb-12 md:mb-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#F5F5F5] leading-[1.3] headline-balance">
                  {t.heroMotto}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[68ch]">
                  {t.heroBio}
                </p>
              </div>
            </div>

            {/* Hero Image Showcase: Full-width architectural render (aspect-video, object-cover) */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#121212] group">
              <img
                src={customImages.hero || './hero-render.jpg'}
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
                <span
                  className={`font-mono-tabular text-[11px] sm:text-xs ${
                    isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
                  } text-[#F5F5F5]`}
                >
                  {t.heroBadge}
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
                <p
                  className={`font-mono-tabular text-xs ${
                    isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
                  } text-[#888888]`}
                >
                  {t.practiceLabel}
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.18] mb-6 headline-balance">
                  {t.practiceHeading}
                </h2>
                <p className="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[70ch]">
                  {t.practiceNarrative}
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
                    {t.stat1Value}
                  </div>
                  <p className="text-sm text-[#888888]">{t.stat1Desc}</p>
                </div>
              </div>

              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <span className="font-mono-tabular text-xs text-[#888888] mb-6">
                  02
                </span>
                <div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] font-mono-tabular mb-2">
                    {t.stat2Value}
                  </div>
                  <p className="text-sm text-[#888888]">{t.stat2Desc}</p>
                </div>
              </div>

              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <span className="font-mono-tabular text-xs text-[#888888] mb-6">
                  03
                </span>
                <div>
                  <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] font-mono-tabular mb-2">
                    {t.stat3Value}
                  </div>
                  <p className="text-sm text-[#888888]">{t.stat3Desc}</p>
                </div>
              </div>
            </div>

            {/* Software Stack Bar */}
            <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div
                className={`text-xs font-mono-tabular ${
                  isRtl ? 'tracking-normal' : 'tracking-[0.14em]'
                } text-[#888888] shrink-0`}
              >
                {t.softwareEcosystemLabel}
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
                <p
                  className={`font-mono-tabular text-xs ${
                    isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
                  } text-[#888888]`}
                >
                  {t.academyLabel}
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.18] headline-balance">
                  {t.academyHeading}
                </h2>
              </div>
            </div>

            {/* Flagship Course Card: "Revit Masterclass" */}
            <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 sm:p-8 md:p-10 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Column: Course Overview & Direct WhatsApp CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <p
                      className={`font-mono-tabular text-xs ${
                        isRtl ? 'tracking-normal' : 'tracking-[0.14em]'
                      } text-[#888888] mb-3`}
                    >
                      {t.flagshipTag}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] mb-4">
                      {t.flagshipTitle}
                    </h3>
                    <p className="text-sm sm:text-base text-[#888888] leading-[1.7] mb-8">
                      {t.flagshipOverview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F1F1F]">
                    <a
                      href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20the%20Revit%20Masterclass."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
                    >
                      <span>{t.flagshipCta}</span>
                      {isRtl ? (
                        <ArrowUpLeft className="w-4 h-4 shrink-0" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                      )}
                    </a>
                  </div>
                </div>

                {/* Right Column: Interactive Curriculum Accordion (4 Modules) */}
                <div className="lg:col-span-7">
                  <div
                    className={`text-xs font-mono-tabular ${
                      isRtl ? 'tracking-normal' : 'tracking-[0.14em]'
                    } text-[#888888] mb-4`}
                  >
                    {t.syllabusLabel}
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
                            className="w-full py-4 flex items-center justify-between gap-4 text-start group focus:outline-none cursor-pointer"
                          >
                            <span className="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                              {mod.title[lang]}
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
                              {mod.description[lang]}
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
                    {t.course1Tag}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                    {t.course1Title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                    {t.course1Desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
                  <span className="text-xs font-mono-tabular text-[#888888]">
                    {t.course1Meta}
                  </span>
                  <a
                    href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20the%20Architectural%20Visualization%20Bootcamp."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
                  >
                    {t.inquireWhatsapp}
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <p className="font-mono-tabular text-xs text-[#888888] mb-3">
                    {t.course2Tag}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] mb-3">
                    {t.course2Title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#888888] leading-[1.7] mb-6">
                    {t.course2Desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4">
                  <span className="text-xs font-mono-tabular text-[#888888]">
                    {t.course2Meta}
                  </span>
                  <a
                    href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20Technical%20Drafting%20%26%20Post-Production."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#F5F5F5] hover:underline whitespace-nowrap"
                  >
                    {t.inquireWhatsapp}
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
                <p
                  className={`font-mono-tabular text-xs ${
                    isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
                  } text-[#888888]`}
                >
                  {t.studentWorkLabel}
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.18] headline-balance">
                  {t.studentWorkHeading}
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
                      src={customImages[work.slotKey] || work.src}
                      alt={work.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = FALLBACK_SVGS[work.slotKey];
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
                        {work.title[lang]}
                      </h3>
                      <p className="text-xs text-[#888888] mt-1">
                        {work.subtitle[lang]}
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
              <p
                className={`font-mono-tabular text-xs ${
                  isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
                } text-[#888888] mb-4`}
              >
                {t.contactLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.16] max-w-2xl mb-10 headline-balance">
                {t.contactHeading}
              </h2>

              {/* Direct Contact Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/963998401013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors duration-150 whitespace-nowrap"
                >
                  <span>{t.whatsappBtnLabel}</span>
                  <span
                    dir="ltr"
                    className="font-mono-tabular text-xs text-[#0A0A0A]/80"
                  >
                    +963 998 401 013
                  </span>
                </a>

                <a
                  href="mailto:arch.ibrahim.najjar@gmail.com"
                  className="inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 text-sm font-semibold text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap"
                >
                  <span className="text-[#888888] font-normal">
                    {t.emailBtnLabel}
                  </span>
                  <span
                    dir="ltr"
                    className="font-mono-tabular text-xs sm:text-sm text-[#F5F5F5]"
                  >
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
          <p>{t.footerCopy}</p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => setImageManagerOpen(true)}
              className="inline-flex items-center gap-1.5 font-mono-tabular text-xs text-[#F5F5F5] hover:underline transition-colors cursor-pointer"
            >
              <ImagePlus className="w-3.5 h-3.5" />
              <span>{t.manageImagesBtn}</span>
            </button>
            <button
              type="button"
              onClick={() => setCodeDrawerOpen(true)}
              className="inline-flex items-center gap-1.5 font-mono-tabular text-xs text-[#888888] hover:text-[#F5F5F5] transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{t.exportBtn}</span>
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
                  {activeLightbox.title[lang]}
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
                src={
                  customImages[activeLightbox.slotKey] || activeLightbox.src
                }
                alt={activeLightbox.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = FALLBACK_SVGS[activeLightbox.slotKey];
                  if (target.src !== fallback) {
                    target.src = fallback;
                  }
                }}
              />
            </div>
            <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#888888] border-t border-[#1F1F1F]">
              <span>{activeLightbox.subtitle[lang]}</span>
              <span className="font-mono-tabular">
                {t.workflowLabel}: {activeLightbox.stack} ·{' '}
                {activeLightbox.year}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SITE PHOTO UPLOADER MODAL */}
      {imageManagerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setImageManagerOpen(false)}
        >
          <div
            className="max-w-2xl w-full bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#1F1F1F] flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-[#F5F5F5]">
                  {isRtl
                    ? 'إدارة ورفع صور الموقع مباشرة'
                    : 'Upload & Preview Site Photos'}
                </h3>
                <p className="text-xs text-[#888888] mt-0.5">
                  {isRtl
                    ? 'اختر صورك من جهازك لمعاينتها فوراً وتضمينها داخل ملف index.html'
                    : 'Select images from your device to preview live and embed in index.html'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setImageManagerOpen(false)}
                aria-label="Close"
                className="p-1.5 text-[#888888] hover:text-[#F5F5F5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              {IMAGE_SLOTS_META.map((slot) => {
                const hasCustom = Boolean(customImages[slot.key]);
                return (
                  <div
                    key={slot.key}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F]"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={customImages[slot.key] || FALLBACK_SVGS[slot.key]}
                        alt={slot.labelEn}
                        className="w-14 h-14 rounded object-cover border border-[#1F1F1F] shrink-0"
                      />
                      <div>
                        <div className="text-sm font-semibold text-[#F5F5F5]">
                          {isRtl ? slot.labelAr : slot.labelEn}
                        </div>
                        <div
                          dir="ltr"
                          className="text-xs font-mono-tabular text-[#888888]"
                        >
                          {slot.fileName}{' '}
                          {hasCustom ? '· ✓ Custom Uploaded' : '· Default Path'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <label className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{isRtl ? 'اختر صورة' : 'Choose Image'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleUploadSlot(slot.key, e)}
                        />
                      </label>
                      {hasCustom && (
                        <button
                          type="button"
                          onClick={() => handleResetSlot(slot.key)}
                          title={isRtl ? 'إعادة ضبط' : 'Reset'}
                          className="p-2 text-[#888888] hover:text-[#F5F5F5] border border-[#1F1F1F] rounded"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-[#1F1F1F] flex items-center justify-between gap-4 bg-[#0A0A0A]">
              <span className="text-xs text-[#888888]">
                {isRtl
                  ? 'بعد رفع الصور يمكنك تحميل ملف index.html جاهزاً بالكامل'
                  : 'After uploading, download the ready-to-publish index.html'}
              </span>
              <button
                type="button"
                onClick={handleDownloadHtml}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isRtl ? 'تحميل index.html' : 'Download index.html'}</span>
              </button>
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
            dir="ltr"
            className="max-w-4xl w-full bg-[#121212] border border-[#1F1F1F] rounded-xl overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#1F1F1F] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-[#F5F5F5]">
                  GitHub Pages Single-File Export (index.html)
                </h3>
                <p className="text-xs text-[#888888]">
                  Includes bilingual Arabic/English toggle &amp; relative image paths (./profile.jpg, ./hero-render.jpg, ./work-1..3.jpg)
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F5] bg-[#0A0A0A] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors cursor-pointer"
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0A0A0A] bg-[#F5F5F5] rounded hover:bg-white transition-colors cursor-pointer"
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
              <code>{getExportHtml()}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
