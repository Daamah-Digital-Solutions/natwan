// Gallery page copy in EN + AR. `filters` keys line up with the collection
// keys produced by src/lib/galleryImages.js ("all" shows everything).
export const gallery = {
  en: {
    crumb: "Gallery",
    hero: {
      eyebrow: "◆ IN FRAMES · FROM THE FIELD",
      title: ["A closer", "*look.*"],
      lede: "Photographs from our sites and spaces — the texture of the work, captured as it was made.",
    },
    filterLabel: "Filter",
    filters: [
      { key: "all", label: "All" },
      { key: "abha", label: "Natwan Abha" },
      { key: "cafe", label: "The Café" },
      { key: "contracting", label: "Contracting" },
      { key: "projects", label: "Developments" },
    ],
    countLabel: "photographs",
    empty: "No photographs in this set yet.",
    closing: {
      eyebrow: "◆ SEE THE WORK IN FULL",
      heading: "Every frame is a *project behind it.*",
      body: "Explore the projects these photographs belong to — or get in touch about your own.",
      cta: "View Projects",
    },
  },

  ar: {
    crumb: "المعرض",
    hero: {
      eyebrow: "◆ في الصور · من الميدان",
      title: ["نظرة", "*أقرب.*"],
      lede: "صور من مواقعنا ومساحاتنا — ملمس العمل، كما التُقط لحظة صُنعه.",
    },
    filterLabel: "تصفية",
    filters: [
      { key: "all", label: "الكل" },
      { key: "abha", label: "نطوان أبها" },
      { key: "cafe", label: "المقهى" },
      { key: "contracting", label: "المقاولات" },
      { key: "projects", label: "أعمال" },
    ],
    countLabel: "صورة",
    empty: "لا توجد صور في هذه المجموعة بعد.",
    closing: {
      eyebrow: "◆ شاهد العمل كاملاً",
      heading: "خلف كل صورة *مشروع.*",
      body: "تصفّح المشاريع التي تنتمي إليها هذه الصور — أو تواصل معنا بشأن مشروعك.",
      cta: "عرض المشاريع",
    },
  },
};
