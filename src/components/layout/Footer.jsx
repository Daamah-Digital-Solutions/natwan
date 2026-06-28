import { Link } from "react-router";
import { useContent } from "../../i18n/LanguageProvider";
import { ui } from "../../content/ui";
import SocialLinks from "../ui/SocialLinks";
import logoUrl from "../../images/natwan-logo.svg";

function FooterLink({ link }) {
  if (link.to) return <Link to={link.to}>{link.label}</Link>;
  // Phone/email are left-to-right data; keep them LTR inside the RTL footer.
  const dir =
    link.href?.startsWith("tel:") || link.href?.startsWith("mailto:") ? "ltr" : undefined;
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" dir={dir}>
        {link.label}
      </a>
    );
  }
  return (
    <a href={link.href} dir={dir}>
      {link.label}
    </a>
  );
}

export default function Footer() {
  const c = useContent(ui);
  const f = c.footer;
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link to="/" className="brand">
            <img src={logoUrl} alt={c.brand} className="brand-logo" />
          </Link>
          <p>{f.blurb}</p>
          <SocialLinks />
          <a
            href="/natwan-company-profile.pdf"
            download="Natwan Company Profile.pdf"
            className="footer-profile"
          >
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5v8m0 0L4.8 6.3M8 9.5l3.2-3.2M2.5 13.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{f.profileCta}</span>
          </a>
        </div>

        {f.cols.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link, i) => (
                <li key={i}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div>{f.copyright}</div>
        <div className="footer-bottom-right">
          <span>{f.motto}</span>
        </div>
      </div>
    </footer>
  );
}
