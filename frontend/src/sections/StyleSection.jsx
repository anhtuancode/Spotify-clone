import CategoryCard from "../components/CategoryCard";
import SectionWrapper from "../components/sectionWrapper";
import { useRef } from "react";

export default function StyleSection({ categorys }) {
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
    <SectionWrapper title="Popular albums and singles">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {categorys.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onNext={scrollRight}
            onPrev={scrollLeft}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
