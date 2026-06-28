import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { ArrowDiag, ArrowRight } from "../components/ui/icons";
import { scrollToId } from "../lib/scroll";
import { faq } from "../content/faq";
import "../styles/faq.css";

function AnswerBlock({ block }) {
  if (block.p) return <p><Rich text={block.p} /></p>;
  if (block.list)
    return (
      <ul>
        {block.list.map((li, i) => (
          <li key={i}><strong>{li.strong}</strong>{li.text}</li>
        ))}
      </ul>
    );
  if (block.note)
    return (
      <div className="placeholder-note">
        <span className="label">{block.note.label}</span> {block.note.text}
      </div>
    );
  return null;
}

export default function Faq() {
  const c = useContent(faq);
  const [open, setOpen] = useState(null); // single-open accordion, keyed by item num
  const [activeCat, setActiveCat] = useState(c.categories[0].id);

  useEffect(() => {
    const cats = c.categories.map((cat) => document.getElementById(cat.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCat(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    cats.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [c.categories]);

  return (
    <div className="page-faq">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-inner">
          <Breadcrumb current={c.crumb} />
          <div className="hero-eyebrow">
            <span className="line" />
            <span>{c.hero.eyebrow}</span>
          </div>
          <div className="hero-content">
            <div>
              <h1>
                {c.hero.title.map((w, i) => (
                  <span className="word" key={i}><span><Rich text={w} /></span></span>
                ))}
              </h1>
              <p className="hero-lede">{c.hero.lede}</p>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-label">{c.hero.statsLabel}</div>
              <ul className="hero-stat-list">
                {c.hero.stats.map((s, i) => (
                  <li className="hero-stat-item" key={i}>
                    <span className="label">{s.label}</span>
                    <span className="value">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY CATEGORY NAV ===== */}
      <nav className="cat-nav-wrap" id="catNav">
        <div className="cat-nav">
          {c.nav.map((n) => (
            <a
              key={n.to}
              href={`#${n.to}`}
              className={`cat-nav-link${activeCat === n.to ? " active" : ""}`}
              data-cat={n.num}
              onClick={(e) => { e.preventDefault(); scrollToId(n.to); }}
            >
              <span className="num">{n.num}</span>
              <span>{n.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ===== CATEGORIES ===== */}
      {c.categories.map((cat) => (
        <section className={`faq-category ${cat.theme}`} id={cat.id} key={cat.id}>
          <div className="faq-cat-inner">
            <Reveal as="aside" className="faq-cat-aside">
              <span className="faq-cat-num">{cat.num}</span>
              <div className="faq-cat-label">{cat.label}</div>
              <h2 className="faq-cat-title"><Rich text={cat.title} /></h2>
              <p className="faq-cat-desc">{cat.desc}</p>
              <div className="faq-cat-count">
                <span className="accent">{cat.count}</span> &nbsp; {c.qLabel}
              </div>
            </Reveal>

            <Reveal className="faq-list" delay={1}>
              {cat.items.map((item) => {
                const isOpen = open === item.num;
                return (
                  <div className={`faq-item${isOpen ? " open" : ""}`} key={item.num}>
                    <button
                      className="faq-question"
                      onClick={() => setOpen(isOpen ? null : item.num)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-num">{item.num}</span>
                      <span className="faq-question-text">{item.q}</span>
                      <span className="faq-question-toggle" />
                    </button>
                    <div className="faq-answer">
                      <div className="faq-answer-content">
                        {item.a.map((b, bi) => (<AnswerBlock block={b} key={bi} />))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>
      ))}

      {/* ===== CLOSING ===== */}
      <section className="closing">
        <div className="closing-inner">
          <div className="closing-eyebrow">{c.closing.eyebrow}</div>
          <h2><Rich text={c.closing.heading} /></h2>
          <p>{c.closing.body}</p>
          <div className="closing-actions">
            <Link to="/contact" className="btn btn-sand">
              <span>{c.closing.primary}</span>
              <ArrowDiag />
            </Link>
            <Link to="/sectors" className="btn btn-ghost">
              <span>{c.closing.secondary}</span>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
