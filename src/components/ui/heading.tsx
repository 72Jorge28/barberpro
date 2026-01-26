export function Heading({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-base text-[hsl(var(--muted-fg))] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
