
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Utensils,
  ShoppingBag,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    // Temporary login simulation
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl shadow-green-900/5 overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex relative bg-gradient-to-br from-green-600 to-emerald-800 p-12 flex-col justify-between text-white overflow-hidden">

          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <Utensils size={25} />
              </div>

              <span className="text-2xl font-extrabold">
                CanteenPro.
              </span>
            </Link>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mb-7">
              <ShoppingBag size={34} />
            </div>

            <h1 className="text-4xl font-extrabold leading-tight mb-5">
              Delicious Food,
              <br />
              Just One Click Away.
            </h1>

            <p className="text-green-50 leading-7 text-base">
              Discover your favorite meals, order easily, and
              enjoy a better campus canteen experience with CanteenPro.
            </p>
          </div>

          <div className="relative z-10 text-sm text-green-100">
            © {new Date().getFullYear()} CanteenPro. All rights reserved.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-7 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">

          {/* Mobile Logo */}
          <Link to="/" className="flex md:hidden items-center gap-2 mb-10">
            <div className="bg-green-600 text-white p-2 rounded-xl">
              <Utensils size={22} />
            </div>

            <span className="text-2xl font-extrabold text-gray-900">
              Canteen
              <span className="text-green-600">Pro.</span>
            </span>
          </Link>

          <div className="mb-9">
            <span className="text-sm font-bold text-green-600 uppercase tracking-wider">
              Welcome Back
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
              Sign In
            </h2>

            <p className="text-gray-500 text-sm leading-6">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none text-gray-800 placeholder:text-gray-400 transition-all focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-semibold text-green-600 hover:text-green-700"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 outline-none text-gray-800 placeholder:text-gray-400 transition-all focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-green-600 cursor-pointer"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold shadow-lg shadow-green-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-300/50 active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && <ArrowRight size={19} />}
            </button>

          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-green-600 hover:text-green-700 transition"
            >
              Create Account
            </Link>
          </p>

          <Link
            to="/"
            className="text-center text-sm text-gray-400 hover:text-green-600 transition mt-5"
          >
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Login;
