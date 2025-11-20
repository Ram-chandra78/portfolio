const config = {
  title: "Ram Chandra | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ram Chandra, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ram Chandra, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ram Chandra",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ram Chandra",
  email: "Chandraram8178@gmail.com",
  site: "https://ramchandra8178.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/RamChandra8178",
    linkedin: "https://www.linkedin.com/in/ram-chandra8178/",
    instagram: "https://www.instagram.com/hotchaddi",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Ram-chandra78",
  },
};
export { config };
