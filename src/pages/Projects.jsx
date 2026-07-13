import { useState } from "react";
import { Link } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import Lightbox from "../components/ui/Lightbox";
import { ArrowDiag } from "../components/ui/icons";
import { projects } from "../content/projects";
import { collections } from "../lib/galleryImages";
import "../styles/projects.css";

function ProjectMarker({ num, label }) {
  return (
    <div className="project-marker">
      <span className="project-marker-num">{num}</span>
      <span className="project-marker-line" />
      <span>{label}</span>
    </div>
  );
}

export default function Projects() {
  const c = useContent(projects);
  // Lightbox holds the active project's photo list + the open index.
  const [lb, setLb] = useState(null);

  return (
    <div className="page-projects">
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
          <div className="page-hero-meta">
            {c.hero.meta.map((m, i) => (
              <div className="meta-item" key={i}>
                <div className="meta-label">{m.label}</div>
                <div className="meta-value">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="intro">
        <div className="intro-inner">
          <div className="intro-label"><Rich text={c.intro.label} /></div>
          <Reveal as="div" className="intro-statement"><Rich text={c.intro.statement} /></Reveal>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      {c.items.map((p, idx) => {
        const photos = collections[p.key] || [];
        const [lead, ...rest] = photos;
        const tone = idx % 2 === 0 ? "light" : "dark";
        return (
          <section className={`project ${tone}`} id={p.key} key={p.key}>
            <div className="project-inner">
              <Reveal className="project-head">
                <ProjectMarker num={p.num} label={p.idLabel} />
                <div className="project-title-row">
                  <h2>{p.title}</h2>
                  <div className="project-facts">
                    {p.facts.map((f, fi) => (
                      <div className="project-fact" key={fi}>
                        <span className="project-fact-label">{f.label}</span>
                        <span className="project-fact-value">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="project-body">{p.body}</p>
                {p.scope && (
                  <div className="project-scope">
                    <div className="project-scope-label">{c.scopeLabel}</div>
                    <ul className="project-scope-list">
                      {p.scope.map((s, si) => (
                        <li key={si}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>

              {photos.length > 0 && (
                <Reveal className="project-gallery" delay={1}>
                  {lead && (
                    <button
                      type="button"
                      className="project-lead"
                      onClick={() => setLb({ images: photos, index: 0 })}
                    >
                      <img src={lead} alt={`${p.title} — 1`} loading="lazy" />
                      <span className="project-lead-tag">{p.idLabel} / {String(photos.length).padStart(2, "0")} {c.framesLabel}</span>
                    </button>
                  )}
                  {rest.length > 0 && (
                    <div className="project-thumbs">
                      {rest.map((src, i) => (
                        <button
                          type="button"
                          className="project-thumb"
                          key={src}
                          onClick={() => setLb({ images: photos, index: i + 1 })}
                        >
                          <img src={src} alt={`${p.title} — ${i + 2}`} loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

      {/* ===== CLOSING ===== */}
      <section className="closing">
        <div className="closing-inner">
          <div className="closing-eyebrow">{c.closing.eyebrow}</div>
          <h2><Rich text={c.closing.heading} /></h2>
          <p>{c.closing.body}</p>
          <Link to="/contact" className="btn">
            <span>{c.closing.cta}</span>
            <ArrowDiag className="" />
          </Link>
        </div>
      </section>

      {lb && (
        <Lightbox
          images={lb.images}
          index={lb.index}
          onClose={() => setLb(null)}
          onNavigate={(index) => setLb((s) => ({ ...s, index }))}
        />
      )}
    </div>
  );
}
