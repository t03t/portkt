import { useActiveSectionContext } from "@/context/active-section-context";
import React from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold: 0.5,}
      );
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
      React.useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, sectionName, setActiveSection, timeOfLastClick]);

    return { ref };
}