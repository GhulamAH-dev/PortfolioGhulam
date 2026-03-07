"use client";

import {useState} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Portfolio from "@/sections/Portfolio";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

type Lang = "en" | "ja";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("ja");

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Portfolio lang={lang} />
      <Experience lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
