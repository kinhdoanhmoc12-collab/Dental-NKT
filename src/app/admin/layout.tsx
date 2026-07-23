"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Users, BookOpen, Star, LogOut, LayoutDashboard, Shield, ShieldCheck } from "lucide-react";
import { getAuthToken, removeAuthToken } from "../../lib/api";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setAuthorized(true);
      return;
    }

    const token = getAuthToken();
    if (!token) {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
    }
  }, [pathname, isLoginPage, router]);

  const handleLogout = () => {
    removeAuthToken();
    router.push("/admin/login");
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-brand"></div>
      </div>
    );
  }

  if (isLoginPage) {
    return <>{children}</>;
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Leads (Tư vấn)", href: "/admin/leads", icon: Users },
    { name: "Cẩm nang (Blog)", href: "/admin/blog", icon: BookOpen },
    { name: "Reviews", href: "/admin/reviews", icon: Star },
    { name: "Bảo hành", href: "/admin/warranty", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0b1e2c] text-slate-300 flex flex-col border-r border-slate-800 shrink-0">
        <div className="p-6 space-y-8">
          <div className="flex items-center gap-2 text-white">
            <Shield className="w-6 h-6 text-teal-brand" />
            <span className="font-serif font-bold text-lg tracking-wide">NTK CRM</span>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-teal-brand text-white shadow-md shadow-teal-brand/20"
                      : "hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 mt-4 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-all cursor-pointer text-left"
            >
              <LogOut className="w-5 h-5 shrink-0" />
              <span>Đăng xuất</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 lg:p-10">
        <div className="max-w-7xl mx-auto space-y-8">{children}</div>
      </main>
    </div>
  );
}
