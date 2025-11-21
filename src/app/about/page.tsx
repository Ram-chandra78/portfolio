"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// Icons
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbTerminal2 } from "react-icons/tb";
import {
  FaBootstrap,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
} from "react-icons/fa";

// Tools Array
const TOOLS = [
  {
    name: "VS Code",
    icon: <SiVisualstudiocode size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={"50px"} color="#f7df1e" />,
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={"50px"} color="#3178c6" />,
    color: "#3178c6",
  },
  {
    name: "React",
    icon: <RiReactjsFill size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs size={"50px"} color="#ffffff" />,
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={"50px"} color="#38bdf8" />,
    color: "#38bdf8",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={"50px"} color="#7952b3" />,
    color: "#7952b3",
  },
  {
    name: "Vercel",
    icon: <SiVercel size={"50px"} color="#ffffff" />,
    color: "#ffffff",
  },
];

const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen bg-black text-white pb-20 px-6">
      <div className="container mx-auto max-w-screen-xl">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center py-16 text-purple-400"
        >
          About Me
        </motion.h1>

        {/* About Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          <Image
            src="/about-img.png"
            alt="About Me"
            width={300}
            height={300}
            className="rounded-xl shadow-lg border border-gray-700"
            priority
          />

          <div className="max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m a Frontend Developer passionate about building fast, responsive,
              and modern web applications using React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-lg mt-4 text-gray-400">
              I focus on delivering smooth UI experiences with performance optimization.
              I love learning new technologies every day.
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <h2 className="text-3xl mt-20 mb-6 text-center text-purple-400">
          Tools & Technologies
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
        >
          {inView &&
            TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="p-6 rounded-full bg-gray-800 shadow-md hover:scale-110 transition">
                  {tool.icon}
                </div>
                <p className="text-gray-300">{tool.name}</p>
              </motion.div>
            ))}
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <Link
            href="https://github.com/Ram-chandra78"
            target="_blank"
            className="text-purple-300 underline hover:text-purple-500"
          >
            View My GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
