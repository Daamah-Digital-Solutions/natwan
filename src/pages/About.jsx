import { Link } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { ArrowRight, ArrowDiag } from "../components/ui/icons";
import { about } from "../content/about";
import "../styles/about.css";

function SectionMarker({ num, label }) {
  return (
    <div className="section-marker">
      <span className="section-marker-num">{num}</span>
      <span className="section-marker-label">{label}</span>
    </div>
  );
}

export default function About() {
  const c = useContent(about);

  return (
    <div className="page-about">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero">
        <div className="page-hero-grain" />
        <div className="page-hero-inner">
          <Breadcrumb current={c.crumb} />
          <h1>
            <span className="word"><span>{c.hero.title[0]}</span></span>{" "}
            <span className="word"><span className="italic">{c.hero.title[1]}</span></span>{" "}
            <span className="word"><span>{c.hero.title[2]}</span></span>
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

      {/* ===== 01 STORY ===== */}
      <section className="section story light">
        <div className="section-inner">
          <Reveal className="story-banner">
            <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85" alt="Mountain range at dawn" />
            <div className="story-banner-caption">
              <div className="story-banner-quote">{c.story.bannerQuote}</div>
              <div className="story-banner-tag"><Rich text={c.story.bannerTag} /></div>
            </div>
          </Reveal>

          <div className="story-grid">
            <Reveal as="aside" className="story-aside">
              <SectionMarker num={c.story.markerNum} label={c.story.markerLabel} />
              <h2><Rich text={c.story.heading} /></h2>
              <p className="story-aside-quote">{c.story.asideQuote}</p>
            </Reveal>

            <Reveal className="story-main" delay={1}>
              <p className="lead"><Rich text={c.story.lead} /></p>
              <p>{c.story.para2}</p>
              <div className="story-name-meaning">
                <div className="story-name-meaning-label">{c.story.nameMeaning.label}</div>
                <div className="story-name-meaning-word">
                  <span>{c.story.nameMeaning.word}</span>
                  <span className="story-name-meaning-pron">{c.story.nameMeaning.pron}</span>
                </div>
                <div className="story-name-meaning-desc"><Rich text={c.story.nameMeaning.desc} /></div>
              </div>
              <p>{c.story.para3}</p>
              <div className="story-inline-image">
                <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85" alt="Architectural detail" />
                <div className="story-inline-image-caption">{c.story.inlineCaption}</div>
              </div>
              <p>{c.story.para4}</p>
              <p>{c.story.para5}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 02 TIMELINE ===== */}
      <section className="section timeline dark">
        <div className="section-inner">
          <div className="timeline-inner-wrapper">
            <Reveal className="timeline-header">
              <div>
                <SectionMarker num={c.timeline.markerNum} label={c.timeline.markerLabel} />
                <h2><Rich text={c.timeline.heading} /></h2>
              </div>
              <div className="timeline-header-aside"><p>{c.timeline.aside}</p></div>
            </Reveal>
            <Reveal className="timeline-track" delay={1}>
              <div className="timeline-events">
                {c.timeline.events.map((e, i) => (
                  <div className="timeline-event" key={i}>
                    <div className="timeline-year">{e.year}</div>
                    <div className="timeline-title">{e.title}</div>
                    <div className="timeline-desc">{e.desc}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 03 VISION & MISSION ===== */}
      <section className="section vision-mission light">
        <div className="section-inner">
          <Reveal className="vm-header">
            <SectionMarker num={c.vm.markerNum} label={c.vm.markerLabel} />
            <h2><Rich text={c.vm.heading} /></h2>
          </Reveal>
          <Reveal className="vm-grid" delay={1}>
            {c.vm.cards.map((card, i) => (
              <div className="vm-card" key={i}>
                <div className="vm-card-image"><img src={card.image} alt="" /></div>
                <div className="vm-card-label">{card.label}</div>
                <h3><Rich text={card.title} /></h3>
                <p className="vm-card-quote">{card.quote}</p>
                <p className="vm-card-body">{card.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== 04 VALUES DEEP ===== */}
      <section className="section values-deep dark">
        <div className="section-inner values-deep-inner">
          <Reveal className="values-deep-header">
            <SectionMarker num={c.valuesDeep.markerNum} label={c.valuesDeep.markerLabel} />
            <h2><Rich text={c.valuesDeep.heading} /></h2>
            <p>{c.valuesDeep.intro}</p>
          </Reveal>
          <Reveal className="values-deep-list" delay={1}>
            {c.valuesDeep.items.map((v, i) => (
              <div className="values-deep-item" key={i}>
                <div className="values-deep-num">{v.num}</div>
                <div className="values-deep-title-block">
                  <h3>{v.title}</h3>
                  <div className="values-deep-tagline">{v.tagline}</div>
                </div>
                <div className="values-deep-desc">{v.desc}</div>
                <div className="values-deep-image"><img src={v.image} alt="" /></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== 05 APPROACH ===== */}
      <section className="section approach light">
        <div className="section-inner">
          <Reveal className="approach-banner">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=85" alt="Modern office" />
            <div className="approach-banner-text">
              <div className="approach-banner-quote">{c.approach.bannerQuote}</div>
              <div className="approach-banner-tag"><Rich text={c.approach.bannerTag} /></div>
            </div>
          </Reveal>
          <Reveal className="approach-header">
            <div>
              <SectionMarker num={c.approach.markerNum} label={c.approach.markerLabel} />
              <h2><Rich text={c.approach.heading} /></h2>
            </div>
            <div className="approach-header-aside"><p>{c.approach.aside}</p></div>
          </Reveal>
          <Reveal className="approach-steps" delay={1}>
            {c.approach.steps.map((s, i) => (
              <div className="approach-step" key={i}>
                <div className="approach-step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== 06 CHAIRMAN ===== */}
      <section className="section chairman light" id="chairman">
        <div className="section-inner">
          <div className="chairman-inner">
            <Reveal className="chairman-content">
              <SectionMarker num={c.chairman.markerNum} label={c.chairman.markerLabel} />
              <h2><Rich text={c.chairman.heading} /></h2>
              {c.chairman.quotes.map((q, i) => (
                <p className="chairman-quote" key={i}><Rich text={q} /></p>
              ))}
              <div className="chairman-signature">
                <div className="chairman-sig-title">{c.chairman.sigTitle}</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 07 NUMBERS ===== */}
      <section className="section numbers dark">
        <div className="section-inner">
          <Reveal className="numbers-header">
            <SectionMarker num={c.numbers.markerNum} label={c.numbers.markerLabel} />
            <h2><Rich text={c.numbers.heading} /></h2>
          </Reveal>
          <Reveal className="numbers-grid" delay={1}>
            {c.numbers.cells.map((n, i) => (
              <div className="number-cell" key={i}>
                <div className="number-cell-label">{n.label}</div>
                <div className="number-cell-num">{n.num}{n.symbol && <span className="symbol">{n.symbol}</span>}</div>
                <div className="number-cell-desc">{n.desc}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== 08 CTA ===== */}
      <section className="section cta-block dark" id="contact">
        <div className="section-inner">
          <div className="cta-block-inner">
            <div className="cta-block-eyebrow">
              <span className="mark">◆</span>
              <span>{c.cta.eyebrow}</span>
            </div>
            <h2><Rich text={c.cta.heading} /></h2>
            <p>{c.cta.body}</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-sand">
                <span>{c.cta.primary}</span>
                <ArrowDiag />
              </Link>
              <Link to="/sectors" className="btn btn-ghost-light">
                <span>{c.cta.secondary}</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
