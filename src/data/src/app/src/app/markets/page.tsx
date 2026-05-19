import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const markets = [
  {
    city: "Dubai",
    growth: "+14%",
    status: "Strong Growth",
  },
  {
    city: "Singapore",
    growth: "+9%",
    status: "High Demand",
  },
  {
    city: "New York",
    growth: "+5%",
    status: "Stable",
  },
  {
    city: "London",
    growth: "-3%",
    status: "Correction",
  },
];

export default function MarketsPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Global Market Trends"
        subtitle="Track international property market movements."
      />

      <section className="section-padding">
        <div className="container-custom px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => (
              <div
                key={market.city}
                className="rounded-[2rem] border bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold">
                  {market.city}
                </h2>

                <h3 className="mt-4 text-4xl font-bold text-blue-900">
                  {market.growth}
                </h3>

                <p className="mt-2 text-slate-500">
                  {market.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
