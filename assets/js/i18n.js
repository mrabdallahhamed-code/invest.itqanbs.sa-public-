// ============================================================
// نظام الترجمة المشترك — إتقان لخدمات الأعمال
// يدعم حالياً: العربية (ar) والإنجليزية (en)
// مصمم ليتوسع لاحقاً للصينية والهندية/الأردية بإضافة قواميس جديدة فقط
// ============================================================

const I18N = {
  ar: {
    // ---------- شريط التنقل ----------
    nav_about: 'عن الشركة', nav_services: 'خدماتنا', nav_paths: 'ابدأ الآن', nav_contact: 'تواصل معنا',
    nav_login: 'تسجيل الدخول', nav_register: 'إنشاء حساب',

    // ---------- Hero ----------
    hero_title: 'أسّس شركتك في السعودية بثقة تامة',
    hero_p: 'إتقان لخدمات الأعمال شركة متخصصة في تقديم حلول متكاملة للمستثمرين الأجانب الراغبين بدخول السوق السعودي، تجمع بين الخبرة والمعرفة الدقيقة ببيئة الأعمال المحلية، وتخدم عملاءها عبر فريق متخصص حاضر في 14 دولة حول العالم.',
    hero_btn_start: 'ابدأ الآن', hero_btn_services: 'تعرّف على الخدمات',
    stat_investors: 'مستثمر أجنبي', stat_ownership: 'ملكية أجنبية كاملة', stat_countries: 'دولة حول العالم', stat_days: 'يوماً للتأسيس',

    // ---------- عن إتقان ----------
    about_eyebrow: 'عن إتقان', about_title: 'وسيط موثوق بينك وبين التأسيس',
    about_p: 'من التحقق من مستنداتك إلى توقيع عقد شركتك — نرافقك في كل خطوة عبر منصة رقمية تجمع بين السرعة والشفافية، وفريق متخصص يتابع ملفك لحظة بلحظة حتى تصل لعقد تأسيس شركتك بثقة تامة.',

    // ---------- فرصة استثمارية ----------
    invest_eyebrow: 'فرصة استثمارية', invest_title: 'استثمر بذكاء، استثمر الآن',
    invest_p: 'السوق السعودي يفتح أبوابه للمستثمرين الأجانب بثقة غير مسبوقة — ملكية كاملة، إجراءات مبسّطة، وفرص نمو حقيقية بمختلف القطاعات. إتقان تختصر عليك الطريق من الفكرة إلى عقد التأسيس.',

    // ---------- خدماتنا ----------
    services_eyebrow: 'خدماتنا', services_title: 'اضغط على أي خدمة لمعرفة التفاصيل',
    svc1_title: 'رخصة الاستثمار الأجنبي (MISA)',
    svc1_p: 'نستحصل نيابة عنك على رخصة الاستثمار من وزارة الاستثمار السعودية بأسرع وقت وأقل تعقيد.',
    svc1_li1: 'تقييم أهلية المستثمر والقطاع', svc1_li2: 'إعداد وتقديم الملف كاملاً',
    svc1_li3: 'تواصل مباشر مع الجهات الرسمية', svc1_li4: 'متابعة حتى صدور الرخصة',
    svc2_title: 'تأسيس شركة سعودية',
    svc2_p: 'كيان قانوني سعودي بملكية أجنبية كاملة (100%)، بدون شريك محلي، من التسجيل حتى فتح الحساب البنكي.',
    svc2_li1: 'تسجيل في وزارة التجارة', svc2_li2: 'استخراج السجل التجاري وعقد التأسيس',
    svc2_li3: 'فتح الملفات الحكومية', svc2_li4: 'فتح الحساب البنكي',
    svc3_title: 'الاستحواذ على شركات خارجية',
    svc3_p: 'فريقنا في 14 دولة حول العالم يساعدك على الاستحواذ على شركة متوافقة مع اشتراطات الترخيص.',
    svc3_li1: 'الاستحواذ على شركة ملائمة لشروط الترخيص', svc3_li2: 'إنهاء إجراءات نقل الملكية',
    svc3_li3: 'تصديق المستندات الجديدة', svc3_li4: 'شحن الأوراق للمملكة',
    svc4_title: 'خدمات الدعم',
    svc4_p: 'نرافقك في إدارة أعمالك بعد التأسيس عبر أربعة محاور رئيسية:',
    svc4_li1: '<strong>موارد بشرية:</strong> توظيف وعقود وإدارة منصات حكومية',
    svc4_li2: '<strong>حسابات عامة:</strong> مسك دفاتر، إعداد القوائم المالية، والإقرارات الضريبية وفق الأنظمة السعودية',
    svc4_li3: '<strong>تسويق رقمي:</strong> إدارة حسابات التواصل الاجتماعي، تحسين محركات البحث، وحملات إعلانية تناسب السوق المحلي',
    svc4_li4: '<strong>إدارة وتشغيل وحوكمة:</strong> بناء الهيكل التنظيمي، السياسات الداخلية، ولوائح الحوكمة المتوافقة مع الأنظمة السعودية',

    // ---------- لماذا الآن ----------
    why_eyebrow: 'لماذا الآن', why_title: 'لماذا الاستثمار في السعودية الآن؟', why_sub: 'اضغط على أي بطاقة لمعرفة التفاصيل',
    why1_title: 'اقتصاد متسارع النمو', why1_p: 'ناتج محلي يتجاوز 1.1 تريليون دولار، وخطط توسع ضخمة ضمن رؤية 2030 بمختلف القطاعات.',
    why2_title: 'انفتاح تنظيمي غير مسبوق', why2_p: 'ملكية أجنبية كاملة 100% بمعظم القطاعات، بإجراءات مبسّطة عبر منصات حكومية رقمية.',
    why3_title: 'موقع استراتيجي', why3_p: 'بوابة لأسواق الخليج والشرق الأوسط، بقربها من ثلاث قارات وشبكة طرق ومطارات متطورة.',
    why4_title: 'حوافز استثمارية', why4_p: 'إعفاءات ضريبية بمناطق معينة، تمويل حكومي لمشاريع محددة، ودعم مباشر من صناديق التنمية.',

    // ---------- استثمر باقتصاد يتوسع بثقة ----------
    kingdom_title: 'استثمر في اقتصاد يتوسع بثقة',
    kingdom_p: 'ضمن رؤية المملكة 2030، أصبح بإمكان المستثمر الأجنبي تأسيس شركته بنسبة تملك 100% في عدد واسع من القطاعات، وسط اقتصاد يتجاوز ناتجه المحلي 1.1 تريليون دولار وبيئة أعمال تتطور بخطى متسارعة.',

    // ---------- ابدأ الآن (عميل) ----------
    paths_eyebrow: 'ابدأ الآن', paths_title: 'هل أنت مستثمر يبحث عن التأسيس؟',
    client_existing_title: 'عميل حالي', client_existing_p: 'لديك حساب مسبق؟', client_existing_btn: 'تسجيل الدخول',
    client_new_title: 'عميل جديد', client_new_p: 'ابدأ رحلة استثمارك الآن', client_new_btn: 'إنشاء حساب',

    // ---------- كن شريكاً لنا ----------
    partner_eyebrow: 'كن شريكاً لنا', partner_title: 'هل أنت مقدّم خدمة تأسيس شركات؟',
    provider_existing_title: 'مقدّم خدمة حالي', provider_existing_p: 'سجّل دخولك للاطلاع على الطلبات', provider_existing_btn: 'تسجيل الدخول',
    provider_new_title: 'مقدّم خدمة جديد', provider_new_p: 'انضم كشريك معتمد لدى إتقان', provider_new_btn: 'انضمام كشريك',

    // ---------- تواصل معنا ----------
    contact_eyebrow: 'تواصل معنا', contact_title: 'فريقنا جاهز للإجابة على استفساراتك',
    contact_whatsapp: 'واتساب', contact_location: 'الرياض، السعودية',

    footer_text: '© إتقان لخدمات الأعمال — Itqan Business Services',

    // ---------- الصفحة الرئيسية: البوابة الذكية ----------
    gw_eyebrow: 'منصة إتقان الرقمية',
    gw_title: 'منصة إتقان لإدارة رحلة تأسيس واستثمار شركتك في السعودية',
    gw_sub: 'قيّم جاهزيتك، اطلب عروض أسعار، وقّع عقودك إلكترونياً، وتابع كل خطوة من تأسيس شركتك — كله من مكان واحد.',
    gw_cta_main: 'ابدأ بتقييم جاهزيتك', gw_cta_secondary: 'لدي حساب بالفعل',
    gw_func_label: 'داخل المنصة', gw_func_title: 'وش تقدر تسوي بعد ما تدخل؟',
    gw_func1_h: 'بوصلة الجاهزية', gw_func1_p: 'تقييم سريع يحدد مسارك الصحيح خطوة بخطوة',
    gw_func2_h: 'طلب الخدمات', gw_func2_p: 'اطلب عرض سعر لتأسيس شركتك بضغطة زر',
    gw_func3_h: 'العروض', gw_func3_p: 'راجع العرض التفصيلي وتواصل مباشرة قبل القبول',
    gw_func4_h: 'التوقيع والعقود', gw_func4_p: 'وقّع عقدك إلكترونياً بخط يدك، بدون ورق',
    gw_func5_h: 'متابعة الطلبات', gw_func5_p: 'تابع كل مرحلة لحظة بلحظة من لوحتك الخاصة',
    gw_func6_h: 'ملفاتك ومستنداتك', gw_func6_p: 'كل مستنداتك محفوظة وآمنة بمكان واحد',
    gw_journey_label: 'رحلتك', gw_journey_title: 'من التقييم إلى التنفيذ، بخطوات واضحة',
    gw_j1: 'تقييم الجاهزية', gw_j2: 'تحديد المسار', gw_j3: 'طلب الخدمة', gw_j4: 'العرض', gw_j5: 'التوقيع', gw_j6: 'العقد', gw_j7: 'متابعة التنفيذ',
    gw_trust1: 'توقيع إلكتروني معتمد', gw_trust2: 'حفظ آمن للمستندات', gw_trust3: 'سرية تامة لبياناتك', gw_trust4: 'تتبع لحظي لكل طلب',
    gw_paths_label: 'ابدأ الآن', gw_paths_title: 'اختر وضعك الحالي',
    gw_new_h: 'عميل جديد', gw_new_p: 'ابدأ بتقييم جاهزيتك مجاناً — يستغرق دقيقتين',
    gw_existing_h: 'عميل حالي', gw_existing_p: 'تابع طلباتك وعروضك من لوحتك',
    gw_learn_more: 'تعرّف على إتقان وخدماتنا ←',

    // ---------- تسجيل الدخول / إنشاء حساب ----------
    login_title: 'تسجيل الدخول', login_email: 'البريد الإلكتروني', login_password: 'كلمة المرور',
    login_btn: 'دخول', login_no_account: 'ليس لديك حساب؟', login_register_link: 'إنشاء حساب جديد',
    register_title: 'إنشاء حساب', register_role: 'نوع الحساب', register_role_client: 'عميل (مستثمر)', register_role_provider: 'مقدّم خدمة',
    register_fullname: 'الاسم الكامل', register_email: 'البريد الإلكتروني', register_phone: 'رقم الجوال (مع رمز الدولة)',
    register_preferred_contact: 'الوسيلة المفضلة للتواصل', register_contact_email: 'البريد الإلكتروني', register_contact_whatsapp: 'واتساب',
    register_password: 'كلمة المرور', register_btn: 'إنشاء الحساب', register_have_account: 'لديك حساب بالفعل؟', register_login_link: 'تسجيل الدخول',
  },

  en: {
    nav_about: 'About', nav_services: 'Services', nav_paths: 'Get Started', nav_contact: 'Contact',
    nav_login: 'Log In', nav_register: 'Sign Up',

    hero_title: 'Establish Your Company in Saudi Arabia with Full Confidence',
    hero_p: 'Itqan Business Services is a specialized firm delivering end-to-end solutions for foreign investors entering the Saudi market, combining deep local expertise with a dedicated team present in 14 countries worldwide.',
    hero_btn_start: 'Get Started', hero_btn_services: 'Explore Services',
    stat_investors: 'Foreign investors', stat_ownership: 'Full foreign ownership', stat_countries: 'Countries worldwide', stat_days: 'Days to incorporate',

    about_eyebrow: 'About Itqan', about_title: 'Your Trusted Partner from Start to Incorporation',
    about_p: 'From document verification to signing your incorporation contract — we guide you through every step via a digital platform built on speed and transparency, with a dedicated team tracking your file in real time until your company is officially incorporated.',

    invest_eyebrow: 'Investment Opportunity', invest_title: 'Invest Smart, Invest Now',
    invest_p: 'The Saudi market is opening its doors to foreign investors with unprecedented confidence — full ownership, streamlined procedures, and genuine growth opportunities across sectors. Itqan shortens the distance between your idea and your incorporation contract.',

    services_eyebrow: 'Our Services', services_title: 'Click any service to see the details',
    svc1_title: 'Foreign Investment License (MISA)',
    svc1_p: 'We obtain your investment license from the Saudi Ministry of Investment on your behalf, as quickly and smoothly as possible.',
    svc1_li1: 'Investor and sector eligibility assessment', svc1_li2: 'Full file preparation and submission',
    svc1_li3: 'Direct liaison with government entities', svc1_li4: 'Follow-up until license issuance',
    svc2_title: 'Saudi Company Incorporation',
    svc2_p: 'A Saudi legal entity with 100% foreign ownership — no local partner required — from registration to opening your bank account.',
    svc2_li1: 'Ministry of Commerce registration', svc2_li2: 'Commercial registration and Articles of Association',
    svc2_li3: 'Government file setup', svc2_li4: 'Bank account opening',
    svc3_title: 'Acquiring Foreign Companies',
    svc3_p: 'Our team across 14 countries helps you acquire a company that meets licensing requirements.',
    svc3_li1: 'Acquiring a company that meets licensing conditions', svc3_li2: 'Completing ownership transfer procedures',
    svc3_li3: 'Certifying the new documents', svc3_li4: 'Shipping documents to the Kingdom',
    svc4_title: 'Support Services',
    svc4_p: 'We support your business operations after incorporation across four key pillars:',
    svc4_li1: '<strong>HR:</strong> Recruitment, contracts, and government platform management',
    svc4_li2: '<strong>Accounting:</strong> Bookkeeping, financial statements, and tax filings per Saudi regulations',
    svc4_li3: '<strong>Digital Marketing:</strong> Social media management, SEO, and locally-tailored ad campaigns',
    svc4_li4: '<strong>Management, Operations & Governance:</strong> Organizational structure, internal policies, and compliance frameworks',

    why_eyebrow: 'Why Now', why_title: 'Why Invest in Saudi Arabia Now?', why_sub: 'Click any card to see the details',
    why1_title: 'A Fast-Growing Economy', why1_p: 'A GDP exceeding $1.1 trillion, with massive expansion plans across sectors under Vision 2030.',
    why2_title: 'Unprecedented Regulatory Openness', why2_p: '100% full foreign ownership in most sectors, with streamlined procedures via digital government platforms.',
    why3_title: 'Strategic Location', why3_p: 'A gateway to Gulf and Middle Eastern markets, near three continents with advanced road and airport networks.',
    why4_title: 'Investment Incentives', why4_p: 'Tax exemptions in select zones, government funding for specific projects, and direct support from development funds.',

    kingdom_title: 'Invest in an Economy Expanding with Confidence',
    kingdom_p: 'Under Saudi Vision 2030, foreign investors can now establish companies with 100% ownership across a wide range of sectors, within an economy exceeding $1.1 trillion in GDP and a rapidly evolving business environment.',

    paths_eyebrow: 'Get Started', paths_title: 'Are you an investor looking to incorporate?',
    client_existing_title: 'Existing Client', client_existing_p: 'Already have an account?', client_existing_btn: 'Log In',
    client_new_title: 'New Client', client_new_p: 'Start your investment journey now', client_new_btn: 'Sign Up',

    partner_eyebrow: 'Become Our Partner', partner_title: 'Are you a company-incorporation service provider?',
    provider_existing_title: 'Existing Provider', provider_existing_p: 'Log in to view available requests', provider_existing_btn: 'Log In',
    provider_new_title: 'New Provider', provider_new_p: 'Join as an approved partner of Itqan', provider_new_btn: 'Join as Partner',

    contact_eyebrow: 'Contact Us', contact_title: 'Our team is ready to answer your questions',
    contact_whatsapp: 'WhatsApp', contact_location: 'Riyadh, Saudi Arabia',

    footer_text: '© Itqan Business Services — إتقان لخدمات الأعمال',

    gw_eyebrow: 'The Itqan Digital Platform',
    gw_title: 'The Itqan Platform for Managing Your Company Incorporation and Investment Journey in Saudi Arabia',
    gw_sub: 'Assess your readiness, request quotes, sign your contracts electronically, and track every step of establishing your company — all from one place.',
    gw_cta_main: 'Start Your Readiness Assessment', gw_cta_secondary: 'I Already Have an Account',
    gw_func_label: 'Inside the Platform', gw_func_title: 'What Can You Do Once You\'re In?',
    gw_func1_h: 'Readiness Compass', gw_func1_p: 'A quick assessment that determines your correct path step by step',
    gw_func2_h: 'Request Services', gw_func2_p: 'Request a quote for your company incorporation in one click',
    gw_func3_h: 'Offers', gw_func3_p: 'Review the detailed offer and communicate directly before accepting',
    gw_func4_h: 'Signing & Contracts', gw_func4_p: 'Sign your contract electronically, by hand — no paper needed',
    gw_func5_h: 'Track Requests', gw_func5_p: 'Follow every stage in real time from your own dashboard',
    gw_func6_h: 'Your Files & Documents', gw_func6_p: 'All your documents stored securely in one place',
    gw_journey_label: 'Your Journey', gw_journey_title: 'From Assessment to Execution, with Clear Steps',
    gw_j1: 'Readiness Assessment', gw_j2: 'Path Determined', gw_j3: 'Service Request', gw_j4: 'Offer', gw_j5: 'Signature', gw_j6: 'Contract', gw_j7: 'Execution Tracking',
    gw_trust1: 'Certified Electronic Signature', gw_trust2: 'Secure Document Storage', gw_trust3: 'Full Data Confidentiality', gw_trust4: 'Real-Time Request Tracking',
    gw_paths_label: 'Get Started', gw_paths_title: 'Choose Your Current Status',
    gw_new_h: 'New Client', gw_new_p: 'Start your free readiness assessment — takes two minutes',
    gw_existing_h: 'Existing Client', gw_existing_p: 'Track your requests and offers from your dashboard',
    gw_learn_more: 'Learn about Itqan and our services →',

    login_title: 'Log In', login_email: 'Email', login_password: 'Password',
    login_btn: 'Log In', login_no_account: "Don't have an account?", login_register_link: 'Create a new account',
    register_title: 'Sign Up', register_role: 'Account Type', register_role_client: 'Client (Investor)', register_role_provider: 'Service Provider',
    register_fullname: 'Full Name', register_email: 'Email', register_phone: 'Phone Number (with country code)',
    register_preferred_contact: 'Preferred Contact Method', register_contact_email: 'Email', register_contact_whatsapp: 'WhatsApp',
    register_password: 'Password', register_btn: 'Create Account', register_have_account: 'Already have an account?', register_login_link: 'Log In',
  }
};

function getLang(){
  return localStorage.getItem('itqan_lang') || 'ar';
}

function setLang(lang){
  localStorage.setItem('itqan_lang', lang);
  applyI18n();
}

function toggleLang(){
  setLang(getLang() === 'ar' ? 'en' : 'ar');
}

function t(key){
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || key;
}

function applyI18n(){
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if(val) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-html'));
    if(val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-placeholder'));
    if(val) el.placeholder = val;
  });

  const btn = document.getElementById('langToggleBtn');
  if(btn) btn.textContent = lang === 'ar' ? 'EN' : 'AR';
}

document.addEventListener('DOMContentLoaded', applyI18n);
