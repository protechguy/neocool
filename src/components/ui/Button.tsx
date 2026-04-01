import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({ children, href, variant = "primary", className = "", type = "button", disabled, onClick }: ButtonProps) {
  const base = "inline-block font-medium transition-all duration-300 text-center cursor-pointer";
  const variants = {
    primary: "bg-ice-blue hover:bg-ice-blue-hover text-deep px-7 py-3 rounded-full text-[15px] font-semibold hover:shadow-glow-ice active:scale-[0.98]",
    secondary: "bg-deep-surface/60 backdrop-blur-xl border border-glass-border text-text-primary px-7 py-3 rounded-full text-[15px] hover:bg-deep-surface hover:border-text-muted/30 active:scale-[0.98]",
  };
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const classes = `${base} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} className={classes} disabled={disabled} onClick={onClick}>{children}</button>;
}
