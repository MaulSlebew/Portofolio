import { Flame } from "lucide-react";

const SKILLS = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "PHP", slug: "php" },
  { name: "C#", slug: "csharp", icon: "C#" },
  { name: "Laravel", slug: "laravel" },
  { name: "Blade", icon: Flame },
  { name: "React", slug: "react" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "MySQL", slug: "mysql" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  { name: "Railway", slug: "railway" },
  { name: "VS Code", slug: "vscode", icon: "VS" },
  { name: "Postman", slug: "postman" },
  { name: "Laragon", slug: "laragon" },
  { name: "XAMPP", slug: "xampp" },
  { name: "Figma", slug: "figma" },
];

function LogoItem({ skill, muted = false }) {
  return (
    <span
      className={`flex items-center gap-2 shrink-0 font-mono text-xs uppercase tracking-widest ${
        muted ? "text-zinc-600" : "text-zinc-300"
      }`}
    >
      {skill.icon ? (
        <skill.icon size={18} className={muted ? "opacity-50" : ""} />
      ) : skill.iconUrl ? (
        <img
          src={skill.iconUrl}
          alt={skill.name}
          className="h-[18px] w-[18px]"
        />
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/${muted ? "52525b" : "ffffff"}`}
          alt={skill.name}
          className="h-[18px] w-[18px]"
        />
      )}
      {skill.name}
    </span>
  );
}

function LogoMarquee({ direction = "left" }) {
  const items = [...SKILLS, ...SKILLS];
  return (
    <div className="relative z-10 overflow-hidden bg-zinc-950">
      <div
        className={`flex items-center gap-14 py-4 ${
          direction === "left" ? "marquee-left-track" : "marquee-right-track"
        }`}
      >
        {items.map((skill, i) => (
          <LogoItem key={`${skill.name}-${i}`} skill={skill} muted />
        ))}
      </div>
    </div>
  );
}

export default function Skills({ language = "id" }) {
  const copy = {
    id: {
      badge: "Skills & Tools",
      title: "Teknologi & Alur Kerja.",
      description:
        "Kumpulan alat, framework, dan platform deployment yang saya gunakan untuk membangun aplikasi fungsional.",
    },
    en: {
      badge: "Skills & Tools",
      title: "Technologies & Workflow.",
      description:
        "A breakdown of tools, frameworks, and deployment platforms I use to craft functional applications.",
    },
  };

  const text = copy[language] || copy.id;

  const gridStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
    backgroundSize: "56px 56px",
    maskImage:
      "radial-gradient(ellipse 55% 60% at 50% 50%, black 18%, transparent 65%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 55% 60% at 50% 50%, black 18%, transparent 65%)",
  };

  return (
    <section
      id="skills"
      className="relative bg-zinc-950 border-t border-zinc-800 overflow-hidden"
    >
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left-track, .marquee-right-track {
          width: max-content;
        }
        .marquee-left-track { animation: marquee-left 32s linear infinite; }
        .marquee-right-track { animation: marquee-right 32s linear infinite; }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 z-0"
      >
        <p
          className="whitespace-nowrap text-center font-bold tracking-tighter leading-none text-zinc-900"
          style={{ fontSize: "19vw" }}
        >
          SKILLS & TOOLS
        </p>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(9,9,11,0.6) 55%, #09090b 90%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <div data-aos="fade-up" data-aos-duration="700">
          <LogoMarquee direction="right" />
        </div>

        <div className="relative px-6 py-32 border-y border-zinc-800 overflow-hidden" data-aos="fade-up" data-aos-duration="700">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={gridStyle}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="inline-block rounded-full border border-zinc-700 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400">
          {text.badge}
        </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              {text.title}
            </h2>
            <p className="mt-4 max-w-md mx-auto text-zinc-400">
              {text.description}
            </p>

            <div className="mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 mx-auto">
              {SKILLS.map((skill, index) => (
                <span
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={index * 40}
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-zinc-50 hover:border-zinc-600 transition-colors"
                >
                  {skill.icon ? (
                    typeof skill.icon === "string" ? (
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded text-[10px] font-bold text-zinc-300 group-hover:text-zinc-100">
                        {skill.icon}
                      </span>
                    ) : (
                      <skill.icon size={14} className="text-zinc-500 group-hover:text-zinc-400 transition-colors" />
                    )
                  ) : skill.iconUrl ? (
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${skill.slug}/ffffff`}
                      alt={skill.name}
                      className="h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <LogoMarquee direction="left" />
      </div>
    </section>
  );
}