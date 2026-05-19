import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const landData = [
  {
    country: "UAE",
    appreciation: "+18%",
  },
  {
    country: "Singapore",
    appreciation: "+11%",
  },
  {
    country: "USA",
    appreciation: "+6%",
  },
  {
    country: "UK",
    appreciation: "+3%",
  },
];

export default function LandValuesPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Land Value Intelligence"
        subtitle="Track appreciation and land investment trends globally."
      />

      <section className="section-padding">
        <div className="container-custom px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {landData.map((land) => (
              <div
                key={land.country}
                className="rounded-[2rem] bg-white border p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold">
                  {land.country}
                </h2>

                <p className="mt-4 text-slate-500">
                  Appreciation
                </p>

                <h3 className="text-4xl font-bold text-emerald-500">
                  {land.appreciation}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
