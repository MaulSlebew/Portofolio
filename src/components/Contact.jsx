import { useState } from "react";
import { Mail, ArrowUpRight, MapPin, Send } from "lucide-react";

const SOCIALS = [
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff", href: "https://github.com/" },
  { name: "LinkedIn", icon: "https://cdn.simpleicons.org/linkedin/ffffff", href: "https://linkedin.com/" },
  { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram/ffffff", href: "https://instagram.com/" },
];

export default function Contact({ language }) {
  const copy = {
    id: {
      tag: "Kontak",
      title: "Punya proyek? Mari ngobrol.",
      subtitle: "Kirim pesan atau langsung email — biasanya aku bales dalam 1x24 jam.",
      email: "Email",
      based: "Berbasis di",
      find: "Temukan aku di",
      available: "Tersedia untuk freelance",
      name: "Nama",
      message: "Pesan",
      send: "Kirim pesan",
      sending: "Mengirim...",
      sent: "Pesan terkirim ✓",
      placeholderName: "John Doe",
      placeholderEmail: "john@email.com",
      placeholderMessage: "Ceritain project atau ide kamu...",
    },
    en: {
      tag: "Contact",
      title: "Got a project? Let's talk.",
      subtitle: "Send a message or email directly — usually I reply within 24 hours.",
      email: "Email",
      based: "Based in",
      find: "Find me on",
      available: "Available for freelance",
      name: "Name",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      sent: "Message sent ✓",
      placeholderName: "John Doe",
      placeholderEmail: "john@email.com",
      placeholderMessage: "Tell me about your project or idea...",
    },
  };

  const text = copy[language] || copy.id;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  const dotGridStyle = {
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    maskImage:
      "radial-gradient(ellipse 70% 75% at 50% 40%, black 25%, transparent 80%)",
    WebkitMaskImage:
      "radial-gradient(ellipse 70% 75% at 50% 40%, black 25%, transparent 80%)",
  };

  return (
    <section
      id="contact"
      className="relative bg-zinc-950 border-t border-zinc-800 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 z-0 h-[420px] w-[420px] rounded-full bg-zinc-300/[0.08] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 z-0 h-[380px] w-[380px] rounded-full bg-zinc-200/[0.06] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={dotGridStyle}
      />

      <div className="relative z-10 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center" data-aos="fade-up" data-aos-duration="700">
            <span className="inline-block rounded-full border border-zinc-700 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400">
              {text.tag}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              {text.title}
            </h2>
            <p className="mt-4 max-w-md mx-auto text-zinc-400">
              {text.subtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 flex flex-col gap-4" data-aos="fade-right" data-aos-duration="700">
              <a
                href="mailto:faridmaulanarhamadan11@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-500 px-6 py-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 transition-colors">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                      {text.email}
                    </p>
                    <p className="text-zinc-200 hover:text-zinc-50">
                      faridmaulanarhamadan11@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition-all duration-300 group-hover:text-zinc-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    {text.based}
                  </p>
                  <p className="text-zinc-200">Central Java, Indonesia</p>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 mb-4">
                  {text.find}
                </p>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-400 transition-colors"
                    >
                      <img src={s.icon} alt={s.name} className="h-[15px] w-[15px]" />
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-6 py-4">
                <span className="text-emerald-400">✦</span>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  {text.available}
                </p>
              </div>
            </div>

            <form
              data-aos="fade-left"
              data-aos-duration="700"
              onSubmit={handleSubmit}
              className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-[11px] uppercase tracking-widest text-zinc-500"
                  >
                    {text.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={text.placeholderName}
                    className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] uppercase tracking-widest text-zinc-500"
                  >
                    {text.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={text.placeholderEmail}
                    className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-widest text-zinc-500"
                >
                  {text.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={text.placeholderMessage}
                  className="resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-zinc-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-zinc-50 bg-zinc-50 px-6 py-3 text-sm font-medium text-zinc-950 transition-colors duration-300 hover:border-zinc-800 hover:text-zinc-50 disabled:opacity-60 cursor-pointer before:absolute before:inset-0 before:z-0 before:-translate-x-full before:rounded-xl before:bg-zinc-950 before:transition-transform before:duration-300 before:ease-out hover:before:translate-x-0"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full delay-100"
                />
                <span className="relative z-20 inline-flex items-center gap-2">
                  {status === "idle" && (
                    <>
                      <Send size={16} /> {text.send}
                    </>
                  )}
                  {status === "sending" && text.sending}
                  {status === "sent" && text.sent}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}