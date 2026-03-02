import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/siddharthsiva?tab=repositories", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-sivalanka/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:siddharthsivalanka@gmail.com", label: "Email" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Atmospheric red glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          cs student · open to work
        </motion.p>

        {/* Name */}
        <motion.h1
          className="font-mono text-[clamp(3rem,12vw,8rem)] font-bold leading-none tracking-[0.06em] uppercase text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Siddharth<br />
          <span className="text-primary text-glow">Sivalanka</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-mono text-sm text-muted-foreground tracking-wide mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          cs @ ucsd
        </motion.p>
        <motion.p
          className="font-mono text-sm text-muted-foreground tracking-wide mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          incoming @ kaiser
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="h-11 w-11 flex items-center justify-center border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#projects"
          className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase border border-border px-8 py-4 text-foreground hover:border-primary/60 hover:text-primary transition-all duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          View Projects
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.a>
      </div>

      {/* Bottom scroll indicator line */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="w-px h-12 bg-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
