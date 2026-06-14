import React from "react";

export default function Logos() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-12">Join our 30,000 happy customers</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 border-2 border-current rounded-sm"></div> LOGOIPSUM</div>
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter"><div className="w-6 h-6 bg-slate-800 rounded-sm"></div> LOGO</div>
        <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 border-[3px] border-current rounded-full"></div> logoipsum</div>
        <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-slate-800 transform rotate-45"></div> LOGOIPSUM</div>
        <div className="flex items-center gap-2 font-bold text-xl"><div className="w-6 h-6 bg-slate-800 rounded-full"></div> logoipsum</div>
      </div>
    </div>
  );
}
