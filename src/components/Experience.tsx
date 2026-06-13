import { motion } from "framer-motion";

const baseUrl = import.meta.env.BASE_URL;

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  logo?: string;
  logoFallback: string;
  previewVideo?: string;
  previewPoster?: string;
  mediaFallbackLabel: string;
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
    previewVideo: `${baseUrl}wayfair-preview.mp4`,
    previewPoster: `${baseUrl}wayfair-logo.svg`,
    mediaFallbackLabel: "Trend AI",
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
    mediaFallbackLabel: "E4E",
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
    mediaFallbackLabel: "Genomics",
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
    mediaFallbackLabel: "UCSD",
    highlights: [
      "Developed custom microscope firmware from concept to implementation, improving system performance by 2x.",
      "Created Python visualization pipelines with Pandas and Matplotlib for 100K+ recordings and experiment runs.",
      "Automated complex preprocessing workflows that cut data-preparation time by 65% for downstream analysis.",
    ],
    skills: ["Python", "Firmware", "Pandas", "Matplotlib", "Data Pipelines", "Research"],
  },
] satisfies ExperienceItem[];

const ExperienceMedia = ({ exp }: { exp: ExperienceItem }) => {
  const showVideo = Boolean(exp.previewVideo);

  return (
    <div className="relative overflow-hidden rounded-sm border border-border bg-secondary/50 min-h-[180px] md:min-h-[220px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

      {showVideo ? (
        <video
          src={exp.previewVideo}
          poster={exp.previewPoster ?? exp.logo}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ) : null}

      {exp.logo ? (
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="absolute inset-0 h-full w-full object-cover"
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

      <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-background/85 via-background/20 to-transparent">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/40 bg-background/80 px-2.5 py-1 rounded-sm">
          {showVideo ? "Preview" : "Snapshot"}
        </span>
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
          {exp.mediaFallbackLabel}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center font-mono text-lg tracking-[0.3em] uppercase text-primary/25 select-none">
        {exp.logoFallback}
      </div>
    </div>
  );
};

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
              className="group border border-border rounded-sm bg-card overflow-hidden card-hover"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2">
                  <ExperienceMedia exp={exp} />
                </div>

                <div className="md:col-span-3 p-6 md:p-8">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
