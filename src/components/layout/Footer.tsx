import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-950 font-bold text-lg">C</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Curtis TG
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Architecting the digital infrastructure for cities, organizations, and global movements. Premium strategy meets elite engineering.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI & Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Experience Engines</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Civic Technology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/travel-os" className="hover:text-white transition-colors">Travel OS</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-white font-bold text-lg mb-2">Start a Project</h4>
              <p className="text-xs text-slate-400 mb-6 uppercase tracking-widest font-bold">Inquire Today</p>
              <div className="space-y-4">
                <Link to="/contact" className="group/link flex items-center text-white font-medium hover:text-blue-400 transition-colors">
                  Consult with our AI Architects
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </Link>
                <div className="pt-2">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Regional Direct Line</p>
                  <p className="text-sm font-display font-bold text-blue-500">(314) 314-0511</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Curtis Technology Group. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}