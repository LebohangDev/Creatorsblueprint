import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      creatorStories: 'Creator Stories',
      features: 'Features',
      howItWorks: 'How It Works',
      logIn: 'Log In',
      startFreeTrial: 'Start Free Trial',
    },
    hero: {
      badge: 'GCC CREATOR OS',
      titlePart1: 'The ',
      titleHighlight: 'link in bio',
      titlePart2: ' for your creator business',
      title: 'The link in bio for your creator business',
      subtitle: 'Build your creator store, package ebooks, and accept 0% fee payouts.',
      cta: 'Start Building for Free',
      trialNote: '7-day free trial · $0 today',
      totalRevenue: 'TOTAL REVENUE',
      thisMonth: '+34% this mo',
      successfulSales: '142 successful sales',
    },
    spotlight: {
      title: 'Built by creators, for creators',
      subtitle: 'See live creator stores generating real revenue across the GCC.',
      followers: 'Followers',
    },
    features: {
      title: 'Your creator stack, simplified',
      subtitle: 'Replace 6+ separate monthly tools with 1 platform built for GCC creators.',
      receiptTag: 'SEPARATE SUBSCRIPTIONS BILL',
      receiptTitle: '5 Separate Monthly Tools',
      estTotal: "WHAT YOU'LL SPEND OTHERWISE",
      estAmount: '$103 / month',
      annualNote: '($1,236+ per year in separate bills)',
      vsText: 'VS',
      savePill: 'Save $700+/yr',
      cbTitle: 'Creators Blueprint',
      cbFamily: 'Join Creators Blueprint Family',
      cbSubtext: 'Everything your creator business needs in 1 place.',
      zeroFeeBadge: '0% Commission',
      allInOnePill: '1 Simple Account · 0 Disconnected Apps',
      tools: {
        linkInBio: 'Link in Bio Storefront',
        ebooks: 'Instant Ebook PDF Builder',
        stripe: 'Direct Stripe Payouts (0%)',
        delivery: 'Automated Email Delivery',
        affiliate: 'Live Affiliate System',
        bookings: 'Content & Booking Hub',
      },
      badges: {
        included: 'Included',
        zeroFee: '0% Fee',
        instant: 'Instant',
        liveAffiliate: 'Live 35%',
      }
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'Launch your store and start selling in 3 simple steps.',
      step1Title: 'Claim your link',
      step1Desc: 'Pick your username.',
      step2Title: 'Add what you sell',
      step2Desc: 'Ebooks & guides.',
      step3Title: 'Share & sell',
      step3Desc: 'Put the link in your bio.',
      easyLabel: "Yeah, we know... it's that easy.",
      cta: 'Start Building for Free',
    },
    trustStrip: [
      { icon: 'ri-links-line', text: 'The #1 link in bio for creator businesses' },
      { icon: 'ri-shield-check-fill', text: 'Secure payments through Stripe (0% fee)' },
      { icon: 'ri-flashlight-fill', text: 'Launch in under 5 minutes' },
      { icon: 'ri-earth-line', text: 'Built for GCC & Global Creators' },
      { icon: 'ri-code-s-slash-line', text: 'No coding required' }
    ],
    reviews: {
      title: 'See what GCC creators are saying',
      subtitle: 'Real results from real creators building their business with Creators Blueprint.',
      viewReel: 'View Instagram Reel',
      showMore: 'Show more reviews',
      showLess: 'Show less',
      items: {
        hajira: '800+ playlist sales later, I couldn\'t love @creatorsblueprint more! It took me 5 minutes to set up my creator store. ✨',
        sena: 'I created an ebook all about my experiences in Dubai in literally 10 minutes! @creatorsblueprint is amazing. 💖',
        caroline: 'Hosting and selling my 2 ebooks about my surgeries and modeling has been a game changer! @creatorsblueprint makes it so easy. ✨',
        rena: 'I went from having no online presence to having my own creator store live in one afternoon. @creatorsblueprint made it so simple! ✨',
        oyeyinka: 'As a UGC creator in Dubai, I needed something that actually works here. @creatorsblueprint lets me manage my links and get paid seamlessly! 🙌'
      }
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know about starting your trial.',
      items: [
        {
          q: 'What is Creators Blueprint?',
          a: 'Creators Blueprint is the creator operating system designed specifically for GCC creators. It gives you a single place to launch a custom creator store, create digital products, process payments, and manage your creator business.'
        },
        {
          q: 'How does the 7-day free trial work?',
          a: 'You get full access to all features for 7 days. You won’t be charged today. If you choose to stay, billing starts automatically after your trial.'
        },
        {
          q: 'Can I cancel anytime during the trial?',
          a: 'Yes. You can cancel with one click from your account dashboard anytime during or after your trial without being charged.'
        },
        {
          q: 'How do payments work?',
          a: 'We connect directly to Stripe. When customers buy your digital products or services, money goes straight to your bank account with 0% platform commission.'
        },
        {
          q: 'How are digital products delivered to buyers?',
          a: 'Once a customer completes checkout on your creator store, your PDF guide, ebook, or digital asset is emailed to them instantly and automatically.'
        },
        {
          q: 'Is Creators Blueprint only for GCC creators?',
          a: 'While our platform features regional Arab creator optimization and GCC currency handling, creators worldwide can use Creators Blueprint to launch their creator store.'
        }
      ]
    },
    footer: {
      tagline: 'The creator operating system built for GCC creators. Turn your audience into a high-margin digital business.',
      seo: 'Empowering GCC creators across UAE, KSA, Qatar, Kuwait, Bahrain, and Oman with custom creator stores, digital product pipelines, and Stripe payments.',
      product: 'Product',
      creators: 'Creators',
      legal: 'Legal & Trust',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Contact Support',
      rights: 'All rights reserved.',
    }
  },
  ar: {
    nav: {
      creatorStories: 'قصص النجاح',
      features: 'المميزات',
      howItWorks: 'كيف تعمل المنصة',
      logIn: 'تسجيل الدخول',
      startFreeTrial: 'ابدأ التجربة المجانية',
    },
    hero: {
      badge: 'نظام تشغيل منشئي المحتوى في الخليج',
      titlePart1: 'منصة الـ ',
      titleHighlight: 'رابط في البايو',
      titlePart2: ' لمشروعك الرقمي',
      title: 'منصة الرابط في البايو لمشروعك الرقمي',
      subtitle: 'أنشئ متجرك الخاص، اصنع كتبك الرقمية، واستلم أرباحك بعمولة 0%.',
      cta: 'ابدأ البناء مجاناً',
      trialNote: 'تجربة مجانية لمدة 7 أيام · $0 اليوم',
      totalRevenue: 'إجمالي الإيرادات',
      thisMonth: '+34% هذا الشهر',
      successfulSales: '142 عملية بيع ناجحة',
    },
    spotlight: {
      title: 'صُمم بواسطة منشئي محتوى، لمنشئي المحتوى',
      subtitle: 'شاهد متاجر حية لمنشئي محتوى يحققون مبيعات حقيقية في الخليج.',
      followers: 'متابع',
    },
    features: {
      title: 'منصة واحدة تجمع كل ما تحتاجه',
      subtitle: 'استبدل أكثر من 5 أدوات منفصلة بـ منصة واحدة مخصصة لمنشئي المحتوى.',
      receiptTag: 'فاتورة الاشتراكات الشهرية المنفصلة',
      receiptTitle: '5 أدوات منفصلة ومكلفة',
      estTotal: 'ما ستنفقه بدون المنصة',
      estAmount: '$103 / شهرياً',
      annualNote: '(أكثر من $1,236 سنوياً في فواتير منفصلة)',
      vsText: 'مقابل',
      savePill: 'وفّر أكثر من $700 سنوياً',
      cbTitle: 'كريتؤرز بلوبراينت',
      cbFamily: 'انضم لـ عائلة كريتؤرز بلوبراينت',
      cbSubtext: 'كل ما يحتاجه مشروعك في مكان واحد.',
      zeroFeeBadge: 'عمولة 0%',
      allInOnePill: 'حساب واحد بسيط · بدون أدوات متشتتة',
      tools: {
        linkInBio: 'متجر الروابط الخاص بك',
        ebooks: 'صانع الكتب والملفات الرقمية',
        stripe: 'عوايد مباشرة عبر سترايب (0%)',
        delivery: 'تسليم تلقائي عبر الإيميل',
        affiliate: 'نظام التسويق بالعمولة',
        bookings: 'منصة المواعيد والحجوزات',
      },
      badges: {
        included: 'مشمول',
        zeroFee: 'عمولة 0%',
        instant: 'فوري',
        liveAffiliate: 'عمولة 35%',
      }
    },
    howItWorks: {
      title: 'كيف تعمل المنصة',
      subtitle: 'أطلق متجرك وابدأ البيع في 3 خطوات بسيطة.',
      step1Title: 'احجز رابطك',
      step1Desc: 'اختر اسم المستخدم الخاص بك.',
      step2Title: 'أضف منتجاتك',
      step2Desc: 'الكتب الرقمية والدلائل.',
      step3Title: 'انشر وابدأ البيع',
      step3Desc: 'ضع الرابط في البايو الخاص بك.',
      easyLabel: 'نعم... الأمر بهذه البساطة.',
      cta: 'ابدأ البناء مجاناً',
    },
    trustStrip: [
      { icon: 'ri-links-line', text: 'المنصة الأولى للروابط والمتاجر الرقمية' },
      { icon: 'ri-shield-check-fill', text: 'مدفوعات آمنة عبر سترايب (بعمولة 0%)' },
      { icon: 'ri-flashlight-fill', text: 'انطلق وأطلق متجرك في أقل من 5 دقائق' },
      { icon: 'ri-earth-line', text: 'صُمم لمنشئي المحتوى في الخليج والعالم' },
      { icon: 'ri-code-s-slash-line', text: 'بدون الحاجة لخبرة برمجة' }
    ],
    reviews: {
      title: 'ماذا يقول منشئو المحتوى عن المنصة',
      subtitle: 'نتائج حقيقية لمنشئي محتوى يطورون أعمالهم مع كريتؤرز بلوبراينت.',
      viewReel: 'مشاهدة فيديو إنستغرام',
      showMore: 'عرض المزيد من التقييمات',
      showLess: 'عرض أقل',
      items: {
        hajira: 'بعد أكثر من 800 مبيعة لقوائم التشغيل، أنشأت متجري في 5 دقائق فقط عبر @creatorsblueprint! ✨',
        sena: 'أنشأت كتابي الرقمي حول تجاربي في دبي في 10 دقائق فقط! المنصة رائعة حقاً. 💖',
        caroline: 'نشر وبيع كتابيّ الرقميين حول العمليات عروض الأزياء كان تحولاً جذرياً! المنصة تسهل كل شيء. ✨',
        rena: 'انتقلت من عدم وجود متجر إلى إطلاق متجري بالكامل في ظهيرة يوم واحد! تجربة سهلة جداً. ✨',
        oyeyinka: 'كصانع محتوى UGC في دبي، كنت بحاجة لمنصة تعمل بسلاسة في الخليج. تمكنني المنصة من إدارة روابطي واستلام مدفوعاتي بسهولة! 🙌'
      }
    },
    faq: {
      title: 'الأسئلة الشائعة',
      subtitle: 'كل ما تحتاج معرفته لبدء تجربتك المجانية.',
      items: [
        {
          q: 'ما هي منصة كريتؤرز بلوبراينت؟',
          a: 'كريتؤرز بلوبراينت هي منصة تشغيل منشئي المحتوى المصممة خصيصاً في الخليج. تمنحك مكاناً واحداً لإطلاق متجرك الرقمي، إنشاء الكتب والملفات، معالجة المدفوعات، وإدارة عملك بالكامل.'
        },
        {
          q: 'كيف تعمل التجربة المجانية لمدة 7 أيام؟',
          a: 'تحصل على وصول كامل لجميع المميزات لمدة 7 أيام مجاناً. لن يتم خصم أي مبلغ اليوم. إذا اخترت الاستمرار، يبدأ الاشتراك تلقائياً بعد انتهاء التجربة.'
        },
        {
          q: 'هل يمكنني الإلغاء في أي وقت أثناء التجربة؟',
          a: 'نعم. يمكنك الإلغاء بنقرة واحدة من لوحة تحكم حسابك في أي وقت خلال التجربة المجانية دون أي رسوم.'
        },
        {
          q: 'كيف تعمل المدفوعات واستلام الأموال؟',
          a: 'نربط متجرك مباشرة بـ سترايب (Stripe). عندما يشتري العملاء منتجاتك الرقمية أو خدماتك، تذهب الأموال مباشرة إلى حسابك البنكي بعمولة 0%.'
        },
        {
          q: 'كيف يتم تسليم المنتجات الرقمية للمشترين؟',
          a: 'بمجرد إتمام الدفع في متجرك، يتم إرسال ملف الـ PDF أو الكتاب الرقمي إلى البريد الإلكتروني للمشتري فوراً وتلقائياً.'
        },
        {
          q: 'هل المنصة حصرياً لمنشئي المحتوى في الخليج؟',
          a: 'بينما تتميز منصتنا بدعم عملات الخليج واللغات المحلية، يمكن لمنشئي المحتوى من جميع أنحاء العالم استخدام المنصة لإطلاق متاجرهم.'
        }
      ]
    },
    footer: {
      tagline: 'منصة التشغيل الأولى لمنشئي المحتوى في الخليج. حوّل جمهورك إلى مشروع رقمي مربح.',
      seo: 'تمكين منشئي المحتوى في الإمارات، السعودية، قطر، الكويت، البحرين، وعُمان بمتاجر رقمية مخصصة، وبيع الكتب، ومدفوعات مباشرة عبر سترايب.',
      product: 'المنتج',
      creators: 'منشئو المحتوى',
      legal: 'الشروط والأمان',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      support: 'الدعم الفني',
      rights: 'جميع الحقوق محفوظة.',
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
