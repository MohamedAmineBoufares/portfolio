"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
        >
          <Image
            src="/pro.jpg"
            alt="My picture"
            width="192"
            height="192"
            className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium leading-10 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
        }}
      >
        <span className="font-bold text-2xl">Hello, I'm Mohamed Amine!</span>{" "}
        <span className="text-2xl">👋🏻</span>
        <br />
        I’m a passionate <span className="font-bold">Frontend Developer</span>
        with <span className="font-bold">3 years</span> of hands-on experience.
        <br />I thrive on bringing ideas to life by crafting beautiful and
        functional <span className="italic">websites and applications</span>. My
        expertise lies in{" "}
        <a href="https://react.dev/" target="_blank" className="underline">
          React.js
        </a>{" "}
        and{" "}
        <a href="https://nextjs.org/" target="_blank" className="underline">
          Next.js
        </a>
        , where I create seamless and dynamic user experiences.
      </motion.h1>
    </section>
  );
}

export default Intro;
