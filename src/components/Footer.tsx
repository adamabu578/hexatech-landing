import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 mt-auto py-12 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="bg-white/5 p-2 rounded flex items-center justify-center backdrop-blur-sm">
            <img
              src="/images/hexatech-logo.png"
              alt="Hexatech Logo"
              className="h-8 w-auto opacity-90"
            />
          </div>
          <span className="text-sm">© {new Date().getFullYear()} Hexatech. All rights reserved.</span>
        </div>

        {/* Links or contact */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-4 h-4" /> support@hexatech.com
          </div>
          <div className="flex items-center gap-2 border-l pl-6 border-slate-700 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-4 h-4" /> +234 8000000000
          </div>
        </div>

      </div>
    </footer>
  );
}

