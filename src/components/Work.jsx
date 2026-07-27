import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        code: "01",
        name: "Asspelthree",
        category: "Laravel Blade · POS & Staff Management",
        image: "/images/projects/Asspelthree.png",
        stack: ["Laravel", "Blade", "JavaScript", "MySQL"],
        link: "#",
    },
    {
        code: "02",
        name: "MStore",
        category: "React + Laravel · E-Commerce",
        image: "/images/projects/MStore.png",
        stack: ["React", "Laravel API", "Tailwind CSS"],
        link: "https://hehehehabruh.vercel.app/",
    },
    {
        code: "03",
        name: "MPlay's",
        category: "Html + Tailwind · Playstation Rent",
        image: "/images/projects/Mplays.png",
        stack: ["Html", "Tailwind CSS"],
        link: "https://m-plays.vercel.app/",
    },
    {
        code: "04",
        name: "Portfolio",
        category: "React + Tailwind CSS · Personal Portfolio",
        image: "/images/projects/Portfolio.png",
        stack: ["React", "Tailwind CSS"],
    },
    ];

    export default function Work({ language = "id" }) {
        const copy = {
            id: {
                badge: "PORTOFOLIO",
                title: "Karya & Aplikasi Unggulan.",
            },
            en: {
                badge: "PORTFOLIO",
                title: "Selected Work & Applications.",
            }
        };

        const text = copy[language] || copy.id

    const [hovered, setHovered] = useState(null);

    const dotGridStyle = {
        backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 30%, black 25%, transparent 80%)",
        WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 30%, black 25%, transparent 80%)",
    };

    return (        
        <section
        id="work"
        className="relative bg-zinc-950 px-6 py-28 border-t border-zinc-800 overflow-hidden"
        >
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={dotGridStyle}
        />

        

        <div className="relative z-10 max-w-5xl mx-auto">
            <span className="inline-block rounded-full border border-zinc-700 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400">
                {text.badge}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
                {text.title}
            </h2>

            <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p, index) => (
                <a
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay={index * 100}
                key={p.code}
                href={p.link || "#"}
                target={p.link && p.link !== "#" ? "_blank" : undefined}
                rel={p.link && p.link !== "#" ? "noreferrer" : undefined}
                onMouseEnter={() => setHovered(p.code)}
                onMouseLeave={() => setHovered(null)}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
                >
                <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />

                <span className="absolute top-4 left-4 font-mono text-xs text-zinc-400">
                    {p.code}
                </span>

                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                    <div>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-50">
                        {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                        {p.category}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                        <span
                            key={s}
                            className="font-mono text-[10px] uppercase tracking-wide border border-zinc-700 text-zinc-400 rounded-full px-2 py-0.5"
                        >
                            {s}
                        </span>
                        ))}
                    </div>
                    </div>
                    <ArrowUpRight
                    size={18}
                    className={`shrink-0 text-zinc-500 transition-all ${
                        hovered === p.code
                        ? "text-amber-400 translate-x-1 -translate-y-1"
                        : ""
                    }`}
                    />
                </div>
                </a>
            ))}
            </div>
        </div>
        </section>
    );
}