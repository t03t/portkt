"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLaptopCode, FaCloud } from "react-icons/fa";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const icons = [FaCode, FaDatabase, FaLaptopCode, FaCloud];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg">
        {skillsData.map((skill, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.li
              className="bg-gradient-to-r rounded-xl px-5 py-3 flex items-center gap-2 shadow-lg"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Icon className="text-xl" />
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
