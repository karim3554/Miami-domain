'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, ExternalLink, Menu, X, Sparkles, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why This Domain', href: '#why-domain' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Valuation & Comps', href: '#market-value' },
    { name: 'Verification', href: '#trust' },
    { name: 'FAQ', href: '#faq' },
  ];

  const whatsappLink = "https://wa.me/213793115371?text=Hello!%20I%20am%20interested%20in%20miamipropertydeals.com";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1124]/95 backdrop-blur-md border-b border-[#E5B842]/30 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E5B842] via-[#FDF0CD] to-[#B88E28] p-0.5 flex items-center justify-center shadow-lg shadow-[#E5B842]/25 group-hover:shadow-[#E5B842]/50 transition-all">
              <div className="w-full h-full bg-[#0A1124] rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#E5B842]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#FDF0CD] transition-colors">
                miamipropertydeals<span className="text-[#E5B842]">.com</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 -mt-1 font-medium">
                Premium Digital Asset
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-[#E5B842] transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E5B842] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://www.godaddy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-[#E5B842]/50 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5B842]" />
              <span>GoDaddy Verified</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +213 793 11 53 71</span>
            </a>

            <a
              href="#make-offer"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0A1124] bg-gradient-to-r from-[#FDF0CD] via-[#E5B842] to-[#B88E28] hover:brightness-110 transition-all shadow-md shadow-[#E5B842]/20 active:scale-95"
            >
              Make an Offer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1124]/98 backdrop-blur-xl border-b border-[#E5B842]/30 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-slate-200 hover:text-[#E5B842] font-medium py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col space-y-2.5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +213 793 11 53 71</span>
            </a>
            <a
              href="#make-offer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0A1124] bg-gradient-to-r from-[#FDF0CD] via-[#E5B842] to-[#B88E28] shadow-md shadow-[#E5B842]/20"
            >
              Make an Offer
            </a>
            <a
              href="https://www.godaddy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-700 flex items-center justify-center space-x-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-[#E5B842]" />
              <span>Buy Directly on GoDaddy</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
