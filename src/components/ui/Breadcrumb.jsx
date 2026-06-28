import { Link } from "react-router";
import { useContent } from "../../i18n/LanguageProvider";
import { ui } from "../../content/ui";

export default function Breadcrumb({ current }) {
  const c = useContent(ui);
  return (
    <nav className="breadcrumb">
      <Link to="/">{c.breadcrumbHome}</Link>
      <span className="sep">/</span>
      <span className="current">{current}</span>
    </nav>
  );
}
