const TICKER_ITEMS = [
  "LET'S TALK",
  "BASED IN CENTRAL JAVA",
  "FULL STACK DEVELOPER",
  "AVAILABLE FOR FREELANCE",
  "REACT & LARAVEL DEV",
  "COFFEE + CODE",
  "FULL STACK DEVELOPER",
];

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="overflow-hidden border-b border-zinc-800 bg-zinc-950">
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .ticker-track {
          display: inline-flex;
          min-width: max-content;
          width: max-content;
          will-change: transform;
          animation: ticker-scroll 18s linear infinite;
        }
      `}</style>

      <div className="ticker-track flex items-center gap-10 py-3 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-zinc-400"
          >
            {item}
            <span className="text-zinc-700">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
