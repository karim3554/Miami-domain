'use client';

import { useState } from 'react';
import { Building, Layers, Briefcase, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: 'brokerage',
      icon: Building,
      badge: 'Agency Branding',
      title: 'Luxury Real Estate Agency Portal',
      description:
        'Transform this domain into the flagship portal for your Miami brokerage. Instantly communicate to buyers and sellers that you are the central hub for prime Miami property deals.',
      benefits: [
        'Command premium commission fees with instant enterprise brand trust',
        'Direct high-intent organic traffic looking for Miami property opportunities',
        'Unify luxury listings, agent portfolios, and buyer consultations under one iconic name',
      ],
      idealFor: 'Miami Real Estate Agencies, Luxury Brokers, Commercial Firms',
      projectedImpact: '3x Higher Lead Conversion vs standard agency domain names',
    },
    {
      id: 'investment',
      icon: Layers,
      badge: 'Investment Syndication',
      title: 'Off-Market & Wholesale Investment Hub',
      description:
        'Build a exclusive deal-flow platform matching accredited investors with off-market residential, commercial, and multi-family opportunities across South Florida.',
      benefits: [
        'Attract cash buyers actively searching for property deals in Miami',
        'Build a high-value private buyer email list with premium landing pages',
        'Facilitate quick assignments, fix-and-flip deals, and development opportunities',
      ],
      idealFor: 'Real Estate Investors, Wholesalers, Private Equity Funds',
      projectedImpact: '$50k - $200k average assignment fees per syndicated deal',
    },
    {
      id: 'condo-marketplace',
      icon: Briefcase,
      badge: 'High-Rise & Condos',
      title: 'Miami Luxury Condominiums & Penthouse Sales',
      description:
        'Focus specifically on Brickell, South Beach, Coconut Grove, Sunny Isles, and Edgewater luxury condo inventories and new development pre-construction deals.',
      benefits: [
        'Rank natively for high-intent queries like "Miami condo deals" & "luxury Miami properties"',
        'Partner with new development developers for exclusive listing distribution',
        'Target international buyers seeking South Florida luxury real estate assets',
      ],
      idealFor: 'Condo Specialists, International Real Estate Marketers',
      projectedImpact: 'Substantial reduction in buyer acquisition advertising costs',
    },
    {
      id: 'proptech',
      icon: Sparkles,
      badge: 'Proptech & SaaS',
      title: 'Proptech Platform & Lead Marketplace',
      description:
        'Launch an AI-driven real estate matching marketplace, seller finance registry, or lead distribution network selling verified buyer leads to Miami realtors.',
      benefits: [
        'Highest memorable domain for viral social media and PPC campaigns',
        'Monetize with monthly agent subscriptions or per-lead bidding models',
        'Build a scalable SaaS business around a unforgettable dot-com identity',
      ],
      idealFor: 'Proptech Entrepreneurs, Marketing Agencies, Tech Founders',
      projectedImpact: 'Highly scalable recurring revenue platform',
    },
  ];

  return (
    <section id="use-cases" className="py-24 relative bg-[#0B101D] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 inline-block mb-3">
            Strategic Deployments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How to Monetize <span className="gold-gradient-text">This Digital Asset</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Whether you are expanding an active agency or launching an investment portal, miamipropertydeals.com gives you an immediate competitive advantage.
          </p>
        </div>

        {/* Tab Navigation buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {useCases.map((uc, index) => {
            const Icon = uc.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(index)}
                className={`inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F4E0A5] via-[#D4AF37] to-[#A88418] text-[#080C14] shadow-lg shadow-[#D4AF37]/20 font-bold scale-[1.02]'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#080C14]' : 'text-[#D4AF37]'}`} />
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Card */}
        <div className="max-w-4xl mx-auto">
          {useCases.map((uc, index) => {
            if (index !== activeTab) return null;
            const Icon = uc.icon;
            return (
              <div
                key={uc.id}
                className="glass-panel rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-2xl transition-all duration-500 animate-fadeIn"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="space-y-6 flex-1">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs font-semibold text-[#FFF0CA]">
                      <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{uc.badge}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {uc.title}
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed font-light">
                      {uc.description}
                    </p>

                    {/* Key Benefits List */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
                        Key Commercial Advantages:
                      </h4>
                      {uc.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Metadata Box inside Card */}
                  <div className="w-full lg:w-80 glass-card rounded-xl p-6 border border-slate-700/60 space-y-5 shrink-0 bg-slate-900/90">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        Target Buyers / Operators
                      </span>
                      <p className="text-sm font-semibold text-white mt-1">{uc.idealFor}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        Estimated ROI Impact
                      </span>
                      <p className="text-sm font-bold text-[#F4E0A5] mt-1">{uc.projectedImpact}</p>
                    </div>

                    <a
                      href="#make-offer"
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#080C14] bg-gradient-to-r from-[#F4E0A5] via-[#D4AF37] to-[#A88418] hover:brightness-110 transition-all shadow-md"
                    >
                      <span>Acquire For This Use Case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
