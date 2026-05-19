"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container-custom flex items-center justify-between px-6 py-4">
        <Link href="/">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Real Estate Hub
            </h1>

            <p className="text-xs text-slate-500">
              Global Property Intelligence
            </p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/buy">Buy</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/rent">Rent</Link>
          <Link href="/markets">Markets</Link>
          <Link href="/land-values">
            Land Values
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-xl border px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
