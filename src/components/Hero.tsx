import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SOPI_PHONE_LINK } from '../translations';
import { ArrowDown, Phone, MapPin, Wrench, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenServices?: () => void;
}

export default function Hero({ onOpenServices }: HeroProps) {
  const { t, language, isRtl } = useLanguage();

  const handleSelectProblemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('talep');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Verified factual positioning points (no unverified guarantees or promises)
  const factualBadges = {
    tr: [
      { icon: MapPin, text: 'İstanbul · Beşiktaş · Ortaköy' },
      { icon: Wrench, text: 'Ev & İş Yeri Teknik Hizmetleri' },
      { icon: MessageCircle, text: 'WhatsApp ile Kolay Talep' },
    ],
    fa: [
      { icon: MapPin, text: 'استانبول · بشیکتاش · اورتاکوی' },
      { icon: Wrench, text: 'خدمات فنی منزل و محل کار' },
      { icon: MessageCircle, text: 'ثبت آسان درخواست در واتساپ' },
    ],
    en: [
      { icon: MapPin, text: 'Istanbul · Beşiktaş · Ortaköy' },
      { icon: Wrench, text: 'Home & Office Technical Service' },
      { icon: MessageCircle, text: 'Easy Request via WhatsApp' },
    ],
  }[language] || [
    { icon: MapPin, text: 'İstanbul · Beşiktaş · Ortaköy' },
    { icon: Wrench, text: 'Ev & İş Yeri Teknik Hizmetleri' },
    { icon: MessageCircle, text: 'WhatsApp ile Kolay Talep' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B1426] text-white pt-10 sm:pt-14 lg:pt-16 pb-28 sm:pb-36 lg:pb-44 min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center">
      {/* DESKTOP RIGHT-SIDE INTEGRATED TECHNICIAN / HOME SCENE */}
      <div 
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 end-0 w-[48%] xl:w-[50%] h-full pointer-events-none select-none z-0 overflow-hidden"
      >
        <picture>
          <source srcSet="/assets/sopi-hero.webp" type="image/webp" />
          <img
            src="/assets/wide_clean_modern_web_landing_page_hero_scene_wi.png"
            alt={
              language === 'fa'
                ? "تعمیرکار SOPI در حال انجام خدمات فنی در یک خانه مدرن"
                : language === 'en'
                ? "SOPI technician performing technical service in a modern home"
                : "SOPI teknik servisi modern evde onarım hizmeti verirken"
            }
            className="w-full h-full object-cover object-[70%_center]"
            referrerPolicy="no-referrer"
          />
        </picture>

        {/* Soft Dark Navy Gradient Transition (Left -> Right in LTR, Right -> Left in RTL) */}
        <div 
          className={`absolute inset-0 ${
            isRtl 
              ? 'bg-gradient-to-l from-[#0B1426] via-[#0B1426]/45 to-transparent' 
              : 'bg-gradient-to-r from-[#0B1426] via-[#0B1426]/45 to-transparent'
          }`} 
        />

        {/* Feathered side edge mask to completely eliminate any hard vertical boundary */}
        <div 
          className={`absolute inset-y-0 ${
            isRtl ? 'right-0' : 'left-0'
          } w-44 bg-gradient-to-r ${
            isRtl ? 'from-transparent to-[#0B1426]' : 'from-[#0B1426] to-transparent'
          }`} 
        />

        {/* Top and Bottom soft fades into the dark canvas and problem selector */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/75 via-transparent to-[#0B1426]" />
      </div>

      {/* Subtle Ambient Radial Highlight on Left */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 start-0 -translate-x-1/2 w-96 h-96 bg-[#FFC700]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="w-full lg:max-w-[54%] xl:max-w-[52%]">
          
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.2] sm:leading-[1.12]">
            {t.heroTitle}
          </h1>

          <p className="mt-3.5 sm:mt-4 text-base sm:text-xl lg:text-2xl font-extrabold text-[#FFC700] leading-snug">
            {t.heroHighlight}
          </p>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
            {t.heroDescription}
          </p>
          
          {/* Hero CTAs with comfortable touch targets and spacing */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
            <a
              href="#talep"
              onClick={handleSelectProblemClick}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] px-7 py-3.5 sm:px-8 sm:py-4 text-base font-extrabold text-[#0B1426] hover:bg-yellow-400 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>{t.btnViewServices}</span>
              <ArrowDown className="h-4 w-4 stroke-[2.5]" />
            </a>

            <a
              href={SOPI_PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 sm:px-8 sm:py-4 text-base font-bold text-white hover:bg-white/15 transition-all backdrop-blur-md border border-white/15 active:scale-95"
            >
              <Phone className="h-4 w-4 text-[#FFC700]" />
              <span>{t.btnCallNow}</span>
            </a>
          </div>

          {/* Factual local positioning (no unverified claims or guarantees) */}
          <div className="mt-8 sm:mt-9 pt-5 sm:pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-300 font-medium">
            {factualBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="inline-flex items-center gap-2 min-w-0">
                  <Icon className="h-3.5 w-3.5 text-[#FFC700] shrink-0" />
                  <span className="truncate">{badge.text}</span>
                </div>
              );
            })}
          </div>

          {/* MOBILE / TABLET VISUAL IMAGE SECTION (Integrated between factual badges and ProblemSelector overlap) */}
          <div 
            aria-hidden="true"
            className="mt-6 sm:mt-7 relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl lg:hidden"
          >
            <picture>
              <source srcSet="/assets/sopi-hero.webp" type="image/webp" />
              <img
                src="/assets/wide_clean_modern_web_landing_page_hero_scene_wi.png"
                alt={
                  language === 'fa'
                    ? "تعمیرکار SOPI در حال انجام خدمات فنی در یک خانه مدرن"
                    : language === 'en'
                    ? "SOPI technician performing technical service in a modern home"
                    : "SOPI teknik servisi modern evde onarım hizmeti verirken"
                }
                className="w-full h-full object-cover object-[70%_center]"
                referrerPolicy="no-referrer"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426] via-[#0B1426]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/40 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
