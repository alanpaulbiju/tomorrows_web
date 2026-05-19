"use client";

import Link from "next/link";
import AuthCard from "@/components/AuthCard";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Login to access your global property account."
    >
      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <button className="w-full rounded-xl bg-blue-900 py-4 font-semibold text-white transition hover:scale-[1.02]">
          Login
        </button>

        <p className="text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-900"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
