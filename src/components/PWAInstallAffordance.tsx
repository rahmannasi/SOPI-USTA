import React, { useState, useEffect } from 'react';
import { Share, PlusSquare, X, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useLanguage } from '../context/LanguageContext';

export default function PWAInstallAffordance() {
  const { isInstallable, isIOS, install } = usePWAInstall();
  const { language, isRtl } = useLanguage();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // Translations
  const translations = {
    tr: {
      title: "SOPI'yi telefonunuza ekleyin",
      subtitle: "Hızlı erişim ve tek dokunuşla servis talebi",
      installBtn: "Uygulamayı Ekle",
      iosTitle: "iPhone / iPad'e SOPI'yi Ekle",
      iosStep1: "Safari'nin alt çubuğundaki Paylaş (Share) simgesine dokunun.",
      iosStep2: "Aşağı kaydırıp 'Ana Ekrana Ekle' (Add to Home Screen) seçeneğine dokunun.",
      iosStep3: "Sağ üstteki 'Ekle' butonuna basarak tamamlayın.",
      close: "Kapat",
      installed: "Uygulama Eklendi!",
    },
    fa: {
      title: "نصب SOPI روی صفحه اصلی گوشی",
      subtitle: "دسترسی فوری و ثبت آسان درخواست",
      installBtn: "افزودن به صفحه اصلی",
      iosTitle: "راهنمای نصب در آیفون و آیپد",
      iosStep1: "در نوار پایین سافاری روی دکمه Share (اشتراک‌گذاری) بزنید.",
      iosStep2: "صفحه را پایین بکشید و 'Add to Home Screen' (افزودن به صفحه اصلی) را انتخاب کنید.",
      iosStep3: "در گوشه بالا روی 'Add' (افزودن) بزنید.",
      close: "بستن",
      installed: "با موفقیت افزوده شد!",
    },
    en: {
      title: "Add SOPI to your phone",
      subtitle: "Fast access & 1-tap technical requests",
      installBtn: "Install App",
      iosTitle: "Install SOPI on iPhone / iPad",
      iosStep1: "Tap the Share button in Safari's bottom toolbar.",
      iosStep2: "Scroll down and tap 'Add to Home Screen'.",
      iosStep3: "Tap 'Add' in the top-right corner.",
      close: "Close",
      installed: "App Installed!",
    },
  }[language] || {
    title: "SOPI'yi telefonunuza ekleyin",
    subtitle: "Hızlı erişim ve tek dokunuşla servis talebi",
    installBtn: "Uygulamayı Ekle",
    iosTitle: "iPhone / iPad'e SOPI'yi Ekle",
    iosStep1: "Safari'nin alt çubuğundaki Paylaş simgesine dokunun.",
    iosStep2: "'Ana Ekrana Ekle' seçeneğine dokunun.",
    iosStep3: "Sağ üstteki 'Ekle' butonuna basın.",
    close: "Kapat",
    installed: "Eklendi!",
  };

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (isInstallable) {
      await install();
    } else {
      // For browsers that don't support beforeinstallprompt, provide the guidance
      setShowIOSGuide(true);
    }
  };

  // Listen for custom trigger from mobile menu or UI actions
  useEffect(() => {
    const handleOpenPWA = () => {
      handleInstallClick();
    };
    window.addEventListener('open-pwa-install', handleOpenPWA);
    return () => window.removeEventListener('open-pwa-install', handleOpenPWA);
  }, [isIOS, isInstallable]);

  return (
    <>
      {/* iOS Safari Installation Guide Modal */}
      {showIOSGuide && (
        <div 
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-950/70 backdrop-blur-xs p-3 sm:p-4"
          onClick={() => setShowIOSGuide(false)}
        >
          <div 
            className="w-full max-w-md rounded-2xl bg-[#0B1426] border border-slate-700/80 p-5 sm:p-6 text-white shadow-2xl animate-in slide-in-from-bottom-4 duration-200"
            onClick={(e) => e.stopPropagation()}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-[#0B1426] border border-[#FFC700]/50 p-1 flex items-center justify-center shrink-0">
                  <img src="/icons/icon-192.png" alt="SOPI" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {translations.iosTitle}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Safari · iOS
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 shrink-0">
                  <Share className="h-5 w-5" />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">1. {language === 'fa' ? 'اشتراک‌گذاری' : 'Paylaş Butonu'}</strong>
                  {translations.iosStep1}
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                <div className="p-2 rounded-lg bg-[#FFC700]/15 text-[#FFC700] shrink-0">
                  <PlusSquare className="h-5 w-5" />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">2. {language === 'fa' ? 'افزودن به صفحه اصلی' : 'Ana Ekrana Ekle'}</strong>
                  {translations.iosStep2}
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/80 p-3 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white block mb-0.5">3. {language === 'fa' ? 'تأیید نهایی' : 'Tamamlayın'}</strong>
                  {translations.iosStep3}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-xl bg-[#FFC700] py-3 text-sm font-bold text-[#0B1426] hover:bg-yellow-400 transition-colors cursor-pointer"
            >
              {translations.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
