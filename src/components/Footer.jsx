import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex relative flex-wrap justify-between items-center px-4 py-12 pt-8 mt-12 border-t bg-card border-border">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} AsnariTech All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full transition-colors text-primary-custom bg-purple-500/10 hover:bg-purple-500/20"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
