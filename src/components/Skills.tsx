import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Language icons
import pythonIcon from "@/assets/python.svg";
import javaIcon from "@/assets/java.svg";
import typescriptIcon from "@/assets/typescript.svg";
import javascriptIcon from "@/assets/javascript.svg";
import cIcon from "@/assets/c.svg";
import cppIcon from "@/assets/cplusplus.svg";
import sqlIcon from "@/assets/sql.svg";

// Frontend icons
import reactIcon from "@/assets/react.svg";
import nextjsIcon from "@/assets/nextjs.svg";
import tailwindIcon from "@/assets/tailwindcss.svg";
import htmlIcon from "@/assets/html5.svg";
import framermotionIcon from "@/assets/framermotion.svg";

// Backend icons
import nodejsIcon from "@/assets/nodejs.svg";
import expressIcon from "@/assets/express.svg";
import flaskIcon from "@/assets/flask.svg";
import restapiIcon from "@/assets/restapi.svg";
import graphqlIcon from "@/assets/graphql.svg";

// AI/ML icons
import tensorflowIcon from "@/assets/tensorflow.svg";
import pytorchIcon from "@/assets/pytorch.svg";
import scikitIcon from "@/assets/scikitlearn.svg";
import opencvIcon from "@/assets/opencv.svg";
import pandasIcon from "@/assets/pandas.svg";
import numpyIcon from "@/assets/numpy.svg";

// Database icons
import postgresqlIcon from "@/assets/postgresql.svg";
import mongodbIcon from "@/assets/mongodb.svg";
import sqliteIcon from "@/assets/sqlite.svg";
import redisIcon from "@/assets/redis.svg";
import supabaseIcon from "@/assets/supabase.svg";

// Tools icons
import gitIcon from "@/assets/git.svg";
import dockerIcon from "@/assets/docker.svg";
import linuxIcon from "@/assets/linux.svg";
import awsIcon from "@/assets/aws.svg";
import cicdIcon from "@/assets/cicd.svg";
import figmaIcon from "@/assets/figma.svg";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Python", image: pythonIcon },
      { name: "Java", image: javaIcon },
      { name: "TypeScript", image: typescriptIcon },
      { name: "JavaScript", image: javascriptIcon },
      { name: "C", image: cIcon },
      { name: "C++", image: cppIcon },
      { name: "SQL", image: sqlIcon },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", image: reactIcon },
      { name: "Next.js", image: nextjsIcon },
      { name: "Tailwind CSS", image: tailwindIcon },
      { name: "HTML/CSS", image: htmlIcon },
      { name: "Framer Motion", image: framermotionIcon },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", image: nodejsIcon },
      { name: "Express", image: expressIcon },
      { name: "Flask", image: flaskIcon },
      { name: "REST APIs", image: restapiIcon },
      { name: "GraphQL", image: graphqlIcon },
    ],
  },
  {
    name: "AI/ML",
    skills: [
      { name: "TensorFlow", image: tensorflowIcon },
      { name: "PyTorch", image: pytorchIcon },
      { name: "Scikit-Learn", image: scikitIcon },
      { name: "OpenCV", image: opencvIcon },
      { name: "Pandas", image: pandasIcon },
      { name: "NumPy", image: numpyIcon },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "PostgreSQL", image: postgresqlIcon },
      { name: "MongoDB", image: mongodbIcon },
      { name: "SQLite", image: sqliteIcon },
      { name: "Redis", image: redisIcon },
      { name: "Supabase", image: supabaseIcon },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", image: gitIcon },
      { name: "Docker", image: dockerIcon },
      { name: "Linux", image: linuxIcon },
      { name: "AWS", image: awsIcon },
      { name: "CI/CD", image: cicdIcon },
      { name: "Figma", image: figmaIcon },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-3">
            /skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-foreground tracking-tight">
            Technical Skills
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`font-mono text-xs tracking-[0.15em] uppercase px-4 py-2.5 rounded-sm border transition-all duration-200 ${
                activeTab === i
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Cards with Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
          >
            {skillCategories[activeTab].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-3 border border-border rounded-lg bg-card p-5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 card-hover"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="font-mono text-xs tracking-wider text-foreground group-hover:text-primary transition-colors text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
