import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function Contact() {
  return (
    <div className="max-w-lg mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
      <form className="space-y-4">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" rows={5} />
        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
export default Contact