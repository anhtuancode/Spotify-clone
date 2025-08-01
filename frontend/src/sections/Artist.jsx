import ArtistCard from "../components/ArtistCard";
import SectionWrapper from "../components/sectionWrapper";
import { useRef } from "react";

export default function ArtistSection({ artists }) {
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
    <SectionWrapper title="Popular Artists">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            artist={artist}
            onNext={scrollRight}
            onPrev={scrollLeft}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
