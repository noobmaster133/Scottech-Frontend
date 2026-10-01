import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logo from "@/assets/scottech-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Scottech" className="h-8 w-8" />
            <span className="font-display text-lg font-semibold">Scottech</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            eTIMS, ETR and POS devices — supplied, installed and repaired in Nairobi.
          </p>
          <a
            href="https://www.facebook.com/scottechlimited/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-signal"
          >
            <Facebook className="h-4 w-4" />
            facebook.com/scottechlimited
          </a>
        </div>

        <div>
          <p className="font-display text-sm font-semibold">Devices</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
            <li>eTIMS & ETR devices</li>
            <li>POS terminals</li>
            <li>Thermal receipt printers</li>
            <li>Computer stationery</li>
            <li>
              <Link to="/products" className="hover:text-signal">
                Full catalogue
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold">Reach us</p>
          <ul className="mt-3 space-y-2.5 text-sm text-primary-foreground/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Commonwealth Building, 4th Floor, Room 410, Moi Avenue (near Archives), Nairobi
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:0724725676" className="hover:text-signal">0724 725 676</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:scottech02@gmail.com" className="hover:text-signal">
                scottech02@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-6 py-4 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Scottech Limited, Nairobi.
      </div>
    </footer>
  );
}
