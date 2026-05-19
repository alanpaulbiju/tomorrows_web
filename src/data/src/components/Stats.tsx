export default function Stats() {
  const stats = [
    {
      number: "120+",
      label: "Countries Covered",
    },
    {
      number: "25K+",
      label: "Listings",
    },
    {
      number: "95%",
      label: "Investor Confidence",
    },
    {
      number: "$40B+",
      label: "Property Volume",
    },
  ];

  return (
    <section className="container-custom px-6 py-14">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[2rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-4xl font-bold text-blue-900">
              {stat.number}
            </h2>

            <p className="mt-2 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
