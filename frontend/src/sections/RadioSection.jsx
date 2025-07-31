import RadioCard from "../components/RadioCard";
import SectionWrapper from "../components/sectionWrapper";

export default function RadioSection({ radios }) {
  return (
    <SectionWrapper title="Popular radio">
      {radios.map((radio, index) => (
        <RadioCard key={index} radio={radio} />
      ))}
    </SectionWrapper>
  );
}