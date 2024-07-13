"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-15 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#E5E7EB">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)",
                border: "none",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #c3cfe2",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-gray-900">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-700">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-600">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
