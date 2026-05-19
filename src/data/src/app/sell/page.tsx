import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function SellPage() {
  return (
    <>
      <Navbar />

      <PageHero
        title="Sell Property"
        subtitle="Reach international buyers and showcase your listings."
      />

      <section className="section-padding">
        <div className="container-custom px-6">
          <div className="rounded-[2rem] bg-white p-10 shadow-sm border">
            <h2 className="text-3xl font-bold">
              List Your Property
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <input
                className="rounded-xl border p-4"
                placeholder="Property Title"
              />

              <input
                className="rounded-xl border p-4"
                placeholder="Location"
              />

              <input
                className="rounded-xl border p-4"
                placeholder="Price"
              />

              <select className="rounded-xl border p-4">
                <option>Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>

            <button className="mt-8 rounded-xl bg-blue-900 px-8 py-4 text-white">
              Submit Property
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
