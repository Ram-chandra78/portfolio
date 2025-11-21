"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DiMongodb, DiNginx, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiJavascript, SiKubuntu, SiPrettier, SiTypescript, SiVercel, SiVscode } from "react-icons/si";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "Chandraram8178@gmail.com",
    href: "mailto:chandraram8178@gmail.com",
    icon: <FaEnvelope size={"22px"} />,
  },
  {
    name: "Phone",
    content: "8178383640",
    href: "tel:8178383640",
    icon: <FaPhone size={"22px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ram-chandra8178/",
    content: "/Ram-Chandra",
    icon: <FaLinkedin size={"22px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Ram-chandra78",
    content: "/Ram-Chandra",
    icon: <FaGithub size={"22px"} />,
  },
];

const TOOLS = [
  { name: "JavaScript", icon: <SiJavascript size={"50px"} color="#f0db4f" /> },
  { name: "TypeScript", icon: <SiTypescript size={"50px"} color="#007acc" /> },
  { name: "HTML", icon: <FaHtml5 size={"50px"} color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3 size={"50px"} color="#563d7c" /> },
  { name: "Node.js", icon: <FaNodeJs size={"50px"} color="#6cc24a" /> },
  { name: "React.js", icon: <FaReact size={"50px"} color="#61dafb" /> },
  { name: "Next.js", icon: <RiNextjsFill size={"50px"} color="#fff" /> },
  { name: "Vue.js", icon: <FaVuejs size={"50px"} color="#41b883" /> },
  { name: "Express.js", icon: <SiExpress size={"50px"} color="#fff" /> },
  { name: "PostgreSQL", icon: <DiPostgresql size={"50px"} color="#336791" /> },
  { name: "MongoDB", icon: <DiMongodb size={"50px"} color="#4db33d" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" /> },
  { name: "Firebase", icon: <RiFirebaseFill size={"50px"} color="#FFCA28" /> },
  { name: "Git", icon: <FaGit size={"50px"} color="#f05032" /> },
  { name: "GitHub", icon: <FaGithub size={"50px"} color="#fff" /> },
  { name: "VS Code", icon: <SiVscode size={"50px"} color="#007acc" /> },
  { name: "Prettier", icon: <SiPrettier size={"50px"} color="#f7b93c" /> },
  { name: "Docker", icon: <FaDocker size={"50px"} color="#2496ed" /> },
  { name: "NginX", icon: <DiNginx size={"50px"} color="#009639" /> },
  { name: "Linux", icon: <FaLinux size={"50px"} color="#fff" /> },
  { name: "Terminal", icon: <TbTerminal2 size={"50px"} color="#fff" /> },
  { name: "Kubuntu", icon: <SiKubuntu size={"50px"} color="#0079C1" /> },
  { name: "Yarn", icon: <FaYarn size={"50px"} color="#2C8EBB" /> },
  { name: "AWS", icon: <FaAws size={"50px"} color="#FF9900" /> },
  { name: "Vercel", icon: <SiVercel size={"50px"} color="#fff" /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">

        {/* Sidebar */}
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600 bg-zinc-900/40 backdrop-blur"
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <Image
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square bg-zinc-800"
                  alt="Profile"
                  width={200}
                  height={200}
                  src="/assets/me.jpg"
                />
              </div>

              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Ram Chandra</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Web Developer
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md"
                      href={link.href}
                      target="_blank"
                    >
                      <div className="w-6">{link.icon}</div>
                      <div className="flex flex-col text-xs">
                        <span className="font-medium">{link.name}</span>
                        <span className="text-zinc-500">{link.content}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="basis-3/4 w-full">
          <div className="p-10 border-[.5px] rounded-md border-zinc-600 bg-zinc-900/40 backdrop-blur">
            <h1 className="text-3xl mb-10">About Me</h1>

            <p className="mb-10">
              I&apos;m Ram Chandra, a Fullstack Web Developer passionate about building
              modern, responsive, and user-friendly digital products. I love transforming
              unique ideas into real-world web solutions that make an impact.
            </p>

            <p className="mb-10">
              Outside of coding, I enjoy learning new technology trends, exploring modern
              frameworks, and improving myself through side projects and real-world
              challenges.
            </p>

            <h1 className="text-3xl mb-10">Stuff I Use</h1>

            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    arrows: false,
                  }}
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md">
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

export default Page;
