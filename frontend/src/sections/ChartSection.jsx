import ChartCard from "../components/ChartCard";
import SectionWrapper from "../components/SectionWrapper";
import { useRef } from "react";

export default function ChartSection({ charts }) {
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
    <SectionWrapper title="Featured Charts">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {charts.map((chart, index) => (
          <ChartCard
            key={index}
            chart={chart}
            onNext={scrollRight}
            onPrev={scrollLeft}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
