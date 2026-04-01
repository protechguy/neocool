import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#021a2e] border-t border-sky-900/30 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div>
            <div className="text-sky-100 text-[15px] font-bold tracking-[0.2em] uppercase">Neocool</div>
            <p className="mt-2 text-[13px] text-sky-300/30 max-w-xs">
              Precision thermal modifications for MacBook Neo. Engineered for peak performance.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-[11px] uppercase tracking-[2px] text-sky-400/30 font-semibold mb-3">Products</h4>
              <div className="flex flex-col gap-2">
                <Link href="/stage-1" className="text-[13px] text-sky-300/50 hover:text-sky-200 transition-colors">Stage 1 — Thermal Pad</Link>
                <Link href="/stage-2" className="text-[13px] text-sky-300/50 hover:text-sky-200 transition-colors">Stage 2 — Copper Heatsink</Link>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-[2px] text-sky-400/30 font-semibold mb-3">Company</h4>
              <div className="flex flex-col gap-2">
                <Link href="/order" className="text-[13px] text-sky-300/50 hover:text-sky-200 transition-colors">Order</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-sky-900/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-sky-400/20">
          <span>&copy; {new Date().getFullYear()} Neocool. All rights reserved.</span>
          <span>neocool.com</span>
        </div>
      </div>
    </footer>
  );
}
