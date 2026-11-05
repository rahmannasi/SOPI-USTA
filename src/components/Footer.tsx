import { useState } from 'react';
import DesignerModal from './DesignerModal';
import SopiLogo from './SopiLogo';
import { useLanguage } from '../context/LanguageContext';
import { SOPI_PHONE_NUMBER, SOPI_PHONE_LINK, buildWhatsAppUrl } from '../translations';
import { MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const whatsappUrl = buildWhatsAppUrl(t.directWhatsAppMessage);

  return (
    <>
      <footer className="bg-[#0B1426] py-12 border-t border-slate-800/80 pb-28 md:pb-12 text-white" id="iletisim">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <SopiLogo variant="dark" size="md" showTagline />
              <p className="mt-2.5 text-xs text-slate-400 max-w-sm leading-relaxed">
                {t.footerLocation}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a 
                href={SOPI_PHONE_LINK} 
                className="inline-flex items-center gap-2 text-[#FFC700] font-bold text-lg hover:text-yellow-300 transition-colors ltr-text"
              >
                <Phone className="h-4 w-4" />
                <span>{SOPI_PHONE_NUMBER}</span>
              </a>

              <span className="hidden sm:inline-block text-slate-700">|</span>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          {/* Bottom Bar with Copyright & Designer Credit */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-400">
            <p>© 2026 SOPI. {t.footerRights}</p>
            
            <button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="hover:text-[#FFC700] transition-colors text-start flex items-center gap-1.5 cursor-pointer group"
            >
              <span className="text-[#FFC700] group-hover:scale-125 transition-transform">✦</span>
              <span>{t.designerCreditPrefix}</span>
              <span className="font-bold text-slate-200 underline underline-offset-4 decoration-[#FFC700]/40 group-hover:decoration-[#FFC700] ml-1 rtl:ml-0 rtl:mr-1">
                Rahman Nasi
              </span>
            </button>
          </div>

        </div>
      </footer>

      <DesignerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
