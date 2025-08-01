import RadioCard from "../components/RadioCard";
import SectionWrapper from "../components/sectionWrapper";
import { useRef } from "react";

export default function RadioSection({ radios }) {
  const containerRef = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 180, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -180, behavior: "smooth" });
    }
  };

  return (
    <SectionWrapper title="Popular radio">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {radios.map((radio, index) => (
          <RadioCard
            key={index}
            radio={radio}
            onNext={scrollRight}
            onPrev={scrollLeft}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
