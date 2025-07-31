import SectionWrapper from "../components/sectionWrapper";
import SongCard from "../components/SongCard";

export default function TrendingSongs({ songs }) {
  return (
    <SectionWrapper title="Trending Songs">
      {songs.map((song, index) => (
        <SongCard key={index} song={song} />
      ))}
    </SectionWrapper>
  );
}