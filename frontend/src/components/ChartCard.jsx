export default function ChartCard({ chart }) {
  return (
    <div className="min-w-[150px] bg-green-700 rounded-lg p-4 text-white text-center hover:bg-green-600 transition">
      <h3 className="text-sm font-bold">{chart.name}</h3>
      <p className="text-xs text-gray-200 mt-1">{chart.region}</p>
    </div>
  );
}
