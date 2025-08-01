import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import DetailTrendLayout from "../layouts/DetailTrendLayOut";

export default function DetailTrend() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Navbar nằm trên cùng */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto rounded-2xl ml-4">
          <DetailTrendLayout />    
          <Footer />
        </div>
      </div>
    </div>
  );
}