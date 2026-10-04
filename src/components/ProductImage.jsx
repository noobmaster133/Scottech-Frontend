import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-md border border-border bg-secondary/60 p-3",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
