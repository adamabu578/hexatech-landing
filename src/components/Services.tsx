import React from "react";
import { ArrowRight, Shield, Cpu, Lightbulb, Monitor } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cyber Security",
      icon: <Shield className="w-6 h-6 text-white" />,
      image: "/images/Cybersecurity.jpg",
    },
    {
      title: "Digital Services",
      icon: <Cpu className="w-6 h-6 text-white" />,
      image: "images/digital.jpg",
    },
    {
      title: "Product Design",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      image: "images/product.jpg",
    },
    {
      title: "Web Development",
      icon: <Monitor className="w-6 h-6 text-white" />,
      image: "/images/web.jpg",
    }
  ];

  return (
    <div id="services" className="bg-white py-24 relative z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
          <div className="lg:w-1/2">
            <p className="text-blue-600 font-bold text-xs tracking-[0.15em] uppercase mb-4">
              OUR SERVICE
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium text-slate-800 leading-tight">
              We Offer a Wide <br />Variety of IT Services
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-md mb-6 text-left">
              Web designing in a powerful way of just not a profession, however, in a passion for our Company. We have a tendency to believe the idea that smart looking.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-8 py-3.5 rounded text-[11px] font-bold tracking-wider flex items-center gap-2 uppercase">
              All Services <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2756] via-[#1e2756]/60 to-transparent opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-4">
                  {/* Icon outline/design */}
                  <div className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

