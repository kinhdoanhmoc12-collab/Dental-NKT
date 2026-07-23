"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Lock, User, AlertCircle } from "lucide-react";
import { setAuthToken } from "../../../lib/api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setAuthToken(resData.data.access_token);
        // Save user info
        localStorage.setItem("crm_user", JSON.stringify(resData.data.user));
        router.push("/admin/dashboard");
      } else {
        setError(resData.message || "Tài khoản hoặc mật khẩu không chính xác.");
      }
    } catch (err) {
      console.error(err);
      setError("Không thể kết nối tới máy chủ backend. Vui lòng kiểm tra lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1e2c] via-[#112a3d] to-[#0b1e2c] p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-brand/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-brand/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 text-white">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <div className="p-3 bg-teal-brand/20 border border-teal-brand/30 rounded-2xl">
            <Shield className="w-8 h-8 text-teal-brand" />
          </div>
          <div className="space-y-1">
            <h1 className="font-serif text-2xl font-bold tracking-wide">NTK CRM Dashboard</h1>
            <p className="text-xs text-slate-400">Đăng nhập hệ thống quản trị Nha Khoa Trẻ</p>
          </div>
        </div>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4 flex gap-3 text-xs text-rose-300 items-start mb-6">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Tên đăng nhập</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nhập tài khoản (e.g. lananh_sale)"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl text-sm transition-colors text-white"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Mật khẩu</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 focus:border-teal-brand focus:bg-white/10 focus:outline-none rounded-xl text-sm transition-colors text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-brand hover:bg-teal-brand-hover disabled:bg-teal-brand/50 text-white py-3.5 px-4 rounded-xl text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer mt-2"
          >
            {loading ? "Đang xác thực..." : "Đăng nhập CRM"}
          </button>
        </form>
      </div>
    </div>
  );
}
