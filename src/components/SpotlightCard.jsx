import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps a card in a spotlight that tracks the cursor.
 * Pure CSS var + radial-gradient, no extra libraries.
 */
export default function SpotlightCard({ className, children, ...props }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn("spotlight-card", className)}
      {...props}
    >
      {children}
    </div>
  );
}
