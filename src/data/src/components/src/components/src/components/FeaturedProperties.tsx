import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom px-6">
        <div>
          <h2 className="text-4xl font-bold">
            Featured Properties
          </h2>

          <p className="mt-2 text-slate-500">
            Curated global investment opportunities
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
