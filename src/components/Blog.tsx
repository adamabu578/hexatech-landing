import React from "react";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Cloud Computing in 2026",
      date: "Oct 12, 2026",
      author: "Admin",
      image: "images/cloud.jpg",
      excerpt: "Discover how edge computing and hybrid cloud environments are shaping the future of IT infrastructure."
    },
    {
      title: "Protecting Your Data: Cybersecurity Best Practices",
      date: "Oct 10, 2026",
      author: "Admin",
      image: "/images/cybersecurity1.jpg",
      excerpt: "Learn the essential strategies to protect your business from evolving cyber threats and malware."
    },
    {
      title: "Why Managed IT Services Are Essential for SMEs",
      date: "Oct 08, 2026",
      author: "Admin",
      image: "/images/itservice.jpg",
      excerpt: "Outsourcing your IT operations can lead to reduced costs and significantly improved uptime."
    }
  ];

  return (
    <div id="blog" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold text-xs tracking-[0.15em] uppercase mb-4">
            LATEST NEWS
          </p>
          <h2 className="text-4xl lg:text-5xl font-medium text-slate-800 leading-tight">
            Our Insights & Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-blue-600" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-blue-600" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-[13px] font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
