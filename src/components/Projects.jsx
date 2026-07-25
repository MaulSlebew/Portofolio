import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    code: "01",
    name: "MenuKopi",
    category: "Laravel Livewire · POS & Staff Management",
    description:
      "Sales and employee management system built for a coffee shop, with SPA-style navigation and a modular, split-component menu management flow.",
    stack: ["Laravel", "Livewire v3", "Alpine.js", "MySQL"],
  },
  {
    code: "02",
    name: "MARASTAR",
    category: "React + Laravel · E-Commerce",
    description:
      "Storefront for a heavyweight cotton t-shirt label — category-grouped catalog, filterable navbar, and a tabbed size chart across three product cuts.",
    stack: ["React", "Laravel API", "Tailwind CSS"],
  },
  {
    code: "03",
    name: "ASSPESTHREE",
    category: "React + Tailwind · Single-Product Site",
    description:
      "One-product streetwear drop site with a frosted-glass navbar, multi-colorway switcher, and a catalog / shop split view.",
    stack: ["React", "Tailwind CSS"],
  },
  {
    code: "04",
    name: "Forme Studio",
    category: "Landing Page",
    description:
      "Monochrome studio landing page, refined from a strict black-and-white system into a softer zinc palette with a frosted-glass navbar.",
    stack: ["React", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" className="relative px-6 py-28 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-500">
          Selected Work
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
          Projects I've shipped.
        </h2>

        <div className="mt-14 divide-y divide-zinc-800 border-t border-zinc-800">
          {PROJECTS.map((p) => (
            <div
              key={p.code}
              onMouseEnter={() => setHovered(p.code)}
              onMouseLeave={() => setHovered(null)}
              className="group py-8 grid sm:grid-cols-[64px_1fr_auto] gap-4 sm:items-start"
            >
              <span className="font-mono text-xs text-zinc-600">
                {p.code}
              </span>

              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    {p.category}
                  </span>
                </div>
                <p className="mt-3 text-zinc-400 leading-relaxed max-w-xl">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-wide border border-zinc-800 text-zinc-500 rounded-full px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex sm:justify-end items-start">
                <ArrowUpRight
                  size={18}
                  className={`text-zinc-700 transition-all ${
                    hovered === p.code
                      ? "text-amber-400 translate-x-1 -translate-y-1"
                      : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}