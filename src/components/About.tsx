import React from "react";
import { ArrowRight, UserCog, MessageSquareText } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Single Image */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center">

            <div className="relative w-full h-full max-w-[500px] rounded-[2rem] overflow-hidden shadow-xl">
              <img src="/images/man.jpg" alt="Professional" className="w-full h-full object-cover" />
            </div>

            {/* Experience Banner Overlay */}
            <div className="absolute bottom-12 left-0 z-30 flex items-stretch">
              <div className="bg-blue-600 text-white px-8 py-4 flex flex-col justify-center rounded-l shadow-lg">
                <span className="text-3xl font-bold leading-none">1.5K</span>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-white/80">IT Business Experience</span>
              </div>
              <div className="w-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-r shadow-lg relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 border-y-[24px] border-y-transparent border-l-[16px] border-l-blue-600"></div>
              </div>
            </div>

          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-[0.15em] uppercase mb-4">
                ABOUT US
              </p>
              <h2 className="text-4xl lg:text-5xl font-medium text-slate-800 leading-tight">
                We deal With The<br />Aspects Of Professional<br />IT Services
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed text-[15px]">
              Engitech is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="border border-slate-100 rounded-lg p-6 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-blue-400 bg-blue-50/50 rounded">
                  <UserCog className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Experience</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Our great team of more than 1400 software experts.</p>
                </div>
              </div>

              <div className="border border-slate-100 rounded-lg p-6 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-blue-400 bg-blue-50/50 rounded">
                  <MessageSquareText className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Quick Support</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">We'll help you test bold new ideas while sharing your.</p>
                </div>
              </div>
            </div>

            <p className="text-slate-500 text-[13px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <div className="pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3.5 rounded text-[11px] font-bold tracking-wider flex items-center gap-2 uppercase">
                Read More <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

