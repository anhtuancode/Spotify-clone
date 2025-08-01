import AlbumCard from "../components/AlbumCard";
import SectionWrapper from "../components/sectionWrapper";
import { useRef } from "react";

export default function AlbumSection({ albums }) {
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
    <SectionWrapper title="Trending Albums">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {albums.map((album, index) => (
          <AlbumCard
            key={index}
            album={album}
            onNext={scrollRight}
            onPrev={scrollLeft}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
