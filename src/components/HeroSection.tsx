'use client';

import { useState } from 'react';
import { Copy, Check, ShieldCheck, ArrowRight, ExternalLink, Award, Sparkles, Building2, TrendingUp, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onCopyDomain?: () => void;
}

export default function HeroSection({ onCopyDomain }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const domainName = 'miamipropertydeals.com';
  const whatsappLink = "https://wa.me/213793115371?text=Hello!%20I%20am%20interested%20in%20miamipropertydeals.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(domainName);
    setCopied(true);
    if (onCopyDomain) onCopyDomain();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Vibrant Radiant Light */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B38] via-[#0A1124] to-[#0A1124] -z-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-[#E5B842]/20 via-[#0D9488]/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center flex-wrap justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-[#E5B842]/50 shadow-lg shadow-[#E5B842]/15 mb-8 backdrop-blur-md max-w-full">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[#FDF0CD]">
            Exclusive Premium Asset Available
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-[10px] sm:text-xs text-slate-300 font-medium hidden sm:inline">Verified via GoDaddy Escrow</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] break-words">
          Own Miami’s Premier <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Real Estate Domain</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-200 mb-10 leading-relaxed font-light px-2">
          Elevate your real estate brand in South Florida’s high-end property market. 
          <strong className="text-white font-medium"> miamipropertydeals.com</strong> combines three high-volume commercial keywords into a single iconic digital asset.
        </p>

        {/* Prominent Domain Display Card */}
        <div className="max-w-2xl mx-auto mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E5B842]/50 via-[#FDF0CD]/30 to-[#B88E28]/50 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition duration-500" />
          
          <div className="relative glass-panel rounded-2xl p-4 sm:p-7 border border-[#E5B842]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center space-x-3 text-left w-full sm:w-auto">
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-[#E5B842] shrink-0">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-[#E5B842]">
                  Target Domain Asset
                </span>
                <div className="font-serif text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center flex-wrap gap-1">
                  miamipropertydeals<span className="text-[#E5B842]">.com</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700 hover:border-[#E5B842] transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#E5B842]" />
                  <span>Copy Domain</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href="#make-offer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#0A1124] bg-gradient-to-r from-[#FDF0CD] via-[#E5B842] to-[#B88E28] hover:brightness-110 shadow-xl shadow-[#E5B842]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Make an Offer</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://www.godaddy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#E5B842]/60 transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-[#E5B842]" />
            <span>Buy Now on GoDaddy</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-sm font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-500/50 transition-all shadow-lg shadow-emerald-950/40"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col items-center">
            <Award className="w-5 h-5 text-[#E5B842] mb-1" />
            <span className="text-xs font-bold text-white">Tier-1 .COM</span>
            <span className="text-[11px] text-slate-400">Global Gold Standard</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col items-center">
            <TrendingUp className="w-5 h-5 text-[#E5B842] mb-1" />
            <span className="text-xs font-bold text-white">High Commercial Intent</span>
            <span className="text-[11px] text-slate-400">Miami + Property + Deals</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col items-center">
            <Sparkles className="w-5 h-5 text-[#E5B842] mb-1" />
            <span className="text-xs font-bold text-white">Instant SEO Authority</span>
            <span className="text-[11px] text-slate-400">Natural Organic Reach</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 text-[#E5B842] mb-1" />
            <span className="text-xs font-bold text-white">GoDaddy Transfer</span>
            <span className="text-[11px] text-slate-400">100% Escrow Protected</span>
          </div>
        </div>

      </div>
    </section>
  );
}
