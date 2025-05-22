import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiCplusplus,
  SiPython,
  SiFigma,
  SiC,
} from "react-icons/si";

const projects = [
  {
    title: "ColorPicker Tool",
    description: "A color picker tool built with React and TailwindCSS.",
    link: "https://color-picker-ten-jade.vercel.app/",
  },
  {
    title: "iDone",
    description: "iDone - It Manages your To-Do list built with React and TailwindCss.",
    link: "https://i-done.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather app using OpenWeatherMap API.",
    link: "https://weathr-x.vercel.app/",
  },
];

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="w-6 h-6 text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="w-6 h-6 text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
  { name: "React", icon: <SiReact className="w-6 h-6 text-blue-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-6 h-6 text-teal-400" /> },
  { name: "Git", icon: <SiGit className="w-6 h-6 text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-blue-500" /> },
  { name: "C", icon: <SiC className="w-6 h-6 text-blue-500" /> },
  { name: "Figma", icon: <SiFigma className="w-6 h-6 " /> },
  { name: "Python", icon: <SiPython className="w-6 h-6 " /> },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={darkMode ? "dark" : "light"}
        {...pageTransition}
        className="p-4 sm:p-6 max-w-7xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500"
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-110 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <motion.section
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Hi, I'm Ronit Murabiya 👋.
          </motion.h1>
          <motion.p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
            Frontend Developer | React Enthusiast
          </motion.p>
          <motion.div className="flex justify-center gap-4 mb-6">
            <motion.a
              href="mailto:ronitmurabiya1906@gmail.com"
              aria-label="Email"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/RonitMurabiya"
              target="_blank"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ronit-murabiya-85488b2b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
          <motion.p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-700 dark:text-gray-400 px-2">
            I'm a passionate frontend developer with a focus on creating interactive and visually appealing user interfaces. With a strong foundation in HTML, CSS, JavaScript, and React, I love building dynamic web experiences. I strive to write clean, maintainable code and continuously improve my skills through new technologies and challenges.
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-6 text-center"
            variants={fadeInUp}
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition-transform"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-2">{skill.icon}</div>
                <div className="text-sm text-gray-700 dark:text-gray-200 font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-4 text-center"
            variants={fadeInUp}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-gray-800">
                  <CardContent className="p-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View Project
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.main>
    </AnimatePresence>
  );
}
