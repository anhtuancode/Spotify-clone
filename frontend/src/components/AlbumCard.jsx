export default function AlbumCard({ album }) {
  return (
    <div className="min-w-[160px] bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition">
      <img src={album.image} alt={album.title} className="w-full h-36 object-cover rounded" />
      <h3 className="text-sm font-semibold text-white mt-2 truncate">{album.title}</h3>
      <p className="text-xs text-gray-400 truncate">{album.artist}</p>
    </div>
  );
}
