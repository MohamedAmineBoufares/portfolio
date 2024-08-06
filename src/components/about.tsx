"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a passionate <span className="font-bold">Frontend Developer</span>{" "}
        with a <span className="italic">degree in IT.</span>
        <br />
        My journey into the world of coding was driven by a genuine{" "}
        <span className="font-medium">love</span> for building{" "}
        <span className="italic">websites and applications</span>. I specialize
        in creating dynamic and engaging user experiences using the{" "}
        <span className="font-medium">React ecosystem.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>
      <p className="my-3">
        My core stack is{" "}
        <span className="font-medium">React.js, Next.js and Redux</span> and I
        am also familiar with <span className="font-medium">TypeScript</span>{" "}
        and <span className="font-medium">Prisma</span>.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games 🎮,and watching movies 🎬. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">React Native</span>. 📱
      </p>
      <p className="font-bold mt-3">Let’s bring your ideas to life! ✨</p>
      <br />
    </motion.section>
  );
}
