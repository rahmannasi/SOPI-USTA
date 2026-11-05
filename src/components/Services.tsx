import React from 'react';
import { 
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
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
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
  HelpCircle
};

interface ServicesProps {
  onSelectService?: (categoryId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const { language, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const handleClickService = (categoryId: string) => {
    if (onSelectService) {
      onSelectService(categoryId);
    }
    const target = document.getElementById('talep');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60" id="hizmetler">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesSectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.servicesSectionSubtitle}
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {problemCategories.map((service) => {
            const Icon = iconMap[service.iconName] || HelpCircle;
            return (
              <div
                key={service.id}
                onClick={() => handleClickService(service.id)}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-yellow-400/80 transition-all duration-200 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-yellow-400 text-slate-700 group-hover:text-slate-950 transition-colors shadow-xs">
                      <Icon className="h-6 w-6 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-700 transition-colors">
                      {service.name[language]}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.serviceDescription[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-yellow-600 group-hover:text-yellow-700">
                  <span>{t.servicesSelectThis}</span>
                  <ArrowIcon className="h-4 w-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
