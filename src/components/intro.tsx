"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

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

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/mohamed-amine-boufares/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/MohamedAmineBoufares"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
      </motion.div>
    </section>
  );
}

export default Intro;
