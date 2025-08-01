import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <FaSpotify className="text-white text-5xl" />
          <h1 className="text-3xl font-bold ">Log in to Spotify</h1>
        </div>

        <div className="space-y-3 mb-8">
          <button className="w-full flex items-center justify-center border border-gray-500 py-3 rounded-full hover:bg-gray-800 font-semibold">
            <FaGoogle className="mr-2 text-lg" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-500 py-3 rounded-full hover:bg-gray-800 font-semibold">
            <FaFacebookF className="mr-2 text-lg" />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center border border-gray-500 py-3 rounded-full hover:bg-gray-800 font-semibold">
            <FaApple className="mr-2 text-lg" />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center border border-gray-500 py-3 rounded-full hover:bg-gray-800 font-semibold">
            Continue with phone number
          </button>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="h-px bg-gray-600 w-full" />
        </div>
        <form className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-semibold">Email or Username</label>
            <input
              type="email"
              placeholder="Email or Username"
              className="w-full mt-1 p-3 rounded border border-gray-600 bg-black placeholder-gray-500 focus:outline-none focus-within:ring-2 focus-within:ring-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-black py-3 font-bold hover:bg-green-400 rounded-full"
          >
            Continue
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white underline">
            Sign up for Spotify
          </Link>
        </p>
      </div>
    </div>
  );
}
