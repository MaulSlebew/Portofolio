import { Download } from "lucide-react";

const QUICK_FACTS = ["Software Engineer", "Central Java, Indonesia", "Fresh Graduate", "Full Stack Developer"];

const STATS = [
  { value: "94", label: { id: "Nilai kompetensi kejuruan", en: "Vocational competency score" } },
  { value: "Runner-up", label: { id: "LKS tingkat Kabupaten", en: "District-level LKS runner-up" } },
  { value: "4", label: { id: "Project selesai", en: "Completed projects" } },
];

export default function Profile({ language = "id" }) {
  const copy = {
    id: {
      tag: "Profil",
      title: "Membangun dengan tujuan & kerapian detail.",
      description:
        "Perjalanan saya di dunia software engineering dimulai sejak sekolah kejuruan, di mana saya mulai mendalami arsitektur web dan pengembangan aplikasi. Berfokus pada pembangunan backend yang solid dengan Laravel serta frontend yang responsif dengan React — dengan prioritas utama pada kode yang bersih, performa, dan kenyamanan pengguna.",
      howIWork: "Cara saya bekerja",
      howIWorkItems: [
        "Memprioritaskan kode yang rapi dan mudah dikembangkan.",
        "Merancang interaksi yang intuitif dari backend hingga frontend.",
        "Terus mempelajari standar industri dan teknologi baru.",
      ],
      cv: "Download CV",
      cvHint: "Coming soon",
    },
    en: {
      tag: "Profile",
      title: "Bridging backend logic and refined UI.",
      description:
        "My journey in software engineering started in vocational high school, where I developed a passion for clean architecture and web development. I focus on building robust backend systems with Laravel and responsive frontends with React — prioritizing clean code, performance, and intuitive user experience.",
      howIWork: "How I work",
      howIWorkItems: [
        "Prioritizing code maintainability and scalability.",
        "Designing intuitive interactions from backend to frontend.",
        "Consistently learning new tools and industry standards.",
      ],
      cv: "Download CV",
      cvHint: "Coming soon",
    },
  };

  const text = copy[language] || copy.id;
  const dotGridStyle = {
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    maskImage:
      "radial-gradient(ellipse 70% 70% at 50% 40%, black 25%, transparent 80%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 70% 70% at 50% 40%, black 25%, transparent 80%)",
  };

  return (
    <section
      id="profile"
      className="relative bg-zinc-950 px-6 py-28 border-t border-zinc-800 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={dotGridStyle}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <span className="inline-block rounded-full border border-zinc-700 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400">
          {text.tag}
        </span>
        <h2 className="mt-4 max-w-xl text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
          {text.title}
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2" data-aos="fade-right" data-aos-duration="700">
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 scale-90 rounded-full bg-zinc-50/10 blur-[70px]"
              />

              <img
                src="/images/profile.png"
                alt="Farid Maulana Rhamadan"
                className="relative z-10 h-full w-full object-cover rounded-2xl grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-8" data-aos="fade-left" data-aos-duration="700">
            <p className="text-zinc-400 leading-relaxed">
              {text.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {QUICK_FACTS.map((f) => (
                <span
                  key={f}
                  className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 border border-zinc-800 bg-zinc-900/40 rounded-full px-3 py-1.5"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-zinc-800 py-6">
              {STATS.map((s) => (
                <div key={s.value}>
                  <p className="text-2xl font-bold text-zinc-50">{s.value}</p>
                  <p className="mt-1 text-xs text-zinc-500 leading-snug">
                    {s.label[language] || s.label.id}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
                {text.howIWork}
              </p>
              <ul className="flex flex-col gap-2">
                {text.howIWorkItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <span className="text-zinc-50">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              disabled
              title="CV belum tersedia"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-2.5 text-sm text-zinc-500 cursor-not-allowed"
            >
              <Download size={16} />
              {text.cv}
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {text.cvHint}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}