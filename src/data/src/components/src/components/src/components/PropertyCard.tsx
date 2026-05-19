import Link from "next/link";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
};

export default function PropertyCard({
  property,
}: {
  property: Property;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={property.image}
        alt={property.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-6">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
          {property.type}
        </span>

        <h2 className="mt-4 text-2xl font-bold">
          {property.title}
        </h2>

        <p className="text-slate-500">
          {property.location}
        </p>

        <div className="mt-4 flex gap-4 text-sm text-slate-600">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.sqft} sqft</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-blue-900">
            ${property.price.toLocaleString()}
          </h3>

          <Link
            href={`/property/${property.id}`}
            className="rounded-xl bg-slate-900 px-5 py-3 text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
