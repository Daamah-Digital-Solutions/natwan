import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { useLang, useContent } from "../../i18n/LanguageProvider";
import { ui } from "../../content/ui";
import { ArrowDiag } from "../ui/icons";
import logoUrl from "../../images/natwan-logo.svg";

export default function Header() {
  const { lang, toggle } = useLang();
  const c = useContent(ui);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-active" : ""}`} id="siteHeader">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img src={logoUrl} alt={c.brand} className="brand-logo" />
        </Link>

        <ul className="nav-links">
          {c.nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="header-actions">
          <button
            type="button"
            className="lang-switch"
            onClick={toggle}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "active" : undefined}>EN</span>
            <span className="sep">/</span>
            <span className={lang === "ar" ? "active" : undefined}>AR</span>
          </button>
          <Link to="/contact" className="header-cta">
            {c.contactCta}
            <ArrowDiag className="" />
          </Link>
          <button
            type="button"
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          type="button"
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <nav className="mobile-menu-nav">
          {c.nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `mobile-menu-link${isActive ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-menu-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <button
            type="button"
            className="mobile-lang-switch"
            onClick={toggle}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "active" : undefined}>EN</span>
            <span className="sep">/</span>
            <span className={lang === "ar" ? "active" : undefined}>AR</span>
          </button>
          <Link to="/contact" className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>
            {c.contactCta}
            <ArrowDiag className="" />
          </Link>
        </div>
      </div>
    </header>
  );
}
