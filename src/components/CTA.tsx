import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <div className="relative py-24 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/professional.jpg"
          alt="Office space"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          It's Time to Transform Your Business with<br />Technology
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10">
          Empowering growth through innovative IT solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" /> Custom Software Development
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" /> Cloud Solutions
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" /> IT Consulting
          </div>
        </div>
      </div>
    </div>
  );
}
