import { Link } from "react-router";
import { useLang, useContent } from "../i18n/LanguageProvider";
import { Rich } from "../i18n/Rich";
import Breadcrumb from "../components/ui/Breadcrumb";
import { ArrowRight } from "../components/ui/icons";
import { branches, branchOrder, branchesPage } from "../content/branches";
import { collections } from "../lib/galleryImages";
import "../styles/branch.css";

export default function Branches() {
  const { lang } = useLang();
  const c = useContent(branchesPage);

  return (
    <div className="page-branches">
      <section className="branches-hero">
        <div className="branch-hero-grain" />
        <div className="branches-hero-inner">
          <Breadcrumb current={c.crumb} />
          <div className="branch-eyebrow">{c.eyebrow}</div>
          <h1>
            <span className="word"><span>{c.title[0]}</span></span>{" "}
            <span className="word"><span><Rich text={c.title[1]} /></span></span>
          </h1>
          <p className="branches-lede">{c.lede}</p>
        </div>
      </section>

      <section className="branches-grid-wrap">
        <div className="branches-grid">
          {branchOrder.map((key) => {
            const b = branches[key];
            const bc = b[lang];
            const img = (collections[b.collection] || [])[0];
            return (
              <Link to={`/branches/${key}`} className="branch-card" key={key}>
                <div className="branch-card-img" style={img ? { backgroundImage: `url("${img}")` } : undefined} />
                <div className="branch-card-body">
                  <div className="branch-card-eyebrow">{bc.eyebrow}</div>
                  <h3><Rich text={bc.title} /></h3>
                  <p>{bc.tagline}</p>
                  <span className="branch-card-cta">{c.cta}<ArrowRight className="" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
