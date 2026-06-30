import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import { ArrowRight, ArrowDiag, Check } from "../components/ui/icons";
import { home } from "../content/home";
import "../styles/home.css";

const VALUE_ICONS = [
  <path key="i" d="M16 4 L20 13 L29 14 L22 21 L24 30 L16 25 L8 30 L10 21 L3 14 L12 13 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />,
  <g key="i"><path d="M16 3 L27 8 V18 C27 23 22 28 16 30 C10 28 5 23 5 18 V8 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" /><path d="M11 16 L15 20 L22 12" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>,
  <g key="i"><circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.4" fill="none" /><path d="M16 3 V16 L24 24" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" /><circle cx="16" cy="16" r="2" fill="currentColor" /></g>,
  <g key="i"><rect x="5" y="10" width="22" height="18" stroke="currentColor" strokeWidth="1.4" fill="none" /><path d="M11 10 V6 C11 4 12 3 14 3 H18 C20 3 21 4 21 6 V10" stroke="currentColor" strokeWidth="1.4" fill="none" /><path d="M16 16 V22 M12 19 H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></g>,
  <g key="i"><circle cx="11" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" fill="none" /><circle cx="22" cy="14" r="4" stroke="currentColor" strokeWidth="1.4" fill="none" /><path d="M3 28 C3 23 7 20 11 20 C15 20 19 23 19 28" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" /><path d="M19 28 C19 25 22 22 25 22 C28 22 30 25 30 27" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" /></g>,
];

function SectionMarker({ num, label }) {
  return (
    <div className="section-marker">
      <span className="section-marker-num">{num}</span>
      <span className="section-marker-label">{label}</span>
    </div>
  );
}

export default function Home() {
  const c = useContent(home);
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    if (!hero || !bg) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      bg.style.transform = `translate(${x * -16}px, ${y * -16}px)`;
    };
    const onLeave = () => { bg.style.transform = "translate(0,0)"; };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="page-home">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-bg-img" ref={bgRef}>
            <img src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85" alt="Dammam skyline" />
          </div>
        </div>
        <div className="hero-mountains">
          <svg viewBox="0 0 1440 280" preserveAspectRatio="none" fill="none">
            <path className="layer-1" d="M0 280 L0 180 L100 130 L240 170 L380 110 L520 140 L640 95 L780 130 L920 105 L1060 145 L1200 100 L1340 130 L1440 110 L1440 280 Z" fill="#264726" />
            <path className="layer-2" d="M0 280 L0 210 L120 155 L260 195 L400 145 L540 175 L680 130 L820 170 L960 140 L1100 180 L1240 145 L1380 175 L1440 155 L1440 280 Z" fill="#1a311a" />
            <path className="layer-3" d="M0 280 L0 240 L80 200 L200 230 L320 195 L460 220 L600 185 L740 215 L880 190 L1020 225 L1160 200 L1300 235 L1440 215 L1440 280 Z" fill="#11210f" />
          </svg>
        </div>
        <div className="hero-grain" />
        <div className="hero-grid" />

        <div className="hero-content">
          <div>
            <div className="hero-eyebrow">
              <span className="line" />
              <span><span className="mark">◆</span>{c.hero.eyebrow}</span>
            </div>
            <h1>
              <span className="word"><span>{c.hero.title[0]}</span></span><br />
              <span className="word"><span className="italic">{c.hero.title[1]}</span></span>
              <span className="ornament">—</span>
              <span className="word"><span className="italic">{c.hero.title[2]}</span></span>
            </h1>
          </div>

          <div className="hero-bottom">
            <div>
              <p className="hero-lede"><Rich text={c.hero.lede} /></p>
              <div className="hero-actions">
                <Link to="/sectors" className="btn btn-sand">
                  <span>{c.hero.primary}</span>
                  <ArrowRight />
                </Link>
                <a href="/natwan-company-profile.pdf" download="Natwan Company Profile.pdf" className="btn btn-ghost-light"><span>{c.hero.secondary}</span></a>
              </div>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-label">{c.hero.metaLabel}</div>
              <div className="hero-stats">
                {c.hero.stats.map((s, i) => (
                  <div key={i}>
                    <div className="hero-stat-num">{s.num}{s.symbol && <span className="symbol">{s.symbol}</span>}</div>
                    <div className="hero-stat-label"><Rich text={s.label} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about light" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <Reveal as="aside" className="about-aside">
              <SectionMarker num={c.about.markerNum} label={c.about.markerLabel} />
              <h2><Rich text={c.about.heading} /></h2>
              <p className="about-aside-lede">{c.about.lede}</p>
              <div className="about-meta">
                {c.about.meta.map((m, i) => (
                  <div className="about-meta-item" key={i}>
                    <div className="label">{m.label}</div>
                    <div className="value">{m.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="about-main" delay={1}>
              <p className="lead"><Rich text={c.about.lead} /></p>
              <p>{c.about.paras[0]}</p>
              <div className="pullquote">
                <div className="pullquote-text">{c.about.pullquote.text}</div>
                <div className="pullquote-attr">{c.about.pullquote.attr}</div>
              </div>
              <p>{c.about.paras[1]}</p>
              <div className="about-feature">
                <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85" alt="Mountain range" />
                <div className="about-feature-meta">
                  <div className="about-feature-quote">{c.about.feature.quote}</div>
                  <div className="about-feature-tag"><Rich text={c.about.feature.tag} /></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="section values dark">
        <div className="section-inner">
          <Reveal className="values-header">
            <div>
              <SectionMarker num={c.values.markerNum} label={c.values.markerLabel} />
              <h2><Rich text={c.values.heading} /></h2>
            </div>
            <div className="values-header-aside"><p>{c.values.aside}</p></div>
          </Reveal>
          <Reveal className="values-grid" delay={1}>
            {c.values.cells.map((v, i) => (
              <div className="value-cell" key={i}>
                <svg className="value-icon" viewBox="0 0 32 32" fill="none">{VALUE_ICONS[i]}</svg>
                <div className="value-cell-num">{v.num}</div>
                <div className="value-cell-title">{v.title}</div>
                <div className="value-cell-desc">{v.desc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== SECTORS ===== */}
      <section className="sectors light" id="sectors">
        <Reveal className="sectors-header">
          <h2><Rich text={c.sectors.heading} /></h2>
          <div className="sectors-header-aside">
            <SectionMarker num={c.sectors.markerNum} label={c.sectors.markerLabel} />
            <p>{c.sectors.aside}</p>
          </div>
        </Reveal>

        {c.sectors.items.map((s) => {
          const index = (
            <div className="sector-index">
              <span className="sector-index-label">{c.sectors.indexLabel}</span>
              <span className="sector-index-num">{s.num}</span>
              <span className="sector-index-bar" />
            </div>
          );
          const content = (
            <div className="sector-content">
              <div>
                <div className="sector-tag">{s.tag}</div>
                <h3><Rich text={s.title} /></h3>
                <p className="sector-quote">{s.quote}</p>
                <p className="sector-desc">{s.desc}</p>
                <ul className="sector-features">
                  {s.features.map((f, fi) => (<li key={fi}><Check />{f}</li>))}
                </ul>
              </div>
              <Link to="/sectors" className="sector-link">{s.link}<ArrowRight className="" /></Link>
            </div>
          );
          const image = (
            <div className="sector-image">
              <img src={s.image} alt={s.title.replace("\n", " ")} />
              <div className="sector-image-tag">{s.tagText}</div>
            </div>
          );
          return (
            <Reveal className={`sector${s.reverse ? " reverse" : ""}`} key={s.num} id={`sector-${s.num}`}>
              <div className="sector-grid">
                {s.reverse ? <>{image}{content}{index}</> : <>{index}{content}{image}</>}
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* ===== METHODOLOGY ===== */}
      <section className="section approach dark" id="approach">
        <div className="approach-inner">
          <Reveal className="approach-header">
            <div>
              <SectionMarker num={c.method.markerNum} label={c.method.markerLabel} />
              <h2><Rich text={c.method.heading} /></h2>
            </div>
            <div className="approach-header-aside"><p>{c.method.aside}</p></div>
          </Reveal>
          <Reveal className="method-table" delay={1}>
            {c.method.rows.map((r, i) => (
              <div className="method-row" key={i}>
                <div className="method-num">{r.num}</div>
                <div className="method-title">{r.title}</div>
                <div className="method-desc">{r.desc}</div>
                <div className="method-arrow">
                  {r.star ? (
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 1L9 5L13 7L9 9L7 13L5 9L1 7L5 5Z" fill="currentColor" /></svg>
                  ) : (
                    <svg viewBox="0 0 22 22" fill="none"><path d="M1 11H21M21 11L11 1M21 11L11 21" stroke="currentColor" strokeWidth="1.4" /></svg>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section className="section portfolio light" id="portfolio">
        <div className="section-inner">
          <Reveal className="portfolio-header">
            <h2><Rich text={c.portfolio.heading} /></h2>
            <div className="portfolio-header-aside">
              <SectionMarker num={c.portfolio.markerNum} label={c.portfolio.markerLabel} />
              <p>{c.portfolio.aside}</p>
            </div>
          </Reveal>
          <Reveal className="portfolio-grid" delay={1}>
            {c.portfolio.cards.map((p, i) => (
              <div className={`portfolio-card${p.tall ? " tall" : ""}`} key={i}>
                <img src={p.image} alt={p.title.replace("\n", " ")} />
                <div className="portfolio-card-content">
                  <div className="portfolio-card-meta">
                    <span className="portfolio-card-tag">{p.tag}</span>
                    <span className="portfolio-card-num">{p.num}</span>
                  </div>
                  <div className="portfolio-card-info">
                    <div className="portfolio-card-title"><Rich text={p.title} /></div>
                    <div className="portfolio-card-location">{p.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="portfolio-cta">
            <Link to="/projects">{c.portfolio.cta}<ArrowRight className="" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===== WHY ===== */}
      <section className="section why dark">
        <div className="section-inner">
          <Reveal className="why-header">
            <div>
              <SectionMarker num={c.why.markerNum} label={c.why.markerLabel} />
              <h2><Rich text={c.why.heading} /></h2>
            </div>
            <div className="why-header-aside"><p>{c.why.aside}</p></div>
          </Reveal>
          <Reveal className="why-grid" delay={1}>
            {c.why.cells.map((w, i) => (
              <div className="why-cell" key={i}>
                <div className="why-cell-num">{w.num}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== VISION ===== */}
      <section className="section vision light" id="vision">
        <div className="section-inner">
          <div className="vision-grid">
            <Reveal className="vision-content">
              <SectionMarker num={c.vision.markerNum} label={c.vision.markerLabel} />
              <h2><Rich text={c.vision.heading} /></h2>
              <p>{c.vision.body}</p>
              <div className="vision-pillars">
                {c.vision.pillars.map((p, i) => (
                  <div className="vision-pillar" key={i}>
                    <span className="vision-pillar-num">{p.num}</span>
                    <span className="vision-pillar-name">{p.name}</span>
                    <span className="vision-pillar-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1 10H19M19 10L11 2M19 10L11 18" stroke="currentColor" strokeWidth="1.4" /></svg>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="vision-visual" delay={1}>
              <img src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85" alt="Dammam future" />
              <div className="vision-corner"><span>{c.vision.corner}</span></div>
              <div className="vision-2030-num">2030</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CHAIRMAN ===== */}
      <section className="section chairman dark" id="chairman">
        <div className="section-inner">
          <div className="chairman-inner">
            <Reveal className="chairman-content">
              <SectionMarker num={c.chairman.markerNum} label={c.chairman.markerLabel} />
              <h2><Rich text={c.chairman.heading} /></h2>
              <p className="chairman-quote"><Rich text={c.chairman.quote} /></p>
              <div className="chairman-signature">
                <div className="chairman-sig-title">{c.chairman.sigTitle}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section contact dark" id="contact">
        <div className="section-inner">
          <div className="contact-inner">
            <Reveal className="contact-content">
              <SectionMarker num={c.contact.markerNum} label={c.contact.markerLabel} />
              <h2><Rich text={c.contact.heading} /></h2>
              <p>{c.contact.body}</p>
              <Link to="/contact" className="btn btn-sand">
                <span>{c.contact.cta}</span>
                <ArrowDiag />
              </Link>
            </Reveal>
            <Reveal className="contact-info" delay={1}>
              {c.contact.rows.map((r, i) => (
                <div className="contact-row" key={i}>
                  <span className="contact-label">{r.label}</span>
                  {r.href ? (
                    <a
                      href={r.href}
                      className="contact-value"
                      {...(/^https?:/.test(r.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >{r.value}</a>
                  ) : (
                    <span className="contact-value">{r.value}</span>
                  )}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
