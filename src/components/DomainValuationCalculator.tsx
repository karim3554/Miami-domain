'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, Sparkles } from 'lucide-react';

export default function DomainValuationCalculator() {
  const [avgCommission, setAvgCommission] = useState(25000); // $25k avg commission per Miami deal
  const [targetDealsPerYear, setTargetDealsPerYear] = useState(4); // 4 deals/year

  const annualRevenue = avgCommission * targetDealsPerYear;
  const estimatedAdSavings = targetDealsPerYear * 3500; // estimated saved PPC spend per deal due to organic domain CTR boost

  return (
    <section className="py-20 relative bg-[#0B1226] border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-[#E5B842]/40 shadow-2xl relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left Column: Calculator Controls */}
            <div className="space-y-6 flex-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#E5B842]/15 border border-[#E5B842]/30 text-xs font-semibold text-[#FDF0CD]">
                <Calculator className="w-3.5 h-3.5 text-[#E5B842]" />
                <span>Interactive Buyer ROI Estimator</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Calculate Your Domain <span className="gold-gradient-text">Acquisition ROI</span>
              </h3>

              <p className="text-slate-300 text-sm font-light">
                See how acquiring <strong className="text-[#FDF0CD]">miamipropertydeals.com</strong> pays for itself through brand authority and organic customer acquisition.
              </p>

              {/* Slider 1: Average Commission */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Average Deal Commission (USD)</span>
                  <span className="text-[#FDF0CD] font-mono">${avgCommission.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="5000"
                  value={avgCommission}
                  onChange={(e) => setAvgCommission(Number(e.target.value))}
                  className="w-full accent-[#E5B842] bg-slate-900 cursor-pointer h-2 rounded-lg"
                />
              </div>

              {/* Slider 2: Deals per Year */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Target Deals Generated per Year</span>
                  <span className="text-[#FDF0CD] font-mono">{targetDealsPerYear} Deals</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={targetDealsPerYear}
                  onChange={(e) => setTargetDealsPerYear(Number(e.target.value))}
                  className="w-full accent-[#E5B842] bg-slate-900 cursor-pointer h-2 rounded-lg"
                />
              </div>
            </div>

            {/* Right Column: Projected ROI Output Box */}
            <div className="w-full md:w-80 glass-card rounded-xl p-6 border border-[#E5B842]/40 bg-slate-900/90 shrink-0 text-center space-y-4">
              <Sparkles className="w-6 h-6 text-[#E5B842] mx-auto" />
              
              <div>
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                  Projected Annual Gross Revenue
                </span>
                <div className="font-serif text-3xl font-bold text-white mt-1">
                  ${annualRevenue.toLocaleString()}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                  Estimated Ad Budget Savings
                </span>
                <div className="text-xl font-bold text-[#FDF0CD] font-mono mt-0.5">
                  +${estimatedAdSavings.toLocaleString()} / year
                </div>
                <p className="text-[10px] text-slate-300 mt-1">
                  Saved via high organic CTR & domain keyword relevance
                </p>
              </div>

              <a
                href="#make-offer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0A1124] bg-gradient-to-r from-[#FDF0CD] via-[#E5B842] to-[#B88E28] hover:brightness-110 shadow-md"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Acquire This Domain</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
