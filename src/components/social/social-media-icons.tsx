"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: SiLinkedin,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: SiInstagram,
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex gap-2 z-10">
      {show &&
        BUTTONS.map(({ name, href, icon: Icon }) => (
          <Link href={href} key={name} target="_blank">
            <Button variant="ghost" aria-label={name}>
              <Icon size={24} color="#fff" />
            </Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
