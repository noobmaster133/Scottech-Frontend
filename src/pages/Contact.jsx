import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="font-display text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Call, email or walk in — whichever is easiest for you.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          <SpotlightCard className="rounded-lg border border-border">
            <a href="tel:0724725676" className="flex items-center gap-4 p-5">
              <Phone className="h-5 w-5 text-signal" />
              <div>
                <p className="font-medium">0724 725 676</p>
                <p className="text-sm text-muted-foreground">Call for quotes, stock or repairs</p>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard className="rounded-lg border border-border">
            <a href="mailto:scottech02@gmail.com" className="flex items-center gap-4 p-5">
              <Mail className="h-5 w-5 text-signal" />
              <div>
                <p className="font-medium">scottech02@gmail.com</p>
                <p className="text-sm text-muted-foreground">Email us anytime</p>
              </div>
            </a>
          </SpotlightCard>

          <SpotlightCard className="rounded-lg border border-border">
            <a
              href="https://www.facebook.com/scottechlimited/"
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
        </div>

        <div className="rounded-lg border border-border p-5">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-signal" />
            <div>
              <p className="font-medium">Commonwealth Building, 4th Floor, Room 410</p>
              <p className="text-sm text-muted-foreground">
                Moi Avenue (near the Archives), Nairobi, Kenya
              </p>
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
    </div>
  );
}
