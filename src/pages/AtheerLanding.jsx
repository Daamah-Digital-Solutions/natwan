import { useEffect, useRef, useState } from "react";
import Reveal from "../components/ui/Reveal";
import Lightbox from "../components/ui/Lightbox";
import { SocialIcon } from "../components/ui/icons";
import { atheerLanding as LP } from "../content/atheerLanding";
import atheerLogo from "../images/nozul-atheer-logo.svg";
import "../styles/atheer.css";

/* ---- inline icon set (24x24, currentColor) ---- */
const ICONS = {
  phone: <path d="M6 3 L9 3 L11 8 L8 10 C9 13 11 15 14 16 L16 13 L21 15 L21 18 C21 20 19 21 17 21 C9 21 3 15 3 7 C3 5 4 3 6 3 Z" strokeWidth="1.6" strokeLinejoin="round" />,
  check: <path d="M4 12.5 L9.5 18 L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  clock: <><circle cx="12" cy="12" r="9" strokeWidth="1.6" /><path d="M12 7v5l3.5 2" strokeWidth="1.6" strokeLinecap="round" /></>,
  bath: <><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" strokeWidth="1.6" strokeLinejoin="round" /><path d="M6 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2" strokeWidth="1.6" strokeLinecap="round" /><path d="M9 6h2.5" strokeWidth="1.6" strokeLinecap="round" /><path d="M7 19l-1 2M17 19l1 2" strokeWidth="1.6" strokeLinecap="round" /></>,
  ac: <><rect x="3" y="5" width="18" height="8" rx="2" strokeWidth="1.6" /><path d="M6 9h7" strokeWidth="1.6" strokeLinecap="round" /><path d="M7 16c0 1.5 1 2 1 3M12 16c0 1.5 1 2 1 3M17 16c0 1.5 1 2 1 3" strokeWidth="1.6" strokeLinecap="round" /></>,
  parking: <><path d="M5 21V8l7-4 7 4v13" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9.5 17v-6h2.6a2 2 0 1 1 0 4H9.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></>,
  space: <><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></>,
  kitchen: <><path d="M7 2v8a2 2 0 0 0 2 2v10M7 2c-1.5 0-2.5 1-2.5 3S5.5 8 7 8M7 2c1.5 0 2.5 1 2.5 3S8.5 8 7 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M17 2c-2 1-3 3-3 6 0 2 1 3 3 3v11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>,
  clean: <><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" strokeWidth="1.5" strokeLinejoin="round" /><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" strokeWidth="1.4" strokeLinejoin="round" /></>,
  walk: <><circle cx="13" cy="4.5" r="1.8" strokeWidth="1.5" /><path d="M12 9l-2 4 2 2v6M12 9l3 2 2 1M10 13l-2 2-1 4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></>,
  restaurant: <><path d="M6 3v8M9 3v8M6 11h3M7.5 11v10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3c-1.5 1-2 3-2 5s.5 3 2 3v10" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></>,
  store: <><path d="M4 9l1-5h14l1 5M4 9v11h16V9M4 9h16" strokeWidth="1.6" strokeLinejoin="round" /><path d="M4 9a2.2 2.2 0 0 0 4 0 2.2 2.2 0 0 0 4 0 2.2 2.2 0 0 0 4 0 2.2 2.2 0 0 0 4 0" strokeWidth="1.6" /><path d="M9.5 20v-5h5v5" strokeWidth="1.6" /></>,
  pin: <><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="12" cy="9" r="2.5" strokeWidth="1.6" /></>,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" stroke="none" />,
};

function Ic({ name, className }) {
  const glyph = ICONS[name];
  if (!glyph) return null;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      {glyph}
    </svg>
  );
}

const wa = (text) => `${LP.waBase}?text=${encodeURIComponent(text || LP.whatsappDefault)}`;

export default function AtheerLanding() {
  const [showBar, setShowBar] = useState(false);
  const [lb, setLb] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [tourPlaying, setTourPlaying] = useState(false);
  const tourRef = useRef(null);
  const heroRef = useRef(null);
  const [form, setForm] = useState({ name: "", phone: "", unit: "", checkin: "", nights: "" });

  // Force Arabic / RTL for this standalone campaign page. Deferred re-assert wins
  // over the root LanguageProvider's mount effect (which runs after this child's).
  useEffect(() => {
    const root = document.documentElement;
    const prev = { lang: root.lang, dir: root.dir };
    const apply = () => { root.lang = "ar"; root.dir = "rtl"; };
    apply();
    const id = setTimeout(apply, 0);
    return () => { clearTimeout(id); root.lang = prev.lang; root.dir = prev.dir; };
  }, []);

  // Best-effort autoplay nudge for the muted hero loop (some mobile browsers).
  useEffect(() => {
    const v = heroRef.current;
    if (v) v.play().catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const playTour = () => {
    setTourPlaying(true);
    const v = tourRef.current;
    if (v) { v.muted = false; v.play().catch(() => {}); }
  };

  const submitBooking = (e) => {
    e.preventDefault();
    const f = LP.form.fields;
    const lines = [
      "مرحباً نزل أثير، أرغب بطلب حجز 🌟",
      `${f.name}: ${form.name}`,
      `${f.phone}: ${form.phone}`,
      `${f.unit}: ${form.unit}`,
      form.checkin && `${f.checkin}: ${form.checkin}`,
      form.nights && `${f.nights}: ${form.nights}`,
    ].filter(Boolean);
    window.open(wa(lines.join("\n")), "_blank", "noopener");
  };

  const set = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(LP.maps.query)}&z=15&output=embed`;

  return (
    <div className="lp-atheer" dir="rtl" lang="ar">
      <title>{LP.meta.title}</title>
      <meta name="description" content={LP.meta.description} />

      {/* ===== HEADER (absolute over hero — scrolls away) ===== */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <a className="lp-brand" href="#top" aria-label={`${LP.brand.name} ${LP.brand.tagline}`}>
            <img className="lp-logo" src={atheerLogo} alt={`${LP.brand.name} ${LP.brand.tagline}`} />
          </a>
          <a className="lp-header-cta" href={wa(LP.hero.waText)} target="_blank" rel="noopener noreferrer">
            <SocialIcon name="whatsapp" />
            <span className="lp-cta-full">{LP.stickyCta}</span>
            <span className="lp-cta-short">احجز الآن</span>
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="lp-hero" id="top">
        <img className="lp-hero-poster" src="/atheer/hero.webp" alt="" aria-hidden="true" />
        <video
          ref={heroRef}
          className="lp-hero-video"
          src="/atheer/hero-loop.mp4"
          poster="/atheer/hero-loop.webp"
          autoPlay muted loop playsInline preload="auto"
        />
        <div className="lp-hero-inner">
          <span className="lp-offer-pill"><span className="lp-pill-dot" />{LP.offerPill}</span>
          <h1>
            {LP.hero.title}
            <span className="lp-hero-highlight">{LP.hero.highlight}</span>
          </h1>
          <p className="lp-hero-lede">{LP.hero.lede}</p>
          <div className="lp-cta-row">
            <a className="lp-btn lp-btn-wa lp-btn-lg" href={wa(LP.hero.waText)} target="_blank" rel="noopener noreferrer">
              <SocialIcon name="whatsapp" />{LP.hero.primaryCta}
            </a>
            <a className="lp-btn lp-btn-ghost lp-btn-lg" href={LP.phoneHref}>
              <Ic name="phone" />{LP.hero.secondaryCta}
            </a>
          </div>
          <div className="lp-trust">
            {LP.hero.trust.map((t) => (
              <span className="lp-trust-item" key={t}><Ic name="check" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFER BAND ===== */}
      <section className="lp-offer">
        <Reveal className="lp-offer-inner lp-reveal">
          <div className="lp-offer-badge">
            <span className="lp-offer-big" dir="ltr">{LP.offer.big}</span>
            <span className="lp-offer-bigsub">{LP.offer.bigSub}</span>
          </div>
          <div>
            <span className="lp-offer-tag">{LP.offer.tag}</span>
            <h2>{LP.offer.heading}</h2>
            <p>{LP.offer.body}</p>
            <div className="lp-offer-actions">
              <a className="lp-btn lp-btn-gold" href={wa(LP.offer.waText)} target="_blank" rel="noopener noreferrer">
                <SocialIcon name="whatsapp" />{LP.offer.cta}
              </a>
              <span className="lp-offer-note"><Ic name="clock" />{LP.offer.note}</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===== UNITS ===== */}
      <section className="lp-section lp-units">
        <div className="lp-inner">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.units.tag}</span>
            <h2 className="lp-h2">{LP.units.heading}</h2>
            <p className="lp-lead">{LP.units.body}</p>
          </Reveal>
          <Reveal className="lp-units-grid lp-reveal" delay={1}>
            {LP.units.items.map((u) => (
              <article className="lp-unit-card" key={u.key}>
                <div className="lp-unit-figure">
                  <span className="lp-unit-badge">{u.tag}</span>
                  <img src={u.img} alt={u.name} loading="lazy" />
                </div>
                <div className="lp-unit-body">
                  <h3>{u.name}</h3>
                  <p>{u.desc}</p>
                  <a className="lp-unit-cta" href={wa(u.ask)} target="_blank" rel="noopener noreferrer">
                    <SocialIcon name="whatsapp" />{LP.units.cardCta}
                  </a>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== COMFORT ===== */}
      <section className="lp-section lp-comfort">
        <div className="lp-inner">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.comfort.tag}</span>
            <h2 className="lp-h2">{LP.comfort.heading}</h2>
          </Reveal>
          <Reveal className="lp-comfort-grid lp-reveal" delay={1}>
            {LP.comfort.items.map((it) => (
              <div className="lp-comfort-card" key={it.title}>
                <span className="lp-comfort-icon"><Ic name={it.icon} /></span>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="lp-section lp-loc">
        <div className="lp-inner">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.location.tag}</span>
            <h2 className="lp-h2">{LP.location.heading}</h2>
            <p className="lp-lead">{LP.location.body}</p>
          </Reveal>
          <div className="lp-loc-grid">
            <Reveal className="lp-loc-points lp-reveal" delay={1}>
              {LP.location.points.map((p) => (
                <div className="lp-loc-point" key={p.title}>
                  <span className="lp-loc-point-icon"><Ic name={p.icon} /></span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </Reveal>
            <Reveal className="lp-map lp-reveal" delay={1}>
              <iframe className="lp-map-frame" src={mapEmbed} title="نزل أثير — الموقع" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              <a className="lp-map-link" href={LP.maps.url} target="_blank" rel="noopener noreferrer">
                <Ic name="pin" />{LP.location.mapCta}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="lp-section lp-gallery-wrap">
        <div className="lp-inner">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.gallery.tag}</span>
            <h2 className="lp-h2">{LP.gallery.heading}</h2>
          </Reveal>
          <Reveal className="lp-gallery lp-reveal" delay={1}>
            {LP.gallery.images.map((src, i) => (
              <button type="button" className="lp-gallery-item" key={src} onClick={() => setLb({ images: LP.gallery.images, index: i })} aria-label={`صورة ${i + 1}`}>
                <img src={src} alt={`نزل أثير — ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== VIDEO TOUR ===== */}
      <section className="lp-section lp-tour">
        <div className="lp-inner lp-center">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.tour.tag}</span>
            <h2 className="lp-h2">{LP.tour.heading}</h2>
            <p className="lp-lead">{LP.tour.body}</p>
          </Reveal>
          <Reveal className="lp-reveal" delay={1}>
            <div className="lp-tour-stage">
              <video
                ref={tourRef}
                className="lp-tour-video"
                src={LP.tour.src}
                poster={LP.tour.poster}
                playsInline
                controls={tourPlaying}
                preload="none"
              />
              {!tourPlaying && (
                <button type="button" className="lp-tour-play" onClick={playTour} aria-label={LP.tour.play}>
                  <span className="lp-tour-play-btn">
                    <span className="lp-tour-play-circle"><Ic name="play" /></span>
                    {LP.tour.play}
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== BOOKING FORM ===== */}
      <section className="lp-section lp-form-section">
        <div className="lp-inner lp-center">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.form.tag}</span>
            <h2 className="lp-h2">{LP.form.heading}</h2>
            <p className="lp-lead">{LP.form.body}</p>
          </Reveal>
          <Reveal className="lp-reveal" delay={1}>
            <form className="lp-form-card" onSubmit={submitBooking}>
              <div className="lp-form-grid">
                <div className="lp-field">
                  <label htmlFor="bk-name">{LP.form.fields.name}</label>
                  <input id="bk-name" type="text" required value={form.name} onChange={set("name")} placeholder={LP.form.placeholders.name} />
                </div>
                <div className="lp-field">
                  <label htmlFor="bk-phone">{LP.form.fields.phone}</label>
                  <input id="bk-phone" type="tel" required value={form.phone} onChange={set("phone")} placeholder={LP.form.placeholders.phone} dir="ltr" />
                </div>
                <div className="lp-field">
                  <label htmlFor="bk-unit">{LP.form.fields.unit}</label>
                  <select id="bk-unit" required value={form.unit} onChange={set("unit")}>
                    <option value="" disabled>{LP.form.unitPlaceholder}</option>
                    {LP.form.unitOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="lp-field">
                  <label htmlFor="bk-checkin">{LP.form.fields.checkin}</label>
                  <input id="bk-checkin" type="date" value={form.checkin} onChange={set("checkin")} />
                </div>
                <div className="lp-field full">
                  <label htmlFor="bk-nights">{LP.form.fields.nights}</label>
                  <input id="bk-nights" type="number" min="1" value={form.nights} onChange={set("nights")} placeholder={LP.form.placeholders.nights} dir="ltr" />
                </div>
              </div>
              <button type="submit" className="lp-btn lp-btn-wa lp-btn-block lp-form-submit">
                <SocialIcon name="whatsapp" />{LP.form.submit}
              </button>
              <p className="lp-form-reassure"><Ic name="check" />{LP.form.reassure}</p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="lp-section lp-faq">
        <div className="lp-inner lp-center">
          <Reveal className="lp-reveal">
            <span className="lp-tag">{LP.faq.tag}</span>
            <h2 className="lp-h2">{LP.faq.heading}</h2>
          </Reveal>
          <Reveal className="lp-faq-list lp-reveal" delay={1}>
            {LP.faq.items.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`lp-faq-item${isOpen ? " open" : ""}`} key={i}>
                  <button type="button" className="lp-faq-q" onClick={() => setOpenFaq(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span>{item.q}</span>
                    <span className={`lp-faq-q-icon${isOpen ? " open" : ""}`}>+</span>
                  </button>
                  <div className="lp-faq-a" style={{ maxHeight: isOpen ? 500 : 0 }}>
                    <div className="lp-faq-a-inner"><p>{item.a}</p></div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="lp-final">
        <Reveal className="lp-reveal">
          <span className="lp-final-tag">{LP.finalCta.tag}</span>
          <h2>{LP.finalCta.heading}</h2>
          <p>{LP.finalCta.body}</p>
          <div className="lp-final-actions">
            <a className="lp-btn lp-btn-wa lp-btn-lg" href={wa(LP.finalCta.waText)} target="_blank" rel="noopener noreferrer">
              <SocialIcon name="whatsapp" />{LP.finalCta.primary}
            </a>
            <a className="lp-final-call" href={LP.phoneHref}>
              <Ic name="phone" />{LP.finalCta.secondaryPrefix} <span dir="ltr">{LP.phoneLocal}</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="lp-footer">
        <img className="lp-footer-logo" src={atheerLogo} alt={LP.brand.name} />
        <div className="lp-footer-channels">
          <a className="lp-footer-channel" href={wa(LP.whatsappDefault)} target="_blank" rel="noopener noreferrer">
            <SocialIcon name="whatsapp" />واتساب
          </a>
          <a className="lp-footer-channel" href={LP.phoneHref}>
            <Ic name="phone" /><span>{LP.phoneLocal}</span>
          </a>
          <a className="lp-footer-channel" href={LP.maps.url} target="_blank" rel="noopener noreferrer">
            <Ic name="pin" />الموقع
          </a>
        </div>
        <p className="lp-footer-rights">{LP.footer.rights}</p>
        <p className="lp-footer-managed">{LP.footer.managed}</p>
      </footer>

      {/* ===== Floating (desktop) ===== */}
      <div className="lp-float">
        <a className="lp-float-btn wa" href={wa(LP.whatsappDefault)} target="_blank" rel="noopener noreferrer" aria-label="واتساب">
          <SocialIcon name="whatsapp" />
        </a>
        <a className="lp-float-btn call" href={LP.phoneHref} aria-label="اتصال">
          <Ic name="phone" />
        </a>
      </div>

      {/* ===== Sticky bottom bar (mobile) ===== */}
      <div className={`lp-sticky-bar${showBar ? " show" : ""}`}>
        <a className="lp-btn lp-btn-wa" href={wa(LP.hero.waText)} target="_blank" rel="noopener noreferrer">
          <SocialIcon name="whatsapp" />{LP.stickyCta}
        </a>
        <a className="lp-sticky-call" href={LP.phoneHref} aria-label="اتصال">
          <Ic name="phone" />
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
    </div>
  );
}
