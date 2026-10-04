import { useState } from "react";
import { Phone } from "lucide-react";
import { categories, products } from "@/data/products";
import SpotlightCard from "@/components/SpotlightCard";
import ProductImage from "@/components/ProductImage";

export default function Products() {
  const [active, setActive] = useState("all");

  const shown = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl font-semibold">Devices</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">
        eTIMS, ETR, POS and printer devices we stock and install. Call for current pricing and stock.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-md px-4 py-2 text-sm font-medium ${
            active === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
          }`}
        >
          All devices
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              active === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <SpotlightCard key={p.id} className="flex flex-col rounded-lg border border-border p-5">
            <ProductImage src={p.image} alt={p.name} className="mb-4 aspect-[4/3] w-full" />
            <p className="font-display font-semibold">{p.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            <dl className="mt-4 space-y-1 border-t border-border pt-3 font-mono text-xs text-muted-foreground">
              {p.spec.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3">
                  <dt>{k}</dt>
                  <dd className="text-right text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="tel:0724725676"
              className="relative z-10 mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium hover:bg-secondary"
            >
              <Phone className="h-3.5 w-3.5" />
              Ask about this device
            </a>
          </SpotlightCard>
        ))}
      </div>

      <div className="mt-14 rounded-lg border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
        Don't see what you need? We also supply general computer stationery and can
        source specific fiscal or POS hardware on request —{" "}
        <a href="tel:0724725676" className="font-medium text-signal">call 0724 725 676</a>.
      </div>
    </div>
  );
}
