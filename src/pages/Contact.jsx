import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ContactForm from "@/components/ContactForm";
import { business } from "@/data/business";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Call, WhatsApp, email, or send a message below — whichever is easiest for you.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <SpotlightCard className="rounded-lg border border-border">
            <a href={business.phoneHref} className="flex items-center gap-4 p-5">
              <Phone className="h-5 w-5 text-signal" />
              <div>
                <p className="font-medium">{business.phone}</p>
                <p className="text-sm text-muted-foreground">Call for quotes, stock or repairs</p>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard className="rounded-lg border border-border">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5"
            >
              <WhatsAppIcon className="h-5 w-5 text-signal" />
              <div>
                <p className="font-medium">WhatsApp us</p>
                <p className="text-sm text-muted-foreground">Fastest for quick questions or photos</p>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard className="rounded-lg border border-border">
            <a href={business.emailHref} className="flex items-center gap-4 p-5">
              <Mail className="h-5 w-5 text-signal" />
              <div>
                <p className="font-medium">{business.email}</p>
                <p className="text-sm text-muted-foreground">Email us anytime</p>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard className="rounded-lg border border-border">
            <a
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5"
            >
              <Facebook className="h-5 w-5 text-signal" />
              <div>
                <p className="font-medium">facebook.com/scottechlimited</p>
                <p className="text-sm text-muted-foreground">Follow for stock updates</p>
              </div>
            </a>
          </SpotlightCard>

          <div className="rounded-lg border border-border p-5">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-signal" />
              <div>
                <p className="font-medium">{business.addressLines[0]}</p>
                <p className="text-sm text-muted-foreground">{business.addressLines[1]}</p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-signal" />
              <div>
                <p className="font-medium">{business.hours}</p>
                <p className="text-sm text-muted-foreground">{business.hoursNote}</p>
              </div>
            </div>
            <div className="mt-4 aspect-[4/3] overflow-hidden rounded-md border border-border">
              <iframe
                title="Scottech location"
                className="h-full w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Commonwealth+Building+Moi+Avenue+Nairobi&output=embed"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border p-6">
          <h2 className="font-display text-xl font-semibold">Send us a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            We'll reply by phone, email or WhatsApp — whichever you gave us.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
