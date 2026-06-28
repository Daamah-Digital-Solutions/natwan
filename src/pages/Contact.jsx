import { useState } from "react";
import { useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Reveal from "../components/ui/Reveal";
import Breadcrumb from "../components/ui/Breadcrumb";
import { contact } from "../content/contact";
import "../styles/contact.css";

// Inline channel icons (aside, 32x32 viewBox).
const CHANNEL_ICONS = {
  address: (
    <svg className="channel-icon" viewBox="0 0 32 32" fill="none">
      <path d="M16 18 C20 18 27 22 27 28 L5 28 C5 22 12 18 16 18 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M16 4 L21 8 L16 16 L11 8 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg className="channel-icon" viewBox="0 0 32 32" fill="none">
      <path d="M9 4 L13 4 L15 11 L11 13 C12 17 15 20 19 21 L21 17 L28 19 L28 23 C28 25 26 27 24 27 C14 27 5 18 5 8 C5 6 7 4 9 4 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  whatsapp: (
    <svg className="channel-icon" viewBox="0 0 32 32" fill="none">
      <path d="M16 4 C9 4 4 9 4 16 C4 19 5 21 6 23 L4 28 L10 27 C12 28 14 28 16 28 C23 28 28 23 28 16 C28 9 23 4 16 4 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M12 11 C12 11 13 17 16 19 C19 21 22 21 22 21 L22 18 L19 17 L17 19 C15 18 14 17 13 15 L15 13 L14 10 Z" fill="currentColor" />
    </svg>
  ),
  email: (
    <svg className="channel-icon" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="7" width="24" height="18" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4 9 L16 18 L28 9" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  clock: (
    <svg className="channel-icon" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M16 8 V16 L21 19" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// Larger icons for the quick-channel cards (44x44).
const CARD_ICONS = {
  phone: (
    <svg className="channel-card-icon" viewBox="0 0 44 44" fill="none">
      <path d="M12 5 L18 5 L21 15 L15 18 C16 23 21 28 26 29 L29 23 L39 26 L39 32 C39 35 36 38 33 38 C19 38 6 25 6 11 C6 8 9 5 12 5 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  ),
  whatsapp: (
    <svg className="channel-card-icon" viewBox="0 0 44 44" fill="none">
      <path d="M22 5 C12 5 5 12 5 22 C5 26 6 29 8 32 L5 39 L13 37 C16 39 19 39 22 39 C32 39 39 32 39 22 C39 12 32 5 22 5 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M16 14 C16 14 17 22 22 26 C27 30 32 30 32 30 L32 25 L27 23 L24 26 C21 24 19 22 17 19 L20 16 L18 11 Z" fill="currentColor" />
    </svg>
  ),
  email: (
    <svg className="channel-card-icon" viewBox="0 0 44 44" fill="none">
      <rect x="5" y="9" width="34" height="26" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M5 12 L22 25 L39 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Contact() {
  const c = useContent(contact);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    alert(c.form.alert);
  };

  return (
    <div className="page-contact">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <Breadcrumb current={c.crumb} />
            <div className="hero-eyebrow">{c.hero.eyebrow}</div>
            <h1>
              <span className="word"><span>{c.hero.title[0]}</span></span><br />
              <span className="word"><span><Rich text={c.hero.title[1]} /></span></span>
            </h1>
            <p className="hero-lede">{c.hero.lede}</p>
          </div>
          <div className="hero-aside">
            <div className="diamond">◆</div>
            <div className="hero-aside-tag"><Rich text={c.hero.asideTag} /></div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTACT ===== */}
      <section className="contact-main">
        <div className="contact-main-inner">
          <Reveal as="aside" className="contact-aside">
            <div className="contact-aside-label">{c.main.label}</div>
            <h2><Rich text={c.main.heading} /></h2>
            <p className="contact-aside-body">{c.main.body}</p>
            <div className="channels">
              {c.main.channels.map((ch, i) => {
                const inner = (
                  <>
                    {CHANNEL_ICONS[ch.icon]}
                    <div className="channel-content">
                      <div className="label">{ch.label}</div>
                      <div
                        className={`value${ch.placeholder ? " placeholder" : ""}`}
                        dir={["phone", "whatsapp", "email"].includes(ch.icon) ? "ltr" : undefined}
                      >{ch.value}</div>
                    </div>
                    {ch.arrow && <span className="channel-arrow">→</span>}
                  </>
                );
                return ch.href ? (
                  <a
                    href={ch.href}
                    className="channel"
                    key={i}
                    {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >{inner}</a>
                ) : (
                  <div className="channel" key={i}>{inner}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={1}>
            <div className="form-header">
              <div className="form-header-label">{c.form.label}</div>
              <h3><Rich text={c.form.heading} /></h3>
              <p>{c.form.intro}</p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label><span className="num">01.</span> {c.form.fields.name.label}</label>
                  <input type="text" placeholder={c.form.fields.name.ph} value={form.name} onChange={onChange("name")} required />
                </div>
                <div className="form-field">
                  <label><span className="num">02.</span> {c.form.fields.email.label}</label>
                  <input type="email" placeholder={c.form.fields.email.ph} value={form.email} onChange={onChange("email")} required />
                </div>
                <div className="form-field">
                  <label><span className="num">03.</span> {c.form.fields.phone.label}</label>
                  <input type="tel" placeholder={c.form.fields.phone.ph} value={form.phone} onChange={onChange("phone")} />
                </div>
                <div className="form-field">
                  <label><span className="num">04.</span> {c.form.fields.subject.label}</label>
                  <select value={form.subject} onChange={onChange("subject")} required>
                    <option value="">{c.form.fields.subject.ph}</option>
                    {c.form.subjects.map((s) => (
                      <option value={s.value} key={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field full">
                  <label><span className="num">05.</span> {c.form.fields.message.label}</label>
                  <textarea placeholder={c.form.fields.message.ph} rows="5" value={form.message} onChange={onChange("message")} required />
                </div>
              </div>
              <div className="form-submit">
                <div className="form-note"><Rich text={c.form.note} /></div>
                <button type="submit" className="btn-submit">
                  <span>{c.form.submit}</span>
                  <svg viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.4" /></svg>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="map-section">
        <Reveal className="map-header">
          <div>
            <div className="map-header-label">{c.map.label}</div>
            <h2><Rich text={c.map.heading} /></h2>
          </div>
          <div className="map-header-aside"><p>{c.map.aside}</p></div>
        </Reveal>
        <Reveal className="map-container" delay={1}>
          <iframe
            className="map-frame"
            src={c.map.embedSrc}
            title={c.map.pinAccent}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-corners" />
          <div className="map-overlay-info">
            <div className="label">{c.map.overlayLabel}</div>
            <div className="value">{c.map.overlayValue}</div>
            <a className="map-overlay-link" href={c.map.url} target="_blank" rel="noopener noreferrer">
              {c.map.cta} →
            </a>
          </div>
        </Reveal>
        <div className="map-footer">
          <span><span className="accent">{c.map.footerAccent}</span> &nbsp; <span dir="ltr">{c.map.footerCoord}</span></span>
          <span>{c.map.footerTz}</span>
        </div>
      </section>

      {/* ===== QUICK CHANNELS ===== */}
      <section className="channels-section">
        <div className="channels-inner">
          <Reveal className="channels-header">
            <div className="channels-eyebrow">{c.quick.eyebrow}</div>
            <h2><Rich text={c.quick.heading} /></h2>
            <p>{c.quick.body}</p>
          </Reveal>
          <Reveal className="channels-grid" delay={1}>
            {c.quick.cards.map((card, i) => (
              <a
                href={card.href}
                className="channel-card"
                key={i}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {CARD_ICONS[card.icon]}
                <div className="channel-card-label">{card.label}</div>
                <h3>{card.title}</h3>
                <span
                  className="channel-card-value"
                  dir={["phone", "whatsapp", "email"].includes(card.icon) ? "ltr" : undefined}
                >{card.value}</span>
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="closing">
        <Reveal className="closing-inner">
          <h2><Rich text={c.closing.heading} /></h2>
          <p>{c.closing.body}</p>
        </Reveal>
      </section>
    </div>
  );
}
