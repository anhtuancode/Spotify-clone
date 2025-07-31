export default function ArtistCard({ artist }) {
  return (
    <div className="h-[220px] min-w-[160px]flex flex-col items-center text-center">
      <img src={artist.image} alt={artist.name} className="w-150 h-40 rounded-full object-cover border-2 border-gray-600" />
      <p className="mt-2 text-sm text-white font-medium truncate">{artist.artist}</p>
      <span className="text-xs text-gray-400">Artist</span>
    </div>
  );
}
