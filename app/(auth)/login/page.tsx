"use client";

import { ArrowRight, ChevronDown, Smartphone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { loginUser } from "@/lib/auth.api";
import { useAuthStore } from "@/store/auth.store";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setAuth = useAuthStore((state) => state.setAuth);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Sign in with Firebase popup
      const result = await signInWithPopup(auth, googleProvider);

      // 2. Get the Firebase ID Token
      const firebaseIdToken = await result.user.getIdToken();

      // 3. Send the token to the backend
      const response = await loginUser({ firebaseIdToken });

      if (response.accessToken) {
        // 4. Save authentication state inside Zustand store
        setAuth(response.user as any, response.accessToken, response.refreshToken);

        // 5. Redirect user to home/account page
        router.push("/");
      }
    } catch (err: any) {
      console.error("Google Auth error:", err);
      setError(err.message || "Something went wrong during Google Login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F2FAF6]">
      <div className="px-3 sm:px-4 md:px-6 pt-20 sm:pt-24 md:pt-28 pb-4">
        <div className="mx-auto max-w-[2000px]">
          <section className="w-full min-h-[calc(100vh-120px)] bg-white rounded-[28px] p-8 md:p-12 lg:p-20 shadow-[0_12px_30px_rgba(7,76,67,0.08)] flex flex-col items-center justify-center relative overflow-hidden">

            <div className="w-full max-w-[480px]">

              {/* Header Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#E5F5F0] rounded-full flex items-center justify-center relative">
                  <Smartphone className="w-8 h-8 text-[#094639]" />
                  <div className="absolute bottom-4 right-4 bg-[#094639] rounded-full p-1 border-2 border-white">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-[#094639] mb-2 tracking-tight">
                  Welcome Back!
                </h1>
                <p className="text-gray-500 font-medium">
                  Log in to your account to continue.
                </p>
              </div>

              {error && (
                <div className="p-4 mb-4 text-sm text-red-700 bg-red-50 rounded-xl">
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                {/* Phone Input Field (Placeholder OTP Flow) */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="flex rounded-xl border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#094639]/20 focus-within:border-[#094639] transition-all bg-white shadow-sm">

                    {/* Country Code Selector */}
                    <button type="button" className="flex items-center gap-2 px-4 py-4 bg-[#F8F9F9] border-r border-gray-200 hover:bg-gray-100 transition-colors">
                      <img
                        src="https://flagcdn.com/w20/in.png"
                        alt="India"
                        className="w-5 h-auto rounded-sm"
                      />
                      <span className="font-semibold text-gray-700 text-sm">+91</span>
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>

                    {/* Number Input */}
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      className="flex-1 px-4 py-4 focus:outline-none text-gray-700 font-medium"
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#094639] text-white font-bold py-4 rounded-xl hover:bg-[#07362c] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#094639]/20 disabled:opacity-50"
                >
                  {loading ? "Loading..." : "Send OTP"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {/* OR Separator */}
              <div className="relative my-8 flex items-center justify-center">
                <span className="absolute inset-x-0 h-px bg-gray-200"></span>
                <span className="relative bg-white px-4 text-xs font-semibold uppercase text-gray-400">
                  Or
                </span>
              </div>

              {/* Google Sign-in Button */}
              <button
                type="button"
                disabled={loading}
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-bold py-4 px-6 rounded-xl shadow-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                Sign in with Google
              </button>

            </div>

          </section>
        </div>
      </div>
    </main>
  );
}