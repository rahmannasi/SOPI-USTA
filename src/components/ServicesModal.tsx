import React, { useEffect } from 'react';
import { Droplet, Zap, Flame, Thermometer, Waves, Bath, Wrench, Drill, Hammer, HelpCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { problemCategories } from '../translations';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplet,
  Zap,
  Flame,
  Thermometer,
  Waves,
  Bath,
  Wrench,
  Drill,
  Hammer,
  HelpCircle,
};

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
}

export default function ServicesModal({ isOpen, onClose, onSelectService }: ServicesModalProps) {
  const { language, t } = useLanguage();

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

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    onClose();
    const target = document.getElementById('talep');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200 border border-slate-100">
        
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">{t.servicesSectionTitle}</h2>
            <p className="text-sm text-slate-500 mt-1">{t.servicesSectionSubtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label={t.modalClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problemCategories.map((service) => {
              const Icon = iconMap[service.iconName] || HelpCircle;
              return (
                <div 
                  key={service.id} 
                  onClick={() => handleServiceClick(service.id)}
                  className="flex gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-[#F4F6F8] hover:bg-yellow-50/70 hover:border-[#FFC700] transition-all group cursor-pointer"
                >
                  <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200 group-hover:bg-[#FFC700] group-hover:border-[#FFC700] text-[#0B1426] group-hover:text-black transition-colors shadow-2xs">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1426] mb-1 transition-colors">
                      {service.name[language]}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.serviceDescription[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
