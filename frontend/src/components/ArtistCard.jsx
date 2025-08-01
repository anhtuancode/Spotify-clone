import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

export default function ArtistCard({ artist, onNext, onPrev }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[220px] min-w-[160px]flex flex-col items-center text-center hover:bg-gray-700 transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="w-150 h-40 rounded-full object-cover border-2 border-gray-600"
      />
      <p className="mt-2 text-sm text-white font-medium truncate">
        {artist.artist}
      </p>
      <span className="text-xs text-gray-400">Artist</span>

      {isHovered && (
        <>
          <button
            onClick={onPrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 rounded-full"
            aria-label="Previous song"
          >
            <FiArrowLeft size={20} />
          </button>

          <button
            onClick={onNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-1 rounded-full"
            aria-label="Next song"
          >
            <FiArrowRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}
