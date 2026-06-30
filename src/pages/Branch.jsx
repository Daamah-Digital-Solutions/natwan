import { useState } from "react";
import { useParams, Navigate } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import Lightbox from "../components/ui/Lightbox";
import { ArrowDiag, Check, SocialIcon } from "../components/ui/icons";
import { branches, branchUi } from "../content/branches";
import { collections } from "../lib/galleryImages";
import "../styles/branch.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3 L9 3 L11 8 L8 10 C9 13 11 15 14 16 L16 13 L21 15 L21 18 C21 20 19 21 17 21 C9 21 3 15 3 7 C3 5 4 3 6 3 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export default function Branch() {
  const { slug } = useParams();
  const branch = branches[slug];
  const c = useContent(branch || branches.dammam);
  const ui = useContent(branchUi);
  const [lb, setLb] = useState(null);

  if (!branch) return <Navigate to="/branches" replace />;

  const photos = collections[branch.collection] || [];
  const waHref = `${branch.waBase}?text=${encodeURIComponent(c.whatsappText)}`;
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(branch.maps.query)}&z=15&output=embed`;
  const mapLink = branch.maps.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.maps.query)}`;

  return (
    <>
      <title>{c.metaTitle}</title>
      <meta name="description" content={c.metaDescription} />

      <div className="page-branch">
        {/* ===== HERO ===== */}
        <section className="branch-hero">
          {photos[0] && <div className="branch-hero-bg" style={{ backgroundImage: `url("${photos[0]}")` }} />}
          <div className="branch-hero-grain" />
          <div className="branch-hero-inner">
            <Breadcrumb current={c.crumb} />
            <div className="branch-eyebrow">{c.eyebrow}</div>
            <h1><Rich text={c.title} /></h1>
            <p className="branch-tagline">{c.tagline}</p>
            <p className="branch-intro"><Rich text={c.intro} /></p>
            <div className="branch-cta-row">
              <a className="btn btn-sand" href={waHref} target="_blank" rel="noopener noreferrer">
                <span>{ui.bookCta}</span><ArrowDiag className="" />
              </a>
              <a className="btn btn-ghost-light" href={branch.phoneHref}>
                <span>{ui.callCta} · <span dir="ltr">{branch.phone}</span></span>
              </a>
            </div>
            <div className="branch-facts">
              {c.facts.map((f, i) => (
                <div className="branch-fact" key={i}>
                  <div className="branch-fact-label">{f.label}</div>
                  <div className="branch-fact-value">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="branch-section light">
          <div className="branch-section-inner">
            <Reveal>
              <div className="branch-tag">{ui.whyTag}</div>
              <h2>{c.features.heading}</h2>
              {c.features.note && <p className="branch-note"><Rich text={c.features.note} /></p>}
            </Reveal>
            <Reveal className="feature-grid" delay={1}>
              {c.features.items.map((f, i) => (
                <div className="feature-card" key={i}>
                  <span className="feature-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===== UNITS ===== */}
        <section className="branch-section dark">
          <div className="branch-section-inner">
            <Reveal>
              <div className="branch-tag">{ui.unitsTag}</div>
              <h2>{c.units.heading}</h2>
              {c.units.note && <p className="branch-note">{c.units.note}</p>}
            </Reveal>
            <Reveal className="unit-list" delay={1}>
              {c.units.items.map((u, i) => (
                <div className="unit-row" key={i}>
                  <span className="unit-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="unit-body">
                    <h3>{u.title}</h3>
                    <p>{u.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===== GALLERY ===== */}
        {photos.length > 0 && (
          <section className="branch-gallery-section">
            <Reveal className="branch-gallery">
              {photos.slice(0, 6).map((src, i) => (
                <button type="button" className="branch-gallery-item" key={src} onClick={() => setLb({ images: photos, index: i })}>
                  <img src={src} alt={`${c.crumb} — ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </Reveal>
          </section>
        )}

        {/* ===== AMENITIES (optional) ===== */}
        {c.amenities && (
          <section className="branch-section paper">
            <div className="branch-section-inner narrow">
              <Reveal>
                <div className="branch-tag">{ui.amenitiesTag}</div>
                <h2>{c.amenities.heading}</h2>
              </Reveal>
              <Reveal as="ul" className="amenity-list" delay={1}>
                {c.amenities.items.map((a, i) => (
                  <li key={i}><span className="amenity-check"><Check /></span><Rich text={a} /></li>
                ))}
              </Reveal>
            </div>
          </section>
        )}

        {/* ===== BOOKING + MAP ===== */}
        <section className="branch-map-section">
          <div className="branch-map-grid">
            <Reveal className="branch-map-head">
              <div className="branch-tag">{ui.bookTag}</div>
              <h2>{c.closing.heading}</h2>
              <p>{c.closing.body}</p>
              <div className="branch-cta-row">
                <a className="btn btn-sand" href={waHref} target="_blank" rel="noopener noreferrer">
                  <span>{ui.bookCta}</span><ArrowDiag className="" />
                </a>
                <a className="btn btn-ghost-light" href={branch.phoneHref}>
                  <span dir="ltr">{branch.phone}</span>
                </a>
              </div>
            </Reveal>
            <Reveal className="branch-map" delay={1}>
              <iframe
                className="branch-map-frame"
                src={mapEmbed}
                title={c.crumb}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="branch-map-link" href={mapLink} target="_blank" rel="noopener noreferrer">{ui.mapsCta} →</a>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Floating booking buttons */}
      <div className="branch-float">
        <a className="branch-float-btn wa" href={waHref} target="_blank" rel="noopener noreferrer" aria-label={ui.floatWhatsapp} title={ui.floatWhatsapp}>
          <SocialIcon name="whatsapp" />
        </a>
        <a className="branch-float-btn call" href={branch.phoneHref} aria-label={ui.floatCall} title={ui.floatCall}>
          <PhoneIcon />
        </a>
      </div>

      {lb && (
        <Lightbox
          images={lb.images}
          index={lb.index}
          onClose={() => setLb(null)}
          onNavigate={(index) => setLb((s) => ({ ...s, index }))}
        />
      )}
    </>
  );
}
