import { ShieldCheck, Wrench, MapPin } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import { business } from "@/data/business";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl font-semibold">About Scottech</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Scottech Limited is a Nairobi-based supplier and repair center for eTIMS,
        POS and ETR/ESD devices. We help businesses on and around Moi Avenue get
        compliant, working hardware — and keep it working.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <SpotlightCard className="rounded-lg border border-border p-6">
          <ShieldCheck className="h-6 w-6 text-signal" />
          <h2 className="mt-4 font-display font-semibold">Compliance-first</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We supply approved electronic tax registers, electronic signature
            devices and eTIMS solutions, and set them up correctly from day one.
          </p>
        </SpotlightCard>
        <SpotlightCard className="rounded-lg border border-border p-6">
          <Wrench className="h-6 w-6 text-signal" />
          <h2 className="mt-4 font-display font-semibold">Repairs, not just sales</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A device that's down is a business that can't invoice. Our repair
            center handles fiscal and POS hardware when it needs fixing.
          </p>
        </SpotlightCard>
        <SpotlightCard className="rounded-lg border border-border p-6">
          <MapPin className="h-6 w-6 text-signal" />
          <h2 className="mt-4 font-display font-semibold">On Moi Avenue</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Room 410, Commonwealth Building, near the Archives — a short walk
            for most businesses in the CBD.
          </p>
        </SpotlightCard>
      </div>

      <div className="mt-14 rounded-lg bg-primary p-8 text-primary-foreground md:p-10">
        <h2 className="font-display text-xl font-semibold">Visit the counter</h2>
        <p className="mt-2 text-primary-foreground/70">
          {business.addressLines.join(", ")}.
        </p>
        <p className="mt-1 text-primary-foreground/70">
          Open {business.hours} ({business.hoursNote}). Call ahead on{" "}
          {business.phones.map((p, i) => (
            <span key={p.href}>
              {i > 0 && (i === business.phones.length - 1 ? " or " : ", ")}
              {p.number}
            </span>
          ))}{" "}
          if you're bringing in a repair.
        </p>
      </div>
    </div>
  );
}
