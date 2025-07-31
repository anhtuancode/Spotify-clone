import { FaPlus, FaGlobe } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-[#121212] text-gray-300 flex flex-col justify-between p-4 rounded-2xl">
      <div className="overflow-y-auto">
        <div className="flex justify-between items-center px-2 mb-4">
          <h2 className="text-white font-semibold">Your Library</h2>
          <FaPlus className="text-gray-400 cursor-pointer" />
        </div>

        {/* Create Playlist Box */}
        <div className="bg-neutral-600 rounded-md p-4 mb-4">
          <p className="text-white font-semibold mb-1">Create your first playlist</p>
          <p className="text-sm mb-4">It’s easy, we’ll help you</p>
          <button className="bg-white text-black font-bold py-1 px-3 rounded-full text-sm">
            Create playlist
          </button>
        </div>

        {/* Browse Podcast Box */}
        <div className="bg-neutral-600 rounded-md p-4">
          <p className="text-white font-semibold mb-1">Let’s find some podcasts to follow</p>
          <p className="text-sm mb-4">We’ll keep you updated on new episodes</p>
          <button className="bg-white text-black font-bold py-1 px-3 rounded-full text-sm">
            Browse podcasts
          </button>
        </div>
      </div>

      {/* Bottom - Footer Links */}
      <div className="text-xs mt-6 space-y-2">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:underline text-white">Legal</a>
          <a href="#" className="hover:underline">Safety & Privacy Center</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
          <a href="#" className="hover:underline">About Ads</a>
          <a href="#" className="hover:underline">Accessibility</a>
        </div>

        <button className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded-full hover:text-white hover:border-white mt-2">
          <FaGlobe className="text-sm" />
          English
        </button>
      </div>
    </div>
  );
}
