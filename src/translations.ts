import { Language, ServiceRequest } from './types';

export const SOPI_PHONE_NUMBER = "+90 536 599 47 80";
export const SOPI_PHONE_LINK = "tel:+905365994780";
export const SOPI_WHATSAPP_CLEAN_NUMBER = "905365994780";

export const translations = {
  tr: {
    // Header
    brandTagline: "Your Home, Our Job",
    navHome: "Ana Sayfa",
    navServices: "Hizmetler",
    navProblem: "Sorun Seç",
    navContact: "İletişim",
    callNow: "Hemen Ara",

    // Hero
    heroTitle: "Evinizde Bir Sorun mu Var?",
    heroHighlight: "Su, elektrik, gaz, sıcak su ve küçük tadilat işlerinde SOPI yanınızda.",
    heroDescription: "Yılların deneyimiyle evinizde ve iş yerinizde ihtiyaç duyduğunuz teknik servis ve onarım hizmetlerini güvenilir şekilde sunuyoruz.",
    btnViewServices: "Sorununuzu Seçin",
    btnCallNow: "Hemen Ara",

    // Problem Selector
    problemSelectorTitle: "Sorununuzu Seçin",
    problemSelectorSubtitle: "Ne yapılması gerektiğini bilmiyor musunuz? Sorununuzu seçin, SOPI yardımcı olsun.",
    
    // Progress
    step1Progress: "1. Sorun",
    step2Progress: "2. Detay",
    step3Progress: "3. Konum",
    step4Progress: "4. İletişim",

    // Step 1
    step1Title: "Sorununuzu biraz daha anlatın.",
    step1CustomNote: "Diğer / Açıklama",
    step1CustomPlaceholder: "Belirli bir durum varsa yazabilirsiniz...",

    // Step 2
    step2Title: "Sorununuzu kısaca anlatın.",
    step2Placeholder: "Örn. Mutfaktaki priz çalışmıyor.",
    step2PhotoLabel: "Fotoğraf Ekleyin (İsteğe Bağlı)",
    step2PhotoHint: "Fotoğraf seçebilir veya WhatsApp açıldığında doğrudan SOPI'ye de gönderebilirsiniz.",
    step2PhotoSelected: "Fotoğraf seçildi:",
    step2PhotoRemove: "Kaldır",
    step2PhotoSelect: "+ Fotoğraf Seç",
    step2PhotoChange: "Fotoğrafı Değiştir",

    // Step 3
    step3Title: "Hizmet Nerede?",
    step3AreaLabel: "İlçe / Bölge",
    step3AddressLabel: "Adres / Konum Detayı",
    step3AddressPlaceholder: "Örn. Ortaköy Mh. Dereboyu Cd. No: 12",
    step3OtherAreaPlaceholder: "Bölgenizi belirtin...",

    // Step 4
    step4Title: "Size Nasıl Ulaşabiliriz?",
    step4Subtitle: "SOPI ustasının size hızlıca dönüş yapabilmesi için bilgilerinizi girin.",
    step4NameLabel: "Ad Soyad",
    step4NamePlaceholder: "Örn. Ahmet Yılmaz",
    step4PhoneLabel: "Telefon Numaranız",
    step4PhonePlaceholder: "05XX XXX XX XX",

    // Step 5 (Summary)
    step5Title: "Talebinizi Kontrol Edin",
    step5Subtitle: "Aşağıdaki bilgileri kontrol edin ve WhatsApp üzerinden SOPI'ye iletin.",
    summaryService: "Hizmet",
    summaryProblem: "Sorun",
    summaryArea: "Bölge",
    summaryAddress: "Adres",
    summaryName: "Ad Soyad",
    summaryPhone: "Telefon",
    summaryDetail: "Detay",
    summaryNotProvided: "Belirtilmedi",
    btnEdit: "← Düzenle",
    btnSendWhatsApp: "WhatsApp ile Gönder →",

    // Validation
    valSelectProblem: "Lütfen bir sorun seçin.",
    valEnterDetail: "Lütfen sorununuzu kısaca açıklayın.",
    valEnterArea: "Lütfen bir bölge seçin.",
    valEnterAddress: "Lütfen adresinizi veya konum detayını yazın.",
    valEnterName: "Lütfen adınızı ve soyadınızı girin.",
    valEnterPhone: "Lütfen geçerli bir telefon numarası girin.",

    // Success State
    successTitle: "Talebiniz WhatsApp'a Aktarıldı!",
    successMessage: "WhatsApp uygulaması açıldı. Mesajı göndererek SOPI ustası ile hemen görüşmeye başlayabilirsiniz.",
    btnNewRequest: "Yeni bir talep oluştur",

    // Navigation & Common Buttons
    btnBack: "Geri dön",
    btnContinue: "Devam Et",

    // Services Section
    servicesSectionTitle: "Hizmetlerimiz",
    servicesSectionSubtitle: "Ev ve iş yerleriniz için çeşitli teknik servis, onarım ve bakım hizmetleri.",
    servicesSelectThis: "Bu hizmet için talep oluştur",

    // Footer
    footerLocation: "İstanbul · Beşiktaş · Ortaköy",
    footerRights: "Tüm hakları saklıdır.",
    designerCreditPrefix: "✦ Konsept & Tasarım",

    // Designer Modal
    designerRole: "Founder · Concept Creator · Product Designer",
    designerBadge: "Concept & Product Design",
    designerContactEmail: "E-posta",
    designerContactPhone: "Telefon",
    modalClose: "Kapat",

    // WhatsApp Direct Floating
    directWhatsAppMessage: "Merhaba SOPI, bilgi almak istiyorum.",
    directWhatsAppLabel: "WhatsApp ile iletişime geçin",
  },

  fa: {
    // Header
    brandTagline: "Your Home, Our Job",
    navHome: "صفحه اصلی",
    navServices: "خدمات ما",
    navProblem: "انتخاب مشکل",
    navContact: "تماس با ما",
    callNow: "تماس فوری",

    // Hero
    heroTitle: "مشکلی در منزل شما پیش آمده؟",
    heroHighlight: "در امور لوله‌کشی، برق، گاز، آب گرم و تعمیرات جزئی، SOPI همراه شماست.",
    heroDescription: "با سال‌ها تجربه، کلیه خدمات فنی، تاسیساتی و تعمیراتی مورد نیاز در خانه و محل کار شما را با بالاترین کیفیت و اطمینان ارائه می‌دهیم.",
    btnViewServices: "مشاهده خدمات ما",
    btnCallNow: "تماس فوری",

    // Problem Selector
    problemSelectorTitle: "مشکل خود را انتخاب کنید",
    problemSelectorSubtitle: "دقیقاً نمی‌دانید چه اقدامی لازم است؟ مشکل خود را انتخاب کنید تا کارشناسان SOPI به شما کمک کنند.",
    
    // Progress
    step1Progress: "۱. مشکل",
    step2Progress: "۲. جزئیات",
    step3Progress: "۳. موقعیت",
    step4Progress: "۴. اطلاعات تماس",

    // Step 1
    step1Title: "لطفاً نوع مشکل را دقیق‌تر مشخص کنید.",
    step1CustomNote: "توضیح دیگر / مورد خاص",
    step1CustomPlaceholder: "اگر مورد خاصی وجود دارد یادداشت کنید...",

    // Step 2
    step2Title: "مشکل خود را به طور خلاصه شرح دهید.",
    step2Placeholder: "مثال: پریز برق در آشپزخانه کار نمی‌کند و جرقه می‌زند.",
    step2PhotoLabel: "افزودن عکس (اختیاری)",
    step2PhotoHint: "می‌توانید عکس را اینجا ضمیمه کنید یا هنگام باز شدن واتساپ مستقیماً برای SOPI ارسال نمایید.",
    step2PhotoSelected: "عکس انتخاب شد:",
    step2PhotoRemove: "حذف عکس",
    step2PhotoSelect: "+ انتخاب عکس",
    step2PhotoChange: "تغییر عکس",

    // Step 3
    step3Title: "محل ارائه خدمت کجاست؟",
    step3AreaLabel: "منطقه / محله",
    step3AddressLabel: "جزئیات آدرس و موقعیت",
    step3AddressPlaceholder: "مثال: Ortaköy، خیابان Dereboyu پلاک ۱۲",
    step3OtherAreaPlaceholder: "منطقه خود را وارد کنید...",

    // Step 4
    step4Title: "چگونه با شما تماس بگیریم؟",
    step4Subtitle: "برای هماهنگی سریع و پاسخگویی، لطفاً اطلاعات تماس خود را وارد نمایید.",
    step4NameLabel: "نام و نام خانوادگی",
    step4NamePlaceholder: "مثال: احمد رضایی",
    step4PhoneLabel: "شماره تماس شما",
    step4PhonePlaceholder: "05XX XXX XX XX",

    // Step 5 (Summary)
    step5Title: "بررسی و تایید درخواست",
    step5Subtitle: "لطفاً اطلاعات زیر را مرور کرده و با فشردن دکمه، آن را از طریق واتساپ برای SOPI بفرستید.",
    summaryService: "خدمت",
    summaryProblem: "مشکل",
    summaryArea: "منطقه",
    summaryAddress: "آدرس",
    summaryName: "نام و نام خانوادگی",
    summaryPhone: "شماره تماس",
    summaryDetail: "توضیحات",
    summaryNotProvided: "ذکر نشده",
    btnEdit: "← ویرایش اطلاعات",
    btnSendWhatsApp: "ارسال از طریق واتساپ ←",

    // Validation
    valSelectProblem: "لطفاً نوع مشکل را مشخص کنید.",
    valEnterDetail: "لطفاً شرح کوتاهی از مشکل بنویسید.",
    valEnterArea: "لطفاً منطقه را انتخاب نمایید.",
    valEnterAddress: "لطفاً آدرس یا مشخصات موقعیت مکانی را وارد کنید.",
    valEnterName: "لطفاً نام و نام خانوادگی خود را وارد کنید.",
    valEnterPhone: "لطفاً شماره تلفن همراه خود را وارد کنید.",

    // Success State
    successTitle: "درخواست به واتساپ منتقل شد!",
    successMessage: "صفحه چت واتساپ با پیام از پیش تنظیم‌شده باز شد. با ارسال پیام، هماهنگی اعزام تکنسین با شما انجام خواهد شد.",
    btnNewRequest: "ثبت یک درخواست جدید",

    // Navigation & Common Buttons
    btnBack: "بازگشت",
    btnContinue: "ادامه و مرحله بعد",

    // Services Section
    servicesSectionTitle: "خدمات ما",
    servicesSectionSubtitle: "انواع خدمات فنی، نصب، تعمیر و سرویس دوره‌ای برای خانه و محل کار شما.",
    servicesSelectThis: "درخواست این خدمت",

    // Footer
    footerLocation: "İstanbul · Beşiktaş · Ortaköy",
    footerRights: "تمامی حقوق برای SOPI محفوظ است.",
    designerCreditPrefix: "✦ کانسپت و طراحی",

    // Designer Modal
    designerRole: "Founder · Concept Creator · Product Designer",
    designerBadge: "طراحی کانسپت و محصول",
    designerContactEmail: "پست الکترونیک",
    designerContactPhone: "شماره تماس",
    modalClose: "بستن",

    // WhatsApp Direct Floating
    directWhatsAppMessage: "سلام SOPI، میخواهم درباره خدمات شما اطلاعات بگیرم.",
    directWhatsAppLabel: "ارتباط با ما در واتساپ",
  },

  en: {
    // Header
    brandTagline: "Your Home, Our Job",
    navHome: "Home",
    navServices: "Services",
    navProblem: "Request Service",
    navContact: "Contact",
    callNow: "Call Now",

    // Hero
    heroTitle: "Having a Problem in Your Home?",
    heroHighlight: "For plumbing, electrical, gas, hot water, and minor repairs, SOPI is by your side.",
    heroDescription: "Backed by years of hands-on experience, we provide reliable, professional technical repair and maintenance services for your home and office.",
    btnViewServices: "Select Your Issue",
    btnCallNow: "Call Now",

    // Problem Selector
    problemSelectorTitle: "Select Your Problem",
    problemSelectorSubtitle: "Not sure what needs to be done? Select your problem and let SOPI take care of it.",
    
    // Progress
    step1Progress: "1. Problem",
    step2Progress: "2. Details",
    step3Progress: "3. Location",
    step4Progress: "4. Contact",

    // Step 1
    step1Title: "Tell us a bit more about the issue.",
    step1CustomNote: "Other / Extra details",
    step1CustomPlaceholder: "Add any specific context...",

    // Step 2
    step2Title: "Briefly describe your problem.",
    step2Placeholder: "e.g. The kitchen outlet is not working.",
    step2PhotoLabel: "Add Photo (Optional)",
    step2PhotoHint: "Select a photo or attach it directly in WhatsApp once the chat opens.",
    step2PhotoSelected: "Photo selected:",
    step2PhotoRemove: "Remove",
    step2PhotoSelect: "+ Choose Photo",
    step2PhotoChange: "Change Photo",

    // Step 3
    step3Title: "Where is the Service Needed?",
    step3AreaLabel: "District / Area",
    step3AddressLabel: "Address / Location Details",
    step3AddressPlaceholder: "e.g. Ortaköy Mh. Dereboyu Cd. No: 12",
    step3OtherAreaPlaceholder: "Enter your area...",

    // Step 4
    step4Title: "How Can We Reach You?",
    step4Subtitle: "Enter your contact details so the technician can quickly get in touch with you.",
    step4NameLabel: "Full Name",
    step4NamePlaceholder: "e.g. Ahmet Yilmaz",
    step4PhoneLabel: "Phone Number",
    step4PhonePlaceholder: "05XX XXX XX XX",

    // Step 5 (Summary)
    step5Title: "Review Your Request",
    step5Subtitle: "Review the information below and send it directly to SOPI on WhatsApp.",
    summaryService: "Service",
    summaryProblem: "Problem",
    summaryArea: "Area",
    summaryAddress: "Address",
    summaryName: "Name",
    summaryPhone: "Phone",
    summaryDetail: "Details",
    summaryNotProvided: "Not provided",
    btnEdit: "← Edit",
    btnSendWhatsApp: "Send via WhatsApp →",

    // Validation
    valSelectProblem: "Please select a problem.",
    valEnterDetail: "Please describe your issue briefly.",
    valEnterArea: "Please select an area.",
    valEnterAddress: "Please enter your address or location details.",
    valEnterName: "Please enter your full name.",
    valEnterPhone: "Please enter your phone number.",

    // Success State
    successTitle: "Request Sent to WhatsApp!",
    successMessage: "WhatsApp has opened with your pre-filled message. Simply hit send to chat directly with SOPI.",
    btnNewRequest: "Submit another request",

    // Navigation & Common Buttons
    btnBack: "Go back",
    btnContinue: "Continue",

    // Services Section
    servicesSectionTitle: "Our Services",
    servicesSectionSubtitle: "Professional repair, maintenance and installation services for residential and commercial spaces.",
    servicesSelectThis: "Request this service",

    // Footer
    footerLocation: "Istanbul · Beşiktaş · Ortaköy",
    footerRights: "All rights reserved.",
    designerCreditPrefix: "✦ Concept & Design",

    // Designer Modal
    designerRole: "Founder · Concept Creator · Product Designer",
    designerBadge: "Concept & Product Design",
    designerContactEmail: "Email",
    designerContactPhone: "Phone",
    modalClose: "Close",

    // WhatsApp Direct Floating
    directWhatsAppMessage: "Hello SOPI, I would like to get more information about your services.",
    directWhatsAppLabel: "Contact via WhatsApp",
  }
};

export const problemCategories = [
  {
    id: 'su',
    iconName: 'Droplet',
    name: {
      tr: 'Su Problemi',
      fa: 'مشکل آب و لوله‌کشی',
      en: 'Plumbing & Water',
    },
    subOptions: {
      tr: ['Musluk su kaçırıyor', 'Boru patladı / sızdırıyor', 'Su basıncı düşük', 'Su sayacı / vana arızası', 'Diğer'],
      fa: ['چکه کردن یا نشتی شیر آب', 'ترکیدگی یا نشتی لوله', 'افت فشار آب', 'خرابی شیر فلکه یا کنتور', 'سایر'],
      en: ['Leaking faucet', 'Burst or leaking pipe', 'Low water pressure', 'Main valve / meter issue', 'Other'],
    },
    serviceDescription: {
      tr: 'Musluk, boru, kaçak ve çeşitli su tesisatı işleri.',
      fa: 'تعمیر شیرآلات، نشتی لوله‌ها، آب‌بندی و کلیه خدمات تاسیسات آب.',
      en: 'Faucets, pipes, leak repairs, and general plumbing services.',
    }
  },
  {
    id: 'elektrik',
    iconName: 'Zap',
    name: {
      tr: 'Elektrik Problemi',
      fa: 'مشکل برق و روشنایی',
      en: 'Electrical Issue',
    },
    subOptions: {
      tr: ['Priz çalışmıyor', 'Anahtar çalışmıyor', 'Sigorta problemi', 'Elektrik bağlantısı', 'Diğer'],
      fa: ['پریز کار نمیکند', 'کلید روشنایی کار نمی‌کند', 'پریدن یا خرابی فیوز', 'اتصالی و سیم‌کشی', 'سایر'],
      en: ['The electrical outlet is not working', 'Light switch not working', 'Blown fuse / circuit breaker', 'Electrical connection & wiring', 'Other'],
    },
    serviceDescription: {
      tr: 'Priz, anahtar, sigorta ve çeşitli elektrik işleri.',
      fa: 'تعویض پریز، کلید، فیوز، جعبه تقسیم و سیم‌کشی تخصصی برق.',
      en: 'Outlets, switches, fuses, wiring and electrical repairs.',
    }
  },
  {
    id: 'gaz',
    iconName: 'Flame',
    name: {
      tr: 'Gaz Problemi',
      fa: 'مشکل لوله‌کشی گاز',
      en: 'Gas Plumbing Issue',
    },
    subOptions: {
      tr: ['Gaz sızıntısı şüphesi', 'Ocak gaz bağlantısı', 'Gaz vanası arızası', 'Boru montajı / kontrol', 'Diğer'],
      fa: ['مشکوک به نشتی گاز', 'اتصال شلنگ گاز اجاق', 'خرابی شیر گاز', 'بررسی و کنترل ایمنی لوله گاز', 'سایر'],
      en: ['Suspected gas leak', 'Stove gas connection', 'Gas valve issue', 'Pipe inspection and safety check', 'Other'],
    },
    serviceDescription: {
      tr: 'Gaz tesisatıyla ilgili bakım ve onarım işleri.',
      fa: 'بازرسی، اتصال اجاق و فر، رفع نشتی و ایمن‌سازی تاسیسات گاز شهری.',
      en: 'Gas piping maintenance, stove connections and safety inspections.',
    }
  },
  {
    id: 'sofben',
    iconName: 'Thermometer',
    name: {
      tr: 'Şofben / Sıcak Su',
      fa: 'آبگرمکن و پکیج / آب گرم',
      en: 'Water Heater & Hot Water',
    },
    subOptions: {
      tr: ['Çalışmıyor', 'Suyu ısıtmıyor', 'Su sızdırıyor', 'Ses yapıyor', 'Diğer'],
      fa: ['دستگاه کار نمی‌کند', 'آب را گرم نمی‌کند', 'نشتی آب دارد', 'صدای غیرعادی تولید می‌کند', 'سایر'],
      en: ['Not working / turning on', 'Not heating water', 'Water is leaking', 'Making unusual noises', 'Other'],
    },
    serviceDescription: {
      tr: 'Şofben ve sıcak suyla ilgili arıza ve bağlantı işleri.',
      fa: 'تعمیرات آبگرمکن، پکیج، عیب‌یابی دمای آب و اتصالات گرمایشی.',
      en: 'Water heater troubleshooting, temperature repair and connections.',
    }
  },
  {
    id: 'lavabo',
    iconName: 'Waves',
    name: {
      tr: 'Lavabo / Gider',
      fa: 'سینک و لوله فاضلاب',
      en: 'Sink & Drain',
    },
    subOptions: {
      tr: ['Lavabo tıkandı', 'Su yavaş gidiyor', 'Kötü koku var', 'Sifon damlatıyor', 'Diğer'],
      fa: ['گرفتگی لوله سینک', 'آب بسیار کند تخلیه می‌شود', 'بوی نامطبوع از چاه', 'چکه کردن سیفون زیر سینک', 'سایر'],
      en: ['Clogged sink', 'Slow draining water', 'Unpleasant sewer odor', 'Siphon leaking underneath', 'Other'],
    },
    serviceDescription: {
      tr: 'Lavabo, gider ve su tahliye problemleri.',
      fa: 'رفع گرفتگی سینک، تعویض سیفون، رفع بوی بد و اصلاح شیب فاضلاب.',
      en: 'Sink unclogging, siphon replacement, and drainage solutions.',
    }
  },
  {
    id: 'tuvalet',
    iconName: 'Bath',
    name: {
      tr: 'Tuvalet',
      fa: 'سرویس بهداشتی و توالت',
      en: 'Toilet & Bathroom',
    },
    subOptions: {
      tr: ['Tuvalet tıkandı', 'Rezervuar su kaçırıyor', 'Sifon basmıyor', 'Taharet musluğu arızalı', 'Diğer'],
      fa: ['گرفتگی توالت', 'نشتی مداوم آب مخزن (فلاش تانک)', 'خرابی دکمه یا اهرم سیفون', 'خرابی شیر شلنگی و اتصالات', 'سایر'],
      en: ['Clogged toilet', 'Leaking toilet tank / cistern', 'Flush button not working', 'Bidet faucet broken', 'Other'],
    },
    serviceDescription: {
      tr: 'Tuvalet, rezervuar, lavabo ve çeşitli banyo işleri.',
      fa: 'تعمیر فلاش تانک، رفع گرفتگی، تعویض شناور و شیرآلات سرویس.',
      en: 'Toilet repairs, flush tank mechanisms, bidet and bathroom fixtures.',
    }
  },
  {
    id: 'montaj',
    iconName: 'Wrench',
    name: {
      tr: 'Montaj',
      fa: 'نصب و سرهم‌بندی',
      en: 'Assembly & Installation',
    },
    subOptions: {
      tr: ['Avize / aydınlatma montajı', 'Mobilya / dolap kurulumu', 'Banyo / mutfak aksesuarları', 'TV duvar aparatı', 'Diğer'],
      fa: ['نصب لوستر و چراغ', 'اسمبل و سرهم‌بندی کمد و مبلمان', 'نصب تجهیزات حمام و آشپزخانه', 'نصب تلویزیون روی دیوار', 'سایر'],
      en: ['Chandelier / light fixture mount', 'Furniture / cabinet assembly', 'Kitchen & bath accessories', 'TV wall mount installation', 'Other'],
    },
    serviceDescription: {
      tr: 'Çeşitli montaj ve kurulum işleri.',
      fa: 'نصب کلیه وسایل منزل، لوستر، شلف، رولپلاک و براکت تلویزیون.',
      en: 'General household assembly, shelves, light fixtures and TV mounting.',
    }
  },
  {
    id: 'delme',
    iconName: 'Drill',
    name: {
      tr: 'Delme / Sondaj',
      fa: 'سوراخ‌کاری و بتن',
      en: 'Drilling & Penetration',
    },
    subOptions: {
      tr: ['Duvara delik açma (tablo/raf)', 'Beton delme', 'Kablo kanalı geçişi', 'Mermer / fayans delme', 'Diğer'],
      fa: ['سوراخ‌کاری دیوار (برای تابلو و شلف)', 'سوراخ‌کاری بتن و سازه سخت', 'ایجاد معبر کابل و لوله', 'سوراخ‌کاری سرامیک و سنگ بدون ترک', 'سایر'],
      en: ['Wall drilling for art/shelves', 'Concrete surface drilling', 'Cable or pipe passage holes', 'Tile / marble drilling', 'Other'],
    },
    serviceDescription: {
      tr: 'Duvar, beton ve farklı yüzeylerde delme işleri.',
      fa: 'سوراخ‌کاری دقیق دیوار، ستون بتنی، سرامیک با دستگاه‌های حرفه‌ای.',
      en: 'Precision drilling on concrete, tile, stone, and brick walls.',
    }
  },
  {
    id: 'tadilat',
    iconName: 'Hammer',
    name: {
      tr: 'Küçük Tadilat',
      fa: 'تعمیرات و نوسازی جزئی',
      en: 'Minor Repairs & Handyman',
    },
    subOptions: {
      tr: ['Fayans tamiri / derz dolgu', 'Küçük boya / alçı onarımı', 'Kapı / pencere kol ve kilit', 'Silikon çekme', 'Diğer'],
      fa: ['ترمیم یا بندکشی کاشی و درزها', 'لکه گیری رنگ و گچ ترک‌خورده', 'تعمیر دستگیره و قفل در/پنجره', 'سیلیکون کاری و آب‌بندی لبه‌ها', 'سایر'],
      en: ['Tile repair / grouting', 'Small paint & plaster patch-up', 'Door / window latch & handles', 'Silicone caulking', 'Other'],
    },
    serviceDescription: {
      tr: 'Çeşitli küçük onarım ve tadilat işleri.',
      fa: 'تعمیرات فوری خانگی، بندکشی، لکه‌گیری، چفت‌وبست و رگلاژ درب‌ها.',
      en: 'Quick fixes, caulking, grout touch-ups, latch alignments.',
    }
  },
  {
    id: 'diger',
    iconName: 'HelpCircle',
    name: {
      tr: 'Diğer',
      fa: 'سایر موارد فنی',
      en: 'Other Technical Services',
    },
    subOptions: {
      tr: ['Acil teknik arıza durumu', 'Genel keşif ve kontrol', 'Kapsamlı bakım talebi', 'Farklı bir problem'],
      fa: ['مورد اضطراری فنی', 'بازدید و کارشناسی اولیه', 'سرویس کلی و دوره‌ای', 'مشکل دیگر'],
      en: ['Urgent technical issue', 'General inspection / assessment', 'Comprehensive maintenance', 'Other custom request'],
    },
    serviceDescription: {
      tr: 'Yukarıdaki kategorilere girmeyen işler için SOPI\'ye danışabilirsiniz.',
      fa: 'برای هرگونه خدمات یا مشکل فنی که در لیست بالا نیست با ما تماس بگیرید.',
      en: 'Feel free to consult SOPI for any technical jobs not listed above.',
    }
  },
];

export const suggestedAreas = [
  'Ortaköy',
  'Beşiktaş',
  'Kurtköy',
  'Diğer / Other'
];

/**
 * Generates formatted WhatsApp message strictly matching user requirements per language
 */
export function generateWhatsAppMessage(request: ServiceRequest): string {
  const { language, service, problem, description, area, address, name, phone } = request;

  if (language === 'fa') {
    return `سلام SOPI،

برای دریافت خدمات درخواست دارم.

خدمت:
${service}

مشکل:
${problem}

منطقه:
${area}

آدرس:
${address || 'ثبت نشده'}

نام:
${name}

شماره تماس:
${phone}

توضیحات:
${description || 'توضیحات بیشتری ثبت نشده است.'}`;
  }

  if (language === 'en') {
    return `Hello SOPI,

I would like to request a service.

Service:
${service}

Problem:
${problem}

Area:
${area}

Address:
${address || 'Not specified'}

Name:
${name}

Phone:
${phone}

Details:
${description || 'No additional details provided.'}`;
  }

  // Default: Turkish
  return `Merhaba SOPI,

Hizmet talebim var.

Hizmet: ${service}
Sorun: ${problem}
Bölge: ${area}
Adres: ${address || 'Belirtilmedi'}
Ad Soyad: ${name}
Telefon: ${phone}

Detay:
${description || 'Ek detay belirtilmedi.'}

Teşekkürler.`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SOPI_WHATSAPP_CLEAN_NUMBER}?text=${encodeURIComponent(message)}`;
}
