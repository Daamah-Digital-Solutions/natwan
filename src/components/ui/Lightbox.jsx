import { useEffect, useCallback } from "react";

/**
 * Full-screen image viewer shared by the Projects and Gallery pages.
 * Controlled by the parent: render only when `index` is a number.
 *   - Esc closes; ArrowLeft / ArrowRight step through `images`.
 *   - Clicking the backdrop (not the image) closes.
 * `images` is an array of URL strings; navigation wraps around.
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const step = useCallback(
    (dir) => {
      const next = (index + dir + images.length) % images.length;
      onNavigate(next);
    },
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, step]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <button
        type="button"
        className="lightbox-nav prev"
        onClick={(e) => { e.stopPropagation(); step(-1); }}
        aria-label="Previous"
      >
        ‹
      </button>

      <figure className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt="" />
        <figcaption className="lightbox-counter">
          {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        className="lightbox-nav next"
        onClick={(e) => { e.stopPropagation(); step(1); }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
