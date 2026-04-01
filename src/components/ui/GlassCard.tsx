export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-glass-bg backdrop-blur-[16px] border border-glass-border rounded-[16px] shadow-glass ${className}`}>
      {children}
    </div>
  );
}
