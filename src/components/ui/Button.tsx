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
    primary: "bg-apple-blue hover:bg-apple-blue-hover text-white px-7 py-3 rounded-full text-[15px] hover:shadow-glow-blue active:scale-[0.98]",
    secondary: "bg-white/80 backdrop-blur-xl border border-black/[0.06] text-text-primary px-7 py-3 rounded-full text-[15px] hover:bg-white hover:shadow-elevated active:scale-[0.98]",
  };
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const classes = `${base} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} className={classes} disabled={disabled} onClick={onClick}>{children}</button>;
}
