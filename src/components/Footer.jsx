import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 px-6 py-10 text-zinc-500 font-mono text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left side - Copyright & Stack Note */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} Farid Maulana Rhamadan.
          </p>
          <span className="hidden sm:inline text-zinc-800">✦</span>
          <p className="text-zinc-600 text-[11px]">
            Crafted with React & Tailwind CSS
          </p>
        </div>

        {/* Right side - Status & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-zinc-700">✦</span>
            <span>Designed in Central Java</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-600 transition-all cursor-pointer"
          >
            <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}