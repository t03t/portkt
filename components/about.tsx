"use client";

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About</SectionHeading>
      <p className="mb-6 text-lg text-gray-950">
        After graduating with a degree in{" "}
        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Computer Science</span> from Brandeis
        University, I pursued my passion for software development. I worked as a{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">Software Engineer</span> in Silicon Valley,
        gaining experience in full-stack development with{" "}
        <span className="font-semibold bg-gradient-to-r from-green-400 to-yellow-500 bg-clip-text text-transparent">Next.js, Node.js, Ruby on Rails, and Flask</span>.
        <span className="italic">My favorite part of programming</span> is creating
        robust and accessible websites. I <span className="font-semibold bg-gradient-to-r from-red-500 to-rose-900 bg-clip-text text-transparent">love</span> the
        challenge of making technology more inclusive and usable for everyone. My
        core stack includes{" "}
        <span className="font-semibold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">React, Next.js, and Node.js</span>, and I am
        also skilled in{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">TypeScript and Prisma</span>. I am constantly
        learning new technologies and currently looking for a{" "}
        <span className="font-semibold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">full-time position</span> as a software
        developer.
      </p>

      <p className="text-lg text-gray-950">
        <span className="italic">When I am not coding</span>, I enjoy teaching 3rd
        graders about line-following robots, working on side projects like building
        educational tools from YouTube video transcripts, and exploring new hobbies.
        I also enjoy <span className="font-semibold bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">learning new things</span>. I am
        currently delving into{" "}
        <span className="font-semibold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">history and philosophy</span> and learning how
        to play the guitar.
      </p>
    </motion.section>
  )
}
