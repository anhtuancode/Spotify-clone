import SectionWrapper from "../components/SectionWrapper";
import SongCard from "../components/SongCard";
import { useRef } from "react";

export default function TrendingSongs({ songs }) {
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
    <SectionWrapper title="Trending Songs">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {songs.map((song, index) => (
          <SongCard key={index} song={song} onNext={scrollRight} onPrev={scrollLeft}/>
        ))}
      </div>
    </SectionWrapper>
  );
}
