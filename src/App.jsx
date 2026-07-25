import { useEffect, useState } from "react";
import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [language, setLanguage] = useState("id");
  const [showTicker, setShowTicker] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTicker(window.scrollY <= 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950">
      <div className="relative z-10">
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showTicker ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Ticker />
        </div>
        <div data-aos="fade-down" data-aos-duration="700" className="sticky top-0 z-50">
          <Navbar language={language} setLanguage={setLanguage} />
        </div>
        <Hero language={language} />
        <Work language={language} />
        <Skills language={language} />
        <Profile language={language} />
        <Contact language={language} />
        <div data-aos="fade-up" data-aos-duration="700">
          <Footer />
        </div>
      </div>
    </div>
  );
}
