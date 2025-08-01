import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";
import DetailAlbumLayout from "../layouts/DetailAlbum";

export default function DetailAlbum() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Navbar nằm trên cùng */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto rounded-2xl ml-4">
          <DetailAlbumLayout />    
          <Footer />
        </div>
      </div>
    </div>
  );
}