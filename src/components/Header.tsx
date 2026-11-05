import { useState } from 'react';
import { Menu, X, Phone, Globe, Wrench, Download } from 'lucide-react';
import SopiLogo from './SopiLogo';
import { useLanguage } from '../context/LanguageContext';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { SOPI_PHONE_NUMBER, SOPI_PHONE_LINK } from '../translations';
import { Language } from '../types';

interface HeaderProps {
  onOpenServices?: () => void;
}

export default function Header({ onOpenServices }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();
  const { isInstallable, isInstalled, isIOS } = usePWAInstall();
  const canInstall = (isInstallable || isIOS) && !isInstalled;

  const navLinks = [
    { name: t.navHome, href: '#' },
    { 
      name: t.navServices, 
      href: '#hizmetler', 
      onClick: onOpenServices,
      icon: Wrench
    },
    { name: t.navProblem, href: '#talep' },
    { name: t.navContact, href: '#iletisim' },
  ];

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'tr', label: 'Türkçe', short: 'TR' },
    { code: 'fa', label: 'فارسی', short: 'FA' },
    { code: 'en', label: 'English', short: 'EN' },
  ];

  const pwaMenuLabel = {
    tr: 'SOPI Uygulamasını Yükle',
    fa: 'نصب اپلیکیشن SOPI',
    en: 'Install SOPI App',
  }[language] || 'SOPI Uygulamasını Yükle';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto w-full px-3.5 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          
          {/* Official SOPI Logo (Symbol + Wordmark) - ONE clean logo, no duplicates, no tagline in header */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center group cursor-pointer" aria-label="SOPI Anasayfa">
              <SopiLogo variant="light" size="compact" showTagline={false} />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer py-1"
                >
                  {Icon && <Icon className="h-4 w-4 text-[#FFC700]" />}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side: Language Switcher & Phone CTA */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100/80 p-1 rounded-full text-xs font-semibold border border-slate-200/60 shadow-inner">
              <Globe className="h-3.5 w-3.5 text-slate-400 ml-2 mr-1 rtl:ml-1 rtl:mr-2" />
              {languages.map((item) => {
                const isActive = language === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1426] text-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.code === 'fa' ? 'فارسی' : item.short}
                  </button>
                );
              })}
            </div>

            {/* Call Button */}
            <a
              href={SOPI_PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC700] px-4 py-2.5 text-sm font-bold text-[#0B1426] hover:bg-yellow-400 transition-colors shadow-xs"
            >
              <Phone className="h-4 w-4" />
              <span className="ltr-text">{SOPI_PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Compact Segmented Language Control + Hamburger */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse md:hidden">
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/80">
              {languages.map((item) => {
                const isActive = language === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-2 py-1 rounded-md transition-all text-[11px] font-bold cursor-pointer ${
                      isActive
                        ? 'bg-[#0B1426] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    aria-label={item.label}
                  >
                    {item.short}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5 px-4 pb-4 pt-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  {Icon && <Icon className="h-4 w-4 text-[#FFC700] shrink-0" />}
                  <span>{link.name}</span>
                </a>
              );
            })}

            {/* PWA Install Button in Mobile Menu (only when installable/available and not already installed) */}
            {canInstall && (
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-pwa-install'));
                }}
                className="flex items-center gap-2.5 w-full rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-start cursor-pointer"
              >
                <Download className="h-4 w-4 text-[#FFC700] shrink-0" />
                <span>{pwaMenuLabel}</span>
              </button>
            )}

            <div className="pt-2 border-t border-slate-100 mt-2">
              <a
                href={SOPI_PHONE_LINK}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#FFC700] px-4 py-3 text-center text-base font-bold text-[#0B1426] shadow-xs active:bg-yellow-400"
              >
                <Phone className="h-4 w-4" />
                <span>{t.callNow}:</span>
                <span className="ltr-text font-mono">{SOPI_PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
