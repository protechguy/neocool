import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-deep border-t border-glass-border py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div>
            <div className="text-text-primary text-[15px] font-bold tracking-[0.2em] uppercase">Neocool</div>
            <p className="mt-2 text-[13px] text-text-muted max-w-xs">
              Precision thermal modifications for MacBook Neo. Engineered for peak performance.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-[11px] uppercase tracking-[2px] text-text-muted font-semibold mb-3">Products</h4>
              <div className="flex flex-col gap-2">
                <Link href="/stage-1" className="text-[13px] text-text-secondary hover:text-ice-blue transition-colors">Stage 1 — Thermal Pad</Link>
                <Link href="/stage-2" className="text-[13px] text-text-secondary hover:text-ice-blue transition-colors">Stage 2 — Copper Heatsink</Link>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[2px] text-text-muted font-semibold mb-3">Company</h4>
              <div className="flex flex-col gap-2">
                <Link href="/order" className="text-[13px] text-text-secondary hover:text-ice-blue transition-colors">Order</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-text-muted">
          <span>&copy; {new Date().getFullYear()} Neocool. All rights reserved.</span>
          <span>neocool.com</span>
        </div>
      </div>
    </footer>
  );
}
