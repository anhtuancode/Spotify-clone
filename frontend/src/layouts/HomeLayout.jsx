import { Artists, TrendingSong } from "../assets/Data/index.js";
import ArtistSection from "../sections/Artist.jsx";
import TrendingSongs from "../sections/TrendingSong.jsx";

export default function HomeLayout() {
  return (
    <div className="bg-[#121212] min-h-screen text-white p-6 space-y-10">
      <TrendingSongs songs={TrendingSong} />
      <ArtistSection artists={Artists} />
    </div>
  );
}