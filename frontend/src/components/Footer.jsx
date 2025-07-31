import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="bg-[#121212] text-gray-400 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">For the Record</a></li>
          </ul>
        </div>

        {/* Communities */}
        <div>
          <h4 className="text-white font-bold mb-4">Communities</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">For Artists</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Advertising</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Vendors</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Useful links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Free Mobile App</a></li>
            <li><a href="#" className="hover:underline">Popular by Country</a></li>
          </ul>
        </div>

        {/* Spotify Plans */}
        <div>
          <h4 className="text-white font-bold mb-4">Spotify Plans</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Premium Individual</a></li>
            <li><a href="#" className="hover:underline">Premium Student</a></li>
            <li><a href="#" className="hover:underline">Spotify Free</a></li>
          </ul>
        </div>
      </div>

      {/* Social icons + copyright */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p className="mb-4 md:mb-0 text-gray-400">© 2025 Spotify AB</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
};


