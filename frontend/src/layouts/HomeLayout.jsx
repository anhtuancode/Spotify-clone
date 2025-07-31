import { Artists, TrendingSong, Albums, Radios, Charts, Styles} from "../assets/Data/index.js";
import AlbumSection from "../sections/AlbumSection.jsx";
import ArtistSection from "../sections/Artist.jsx";
import ChartSection from "../sections/ChartSection.jsx";
import RadioSection from "../sections/RadioSection.jsx";
import StyleSection from "../sections/StyleSection.jsx";
import TrendingSongs from "../sections/TrendingSong.jsx";

export default function HomeLayout() {
  return (
    <div className="bg-[#121212] min-h-screen text-white p-6 space-y-10">
      <TrendingSongs songs={TrendingSong} />
      <ArtistSection artists={Artists} />
      <AlbumSection albums={Albums} />
      <RadioSection radios={Radios} />
      <ChartSection charts={Charts} />
      <StyleSection categorys={Styles} />
    </div>
  );
}