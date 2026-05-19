import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { notFound } from "next/navigation";

export default function PropertyDetails({
  params,
}: {
  params: { id: string };
}) {
  const property = properties.find(
    (p) => p.id === Number(params.id)
  );

  if (!property) return notFound();

  return (
    <>
      <Navbar />

      <section className="section-padding">
        <div className="container-custom px-6">
          <img
            src={property.image}
            alt={property.title}
            className="h-[500px] w-full rounded-[2rem] object-cover"
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-900">
                {property.type}
              </span>

              <h1 className="mt-5 text-5xl font-bold">
                {property.title}
              </h1>

              <p className="mt-2 text-lg text-slate-500">
                {property.location}
              </p>

              <div className="mt-6 flex gap-6 text-slate-600">
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
                <span>{property.sqft} sqft</span>
              </div>

              <p className="mt-8 text-lg text-slate-700">
                {property.description}
              </p>
            </div>

            <div className="rounded-[2rem] border bg-white p-8 shadow-sm h-fit">
              <h2 className="text-4xl font-bold text-blue-900">
                ${property.price.toLocaleString()}
              </h2>

              <button className="mt-8 w-full rounded-xl bg-blue-900 py-4 text-lg font-semibold text-white">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
