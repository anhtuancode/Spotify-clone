import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AlbumCard({ album, onNext, onPrev }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/album/${album.idAlbum}`);
  };

  return (
    <div
      className="relative min-w-[160px] h-[220px] bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
    >
      <img
        src={album.image}
        alt={album.title}
        className="w-full h-36 object-cover rounded"
      />
      <h3 className="text-sm font-semibold text-white mt-2 truncate">
        {album.title}
      </h3>
      <p className="text-xs text-gray-400 truncate">{album.artist}</p>

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
