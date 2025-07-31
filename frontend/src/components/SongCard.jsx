export default function SongCard({ song }) {
  return (
    <div className="h-[220px] min-w-[160px] bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
      <img src={song.image} alt={song.title} className="w-full h-32 object-cover rounded" />
      <h3 className="text-sm font-semibold text-white mt-2">{song.title}</h3>
      <p className="text-xs text-gray-400">{song.artist}</p>
    </div>
  );
}
