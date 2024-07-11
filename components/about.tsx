"use client";
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from Brandeis
        University, I pursued my passion for software
        development. I worked as a{" "}
        <span className="font-medium">Software Engineer</span> in Silicon Valley,
        gaining experience in full-stack development with{" "}
        <span className="font-medium">Next.js, Node.js, Ruby on Rails, and Flask</span>.
        <span className="italic">My favorite part of programming</span> is creating
        robust and accessible websites. I <span className="underline">love</span> the
        challenge of making technology more inclusive and usable for everyone. My
        core stack includes{" "}
        <span className="font-medium">React, Next.js, and Node.js</span>, and I am
        also skilled in{" "}
        <span className="font-medium">TypeScript and Prisma</span>. I am constantly
        learning new technologies and currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I enjoy teaching 3rd
        graders about line-following robots, working on side projects like building
        educational tools from YouTube video transcripts, and exploring new hobbies.
        I also enjoy <span className="font-medium">learning new things</span>. I am
        currently delving into{" "}
        <span className="font-medium">history and philosophy</span> and learning how
        to play the guitar.
      </p>
    </motion.section>
  )
}
