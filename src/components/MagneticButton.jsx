import { useRef } from "react";

export default function MagneticButton({ as: Tag = "a", className, children, pull = 0.35, ...props }) {
  const ref = useRef(null);
  const frame = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${x * pull}px, ${y * pull}px)`;
    });
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.transform = "translate(0, 0)";
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn ${className ?? ""}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
