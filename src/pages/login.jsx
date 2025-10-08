import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email === "demo@talentflow.com" && password === "demo123") {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/jobs");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <LogIn className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">Sign in to TalentFlow</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg shadow-sm transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-600">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-emerald-600 hover:underline font-medium"
            >
              Register
            </button>
          </p>
        </div>

        {/* Demo creds */}
        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
          <p>
            <span className="font-medium text-slate-800">Demo credentials:</span>
            <br />
            Email: demo@talentflow.com <br />
            Password: demo123
          </p>
        </div>
      </div>
    </div>
  );
}
