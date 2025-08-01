import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { TrendingSong } from "../assets/Data";

export default function DetailTrendLayout() {
  const { id } = useParams();
  const song = TrendingSong.find((a) => a.id === Number(id));
  console.log(song);
  console.log(TrendingSong);

  if (!song) {
    return <div className="text-white p-10">Album không tồn tại.</div>;
  }

  return (
    <div className="bg-black text-white space-y-20 min-h-screen">
      {/* Single Track Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-b from-[#6b5d3d] to-black p-6 rounded-xl">
        <img
          src={song.image}
          alt="Còn Gì Đẹp Hơn"
          className="w-48 h-48 object-cover rounded-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{song.title}</h1>
          <p className="text-sm text-gray-400 mb-2">{song.artist}</p>
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
            <FaPlay className="mr-2" /> Play
          </button>
        </div>
      </div>

      {/* Playlist Section */}
      <div>
        <div className="flex gap-6 items-center mb-6">
          <img
            src={song.image}
            alt="Ai Cũng Phải Bắt Đầu"
            className="w-32 h-32 object-cover rounded-md"
          />
          <div>
            <h2 className="text-3xl font-bold">{song.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{song.artist}</p>
            <p className="text-sm text-gray-500">{song.description}</p>
          </div>
        </div>

        <table className="w-full table-auto text-left">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Artist</th>
              <th className="py-2">Song</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {TrendingSong.map((song, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800 hover:bg-gray-800"
              >
                <td className="py-2 px-2">{idx + 1}</td>
                <td className="py-2 px-2">{song.artist}</td>
                <td className="py-2 px-2 text-sm text-gray-400">{song.title}</td>
                <td className="py-2 px-2">{song.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
