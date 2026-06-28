import { Fragment } from "react";

/**
 * Render a string with light inline markup so bilingual copy can live as plain
 * strings in the content files:
 *   *word*  -> <em>word</em>   (Fraunces italic accent, per the design)
 *   \n      -> <br/>
 * Anything else is rendered as-is.
 */
export function Rich({ text, className }) {
  if (text == null) return null;
  const lines = String(text).split("\n");
  return (
    <span className={className}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {renderEm(line)}
        </Fragment>
      ))}
    </span>
  );
}

function renderEm(line) {
  const parts = line.split(/(\*[^*]+\*)/g).filter(Boolean);
  return parts.map((p, i) =>
    p.startsWith("*") && p.endsWith("*") ? (
      <em key={i}>{p.slice(1, -1)}</em>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    )
  );
}

export default Rich;
