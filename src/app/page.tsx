import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 overflow-x-hidden">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Services />
      <About />
      <Team />
      <Portfolio />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
