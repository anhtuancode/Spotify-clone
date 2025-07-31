import ChartCard from "../components/ChartCard";
import SectionWrapper from "../components/sectionWrapper";


export default function ChartSection({ charts }) {
  return (
    <SectionWrapper title="Featured Charts">
      {charts.map((chart, index) => (
        <ChartCard key={index} chart={chart} />
      ))}
    </SectionWrapper>
  );
}