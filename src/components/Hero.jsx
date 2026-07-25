import { Code2, Users, Camera, Mail, ArrowUpRight } from "lucide-react";

const chromeText = {
  backgroundImage:
    "linear-gradient(180deg, #ffffff 0%, #a3a3a3 42%, #f4f4f5 55%, #71717a 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textShadow: "0 2px 30px rgba(255,255,255,0.08)",
};

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  maskImage:
    "radial-gradient(ellipse 70% 55% at 50% 15%, black 35%, transparent 85%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 70% 55% at 50% 15%, black 35%, transparent 85%)",
};

export default function Hero({ language }) {
  const copy = {
    id: {
      badge: "Tersedia untuk freelance",
      titleLine1: "Membangun web",
      titleLine2: "yang terstruktur.",
      description:
        "Software Engineer lulusan baru yang berfokus membangun aplikasi web responsif dan scalable dengan Laravel & React. Menitikberatkan pada kode yang bersih, interaksi halus, dan pengalaman pengguna yang intuitif.",
      email: "Kirim Email",
      work: "Lihat Projek",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
    en: {
      badge: "Available for freelance",
      titleLine1: "Building clean, scalable",
      titleLine2: "web applications.",
      description:
        "Fresh graduate Software Engineer building scalable web applications with Laravel, React, and modern CSS. Focused on crafting clean code, smooth interactions, and thoughtful user experiences.",
      email: "Send Email",
      work: "View Work",
      github: "GitHub",
      linkedin: "LinkedIn",
      instagram: "Instagram",
    },
  };

  const text = copy[language] || copy.id;

  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-40 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={gridStyle}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 z-10"
      >
        <p
          className="whitespace-nowrap text-center font-bold tracking-tighter leading-none text-zinc-800"
          style={{ fontSize: "19vw" }}
        >
          DEVELOPER
        </p>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(9,9,11,0.6) 55%, #09090b 90%)",
          }}
        />
      </div>

      <div className="relative z-20 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="800">
        <span className="inline-block rounded-full border border-zinc-700 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400">
          {text.badge}
        </span>

        <h1
          className="mt-8 pb-2 font-bold tracking-tight leading-[1.1] text-5xl sm:text-7xl"
          style={chromeText}
        >
          {text.titleLine1}
          <br />
          {text.titleLine2}
        </h1>

        <p className="mt-6 max-w-[80%] mx-auto text-zinc-400 leading-relaxed">
          {text.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:faridmaulanarhamadan11@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-50 text-zinc-950 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            <Mail size={14} />
            {text.email}
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 font-mono text-xs uppercase tracking-widest text-zinc-200 hover:border-zinc-50 transition-colors"
          >
            <ArrowUpRight size={14} />
            {text.work}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-50 hover:border-zinc-600 transition-colors"
          >
            <Code2 size={14} />
            {text.github}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-50 hover:border-zinc-600 transition-colors"
          >
            <Users size={14} />
            {text.linkedin}
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/_frdmlna.mr/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-50 hover:border-zinc-600 transition-colors"
          >
            <Camera size={14} />
            {text.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}