import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-text-secondary py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white font-bold tracking-wide">NEOCOOL</div>
        <div className="flex gap-6 text-sm">
          <Link href="/stage-1" className="hover:text-white transition-colors">Stage 1</Link>
          <Link href="/stage-2" className="hover:text-white transition-colors">Stage 2</Link>
          <Link href="/order" className="hover:text-white transition-colors">Order</Link>
        </div>
        <div className="text-xs">&copy; {new Date().getFullYear()} Neocool. All rights reserved.</div>
      </div>
    </footer>
  );
}
