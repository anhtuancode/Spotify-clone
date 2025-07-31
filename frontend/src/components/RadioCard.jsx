export default function RadioCard({ radio }) {
  return (
    <div className="h-[220px] min-w-[160px] rounded-lg p-3 hover:bg-gray-700 transition">
      <img src={radio.image} alt={radio.title} className="w-full h-32 object-cover rounded" />
      <p className="text-gray-400 text-1xl">{radio.artist}</p>
    </div>
  );
}   