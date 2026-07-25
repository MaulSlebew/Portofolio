export default function Navbar({ language, setLanguage }) {
  const labels = {
    id: {
      projects: "Proyek",
      skills: "Keahlian",
      profile: "Profil",
      contact: "Kontak",
      talk: "Mari mengobrol",
    },
    en: {
      projects: "Projects",
      skills: "Skills",
      profile: "Profile",
      contact: "Contact",
      talk: "Let's talk",
    },
  };

  const text = labels[language] || labels.id;
  const isId = language === "id";

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-6 py-4">
        <span className="font-bold tracking-tight text-zinc-50">
          Farid Maulana Rhamadan<span className="text-zinc-600">.</span>
        </span>

        <nav className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
          <a href="#work" className="hover:text-zinc-50 transition-colors">
            {text.projects}
          </a>
          <a href="#skills" className="hover:text-zinc-50 transition-colors">
            {text.skills}
          </a>
          <a href="#profile" className="hover:text-zinc-50 transition-colors">
            {text.profile}
          </a>
          <a href="#contact" className="hover:text-zinc-50 transition-colors">
            {text.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 p-1">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                isId ? "bg-zinc-50 text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors ${
                !isId ? "bg-zinc-50 text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-700 px-5 py-2 font-mono text-xs uppercase tracking-widest text-zinc-200 transition-colors duration-300 hover:border-zinc-50 hover:text-zinc-950 active:scale-95 before:absolute before:inset-0 before:z-0 before:-translate-x-full before:rounded-full before:bg-zinc-50 before:transition-transform before:duration-300 before:ease-out hover:before:translate-x-0"
          >
            <span className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full delay-100" />
            <span className="relative z-20">{text.talk}</span>
          </a>
        </div>
      </div>
    </header>
  );
}