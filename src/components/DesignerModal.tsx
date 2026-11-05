import { X, Mail, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface DesignerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesignerModal({ isOpen, onClose }: DesignerModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10 cursor-pointer"
          aria-label={t.modalClose}
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="p-8 text-center">
          {/* Avatar Photo */}
          <div className="mx-auto h-28 w-28 rounded-full overflow-hidden mb-5 border-4 border-yellow-400 shadow-md">
            <img 
              src="https://drive.google.com/thumbnail?id=1DeLQGTEkzkAGIHdNNzBsy9dTY7oQ4L95&sz=w400" 
              alt="Rahman Nasi" 
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <h2 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">
            Rahman Nasi
          </h2>
          
          <div className="inline-block px-3 py-0.5 rounded-full bg-yellow-100 text-yellow-800 font-extrabold text-xs tracking-wider uppercase mb-3">
            {t.designerBadge}
          </div>

          <p className="text-slate-600 text-sm font-semibold mb-6">
            {t.designerRole}
          </p>
          
          {/* Action Links (kept in natural LTR) */}
          <div className="space-y-2.5">
            <a 
              href="mailto:rahman.nasi@gmail.com"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-slate-50 hover:bg-yellow-50 hover:border-yellow-300 text-slate-800 hover:text-slate-950 transition-all text-sm font-bold border border-slate-200 shadow-xs"
            >
              <Mail className="h-4 w-4 text-slate-500" />
              <span className="ltr-text">rahman.nasi@gmail.com</span>
            </a>

            <a 
              href="tel:+98937171336"
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-slate-50 hover:bg-yellow-50 hover:border-yellow-300 text-slate-800 hover:text-slate-950 transition-all text-sm font-bold border border-slate-200 shadow-xs"
            >
              <Phone className="h-4 w-4 text-slate-500" />
              <span className="ltr-text">+98 937 171 336</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
