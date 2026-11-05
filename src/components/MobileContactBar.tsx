import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SOPI_PHONE_NUMBER, SOPI_PHONE_LINK } from '../translations';

export default function MobileContactBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-slate-200/90 bg-white/95 px-3.5 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={SOPI_PHONE_LINK}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFC700] py-2.5 text-sm sm:text-base font-extrabold text-[#0B1426] shadow-xs active:bg-yellow-400 cursor-pointer"
      >
        <Phone className="h-4 w-4 stroke-[2.5]" />
        <span>{t.callNow}:</span>
        <span className="ltr-text font-mono font-bold">{SOPI_PHONE_NUMBER}</span>
      </a>
    </div>
  );
}
