import { ArrowDown } from "lucide-react";
import React from "react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex relative flex-col justify-center items-center px-4 min-h-screen"
    >
      <div className="container z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="opacity-0 text-primary-custom animate-fade-in-delay-1">
              {" "}
              Asnari
            </span>
            <span className="ml-2 opacity-0 text-gradient animate-fade-in-delay-2">
              {" "}
              Pacalna
            </span>
          </h1>
          <p className="mx-auto text-lg opacity-0 md:text-xl text-muted-foreground max-2-2xl animate-fade-in-delay-3">
            I craft clean, responsive web interfaces, blending functionality
            with design, while continuously learning and exploring modern
            front-end technologies.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button bg-primary-custom">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-8 left-1/2 flex-col items-center animate-bounce transform -translate-x-1/2">
        <span className="mb-2 text-sm text-muted-foreground"> Scroll </span>
        <ArrowDown className="w-5 h-5 text-primary-custom" />
      </div>
    </section>
  );
};
