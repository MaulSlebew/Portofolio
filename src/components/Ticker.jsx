const TICKER_ITEMS = [
  "LET'S TALK",
  "BASED IN CENTRAL JAVA",
  "AVAILABLE FOR FREELANCE",
  "REACT & LARAVEL DEV",
  "COFFEE + CODE",
];

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-b border-zinc-800 bg-zinc-950">
      <div className="marquee-track flex items-center gap-10 py-3 whitespace-nowrap">
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
