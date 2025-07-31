export default function ChartCard({ chart }) {
  return (
    <div className="h-[220px] min-w-[160px] rounded-lg p-3 hover:bg-gray-700 transition">
      <img src={chart.image} alt={chart.title} className="w-full h-32 object-cover rounded" />
      <p className="text-1xl text-gray-400">{chart.artist}</p>
    </div>
  );
}
