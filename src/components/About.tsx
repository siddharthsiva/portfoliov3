import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const About = () => {
  const highlights = [
    { label: "University", value: "University of California San Diego" },
    { label: "Major", value: "Computer Science" },
    { label: "Graduation", value: "May 2027" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-3">/about</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground tracking-tight">
            About
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55, delay: 0.1 } } }}
          >
            <p className="text-base">
              Hi, I'm Siddharth! I'm interested in startups, AI, and autonomous vehicles.
            </p>
            <p className="text-base">
              Currently, I'm learning about machine learning for autonomous vehicles.
            </p>
            <div className="pt-2">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Currently</p>
              <ul className="space-y-2">
                {["– addicted to side projects", "– learning about ml for autonomous vehicles"].map((item) => (
                  <li key={item} className="font-mono text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-2">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">When I'm not coding</p>
              <ul className="space-y-2">
                {["– enjoying college with friends", "– playing poker", "– eating"].map((item) => (
                  <li key={item} className="font-mono text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55, delay: 0.2 } } }}
          >
            {highlights.map((item) => (
              <div key={item.label} className="border border-border rounded-sm p-4 bg-card">
                <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-1">{item.label}</p>
                <p className="text-foreground text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
