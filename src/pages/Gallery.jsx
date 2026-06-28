import { useMemo, useState } from "react";
import { Link } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Breadcrumb from "../components/ui/Breadcrumb";
import Lightbox from "../components/ui/Lightbox";
import { ArrowDiag } from "../components/ui/icons";
import { gallery } from "../content/gallery";
import { galleryItems } from "../lib/galleryImages";
import "../styles/gallery.css";

export default function Gallery() {
  const c = useContent(gallery);
  const [filter, setFilter] = useState("all");
  const [lbIndex, setLbIndex] = useState(null);

  // Only show filters that actually have photos behind them.
  const counts = useMemo(() => {
    const map = { all: galleryItems.length };
    for (const item of galleryItems) map[item.category] = (map[item.category] || 0) + 1;
    return map;
  }, []);
  const filters = c.filters.filter((f) => counts[f.key]);

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <div className="page-gallery">
      {/* ===== HERO ===== */}
      <section className="page-hero">
        <div className="page-hero-grain" />
        <div className="page-hero-inner">
          <Breadcrumb current={c.crumb} />
          <div className="page-hero-eyebrow">{c.hero.eyebrow}</div>
          <h1>
            <span className="word"><span>{c.hero.title[0]}</span></span>{" "}
            <span className="word"><span><Rich text={c.hero.title[1]} /></span></span>
          </h1>
          <p className="page-hero-lede"><Rich text={c.hero.lede} /></p>
        </div>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section className="gallery-controls">
        <div className="gallery-controls-inner">
          <span className="gallery-filter-label">{c.filterLabel}</span>
          <div className="gallery-filters">
            {filters.map((f) => (
              <button
                type="button"
                key={f.key}
                className={`gallery-filter${filter === f.key ? " active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                <span className="gallery-filter-count">{counts[f.key]}</span>
              </button>
            ))}
          </div>
          <span className="gallery-count">{filtered.length} {c.countLabel}</span>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="gallery-grid-wrap">
        {filtered.length === 0 ? (
          <p className="gallery-empty">{c.empty}</p>
        ) : (
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <button
                type="button"
                key={item.id}
                className="gallery-item"
                onClick={() => setLbIndex(i)}
              >
                <img src={item.src} alt="" loading="lazy" />
                <span className="gallery-item-overlay" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ===== CLOSING ===== */}
      <section className="closing">
        <div className="closing-inner">
          <div className="closing-eyebrow">{c.closing.eyebrow}</div>
          <h2><Rich text={c.closing.heading} /></h2>
          <p>{c.closing.body}</p>
          <Link to="/projects" className="btn">
            <span>{c.closing.cta}</span>
            <ArrowDiag className="" />
          </Link>
        </div>
      </section>

      {lbIndex !== null && (
        <Lightbox
          images={filtered.map((i) => i.src)}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onNavigate={setLbIndex}
        />
      )}
    </div>
  );
}
