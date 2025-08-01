import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

export default function ChartCard({ chart, onNext, onPrev }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative h-[220px] min-w-[160px] rounded-lg p-3 hover:bg-gray-700 transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={chart.image}
        alt={chart.title}
        className="w-full h-32 object-cover rounded"
      />
      <p className="text-1xl text-gray-400">{chart.artist}</p>

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
