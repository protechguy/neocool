export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-text-secondary">{subtitle}</p>}
    </div>
  );
}
