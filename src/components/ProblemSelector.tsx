import React, { useState, useId } from 'react';
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
  ArrowLeft,
  CheckCircle2,
  Camera,
  MapPin,
  Check,
  RotateCcw,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { problemCategories, suggestedAreas, generateWhatsAppMessage, buildWhatsAppUrl } from '../translations';
import { ServiceRequest } from '../types';

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

export default function ProblemSelector() {
  const { language, t, isRtl } = useLanguage();
  const photoInputId = useId();

  // Form step: 0 = Categories, 1 = SubOptions, 2 = Description & Photo, 3 = Location, 4 = Contact, 5 = Review, 6 = Success
  const [step, setStep] = useState<number>(0);

  // Form state
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [selectedSubOption, setSelectedSubOption] = useState<string>('');
  const [customSubOption, setCustomSubOption] = useState<string>('');
  
  const [details, setDetails] = useState<string>('');
  const [selectedPhotoName, setSelectedPhotoName] = useState<string>('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const [selectedArea, setSelectedArea] = useState<string>('Ortaköy');
  const [customArea, setCustomArea] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // Validation error state
  const [errorMessage, setErrorMessage] = useState<string>('');

  const activeCategory = problemCategories.find(c => c.id === selectedCategoryId);

  const handleCategorySelect = (id: string) => {
    setSelectedCategoryId(id);
    setSelectedSubOption('');
    setCustomSubOption('');
    setErrorMessage('');
    setStep(1);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedPhotoName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setSelectedPhotoName('');
    setPhotoPreview(null);
  };

  // Step 1 validation & advance
  const handleProceedFromStep1 = () => {
    if (!selectedSubOption && !customSubOption.trim()) {
      setErrorMessage(t.valSelectProblem);
      return;
    }
    setErrorMessage('');
    setStep(2);
  };

  // Step 2 validation & advance
  const handleProceedFromStep2 = () => {
    if (!details.trim()) {
      setErrorMessage(t.valEnterDetail);
      return;
    }
    setErrorMessage('');
    setStep(3);
  };

  // Step 3 validation & advance
  const handleProceedFromStep3 = () => {
    const finalArea = selectedArea === 'Diğer / Other' ? customArea.trim() : selectedArea;
    if (!finalArea) {
      setErrorMessage(t.valEnterArea);
      return;
    }
    if (!address.trim()) {
      setErrorMessage(t.valEnterAddress);
      return;
    }
    setErrorMessage('');
    setStep(4);
  };

  // Step 4 validation & advance to review
  const handleProceedFromStep4 = () => {
    if (!fullName.trim()) {
      setErrorMessage(t.valEnterName);
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setErrorMessage(t.valEnterPhone);
      return;
    }
    setErrorMessage('');
    setStep(5);
  };

  // Final submit to WhatsApp
  const handleFinalSubmit = () => {
    if (!activeCategory) return;

    const finalArea = selectedArea === 'Diğer / Other' ? (customArea.trim() || 'İstanbul') : selectedArea;
    const finalProblem = [selectedSubOption, customSubOption.trim()].filter(Boolean).join(' - ') || t.summaryNotProvided;

    const requestData: ServiceRequest = {
      language,
      service: activeCategory.name[language],
      problem: finalProblem,
      description: details.trim(),
      area: finalArea,
      address: address.trim(),
      name: fullName.trim(),
      phone: phone.trim(),
      createdAt: new Date().toISOString()
    };

    const message = generateWhatsAppMessage(requestData);
    const url = buildWhatsAppUrl(message);

    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');

    // Show friendly success acknowledgement
    setStep(6);
  };

  const resetForm = () => {
    setStep(0);
    setSelectedCategoryId('');
    setSelectedSubOption('');
    setCustomSubOption('');
    setDetails('');
    setSelectedPhotoName('');
    setPhotoPreview(null);
    setSelectedArea('Ortaköy');
    setCustomArea('');
    setAddress('');
    setFullName('');
    setPhone('');
    setErrorMessage('');
  };

  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ForwardIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative -mt-14 sm:-mt-20 lg:-mt-28 z-20 px-3.5 sm:px-6 lg:px-8 mb-16" id="talep">
      <div className="mx-auto max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(11,20,38,0.12)] overflow-hidden border border-slate-100/90">
        
        {/* Step Progress Bar (Shown in steps 1 through 5) */}
        {step >= 1 && step <= 5 && (
          <div className="bg-slate-50 border-b border-slate-100 px-4 sm:px-6 py-3.5 sm:py-4">
            <div className="flex items-center justify-between max-w-2xl mx-auto text-xs sm:text-sm font-bold">
              
              <button 
                onClick={() => { setStep(1); setErrorMessage(''); }}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                  step === 1 ? 'text-[#0B1426] font-extrabold' : step > 1 ? 'text-slate-800' : 'text-slate-400'
                }`}
              >
                <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${
                  step > 1 ? 'bg-emerald-600 text-white' : step === 1 ? 'bg-[#FFC700] text-[#0B1426] font-extrabold' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step > 1 ? '✓' : '1'}
                </span>
                <span className="hidden sm:inline">{t.step1Progress}</span>
              </button>

              <span className="text-slate-300 font-normal rtl:rotate-180 inline-block">→</span>

              <button 
                onClick={() => { if (step > 2) { setStep(2); setErrorMessage(''); } }}
                className={`flex items-center gap-1.5 transition-colors ${
                  step === 2 ? 'text-[#0B1426] font-extrabold' : step > 2 ? 'text-slate-800 cursor-pointer' : 'text-slate-400'
                }`}
              >
                <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${
                  step > 2 ? 'bg-emerald-600 text-white' : step === 2 ? 'bg-[#FFC700] text-[#0B1426] font-extrabold' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step > 2 ? '✓' : '2'}
                </span>
                <span className="hidden sm:inline">{t.step2Progress}</span>
              </button>

              <span className="text-slate-300 font-normal rtl:rotate-180 inline-block">→</span>

              <button 
                onClick={() => { if (step > 3) { setStep(3); setErrorMessage(''); } }}
                className={`flex items-center gap-1.5 transition-colors ${
                  step === 3 ? 'text-[#0B1426] font-extrabold' : step > 3 ? 'text-slate-800 cursor-pointer' : 'text-slate-400'
                }`}
              >
                <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${
                  step > 3 ? 'bg-emerald-600 text-white' : step === 3 ? 'bg-[#FFC700] text-[#0B1426] font-extrabold' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step > 3 ? '✓' : '3'}
                </span>
                <span className="hidden sm:inline">{t.step3Progress}</span>
              </button>

              <span className="text-slate-300 font-normal rtl:rotate-180 inline-block">→</span>

              <button 
                onClick={() => { if (step > 4) { setStep(4); setErrorMessage(''); } }}
                className={`flex items-center gap-1.5 transition-colors ${
                  step === 4 || step === 5 ? 'text-[#0B1426] font-extrabold' : 'text-slate-400'
                }`}
              >
                <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] ${
                  step === 5 ? 'bg-emerald-600 text-white' : step === 4 ? 'bg-[#FFC700] text-[#0B1426] font-extrabold' : 'bg-slate-200 text-slate-600'
                }`}>
                  {step === 5 ? '✓' : '4'}
                </span>
                <span className="hidden sm:inline">{t.step4Progress}</span>
              </button>

            </div>
          </div>
        )}

        <div className="p-4 sm:p-8 lg:p-10">
          
          {/* STEP 0: Category Grid */}
          {step === 0 && (
            <div>
              <div className="text-center mb-7 sm:mb-9">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1426] tracking-tight">
                  {t.problemSelectorTitle}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  {t.problemSelectorSubtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3.5">
                {problemCategories.map((category) => {
                  const Icon = iconMap[category.iconName] || HelpCircle;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category.id)}
                      className="flex flex-col items-center justify-center p-3.5 sm:p-5 text-[#0B1426] bg-[#F4F6F8] hover:bg-yellow-50/70 hover:border-[#FFC700] border border-slate-200/90 rounded-2xl transition-all duration-150 active:border-[#FFC700] active:scale-[0.98] group cursor-pointer touch-manipulation min-h-[105px] sm:min-h-[120px] shadow-2xs"
                    >
                      <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-2 sm:mb-2.5 group-hover:bg-[#FFC700] group-hover:border-[#FFC700] transition-colors shadow-2xs">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#0B1426] group-hover:text-black transition-colors stroke-[1.8]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#0B1426] text-center leading-tight">
                        {category.name[language]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 1: Sub-Options Selection */}
          {step === 1 && activeCategory && (
            <div className="animate-in fade-in duration-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={() => setStep(0)} 
                  className="text-sm font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <BackIcon className="h-4 w-4" />
                  {t.btnBack}
                </button>
                <div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 text-xs font-extrabold flex items-center gap-1.5">
                  <span>{activeCategory.name[language]}</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {t.step1Title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {activeCategory.name[language]}
              </p>

              <div className="space-y-2.5 mb-6">
                {activeCategory.subOptions[language].map((option) => {
                  const isSelected = selectedSubOption === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedSubOption(option);
                        setErrorMessage('');
                      }}
                      className={`w-full text-start px-5 py-4 rounded-xl border font-medium text-sm sm:text-base transition-all flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'border-yellow-500 bg-yellow-50/60 text-slate-950 font-bold shadow-xs' 
                          : 'border-slate-200 hover:border-yellow-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        <div className="h-6 w-6 rounded-full bg-yellow-400 text-slate-950 flex items-center justify-center shrink-0">
                          <Check className="h-4 w-4 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  {t.step1CustomNote}
                </label>
                <input
                  type="text"
                  value={customSubOption}
                  onChange={(e) => setCustomSubOption(e.target.value)}
                  placeholder={t.step1CustomPlaceholder}
                  className="w-full rounded-xl border border-slate-200 p-3.5 text-sm bg-slate-50/50 text-slate-900 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all"
                />
              </div>

              {errorMessage && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-sm font-semibold border border-red-200">
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                onClick={handleProceedFromStep1}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 text-base font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md active:scale-98"
              >
                {t.btnContinue}
                <ForwardIcon className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Description & Optional Photo */}
          {step === 2 && activeCategory && (
            <div className="animate-in fade-in duration-200 max-w-2xl mx-auto">
              <button 
                onClick={() => setStep(1)} 
                className="text-sm font-semibold text-slate-500 hover:text-slate-900 mb-6 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BackIcon className="h-4 w-4" />
                {t.btnBack}
              </button>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {t.step2Title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {activeCategory.name[language]} — {selectedSubOption || customSubOption}
              </p>

              <div className="space-y-5 mb-6">
                <div>
                  <textarea
                    value={details}
                    onChange={(e) => {
                      setDetails(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 shadow-inner p-4 bg-slate-50 text-slate-900 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all text-base leading-relaxed"
                    placeholder={t.step2Placeholder}
                    autoFocus
                  />
                </div>

                {/* Photo Upload Zone (MVP: local selection + note for sending in WhatsApp) */}
                <div className="border border-dashed border-slate-300 rounded-2xl p-5 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0">
                        <Camera className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          {t.step2PhotoLabel}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 max-w-sm">
                          {t.step2PhotoHint}
                        </p>
                      </div>
                    </div>

                    <div>
                      <input 
                        type="file" 
                        id={photoInputId} 
                        accept="image/*" 
                        onChange={handlePhotoChange}
                        className="hidden" 
                      />
                      <label 
                        htmlFor={photoInputId}
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-yellow-50 hover:text-yellow-800 hover:border-yellow-300 transition-colors shadow-xs cursor-pointer"
                      >
                        {selectedPhotoName ? t.step2PhotoChange : t.step2PhotoSelect}
                      </label>
                    </div>
                  </div>

                  {selectedPhotoName && (
                    <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-700">
                      <div className="flex items-center gap-2 truncate mr-2">
                        {photoPreview && (
                          <img src={photoPreview} alt="Preview" className="h-8 w-8 rounded-md object-cover border border-slate-200" />
                        )}
                        <span className="truncate">{selectedPhotoName}</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={handleRemovePhoto}
                        className="text-red-500 hover:text-red-700 shrink-0 font-bold cursor-pointer"
                      >
                        {t.step2PhotoRemove}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-sm font-semibold border border-red-200">
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                onClick={handleProceedFromStep2}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 text-base font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md active:scale-98"
              >
                {t.btnContinue}
                <ForwardIcon className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 3: Location (District & Address Details) */}
          {step === 3 && (
            <div className="animate-in fade-in duration-200 max-w-2xl mx-auto">
              <button 
                onClick={() => setStep(2)} 
                className="text-sm font-semibold text-slate-500 hover:text-slate-900 mb-6 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BackIcon className="h-4 w-4" />
                {t.btnBack}
              </button>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {t.step3Title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                İstanbul
              </p>

              <div className="space-y-5 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {t.step3AreaLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {suggestedAreas.map((area) => {
                      const isSelected = selectedArea === area;
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => {
                            setSelectedArea(area);
                            if (errorMessage) setErrorMessage('');
                          }}
                          className={`py-3 px-3 rounded-xl border text-sm font-bold transition-all text-center cursor-pointer ${
                            isSelected
                              ? 'bg-yellow-400 text-slate-950 border-yellow-400 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-yellow-300'
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>

                  {selectedArea === 'Diğer / Other' && (
                    <input
                      type="text"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      placeholder={t.step3OtherAreaPlaceholder}
                      className="mt-3 w-full rounded-xl border border-slate-200 p-3.5 text-sm bg-slate-50 text-slate-900 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {t.step3AddressLabel}
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder={t.step3AddressPlaceholder}
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm sm:text-base bg-slate-50 text-slate-900 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-sm font-semibold border border-red-200">
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                onClick={handleProceedFromStep3}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 text-base font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md active:scale-98"
              >
                {t.btnContinue}
                <ForwardIcon className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 4: Customer Information */}
          {step === 4 && (
            <div className="animate-in fade-in duration-200 max-w-2xl mx-auto">
              <button 
                onClick={() => setStep(3)} 
                className="text-sm font-semibold text-slate-500 hover:text-slate-900 mb-6 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <BackIcon className="h-4 w-4" />
                {t.btnBack}
              </button>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {t.step4Title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {t.step4Subtitle}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.step4NameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder={t.step4NamePlaceholder}
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm sm:text-base bg-slate-50 text-slate-900 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.step4PhoneLabel}
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    dir="ltr"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder={t.step4PhonePlaceholder}
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm sm:text-base bg-slate-50 text-slate-900 focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none text-start font-mono"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-sm font-semibold border border-red-200">
                  {errorMessage}
                </div>
              )}

              <button
                type="button"
                onClick={handleProceedFromStep4}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-4 text-base font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-md active:scale-98"
              >
                {t.btnContinue}
                <ForwardIcon className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 5: Final Review & Send to WhatsApp */}
          {step === 5 && activeCategory && (
            <div className="animate-in fade-in duration-200 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {t.step5Title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {t.step5Subtitle}
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-6 divide-y divide-slate-200/80">
                <div className="py-2.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">{t.summaryService}:</span>
                  <span className="font-bold text-slate-900">{activeCategory.name[language]}</span>
                </div>

                <div className="py-2.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">{t.summaryProblem}:</span>
                  <span className="font-bold text-slate-900 text-end">
                    {[selectedSubOption, customSubOption].filter(Boolean).join(' - ') || t.summaryNotProvided}
                  </span>
                </div>

                <div className="py-2.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">{t.summaryArea}:</span>
                  <span className="font-bold text-slate-900">
                    {selectedArea === 'Diğer / Other' ? (customArea || 'İstanbul') : selectedArea}
                  </span>
                </div>

                <div className="py-2.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">{t.summaryAddress}:</span>
                  <span className="font-bold text-slate-900 text-end max-w-xs truncate">{address}</span>
                </div>

                <div className="py-2.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">{t.summaryName}:</span>
                  <span className="font-bold text-slate-900">{fullName}</span>
                </div>

                <div className="py-2.5 flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">{t.summaryPhone}:</span>
                  <span className="font-bold text-slate-900 ltr-text font-mono">{phone}</span>
                </div>

                {details && (
                  <div className="pt-3 text-sm">
                    <span className="block text-slate-500 font-medium mb-1">{t.summaryDetail}:</span>
                    <p className="bg-white p-3 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {details}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons: Edit & WhatsApp Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="sm:w-1/3 flex items-center justify-center gap-1.5 py-4 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer text-sm"
                >
                  <BackIcon className="h-4 w-4" />
                  {t.btnEdit}
                </button>

                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="sm:w-2/3 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-base shadow-lg hover:shadow-green-500/20 transition-all cursor-pointer active:scale-98"
                >
                  <MessageCircle className="h-5 w-5 fill-white text-[#25D366]" />
                  {t.btnSendWhatsApp}
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Success state */}
          {step === 6 && (
            <div className="animate-in zoom-in-95 duration-300 text-center py-8 max-w-md mx-auto">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-6 shadow-xs">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                {t.successTitle}
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
                {t.successMessage}
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
              >
                <RotateCcw className="h-4 w-4" />
                {t.btnNewRequest}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
