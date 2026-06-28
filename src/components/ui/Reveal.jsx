import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-reveal wrapper. Mirrors the source's IntersectionObserver that added
 * a `.visible` class to `.reveal` elements (threshold 0.12, bottom margin -80px).
 * Respects prefers-reduced-motion by revealing immediately (initialized from the
 * media query, so no synchronous setState inside the effect).
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion()) return; // already visible; nothing to observe
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const cls = `reveal${delayClass}${visible ? " visible" : ""}${
    className ? " " + className : ""
  }`;

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
