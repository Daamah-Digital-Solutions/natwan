import { Link } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { ArrowDiag } from "../components/ui/icons";
import { scrollToId } from "../lib/scroll";
import { sectors } from "../content/sectors";
import "../styles/sectors.css";

function SectorId({ num, label }) {
  return (
    <div className="sector-id">
      <span className="num">{num}</span>
      <span className="line" />
      <span>{label}</span>
    </div>
  );
}

export default function Sectors() {
  const c = useContent(sectors);

  return (
    <div className="page-sectors">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-content">
          <Breadcrumb current={c.crumb} />
          <div className="hero-eyebrow">{c.hero.eyebrow}</div>
          <h1>
            <span className="word"><span>{c.hero.title[0]}</span></span>{" "}
            <span className="word"><span><Rich text={c.hero.title[1]} /></span></span>
          </h1>
          <p className="hero-tagline">{c.hero.tagline}</p>
          <p className="hero-lede">{c.hero.lede}</p>
          <div className="hero-nav">
            {c.hero.nav.map((n) => (
              <a
                key={n.to}
                href={`#${n.to}`}
                onClick={(e) => { e.preventDefault(); scrollToId(n.to); }}
              >
                <div className="hero-nav-num">{n.num}</div>
                <div className="hero-nav-name">{n.name}</div>
              </a>
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

      {/* ===== SECTOR 01 ===== */}
      <section className="sector sector-01 light" id="sector-01">
        <div className="sector-inner">
          <div className="s01-grid">
            <Reveal className="s01-content">
              <SectorId num={c.s01.num} label={c.s01.idLabel} />
              <h2 className="s01-title">{c.s01.title}</h2>
              <p className="s01-tagline">{c.s01.tagline}</p>
              <p className="s01-body">{c.s01.body}</p>
            </Reveal>
            <Reveal className="s01-image" delay={1}>
              <span className="s01-image-tag">{c.s01.imageTag}</span>
              <img src={c.s01.image} alt="Contracting" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTOR 02 ===== */}
      <section className="sector-02" id="sector-02">
        <div className="s02-inner">
          <div className="s02-grid">
            <Reveal>
              <SectorId num={c.s02.num} label={c.s02.idLabel} />
              <h2 className="s02-title"><Rich text={c.s02.title} /></h2>
              <p className="s02-tagline">{c.s02.tagline}</p>
              <p className="s02-body">{c.s02.body}</p>
            </Reveal>
            <Reveal className="s02-meta" delay={1}>
              <div className="s02-meta-quote">{c.s02.metaQuote}</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTOR 03 ===== */}
      <section className="sector-03 light" id="sector-03">
        <Reveal className="s03-header">
          <SectorId num={c.s03.num} label={c.s03.idLabel} />
          <div className="s03-title-row">
            <h2 className="s03-title"><Rich text={c.s03.title} /></h2>
            <div className="s03-tagline">{c.s03.tagline}</div>
          </div>
        </Reveal>
        <Reveal className="s03-body-row" delay={1}>
          <div className="s03-meta">
            <span className="accent">{c.s03.metaAccent}</span><br />
            <Rich text={c.s03.metaLines} />
          </div>
          <div className="s03-body">{c.s03.body}</div>
        </Reveal>
        <Reveal className="s03-image-strip">
          {c.s03.images.map((src, i) => (
            <div className={`s03-img${i === 1 ? " center" : ""}`} key={i}>
              <img src={src} alt="" />
            </div>
          ))}
        </Reveal>
      </section>

      {/* ===== SECTOR 04 ===== */}
      <section className="sector sector-04 dark" id="sector-04">
        <div className="sector-inner s04-inner">
          <div className="s04-grid">
            <Reveal>
              <SectorId num={c.s04.num} label={c.s04.idLabel} />
              <h2 className="s04-title"><Rich text={c.s04.title} /></h2>
              <div className="s04-tagline-card">
                <div className="s04-tagline-label">{c.s04.taglineLabel}</div>
                <div className="s04-tagline-text">{c.s04.taglineText}</div>
              </div>
            </Reveal>
            <Reveal className="s04-body-block" delay={1}>
              <p className="s04-body"><Rich text={c.s04.body} /></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTOR 05 ===== */}
      <section className="sector-05 light" id="sector-05">
        <div className="s05-bg-numeral">05.</div>
        <Reveal className="s05-inner">
          <SectorId num={c.s05.num} label={c.s05.idLabel} />
          <p className="s05-tagline">{c.s05.tagline}</p>
          <h2 className="s05-title"><Rich text={c.s05.title} /></h2>
          <div className="s05-divider">
            <span className="line" />
            <span className="diamond">◆</span>
            <span className="line" />
          </div>
          <p className="s05-body">{c.s05.body}</p>
        </Reveal>
      </section>

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
    </div>
  );
}
