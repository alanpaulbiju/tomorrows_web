"use client";

import Link from "next/link";
import AuthCard from "@/components/AuthCard";

export default function SignupPage() {
  return (
    <AuthCard
      title="Create Account"
      subtitle="Join the global property marketplace."
    >
      <form className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

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
            placeholder="Create password"
            className="w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        <button className="w-full rounded-xl bg-blue-900 py-4 font-semibold text-white transition hover:scale-[1.02]">
          Create Account
        </button>

        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-900"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
