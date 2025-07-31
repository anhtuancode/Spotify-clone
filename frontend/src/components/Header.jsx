import { Layout, Button, Divider } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import { FaSpotify } from "react-icons/fa";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header className="!bg-black text-white flex items-center justify-between px-6 py-3 h-16">
      {/* Left section: Logo, Home icon, Search bar */}
      <div className="flex items-center gap-4">
        <FaSpotify className="text-white text-4xl" />

        <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full cursor-pointer hover:opacity-90 transition">
          <HomeOutlined className="text-black text-xl" />
        </div>

        <div className="relative w-96 h-11">
          <div className="flex items-center h-full px-4 rounded-full bg-[#2a2a2a] text-white focus-within:ring-2 focus-within:ring-white transition">
            <SearchOutlined className="text-white text-lg mr-3" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1 
                 focus:outline-none focus:ring-0"
            />
            <FolderOpenOutlined className="text-white text-lg ml-3" />
          </div>
        </div>
      </div>

      {/* Right section: Links and actions */}
      <div className="flex items-center gap-6 text-sm font-semibold">
        <div className="flex gap-4 text-gray-400">
          <span className="hover:text-white cursor-pointer transform transition duration-150 hover:scale-105">Premium</span>
          <span className="hover:text-white cursor-pointer transform transition duration-150 hover:scale-105">Support</span>
          <span className="hover:text-white cursor-pointer transform transition duration-150 hover:scale-105">Download</span>
        </div>

        <Divider
          type="vertical"
          style={{ height: "30px", backgroundColor: "#fff", width: "2px" }}
        />

        <div className="flex items-center gap-4">
          <span className="text-gray-400 hover:text-white cursor-pointer transform transition duration-150 hover:scale-105">
            Sign up
          </span>
          <Button className="bg-white text-black rounded-full px-6 py-1.5 text-base hover:opacity-90 transform transition duration-150 hover:scale-105">
            Log in
          </Button>
        </div>
      </div>
    </Header>
  );
}
