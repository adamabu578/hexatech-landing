"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mb-24">
      <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
              Let us do the work,<br />so you can focus on what matters.
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#201D60] hover:bg-[#201D60]/90 text-white px-8 py-3.5 rounded font-medium mt-4 transition-colors">
              Learn more
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Background decorative pattern */}
            <div className="absolute inset-0 bg-slate-50 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
            
            {/* Accordion / Features List */}
            <Accordion.Root type="single" defaultValue="virtual-workstation" collapsible className="space-y-4 relative z-10 w-full max-w-md ml-auto">
              
              {/* Item 1 */}
              <Accordion.Item value="remote-home-office" className="bg-white border border-slate-100 rounded-lg shadow-sm overflow-hidden data-[state=open]:ring-2 data-[state=open]:ring-cyan-400">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center gap-4 p-5 text-left bg-white group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-slate-300 group-data-[state=open]:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-data-[state=open]:text-cyan-600">Remote Home Office</h4>
                      <p className="text-sm text-slate-500 mt-1">Lacus in ridiculus mi gravida montes leo arcu semper conubia.</p>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-slate-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="px-5 pb-5 pt-0 pl-14">
                    Expanded details about Remote Home Office capabilities, ensuring a seamless working experience anywhere.
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              {/* Item 2 */}
              <Accordion.Item value="virtual-workstation" className="bg-[#201D60] text-white border border-[#201D60] rounded-lg shadow-md overflow-hidden data-[state=open]:ring-2 data-[state=open]:ring-cyan-400">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center gap-4 p-5 text-left group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Virtual Workstation</h4>
                      <p className="text-sm text-slate-300 mt-1">Lacus in ridiculus mi gravida montes leo arcu semper conubia.</p>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-slate-300 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="px-5 pb-5 pt-0 pl-14">
                    Full access to virtual desktop infrastructure with minimal latency and maximal security.
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              {/* Item 3 */}
              <Accordion.Item value="terminal-server" className="bg-white border border-slate-100 rounded-lg shadow-sm overflow-hidden data-[state=open]:ring-2 data-[state=open]:ring-cyan-400">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center gap-4 p-5 text-left bg-white group">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-slate-300 group-data-[state=open]:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 group-data-[state=open]:text-cyan-600">Terminal Server</h4>
                      <p className="text-sm text-slate-500 mt-1">Lacus in ridiculus mi gravida montes leo arcu semper conubia.</p>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-slate-600 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="px-5 pb-5 pt-0 pl-14">
                    Robust terminal server configurations designed for enterprise-scale deployments.
                  </div>
                </Accordion.Content>
              </Accordion.Item>

            </Accordion.Root>
            
            {/* Overlapping Image Decoration */}
            <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full border-8 border-white overflow-hidden shadow-2xl hidden md:block z-20">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400" 
                alt="Man looking at phone" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
