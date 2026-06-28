import { useContent } from "../../i18n/LanguageProvider";
import { ui } from "../../content/ui";
import { SocialIcon } from "./icons";

/**
 * Row of social-platform icon links, driven by the `social` array in ui content.
 * All open in a new tab. `className` lets callers scope spacing/colour.
 */
export default function SocialLinks({ className = "" }) {
  const c = useContent(ui);
  return (
    <div className={`social-links${className ? " " + className : ""}`}>
      {c.social.map((s) => (
        <a
          key={s.icon}
          href={s.href}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
        >
          <SocialIcon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
