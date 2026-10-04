import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/scottech-logo.png";
import MagneticButton from "@/components/MagneticButton";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { business } from "@/data/business";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Devices" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`hidden overflow-hidden border-b border-border bg-primary text-primary-foreground transition-[max-height,opacity] duration-300 md:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <p>
            {business.hours}
            <span className="text-primary-foreground/50"> · {business.hoursNote}</span>
          </p>
          <div className="flex items-center gap-5">
            <a href={business.emailHref} className="hover:text-signal">
              {business.email}
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-signal"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <a href={business.phoneHref} className="flex items-center gap-1.5 hover:text-signal">
              <Phone className="h-3.5 w-3.5" />
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img src={logo} alt="Scottech" className="h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-tight text-primary">
              Scottech
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors ${
                    isActive ? "nav-link-active text-primary" : "text-muted-foreground hover:text-primary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <MagneticButton
            as="a"
            href={business.phoneHref}
            pull={0.25}
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 md:inline-flex"
          >
            Call for a quote
          </MagneticButton>

          <button
            className="-mr-2 p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-6 py-3 md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-secondary text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp us
            </a>
            <a
              href={business.phoneHref}
              className="mt-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Call {business.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
