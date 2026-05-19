import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Featured Properties
            </h2>

            <p className="mt-3 text-slate-500">
              Curated global investment opportunities
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-[2rem] border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
                  {property.type}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {property.title}
                </h3>

                <p className="mt-1 text-slate-500">
                  {property.location}
                </p>

                <div className="mt-4 flex gap-4 text-sm text-slate-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-blue-900">
                    {property.price}
                  </h4>

                  <button className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
