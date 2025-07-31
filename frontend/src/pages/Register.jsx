import { FaGoogle, FaApple } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

export default function SignupForm() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <FaSpotify className="text-white text-5xl" />
          <h1 className="text-5xl font-bold">Sign up to</h1>
          <h1 className="text-5xl font-bold">start listening</h1>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-semibold">Email address</label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="w-full mt-1 p-3 rounded border border-gray-600 bg-black placeholder-gray-500 focus:outline-none focus-within:ring-2 focus-within:ring-white transition"
            />
            <a href="#" className="text-green-500 text-sm mt-1 inline-block">
              Use phone number instead.
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-black py-3 font-bold hover:bg-green-400 rounded-full"
          >
            Next
          </button>

          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="h-px bg-gray-600 w-full" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px bg-gray-600 w-full" />
          </div>

          <button className="w-full flex items-center justify-center border border-gray-600 py-3 hover:bg-gray-800 font-bold rounded-full">
            <FaGoogle className="mr-2 text-2xl" />
            Sign up with Google
          </button>

          <button className="w-full flex items-center justify-center border border-gray-600 py-3 hover:bg-gray-800 font-bold rounded-full">
            <FaApple className="mr-2" />
            Sign up with Apple
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-white underline">
            Log in here.
          </a>
        </p>
      </div>
    </div>
  );
}
