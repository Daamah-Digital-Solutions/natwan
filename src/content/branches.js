// Branch (serviced-apartments) pages in EN + AR.
// Each branch: language-neutral `slug`/`collection`/`maps`, plus `en`/`ar` copy.
// WhatsApp links open a pre-filled chat; `maps.query` drives the embed + link.

const PHONE = "+966 54 200 8206";
const PHONE_HREF = "tel:+966542008206";
const WA_BASE = "https://wa.me/966542008206";

export const branches = {
  dammam: {
    slug: "dammam",
    collection: "cafe",
    phone: PHONE,
    phoneHref: PHONE_HREF,
    waBase: WA_BASE,
    maps: { query: "26.3671797,50.0330874", url: "https://maps.app.goo.gl/PGQCMwxS4nwmoLrc8" },
    en: {
      crumb: "Natwan Dammam",
      metaTitle: "Natwan Serviced Apartments Dammam Al Manar | Comfortable Family Stays",
      metaDescription:
        "Book your stay at Natwan Serviced Apartments in Dammam, Al Manar. Affordable, fully-furnished suites for families and GCC visitors. Enjoy Masa'at Café right in the lobby.",
      eyebrow: "DAMMAM · AL MANAR · SINCE 2015",
      title: "Natwan Serviced Apartments — *Al Manar, Dammam*",
      tagline: "Authentic hospitality & family comfort.",
      intro:
        "Welcome to our main flagship branch in Dammam's Al Manar neighborhood. Since 2015, Natwan has placed guest comfort and immaculate cleanliness at the forefront — under our enduring motto: *Natwan is the Address for Cleanliness.* We provide a comfortable, cost-effective stay for families and GCC visitors (Qatar, UAE, Bahrain) on a daily-rental basis.",
      facts: [
        { label: "Since", value: "2015" },
        { label: "Units", value: "35" },
        { label: "Neighborhood", value: "Al Manar" },
        { label: "Guests Served", value: "10,000+" },
      ],
      features: {
        heading: "Why choose Natwan Al Manar?",
        items: [
          { title: "Strategic & vibrant location", desc: "On Imam Mohammed Bin Saud Street in Al Manar — close to major services, shopping, and events in Dammam." },
          { title: "A unique culinary experience", desc: "Home to the renowned Masa'at Café & Restaurant, opening directly onto the hotel reception — meals and beverages throughout your stay." },
          { title: "Proven expertise & supreme cleanliness", desc: "Over 10,000 satisfied guests, continuous sanitization, and excellent split-AC units for unmatched comfort." },
          { title: "Flexible daily rentals", desc: "A convenient daily booking system tailored to your vacation plans and weekend getaways." },
        ],
      },
      units: {
        heading: "Available accommodation options",
        note: "35 fully-equipped units in a range of sizes to suit every family:",
        items: [
          { title: "Family Suites — two bedrooms & living room", desc: "Spacious layouts that bring the family together, with a fully equipped kitchen and sanitized bathrooms." },
          { title: "Elegant Apartments — one bedroom & living room", desc: "The perfect choice for couples and business travelers seeking a quiet, practical space." },
          { title: "Cozy Studios", desc: "Furnished with modern, comfortable pieces for complete privacy." },
        ],
      },
      amenities: {
        heading: "Amenities & shared services",
        items: [
          "Fully equipped kitchens with all the utensils to prepare your meals freely.",
          "Smart TVs and high-speed Wi-Fi in all units.",
          "24/7 reception and dedicated customer service.",
        ],
      },
      closing: {
        heading: "Book your stay in Al Manar today",
        body: "Our customer-service team is ready to answer your inquiries and confirm your booking instantly.",
      },
      whatsappText: "Hello Natwan, I would like to inquire about booking at the Al Manar branch in Dammam.",
    },
    ar: {
      crumb: "نطوان الدمام",
      metaTitle: "شقق نطوان المخدومة الدمام حي المنار | إقامة عائلية مريحة واقتصادية",
      metaDescription:
        "احجز إقامتك في شقق نطوان المخدومة بالدمام حي المنار. شقق مفروشة واقتصادية تناسب العائلات وزوار الخليج يومياً. استمتع بمذاق مطعم ومقهى مساءات بالريسبشن.",
      eyebrow: "الدمام · حي المنار · منذ 2015",
      title: "شقق نطوان المخدومة — *حي المنار، الدمام*",
      tagline: "أصالة الضيافة وراحة العائلة.",
      intro:
        "مرحباً بكم في فرعنا الرئيسي بالدمام حي المنار. منذ عام 2015 ونحن في نطوان نضع راحة النزيل ونظافة المكان في مقدمة أولوياتنا تحت شعارنا الدائم: *نطوان للنظافة عنوان.* نقدّم تجربة إقامة اقتصادية مريحة تلبّي تطلّعات العائلات السعودية والسيّاح القادمين من دول الخليج (قطر، الإمارات، البحرين) بنظام الإيجار اليومي.",
      facts: [
        { label: "منذ", value: "2015" },
        { label: "الوحدات", value: "35" },
        { label: "الحي", value: "المنار" },
        { label: "خدمنا", value: "+10,000" },
      ],
      features: {
        heading: "لماذا تختار الإقامة في نطوان حي المنار؟",
        items: [
          { title: "موقع استراتيجي حيوي", desc: "في حي المنار على شارع الإمام محمد بن سعود، بالقرب من الخدمات الرئيسية والفعاليات في مدينة الدمام." },
          { title: "تجربة تذوّق فريدة", desc: "يضم الفرع مطعم ومقهى مساءات الشهير الذي يفتح مباشرة على ريسبشن الفندق، ليقدّم أشهى المأكولات والمشروبات طوال إقامتكم." },
          { title: "خبرة ممتدة ونظافة فائقة", desc: "خدمنا أكثر من 10,000 عميل بخدمات تعقيم مستمرة ومكيفات سبليت ممتازة لراحة لا مثيل لها." },
          { title: "إيجار يومي مرن", desc: "نظام حجز يومي ميسّر يناسب خطط إجازاتكم وعطلات نهاية الأسبوع." },
        ],
      },
      units: {
        heading: "خيارات الوحدات السكنية المتاحة",
        note: "35 شقة مجهّزة بالكامل بمساحات متنوّعة تناسب كل عائلة:",
        items: [
          { title: "الأجنحة العائلية — غرفتين وصالة", desc: "مساحة واسعة تلمّ شمل العائلة مع مطبخ مجهّز متكامل وحمامات معقّمة." },
          { title: "الشقق الأنيقة — غرفة وصالة", desc: "خيار مثالي للأزواج وزوار العمل الباحثين عن الهدوء والعملية." },
          { title: "الاستوديوهات المريحة", desc: "مجهّزة بأثاث عصري مريح يوفّر لك الخصوصية الكاملة." },
        ],
      },
      amenities: {
        heading: "وسائل الراحة والخدمات المشتركة",
        items: [
          "مطبخ متكامل مجهّز بكافة الأدوات لإعداد وجباتكم بحرية.",
          "شاشات سمارت وإنترنت واي فاي عالي السرعة في جميع الوحدات.",
          "ريسبشن وخدمة عملاء على مدار 24 ساعة.",
        ],
      },
      closing: {
        heading: "احجز إقامتك اليوم في فرع المنار",
        body: "يسعد فريق خدمة العملاء باستقبال استفساراتكم وتأكيد حجزكم فوراً.",
      },
      whatsappText: "مرحباً نطوان، أرغب في الاستفسار عن حجز في فرع المنار بالدمام.",
    },
  },

  atheer: {
    slug: "atheer",
    collection: "projects",
    phone: "+966 55 458 4321",
    phoneHref: "tel:+966554584321",
    waBase: "https://wa.me/966554584321",
    maps: { query: "26.3805479,50.0578001", url: "https://maps.app.goo.gl/LoswipXk64XnBpi37" },
    en: {
      crumb: "Atheer · Dammam",
      metaTitle: "Atheer Serviced Apartments Dammam Al Faisaliah | Managed by Natwan",
      metaDescription:
        "Enjoy spacious family living at Atheer Serviced Apartments in Al Faisaliah, Dammam. Shaded parking, large suites with double bathrooms — under Natwan's professional management.",
      eyebrow: "DAMMAM · AL FAISALIAH · MANAGED BY NATWAN",
      title: "Atheer Serviced Apartments — *Al Faisaliah, Dammam*",
      tagline: "Spacious comfort for your family.",
      intro:
        "Atheer Serviced Apartments welcomes you to the heart of Dammam in the strategic Al Faisaliah neighborhood. Atheer is fully and professionally managed by *Natwan Real Estate Company*, ensuring the highest standards of cleanliness and premium hotel service. If you're looking for wider apartment spaces and convenient parking that protects your privacy, Atheer is your ultimate choice for daily rentals in Dammam.",
      facts: [
        { label: "Neighborhood", value: "Al Faisaliah" },
        { label: "Units", value: "35" },
        { label: "Managed By", value: "Natwan" },
        { label: "Rental", value: "Daily" },
      ],
      features: {
        heading: "Atheer's core strengths & advantages",
        items: [
          { title: "Wider, more spacious layouts", desc: "Designed with larger interior spaces than traditional serviced apartments — freedom to move and relax." },
          { title: "Private, shaded parking", desc: "No worrying about the sun or finding a spot — comfortable, protected parking for guests' vehicles." },
          { title: "Prime strategic location", desc: "On Abu Bakr Al Siddiq Street in Al Faisaliah — easy access to the Eastern Province's top malls, restaurants, and highways." },
          { title: "Double privacy for families", desc: "Larger units feature two bathrooms to ease family routines and speed up daily preparations." },
        ],
      },
      units: {
        heading: "Available accommodation options",
        note: "35 spacious serviced apartments for daily rent:",
        items: [
          { title: "Spacious Family Suite — two bedrooms, living room + 2 bathrooms", desc: "The best option for large families and GCC visitors seeking expansive space and absolute privacy." },
          { title: "One-Bedroom Suite — bedroom & living room", desc: "An excellently distributed space with a full kitchen and high-quality split ACs." },
          { title: "Large Studio", desc: "A practical space for business professionals and couples wanting a quick, comfortable stay." },
        ],
      },
      amenities: {
        heading: "Our commitment to standards — Natwan management",
        items: [
          "Regular, thorough sanitization of bathrooms and surfaces — *Natwan is the Address for Cleanliness.*",
          "Kitchens equipped with essential home appliances — the freedom of home.",
          "Fast internet connection and advanced Smart TVs.",
        ],
      },
      closing: {
        heading: "Plan your upcoming stay at Atheer Dammam",
        body: "We look forward to hosting you and offering our best daily rates.",
      },
      whatsappText: "Hello Natwan, I would like to inquire about booking at Atheer Suites Al Faisaliah.",
    },
    ar: {
      crumb: "نزل أثير · الدمام",
      metaTitle: "نزل أثير للشقق المخدومة الدمام حي الفيصلية | تحت إدارة نطوان",
      metaDescription:
        "استمتع بإقامة عائلية رحبة في نزل أثير للشقق المخدومة بحي الفيصلية بالدمام. مواقف سيارات مظللة، مساحات واسعة وشقق بحمامين تحت إدارة شركة نطوان.",
      eyebrow: "الدمام · حي الفيصلية · تحت إدارة نطوان",
      title: "نزل أثير للشقق المخدومة — *حي الفيصلية، الدمام*",
      tagline: "المساحة الأرحب لراحة عائلتك.",
      intro:
        "يرحّب بكم نزل أثير للشقق المخدومة في قلب الدمام بحي الفيصلية الاستراتيجي. يُدار نزل أثير بالكامل وباحترافية بواسطة *شركة نطوان العقارية*، بما يضمن أعلى معايير النظافة والخدمة الفندقية التي تثقون بها. إذا كنتم تبحثون عن مساحات أوسع ومواقف سيارات مريحة تحمي خصوصيتكم، فنزل أثير هو خياركم الأول للإيجار اليومي بالدمام.",
      facts: [
        { label: "الحي", value: "الفيصلية" },
        { label: "الوحدات", value: "35" },
        { label: "الإدارة", value: "نطوان" },
        { label: "الإيجار", value: "يومي" },
      ],
      features: {
        heading: "نقاط القوة والمميزات في نزل أثير",
        items: [
          { title: "مساحات أوسع وأرحب", desc: "شقق بمساحات داخلية تفوق الشقق المخدومة التقليدية لتمنح عائلتك حرية الحركة والراحة." },
          { title: "مواقف سيارات مظللة وخاصة", desc: "لا تشيل هم الشمس أو البحث عن موقف — الفرع يوفّر مواقف مريحة ومحمية لسيارات النزلاء." },
          { title: "موقع استراتيجي ممتاز", desc: "في حي الفيصلية على شارع أبو بكر الصديق، قريب من أهم المجمعات التجارية والمطاعم والطرق الحيوية بالشرقية." },
          { title: "خصوصية مضاعفة للعوائل", desc: "بعض الوحدات الكبيرة بها حمامان داخل الشقة لتسهيل حركة العائلة وسرعة التجهيز." },
        ],
      },
      units: {
        heading: "خيارات الإقامة المتاحة",
        note: "35 شقة مخدومة وواسعة بنظام الإيجار اليومي:",
        items: [
          { title: "الجناح العائلي الواسع — غرفتين وصالة + حمامين", desc: "الخيار الأفضل للعوائل الكبيرة والخليجية الباحثة عن الاتساع والخصوصية المطلقة." },
          { title: "جناح الغرفة والصالة", desc: "مساحة ممتازة موزّعة بذكاء ومزوّدة بمطبخ متكامل وتكييف سبليت عالي الجودة." },
          { title: "الاستوديو الفسيح", desc: "مساحة عملية لرجال الأعمال والأزواج الباحثين عن إقامة سريعة ومريحة." },
        ],
      },
      amenities: {
        heading: "التزامنا بالمعايير — إدارة نطوان الاحترافية",
        items: [
          "تعقيم وتطهير دوري للحمامات والأسطح تحت شعار *نطوان للنظافة عنوان.*",
          "مطبخ مجهّز بكافة الأجهزة الكهربائية المنزلية لمنحكم حرية البيت.",
          "اتصال إنترنت سريع وشاشات ذكية متطورة.",
        ],
      },
      closing: {
        heading: "خطط لإقامتك القادمة في نزل أثير الدمام",
        body: "يسعدنا استقبالكم وتقديم أفضل العروض اليومية لكم.",
      },
      whatsappText: "مرحباً نطوان، أرغب في الاستفسار عن حجز في نزل أثير الفيصلية.",
    },
  },

  abha: {
    slug: "abha",
    collection: "abha",
    phone: "+966 50 383 7774",
    phoneHref: "tel:+966503837774",
    waBase: "https://wa.me/966503837774",
    maps: { query: "18.2833335,42.6051029", url: "https://maps.app.goo.gl/V8Cc32X8wbw9qX3Z7" },
    en: {
      crumb: "Natwan Abha VIP",
      metaTitle: "Natwan Abha VIP Suites | Luxury Family Hotel Apartments in the Fog",
      metaDescription:
        "Book your luxury suite at Natwan Abha VIP. Brand-new, fully-equipped family apartments (2 & 3 bedrooms with 2 bathrooms), shaded parking, licensed by the Ministry of Tourism.",
      eyebrow: "ABHA · VIP SUITES · MINISTRY OF TOURISM LICENSED",
      title: "Natwan Abha *VIP* Suites",
      tagline: "Luxury hotel living with the privacy of home.",
      intro:
        "Welcome to *Natwan Abha VIP Luxury Suites* — Natwan's newest and most prestigious destination in the heart of beautiful Abha. Experience the London-like atmosphere, gentle rain breezes, and enchanting fog from within hotel suites designed for families seeking luxury, spaciousness, and absolute privacy. Your stay is secure and reliable, officially licensed by the Ministry of Tourism for daily and monthly rentals.",
      facts: [
        { label: "City", value: "Abha" },
        { label: "Suites", value: "VIP · 2 & 3 BR" },
        { label: "Rental", value: "Daily / Monthly" },
        { label: "Licensed", value: "Min. of Tourism" },
      ],
      features: {
        heading: "The exceptional VIP experience in Natwan Abha",
        note: "Skip the high budgets of standard hotels and the hassle of your family scattered across separate rooms. The Abha luxury branch offers comprehensive premium features:",
        items: [
          { title: "Brand-new, luxurious furnishings", desc: "Modern interior designs and warm lighting provide a sense of opulence and hotel-grade comfort." },
          { title: "Fully equipped kitchens", desc: "Outfitted with the latest home appliances — total freedom to prepare daily meals and save on restaurant budgets." },
          { title: "Extra privacy & convenience", desc: "Two sanitized bathrooms per suite ensure comfort for all and quick preparation for your nature tours." },
          { title: "Strategic tourist location", desc: "A prime spot close to vibrant landmarks, events, and Abha's most famous restaurants and cafés." },
          { title: "Private shaded parking", desc: "Dedicated, secure parking for your vehicle throughout your stay." },
          { title: "Smart technology", desc: "High-speed Wi-Fi and interactive Smart TVs for your favorite shows." },
        ],
      },
      units: {
        heading: "Royal & luxury suite options",
        note: "Family gatherings in spacious layouts equipped to the highest standards:",
        items: [
          { title: "Luxury VIP Suite — two bedrooms, living room + 2 bathrooms", desc: "The ideal choice for families seeking elegance and space: a master bedroom, a secondary bedroom, a warm living room, a fully equipped kitchen, and two bathrooms." },
          { title: "Royal VIP Suite — three bedrooms, living room + 2 bathrooms", desc: "Our largest space, designed for big families and tourist groups — everyone under one roof with the finest luxury hotel furnishings." },
        ],
      },
      closing: {
        heading: "Treat your family to the vacation they deserve",
        body: "Summer is starting in Abha and bookings fill up fast. Contact us directly to confirm your daily or monthly reservation.",
      },
      whatsappText: "Hello Natwan, I would like to inquire about booking a VIP suite at the Abha branch.",
    },
    ar: {
      crumb: "أجنحة نطوان أبها",
      metaTitle: "أجنحة نطوان أبها الفاخرة VIP | شقق فندقية عائلية وسط الضباب",
      metaDescription:
        "احجز جناحك الفاخر في أجنحة نطوان أبها VIP. شقق فندقية جديدة ومجهّزة بالكامل للعائلات (غرفتين و3 غرف وصالة مع حمامين)، مواقف مظللة، وترخيص وزارة السياحة.",
      eyebrow: "أبها · أجنحة VIP · مرخّصة من وزارة السياحة",
      title: "أجنحة نطوان أبها الفاخرة *VIP*",
      tagline: "رفاهية الإقامة الفندقية بخصوصية البيت.",
      intro:
        "مرحباً بكم في *أجنحة نطوان أبها الفندقية الفاخرة VIP* — الوجهة الأحدث والأفخم لشركة نطوان في قلب مدينة أبها البهية. عِش متعة الأجواء اللندنية، ونسمات المطر اللطيفة، والضباب الساحر من داخل أجنحة فندقية صُمّمت خصيصاً لتواكب تطلّعات العائلات الباحثة عن الفخامة والمساحة الرحبة والخصوصية المطلقة. إقامتكم معنا آمنة وموثوقة، بترخيص معتمد من وزارة السياحة للإيجار اليومي والشهري.",
      facts: [
        { label: "المدينة", value: "أبها" },
        { label: "الأجنحة", value: "VIP · غرفتين و3" },
        { label: "الإيجار", value: "يومي / شهري" },
        { label: "الترخيص", value: "وزارة السياحة" },
      ],
      features: {
        heading: "تجربة الـ VIP الاستثنائية في نطوان أبها",
        note: "بدل ميزانية الفنادق المرتفعة وتشتّت العائلة في غرف منفصلة، يمنحك فرع أبها الفاخر مميزات فندقية متكاملة:",
        items: [
          { title: "أثاث جديد وفاخر بالكامل", desc: "تصميمات داخلية عصرية وإضاءة دافئة تمنحك شعور الرفاهية والراحة الفندقية." },
          { title: "مطبخ متكامل بكافة الأجهزة", desc: "مجهّز بأحدث الأجهزة الكهربائية يمنح سيدة المنزل حرية إعداد الوجبات وتوفير ميزانية المطاعم." },
          { title: "خصوصية وراحة مضاعفة", desc: "الأجنحة مزوّدة بحمامين معقّمين لضمان راحة أفراد العائلة وسرعة التجهيز لرحلاتكم السياحية." },
          { title: "موقع استراتيجي سياحي", desc: "قريب جداً من المعالم السياحية الحيوية والفعاليات وأشهر المطاعم والمقاهي في أبها." },
          { title: "مواقف سيارات خاصة ومظللة", desc: "باركنج مخصّص وآمن لسيارتك طوال فترة الإقامة." },
          { title: "تكنولوجيا ذكية", desc: "إنترنت واي فاي عالي السرعة وشاشات Smart TV تفاعلية لمشاهدة برامجكم المفضلة." },
        ],
      },
      units: {
        heading: "خيارات الأجنحة الملكية والفاخرة",
        note: "استمتع بلمّة العائلة في مساحات واسعة مجهّزة بأعلى مستويات الجودة:",
        items: [
          { title: "جناح VIP فاخر — غرفتين وصالة + حمامين", desc: "الخيار المثالي للعائلات الباحثة عن الأناقة والاتساع: غرفة نوم رئيسية وأخرى ثانوية، صالة جلوس دافئة، مطبخ متكامل وحمامين لخصوصية كاملة." },
          { title: "جناح VIP ملكي — 3 غرف وصالة + حمامين", desc: "المساحة الأكبر المصمّمة للعوائل الكبيرة والقروبات السياحية — الجميع تحت سقف واحد بأرقى تأثيث فندقي فاخر." },
        ],
      },
      closing: {
        heading: "امنح عائلتك الإجازة التي تستحقها وأمّن جناحك الآن",
        body: "الصيف بدأ في أبها والحجوزات تكتمل بسرعة! تواصل معنا مباشرة لتأكيد حجزك اليومي أو الشهري.",
      },
      whatsappText: "مرحباً نطوان، أرغب في الاستفسار عن حجز جناح VIP في فرع أبها.",
    },
  },
};

// Order used for the index + nav.
export const branchOrder = ["dammam", "atheer", "abha"];

// Shared UI labels (buttons, section tags) in EN + AR.
export const branchUi = {
  en: {
    bookCta: "Book via WhatsApp",
    callCta: "Call us",
    mapsCta: "View on Google Maps",
    whyTag: "— Why us",
    unitsTag: "— Accommodation",
    amenitiesTag: "— Amenities",
    locationTag: "— Location",
    bookTag: "— Booking",
    floatCall: "Call",
    floatWhatsapp: "WhatsApp",
    galleryTag: "— In frames",
  },
  ar: {
    bookCta: "احجز عبر واتساب",
    callCta: "اتصل بنا",
    mapsCta: "افتح في خرائط جوجل",
    whyTag: "— لماذا نحن",
    unitsTag: "— خيارات الإقامة",
    amenitiesTag: "— الخدمات",
    locationTag: "— الموقع",
    bookTag: "— الحجز",
    floatCall: "اتصال",
    floatWhatsapp: "واتساب",
    galleryTag: "— لقطات",
  },
};

// Branches index page (/branches) hero copy.
export const branchesPage = {
  en: {
    crumb: "Branches",
    eyebrow: "◆ NATWAN HOSPITALITY · SERVICED APARTMENTS",
    title: ["Three addresses,", "one *standard of care.*"],
    lede: "Family-friendly serviced apartments across Dammam and Abha — daily and monthly stays, immaculately kept under our motto: Natwan is the address for cleanliness.",
    cta: "View branch",
  },
  ar: {
    crumb: "فروعنا",
    eyebrow: "◆ ضيافة نطوان · شقق مخدومة",
    title: ["ثلاثة عناوين,", "ومعيار *عناية واحد.*"],
    lede: "شقق مخدومة مناسبة للعائلات في الدمام وأبها — إقامة يومية وشهرية، بنظافة فائقة تحت شعارنا: نطوان للنظافة عنوان.",
    cta: "عرض الفرع",
  },
};
