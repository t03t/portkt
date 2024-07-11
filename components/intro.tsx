"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section 
        id="home"
        className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
          {/* Photo Section */}
          <div className="relative"> 
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0}}
              animate={{ opacity: 1, scale: 1}}
              transition={{type: "tween.easeIn", duration: 1}}>
                <Image
                  src="/me.jpeg"
                  alt="Khadija portrait"
                  width="500"
                  height="500"
                  quality="95"
                  priority={true}
                  className="rounded-full object-cover border-[0.15rem] border-white shadow-xl"
                />
            </motion.div>
            <motion.span 
              className="absolute bottom-0 right-0 text-3xl"
              initial={{opacity: 0}}
              animate={{ opacity: 1}}
              transition={{
                type: "tween.easeIn",
                duration: 1,
                scale: 1,
                delay: 0.5,}}>
              ☕
            </motion.span>
          </div>
          {/* Text Area with intro Text */}
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0}}>
            
            <span className='font-bold'>{`I\'m Khadija`}</span>, 
            a <span className='italic font-bold'>freelance software developer</span> and <span className='italic font-bold'>UI/UX Researcher</span>. I specialize in building <span className="underline decoration-sky-500 decoration-4">intuitive</span> and <span className="underline decoration-green-600 decoration-4">user-friendly</span> interfaces, and creating <span className="underline decoration-pink-900 decoration-4 underline-offset-8">engaging</span> experiences for clients.
          </motion.h1>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
        }}>
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/resume.pdf" download>
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
          <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/s-khadija-tirmazi-0ba173295/"
          target="_blank">
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/t03t"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        </motion.div>

    </section>
  )
}
