import CategoryCard from "../components/CategoryCard";
import SectionWrapper from "../components/sectionWrapper";

export default function StyleSection({ categorys }) {
  return (
    <SectionWrapper title="Popular albums and singles">
      {categorys.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </SectionWrapper>
  );
}