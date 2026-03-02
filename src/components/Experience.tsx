import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI Software Engineer",
    company: "E4E (Engineers for Exploration) · Internship",
    period: "Feb 2026 – Present",
    logo: "/e4e.jpg",
    logoFallback: "E",
    description:
      "Built LLM agent evaluation workflows and active-learning loops to improve response quality, designed benchmarking dashboards for prompt and model comparisons, and collaborated on data labeling and error-analysis pipelines to accelerate iteration across the AI stack.",
    skills: ["LLMs", "Evaluation", "Active Learning", "Python", "Prompt Engineering", "Analytics"],
  },
  {
    role: "Software Engineering Intern",
    company: "WildGenomics (UCSD Startup) · La Jolla, CA",
    period: "Apr 2025 – Present",
    logo: "/wildgenomics.jpg",
    logoFallback: "WG",
    description:
      "Architected a bioinformatics platform that reduced manual analysis time by 80%, built and iterated TensorFlow models that improved detection accuracy by 9x, and shipped production FastAPI + OpenCV services on AWS with Dockerized microservices, CI/CD, and monitoring.",
    skills: ["Python", "TensorFlow", "FastAPI", "OpenCV", "Docker", "AWS", "CI/CD"],
  },
  {
    role: "Research Assistant",
    company: "UCSD Shtrahman Lab · La Jolla, CA",
    period: "Mar 2025 – Present",
    logo: "/ucsd.jpg",
    logoFallback: "UC",
    description:
      "Developed custom microscope firmware from concept to implementation to improve system performance by 2x, created Python visualization pipelines with Pandas and Matplotlib for 100K+ recordings, and automated complex preprocessing workflows to cut data preparation time by 65%.",
    skills: ["Python", "Firmware", "Pandas", "Matplotlib", "Data Pipelines", "Research"],
  },
];

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

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {exp.description}
              </p>

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
