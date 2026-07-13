// Projects page copy in EN + AR. Each project's `key` maps to an image
// collection in src/lib/galleryImages.js; the page pulls the photos from there.
// Projects without a matching collection render as clean text blocks (specs +
// scope of work) until per-project photos are added.
export const projects = {
  en: {
    crumb: "Projects",
    hero: {
      eyebrow: "◆ SELECTED WORK · BUILT TO ENDURE",
      title: ["The work,", "and the ground it *stands on.*"],
      lede: "A look at what we've built and operated across our sectors — projects judged not by how they photograph, but by how they hold up over time.",
      meta: [
        { label: "Since", value: "2007" },
        { label: "Sectors", value: "Five" },
        { label: "Headquarters", value: "Dammam" },
        { label: "Principle", value: "Built to last" },
      ],
    },
    intro: {
      label: "— ON OUR\nWORK",
      statement: "Every project carries our name — so every project is held to the same standard: *executed with care, delivered on its promise.*",
    },
    framesLabel: "Frames",
    scopeLabel: "Scope of Work",
    items: [
      {
        key: "projects",
        num: "01.",
        idLabel: "PROJECT 01",
        title: "Natwan Home 5",
        body: "A complete residential vision in one of Al Khobar's most prestigious districts — from groundbreaking to turnkey delivery. Six modern duplex villas blending structural integrity with premium finishing, minutes from Gulf Road and the Bahrain Bridge entrance.",
        facts: [
          { label: "Location", value: "Al Khuzama, Al Khobar" },
          { label: "Units", value: "6 Duplex Villas" },
          { label: "Area", value: "300 m² / villa" },
          { label: "Handover", value: "Turnkey" },
        ],
        scope: [
          "High-precision excavation, foundations, and structural concrete framework.",
          "Premium interior and exterior finishing — top-tier plumbing and electrical using certified materials.",
          "Supply and installation of modern, high-quality elevators in each villa.",
        ],
      },
      {
        key: "home3",
        num: "02.",
        idLabel: "PROJECT 02",
        title: "Natwan Home 3",
        body: "A continuation of the successful Natwan Home series in Dammam — three luxury villas that blend structural durability with modern architectural elegance, managed end to end from excavation to a premium turnkey handover.",
        facts: [
          { label: "Location", value: "Al Manar, Dammam" },
          { label: "Units", value: "3 Luxury Villas" },
          { label: "Area", value: "330 m² / villa" },
          { label: "Handover", value: "Turnkey" },
        ],
        scope: [
          "Complete excavation, foundations, and concrete framework to strict engineering standards for long-term durability.",
          "High-end plumbing and electrical infrastructure using top-certified materials.",
          "Premium interior and exterior finishes, including advanced modern elevators in each villa.",
        ],
      },
      {
        key: "home7",
        num: "03.",
        idLabel: "PROJECT 03",
        title: "Natwan Home 7",
        body: "A customized residential layout in Dammam's Badr district — a full residential floor plus an independent apartment, engineered for functional autonomy and total privacy between the two units.",
        facts: [
          { label: "Location", value: "Badr, Dammam" },
          { label: "Components", value: "Floor + Apartment" },
          { label: "Scope", value: "Excavation · Structure" },
          { label: "Focus", value: "Privacy & layout" },
        ],
        scope: [
          "Precision excavation, soil treatment, and robust concrete foundation framework to rigorous engineering standards.",
          "Structural skeleton for both the full floor and the apartment, ensuring integrity, safety, and durability.",
          "Smart interior layout planning maximizing comfort and independence between floor and apartment.",
        ],
      },
      {
        key: "abhaMahala",
        num: "04.",
        idLabel: "PROJECT 04",
        title: "Abha Al-Mahala",
        body: "Integrated luxury in Abha's Al Rawabi district — our scope went beyond VIP construction and finishing to full furnishing and appliance installation, handing over a residential landmark 100% ready for immediate luxury living.",
        facts: [
          { label: "Location", value: "Al Rawabi, Abha" },
          { label: "Units", value: "11 Apartments" },
          { label: "Standard", value: "VIP · Furnished" },
          { label: "Handover", value: "100% Ready" },
        ],
        scope: [
          "Precision excavation, foundations, and robust structural framework tailored to the region's topography.",
          "Ultra-luxury VIP interior and exterior finishes using top-tier materials and contemporary designs.",
          "Full furnishing with premium furniture and installation of high-end home appliances.",
          "Supply and installation of advanced air conditioning systems throughout.",
        ],
      },
      {
        key: "cafe",
        num: "05.",
        idLabel: "PROJECT 05",
        title: "Masa'at Café & Restaurant",
        body: "An intimate café concept — designed, built, and fitted out in-house. Warm materials, considered light, and a calm that quietly invites people to stay a little longer.",
        facts: [
          { label: "Sector", value: "Hospitality · F&B" },
          { label: "Location", value: "Dammam" },
          { label: "Year", value: "2022" },
        ],
      },
      {
        key: "contracting",
        num: "06.",
        idLabel: "PROJECT 06",
        title: "Contracting Works",
        body: "Structure, execution, and finishing across a range of contracts — delivered to specification, on schedule, and to a standard of finish that holds up close. The quiet discipline behind everything we build.",
        facts: [
          { label: "Sector", value: "Contracting" },
          { label: "Location", value: "Kingdom-wide" },
          { label: "Year", value: "2023 — Present" },
        ],
      },
    ],
    closing: {
      eyebrow: "◆ YOUR PROJECT, NEXT",
      heading: "Have something you want *built to last?*",
      body: "From first study to final handover, we bring one standard to every stage. Tell us what you're planning.",
      cta: "Start a Conversation",
    },
  },

  ar: {
    crumb: "مشاريعنا",
    hero: {
      eyebrow: "◆ أعمال مختارة · بُنيت لتدوم",
      title: ["العمل,", "والأرض التي *يقوم عليها.*"],
      lede: "نظرة على ما بنيناه وشغّلناه عبر قطاعاتنا — مشاريع لا تُقاس بجمال صورها، بل بقدرتها على الصمود مع الوقت.",
      meta: [
        { label: "منذ", value: "2007" },
        { label: "القطاعات", value: "خمسة" },
        { label: "المقر الرئيسي", value: "الدمام" },
        { label: "المبدأ", value: "بُني ليدوم" },
      ],
    },
    intro: {
      label: "— عن\nأعمالنا",
      statement: "كل مشروع يحمل اسمنا — لذا يخضع كل مشروع للمعيار ذاته: *يُنفَّذ بعناية، ويُسلَّم بوفاءٍ لوعده.*",
    },
    framesLabel: "لقطة",
    scopeLabel: "أبرز الأعمال المنفذة",
    items: [
      {
        key: "projects",
        num: "01.",
        idLabel: "مشروع 01",
        title: "نطوان هوم 5",
        body: "رؤية سكنية متكاملة في واحد من أرقى أحياء الخبر — من أعمال الحفر حتى تسليم المفتاح. ستّ فلل دوبلكس بتصاميم عصرية تجمع بين قوة التأسيس وفخامة اللمسات الأخيرة، على بُعد دقائق من طريق الخليج ومدخل جسر البحرين.",
        facts: [
          { label: "الموقع", value: "حي الخزامى، الخبر" },
          { label: "عدد الوحدات", value: "6 فلل دوبلكس" },
          { label: "المساحة", value: "300 م² / فيلا" },
          { label: "التسليم", value: "مفتاح" },
        ],
        scope: [
          "تنفيذ أعمال الحفر والأساسات والإنشاءات الهيكلية بدقة إنشائية عالية.",
          "تشطيبات داخلية وخارجية فاخرة تشمل تأسيس شبكات السباكة والكهرباء بأجود المواد المعتمدة.",
          "توريد وتركيب مصاعد حديثة متطورة لكل فيلا لضمان أعلى مستويات الراحة.",
        ],
      },
      {
        key: "home3",
        num: "02.",
        idLabel: "مشروع 02",
        title: "نطوان هوم 3",
        body: "امتداداً لسلسلة نطوان هوم الناجحة في الدمام — ثلاث فلل فاخرة تجمع بين المتانة الإنشائية والجمال المعماري العصري، بإدارة كاملة من المراحل الأولى للحفر وحتى التسليم النهائي بمفتاح جاهز.",
        facts: [
          { label: "الموقع", value: "حي المنار، الدمام" },
          { label: "عدد الوحدات", value: "3 فلل فاخرة" },
          { label: "المساحة", value: "330 م² / فيلا" },
          { label: "التسليم", value: "مفتاح" },
        ],
        scope: [
          "تنفيذ كامل أعمال الحفر والتأسيس والإنشاءات الهيكلية وفق أعلى المعايير لضمان استدامة المبنى.",
          "تمديد وتأسيس شبكات السباكة والكهرباء بجودة عالية وبأفضل المواد المعتمدة.",
          "تشطيبات داخلية وخارجية راقية، مع توريد وتركيب مصاعد حديثة لكل فيلا.",
        ],
      },
      {
        key: "home7",
        num: "03.",
        idLabel: "مشروع 03",
        title: "نطوان هوم 7",
        body: "حلٌّ سكني مخصّص في حي بدر بالدمام — دورٌ سكني كامل بالإضافة إلى شقة مستقلة، بتصميم هندسي يضمن الخصوصية التامة واستقلالية كل وحدة عن الأخرى.",
        facts: [
          { label: "الموقع", value: "حي بدر، الدمام" },
          { label: "المكونات", value: "دور + شقة" },
          { label: "طبيعة العمل", value: "حفر · تأسيس · بناء" },
          { label: "التركيز", value: "الخصوصية والتوزيع" },
        ],
        scope: [
          "تنفيذ أعمال الحفر وتجهيز التربة وتأسيس القواعد والأساسات الخرسانية وفق أعلى المقاييس الهندسية.",
          "بناء الهيكل الإنشائي (العظم) للدور الكامل والشقة بدقة تضمن أمان واستدامة المبنى.",
          "تخطيط وتوزيع المساحات الداخلية بذكاء لتوفير الراحة والمرونة بين الدور والشقة.",
        ],
      },
      {
        key: "abhaMahala",
        num: "04.",
        idLabel: "مشروع 04",
        title: "أبها المحالة",
        body: "فخامة متكاملة في حي الروابي بأبها — لم يقتصر دورنا على البناء والتشطيب الفاخر، بل امتدّ إلى التأثيث الكامل وتجهيز الأجهزة، لنسلّم صرحاً سكنياً جاهزاً 100٪ للمعيشة الفاخرة بمعايير VIP.",
        facts: [
          { label: "الموقع", value: "حي الروابي، أبها" },
          { label: "عدد الوحدات", value: "11 شقة" },
          { label: "المستوى", value: "VIP · مؤثثة" },
          { label: "التسليم", value: "جاهزة 100٪" },
        ],
        scope: [
          "تنفيذ أعمال الحفر وتأسيس الهيكل الإنشائي والأعمال الخرسانية بدقة هندسية عالية ضمن تضاريس المنطقة.",
          "تشطيبات داخلية وخارجية فائقة الفخامة (VIP) بأجود المواد والديكورات العصرية.",
          "التجهيز والتأثيث الشامل: فرش الشقق بأثاث راقٍ مع تركيب كافة الأجهزة الكهربائية المنزلية.",
          "توريد وتركيب أحدث أنظمة التكييف لضمان بيئة داخلية مثالية.",
        ],
      },
      {
        key: "cafe",
        num: "05.",
        idLabel: "مشروع 05",
        title: "مقهى ومطعم مساءات",
        body: "مقهى بطابع حميم — صُمّم ونُفّذ وجُهّز داخلياً بالكامل. خامات دافئة، وإضاءة مدروسة، وهدوءٌ يدعو الناس بلطف إلى البقاء وقتاً أطول.",
        facts: [
          { label: "القطاع", value: "الضيافة · الأغذية والمشروبات" },
          { label: "الموقع", value: "الدمام" },
          { label: "السنة", value: "2022" },
        ],
      },
      {
        key: "contracting",
        num: "06.",
        idLabel: "مشروع 06",
        title: "أعمال المقاولات",
        body: "هيكلٌ وتنفيذٌ وتشطيبٌ عبر مجموعة من العقود — تُسلَّم وفق المواصفات، وفي مواعيدها، وبمستوى إنجازٍ يصمد عند التدقيق. هو الانضباط الهادئ خلف كل ما نبنيه.",
        facts: [
          { label: "القطاع", value: "المقاولات" },
          { label: "الموقع", value: "على مستوى المملكة" },
          { label: "السنة", value: "2023 — حتى الآن" },
        ],
      },
    ],
    closing: {
      eyebrow: "◆ مشروعك، تالياً",
      heading: "لديك ما تريده *مبنيّاً ليدوم؟*",
      body: "من الدراسة الأولى إلى التسليم النهائي، نحمل معياراً واحداً في كل مرحلة. حدّثنا عمّا تخطّط له.",
      cta: "ابدأ حواراً",
    },
  },
};
