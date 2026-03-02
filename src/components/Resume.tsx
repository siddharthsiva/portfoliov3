import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-3">/resume</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
              Resume
            </h2>
            <p className="text-muted-foreground text-sm max-w-sm">
              Download my resume for a full overview of my education, experience, and skills.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase border border-border px-8 py-4 text-foreground hover:border-primary/60 hover:text-primary transition-all duration-200 self-start md:self-auto shrink-0"
          >
            <ArrowDownToLine className="h-3.5 w-3.5" />
            Download PDF
          </a>
        </motion.div>

        <p className="font-mono text-[10px] text-muted-foreground mt-6 tracking-widest">
          // drop your resume.pdf in the public/ folder to activate this link
        </p>
      </div>
    </section>
  );
};

export default Resume;
