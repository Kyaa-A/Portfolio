import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Color Extractor",
    description: "Color Extractor: A tool to extract colors from images.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://asnari-extractor.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Whispr",
    description: "whispr: A personal AI chatbot desktop application",
    image: "/projects/Whispr.png",
    tags: ["Electron", "React", "Tailwind CSS"],
    demoUrl: "https://www.facebook.com/share/v/1Sgm9Dt2sT/",
    githubUrl: "https://github.com/Kyaa-A/Whispr-PersonalAI-Chatbot.git",
  },
  {
    id: 1,
    title: "Color Extractor",
    description: "Color Extractor: A tool to extract colors from images.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          {" "}
          Featured <span className="text-primary-custom"> Projects</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Here are some of my recent projects that showcase my skills and
          creativity. Click on the images to view the live demos or check out
          the source code on GitHub.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-lg group bg-card shadow-xs card-hover"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="transition-colors duration-300 text-foreground/80 hover:text-primary-custom"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="transition-colors duration-300 text-foreground/80 hover:text-primary-custom"
                    >
                      {" "}
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="flex gap-2 items-center mx-auto cosmic-button w-fit bg-primary-custom"
            href="https://github.com/Kyaa-A"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
