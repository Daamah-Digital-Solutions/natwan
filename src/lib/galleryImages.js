// Loads every photo under src/images at build time and groups them by the
// project folder they live in. Vite resolves each match to a hashed asset URL.
// Filenames with spaces / Arabic characters are handled because this runs at
// build time (import.meta.glob), not via runtime string paths.

const modules = import.meta.glob(
  "../images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}",
  { eager: true, query: "?url", import: "default" }
);

// Map the on-disk folder names to stable, friendly collection keys.
const FOLDER_TO_KEY = {
  "natwan abha": "abha",
  "cafe photos": "cafe",
  "general-images-contracting": "contracting",
  "natwan projects": "projects",
};

// Group image URLs by collection key, keeping a deterministic order.
const grouped = {};
for (const [path, url] of Object.entries(modules).sort(([a], [b]) =>
  a.localeCompare(b)
)) {
  const match = path.match(/\/images\/([^/]+)\//);
  const folder = match ? match[1] : "misc";
  const key = FOLDER_TO_KEY[folder] || folder;
  (grouped[key] ||= []).push(url);
}

// { abha: [url, …], cafe: [url, …], contracting: [url, …], projects: [url, …] }
export const collections = grouped;

// Flat list for the gallery grid, each tagged with its collection.
export const galleryItems = Object.entries(grouped).flatMap(([category, urls]) =>
  urls.map((src, i) => ({ src, category, id: `${category}-${i}` }))
);
