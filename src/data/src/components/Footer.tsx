import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-custom px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">
              Real Estate Hub
            </h2>

            <p className="mt-3 text-slate-400">
              Global Property Intelligence
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Marketplace
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <Link href="/buy">Buy</Link>
              <Link href="/sell">Sell</Link>
              <Link href="/rent">Rent</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Intelligence
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <Link href="/markets">Markets</Link>
              <Link href="/land-values">
                Land Values
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-400">
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          © 2026 Real Estate Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
