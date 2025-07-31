export default function RadioCard({ radio }) {
  return (
    <div className="min-w-[170px] bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg p-4 text-white">
      <div className="flex items-center gap-3">
        <img src={radio.image} alt={radio.name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold truncate">{radio.name}</p>
          <p className="text-xs text-gray-200 truncate">{radio.description}</p>
        </div>
      </div>
    </div>
  );
}   