import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="relative px-4 py-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          I'm always open to discussing new projects or opportunities to be part
          of your vision. Whether you have a question, want to collaborate, or
          just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">
              {" "}
              Contact Information
            </h3>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:asnari.dep@gmail.com"
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    asnari.dep@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+639086932546"
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    +63 908 693 2546
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="transition-colors text-muted-foreground hover:text-primary">
                    Davao Del Sur, Phiippines
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-4 font-medium"> Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div
            className="p-8 rounded-lg bg-card shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="mb-6 text-2xl font-semibold"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="px-4 py-3 w-full rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Asnari Pacalna..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="px-4 py-3 w-full rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="asnari.dep@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="px-4 py-3 w-full rounded-md border resize-none border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex gap-2 justify-center items-center w-full cosmic-button"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
