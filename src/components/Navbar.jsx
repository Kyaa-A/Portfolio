import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed z-40 w-full transition-all duration-300",
        isScrolled ? "py-3 backdrop-blur-md bg-background/80 shadow-xs" : "py-5"
      )}
    >
      <div className="container flex justify-between items-center">
        <a
          className="flex items-center text-xl font-bold text-primary-custom"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> AsnariTech </span>{" "}
            Studio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="transition-colors duration-300 text-foreground/80 hover:text-primary-custom"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="z-50 p-2 md:hidden text-foreground"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "flex fixed inset-0 z-40 flex-col justify-center items-center bg-background/95 backdroup-blur-md",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="transition-colors duration-300 text-foreground/80 hover:text-primary-custom"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
