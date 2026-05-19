type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-10 shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            {title}
          </h1>

          <p className="mt-3 text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
