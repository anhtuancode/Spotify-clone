import HomeLayout from "../layouts/HomeLayout";
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Navbar nằm trên cùng */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto rounded-2xl ml-4">
          <HomeLayout />    
          <Footer />
        </div>
      </div>
    </div>
  );
}