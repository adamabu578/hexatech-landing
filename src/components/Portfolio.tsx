import React from "react";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Hexacore-application",
      category: "bank & fintech",
      image: "/images/hexacore.png",
      url: "https://hexacore.ng",
    },
    {
      title: "Stitch-ecommerce",
      category: "E-commerce",
      image: "/images/stitch.png",
      url: "https://www.stitchesafrica.com",
    },
    {
      title: "Hexacore-website",
      category: "hexacore",
      image: "/images/hexa.png",
      url: "https://www.stitchesafrica.com",
    },
    // {
    //   title: "Enterprise ERP System",
    //   category: "Software Development",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    //   url: "#",
    // }
  ];

  return (
    <div id="portfolios" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold text-xs tracking-[0.15em] uppercase mb-4">
            OUR WORK
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-800 leading-tight">
            Latest Portfolios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={index} className="block group relative rounded-xl overflow-hidden shadow-sm border-2 border-blue-500 bg-white cursor-pointer h-[350px]">
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content box that slides up */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center shadow-xl">
                <div>
                  <p className="text-blue-600 text-[11px] font-bold uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
