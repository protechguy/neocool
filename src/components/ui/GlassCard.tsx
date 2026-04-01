export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-panel rounded-[20px] ${className}`}>
      {children}
    </div>
  );
}
