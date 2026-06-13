import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL;

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  logo?: string;
  logoFallback: string;
  highlights: string[];
  skills: string[];
};

const experiences = [
  {
    role: "AI Engineering Extern",
    company: "Wayfair",
    period: "Feb 2026 – Present",
    logo: `${baseUrl}wayfair-logo.svg`,
    logoFallback: "WF",
    highlights: [
      "Architected LLM-powered agent pipelines for trend tracking and competitor benchmarking, cutting manual research time by 60% through automated RAG-based report generation.",
      "Built a Moodboard Agent that mapped natural-language prompts to product visuals with multimodal embeddings and vector search, reducing design iteration cycles by 3x.",
      "Engineered a market intelligence dashboard that aggregated social, blog, and competitor signals into ranked trend reports used weekly by 10+ internal stakeholders.",
    ],
    skills: ["LLMs", "RAG", "Vector Search", "Multimodal AI", "Python", "Analytics"],
  },
  {
    role: "AI Software Engineer",
    company: "E4E (Engineers for Exploration) · Internship",
    period: "Feb 2026 – Present",
    logo: `${baseUrl}e4e.jpg`,
    logoFallback: "E",
    highlights: [
      "Built LLM agent evaluation workflows and active-learning loops to improve response quality across experimentation cycles.",
      "Designed benchmarking dashboards for prompt and model comparisons to make failure analysis faster and more measurable.",
      "Collaborated on data-labeling and error-analysis pipelines that accelerated iteration across the AI stack.",
    ],
    skills: ["LLMs", "Evaluation", "Active Learning", "Python", "Prompt Engineering", "Analytics"],
  },
  {
    role: "Software Engineering Intern",
    company: "WildGenomics (UCSD Startup) · La Jolla, CA",
    period: "Apr 2025 – Present",
    logo: `${baseUrl}wildgenomics.jpg`,
    logoFallback: "WG",
    highlights: [
      "Architected a bioinformatics platform that reduced manual analysis time by 80% for core research workflows.",
      "Built and iterated TensorFlow models that improved detection accuracy by 9x across image-analysis tasks.",
      "Shipped FastAPI and OpenCV services on AWS with Dockerized microservices, CI/CD, and production monitoring.",
    ],
    skills: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Docker", "AWS", "CI/CD"],
  },
  {
    role: "Research Assistant",
    company: "UCSD Shtrahman Lab · La Jolla, CA",
    period: "Mar 2025 – Present",
    logo: `${baseUrl}ucsd.jpg`,
    logoFallback: "UC",
    highlights: [
      "Developed custom microscope firmware from concept to implementation, improving system performance by 2x.",
      "Created Python visualization pipelines with Pandas and Matplotlib for 100K+ recordings and experiment runs.",
      "Automated complex preprocessing workflows that cut data-preparation time by 65% for downstream analysis.",
    ],
    skills: ["Python", "Firmware", "Pandas", "Matplotlib", "Data Pipelines", "Research"],
  },
] satisfies ExperienceItem[];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-3">
            /experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-foreground tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group border border-border rounded-sm bg-card p-6 md:p-8 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-sm border border-border bg-secondary/40 overflow-hidden flex items-center justify-center">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onLoad={(e) => {
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = "none";
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                      {exp.logoFallback}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-primary tracking-wider">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase shrink-0">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-3 mb-5">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] tracking-wider text-primary border border-primary/30 rounded-sm px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
