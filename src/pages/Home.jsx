import { Link } from "react-router-dom";
import { ShieldCheck, Wrench, MonitorSmartphone, Phone } from "lucide-react";
import { products } from "@/data/products";
import SpotlightCard from "@/components/SpotlightCard";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

const services = [
  {
    icon: ShieldCheck,
    title: "eTIMS & ETR devices",
    text: "Supply and setup of KRA-approved electronic tax registers, signature devices and eTIMS solutions.",
  },
  {
    icon: MonitorSmartphone,
    title: "Point of sale",
    text: "POS terminals and computer stationery for shops, supermarkets and service counters.",
  },
  {
    icon: Wrench,
    title: "Repairs & servicing",
    text: "Walk-in repair center on Moi Avenue for fiscal and POS devices that break down or fail compliance checks.",
  },
];

const steps = [
  { n: "01", title: "Tell us your setup", text: "Call or visit with your business type and current device, if any." },
  { n: "02", title: "We match the device", text: "You leave with the right ETR, ESD or POS unit for how you sell." },
  { n: "03", title: "Install & register", text: "We set it up and register it for eTIMS where required." },
  { n: "04", title: "Ongoing support", text: "Bring it back to Room 410 any time it needs servicing." },
];

export default function Home() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Fiscal devices and POS gear, sorted — and fixed when they aren't.
            </h1>
            <p className="mt-5 max-w-md text-primary-foreground/75">
              Scottech supplies, installs and repairs eTIMS, ETR and POS devices
              for businesses in Nairobi, from a walk-in counter on Moi Avenue.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                as="a"
                href="tel:0724725676"
                className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-medium text-primary hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                0724 725 676
              </MagneticButton>
              <MagneticButton
                as={Link}
                to="/products"
                pull={0.25}
                className="inline-flex items-center rounded-md border border-primary-foreground/25 px-5 py-3 text-sm font-medium hover:bg-primary-foreground/10"
              >
                View devices
              </MagneticButton>
            </div>
          </div>

          <TiltCard className="relative rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-6 font-mono text-sm">
            <div className="flex items-center justify-between border-b border-dashed border-primary-foreground/20 pb-3">
              <span className="text-primary-foreground/60">DEVICE STATUS</span>
              <span className="rounded bg-approved px-2 py-0.5 text-xs text-white">KRA APPROVED</span>
            </div>
            <dl className="mt-3 space-y-2 text-primary-foreground/80">
              <div className="flex justify-between">
                <dt className="text-primary-foreground/50">Solution</dt>
                <dd>eTIMS / ETR / ESD</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-primary-foreground/50">Supplier</dt>
                <dd>Scottech Ltd</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-primary-foreground/50">Location</dt>
                <dd>Moi Avenue, Nairobi</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-primary-foreground/50">Repairs</dt>
                <dd>Walk-in, Room 410</dd>
              </div>
            </dl>
          </TiltCard>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold">What we do</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <SpotlightCard key={title} className="rounded-lg border border-border p-6">
              <Icon className="h-6 w-6 text-signal" />
              <h3 className="mt-4 font-display font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-semibold">Popular devices</h2>
            <Link to="/products" className="text-sm font-medium text-signal">
              See all devices
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <SpotlightCard key={p.id} className="rounded-lg border border-border bg-background p-5">
                <p className="font-display font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <dl className="mt-4 space-y-1 border-t border-border pt-3 font-mono text-xs text-muted-foreground">
                  {p.spec.map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <dt>{k}</dt>
                      <dd className="text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold">Getting set up</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="font-mono text-sm text-signal">{s.n}</span>
              <h3 className="mt-2 font-display font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold">Need a device or a repair?</h2>
            <p className="mt-2 text-primary-foreground/70">
              Room 410, Commonwealth Building, Moi Avenue — or call ahead.
            </p>
          </div>
          <MagneticButton
            as="a"
            href="tel:0724725676"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-medium text-primary hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Call 0724 725 676
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
