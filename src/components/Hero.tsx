import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div id="home" className="relative w-full bg-white overflow-hidden flex items-center min-h-[600px] lg:min-h-[700px] pt-10">
      {/* Background wireframe image can be simulated or added as background */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 h 80 v 80 h -80 Z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">

        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 py-8 lg:py-0 lg:pr-12 text-center sm:text-left flex flex-col items-center sm:items-start">
          <p className="text-blue-600 font-bold text-xs tracking-[0.15em] uppercase mb-4">
            WELCOME TO HEXATECH
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
            It's Your Time To Grow Through <br />
            <span className="text-blue-600">Innovative IT Solutions.</span>
          </h1>

          <ul className="flex flex-col gap-3 mb-8 w-full sm:w-auto items-start text-left">
            {["Cloud Infrastructure", "Cybersecurity Operations", "Managed IT Services"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-[15px]">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button className="justify-center bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3.5 rounded text-[11px] font-bold tracking-wider flex items-center gap-2 uppercase shadow-lg shadow-blue-100">
              Get Started <ArrowRight className="w-3 h-3" />
            </button>
            <button className="justify-center bg-white hover:bg-slate-50 border border-slate-200 transition-colors text-slate-800 px-8 py-3.5 rounded text-[11px] font-bold tracking-wider flex items-center gap-2 uppercase shadow-sm">
              Try it Free
            </button>
          </div>
        </div>

      </div>

      {/* Right Column: Image & Diagonal Block - absolute positioning to span full right side */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 overflow-hidden">
        {/* The large solid blue diagonal shape */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-blue-600 z-10"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>

        {/* The Image inside a diagonal clip */}
        <div
          className="absolute top-0 right-0 w-[85%] h-full z-20"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <img
            src="/images/hero.jpg"
            alt="Team working on ideas"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* The overlapping white triangles for the cut effect */}
        <div
          className="absolute bottom-0 left-[10%] w-[30%] h-[40%] bg-white z-30"
          style={{ clipPath: 'polygon(100% 100%, 0 0, 0 100%)' }}
        ></div>

        <div
          className="absolute bottom-0 left-[35%] w-[15%] h-[20%] bg-white z-30"
          style={{ clipPath: 'polygon(100% 100%, 0 0, 0 100%)' }}
        ></div>
      </div>
    </div>
  );
}

