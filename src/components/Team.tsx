import React from 'react';

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const teamMembers = [
  {
    name: "Abdulrahman Mohammed",
    role: "Founder & Senior developer",
    image: "/images/raman.jpeg",
    description: "Driving the vision and architecture of our software solutions with scalable development.",
  },
  {
    name: "Ahmed Kansulum",
    role: "Co-founder & technical lead",
    image: "/images/ahmed.jpg",
    description: "Leading the technical strategy and ensuring the delivery of high-quality, performant applications.",
  },
  {
    name: "Adamu Abu",
    role: "Frontend developer",
    image: "/images/abu.jpg",
    description: "Crafting intuitive and responsive user interfaces that deliver exceptional digital experiences.",
  },
  {
    name: "Oludotun Adigun",
    role: "Chief Operation Officer",
    image: "/images/raman.jpeg",
    description: "Overseeing day-to-day operations and ensuring our teams deliver maximum value to our clients.",
  },
  {
    name: "Temitope Ogunbiade",
    role: "Marketing Manager",
    image: "/images/raman.jpeg",
    description: "Spearheading our marketing initiatives to expand our reach and connect with key stakeholders.",
  },
];

export default function Team() {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">Our Professionals</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Meet the team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center gap-3 mb-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-colors backdrop-blur-sm">
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-400 transition-colors backdrop-blur-sm">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-700 transition-colors backdrop-blur-sm">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 text-center bg-white relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
