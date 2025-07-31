import ArtistCard from "../components/ArtistCard";
import SectionWrapper from "../components/sectionWrapper";


export default function ArtistSection({ artists }) {
  return (
    <SectionWrapper title="Popular Artists">
      {artists.map((artist, index) => (
        <ArtistCard key={index} artist={artist} />
      ))}
    </SectionWrapper>
  );
}