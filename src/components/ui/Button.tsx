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
  const base = "inline-block font-medium transition-colors text-center";
  const variants = {
    primary: "bg-apple-blue hover:bg-apple-blue-hover text-white px-8 py-3 rounded-[22px] text-base",
    secondary: "bg-glass-bg backdrop-blur-[16px] border border-glass-border text-text-primary px-8 py-3 rounded-[22px] text-base hover:bg-white",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button type={type} className={classes} disabled={disabled} onClick={onClick}>{children}</button>;
}
