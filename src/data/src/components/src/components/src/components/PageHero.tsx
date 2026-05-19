type Props = {
  title: string;
  subtitle: string;
};

export default function PageHero({
  title,
  subtitle,
}: Props) {
  return (
    <section className="gradient-bg py-24 text-white">
      <div className="container-custom px-6 text-center">
        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
