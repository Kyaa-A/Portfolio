import { Briefcase, Code, User } from "lucide-react";
import React from "react";
import cvFile from "../assets/CV.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about building user-friendly interfaces and
              enhancing user experiences. I enjoy collaborating with teams to
              bring ideas to life and contributing to open-source projects.
            </p>

            <div className="flex flex-col gap-4 justify-center pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
              <a
                href={cvFile}
                className="px-6 py-2 rounded-full border transition-colors duration-300 border-primary text-primary hover:bg-primary/10"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 gradient-border card-hover">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-muted-foreground">
                    {" "}
                    Web Development
                  </h4>
                  <p>
                    Creating responsive and user-friendly web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 gradient-border card-hover">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-muted-foreground">
                    {" "}
                    UI/UX Design
                  </h4>
                  <p>
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 gradient-border card-hover">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-muted-foreground">
                    {" "}
                    Project Management
                  </h4>
                  <p>
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
