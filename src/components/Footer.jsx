import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 mt-10">
      <Separator className="bg-white mb-4 opacity-20" />
      <p>
        © {new Date().getFullYear()} TechTax Solutions — All Rights Reserved
      </p>
    </footer>
  );
}
