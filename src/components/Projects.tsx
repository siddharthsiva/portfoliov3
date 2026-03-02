import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Playback",
    description:
      "Building a 49ers playcalling recommendation engine that combines success probability, expected yards, and game context (down, distance, clock, score) to rank optimal plays. Implementing Redis caching and PostgreSQL analytics logging for low-latency recommendations with auditable model outputs, while integrating LangChain reasoning and AWS S3 snapshot storage.",
    tech: ["Python", "LangChain", "Redis", "PostgreSQL", "AWS S3", "Scikit-Learn"],
    github: "https://github.com/siddharthsiva/playback",
    image: `${baseUrl}playback.png`,
    featured: true,
  },
  {
    title: "RateMyDiningHall",
    description:
      "Collaborated with a cross-functional team to build a student-run campus dining review platform. Developed React + TypeScript frontend flows with Redux state management and helped design a scalable GraphQL backend in Node.js for review submissions, rating sorting, and average star calculations.",
    tech: ["React", "TypeScript", "Redux", "GraphQL", "Node.js", "MongoDB"],
    github: "https://github.com/siddharthsiva/ratemydininghall",
    image: `${baseUrl}ratemydininghall.png`,
    featured: true,
  },
  {
    title: "Manny.ai",
    description:
      "Built an AI-powered CAD assistant that helps teams refine and analyze 3D models through natural language. Contributed to a Python + TypeScript stack with LLM-guided CAD workflows, simulation-aware reasoning, and versioned model iteration.",
    tech: ["Python", "TypeScript", "React", "CadQuery", "Trimesh", "NumPy"],
    github: "https://github.com/siddharthsiva/mannyai",
    image: `${baseUrl}mannyai.png`,
    featured: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-3">
            /projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-foreground tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group border border-border rounded-sm bg-card overflow-hidden card-hover"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image placeholder area */}
                <div className="md:col-span-2 bg-secondary/50 flex items-center justify-center min-h-[200px] md:min-h-[260px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="font-mono text-6xl text-primary/20 font-bold select-none">
                    {project.title.charAt(0)}
                  </span>
                  {project.featured && (
                    <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/40 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="flex gap-3">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Live demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] tracking-wider text-primary border border-primary/30 rounded-sm px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors self-start"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/siddharthsiva?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            View All Projects
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
