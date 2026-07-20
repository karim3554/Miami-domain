import { DollarSign, Check, ExternalLink, BarChart3 } from 'lucide-react';

export default function ValuationComparablesSection() {
  const comparables = [
    { domain: 'MiamiRealEstate.com', price: '$260,000', year: 'Verified Sale', highlights: 'Exact Match Geo Domain' },
    { domain: 'MiamiHomes.com', price: '$185,000', year: 'Verified Sale', highlights: 'Residential Focus' },
    { domain: 'MiamiCondos.com', price: '$110,000', year: 'Verified Sale', highlights: 'High-Rise Vertical' },
    { domain: 'PropertyDeals.com', price: '$95,000', year: 'Verified Sale', highlights: 'Commercial Intent Deal Portal' },
    { domain: 'FloridaProperties.com', price: '$75,000', year: 'Verified Sale', highlights: 'Statewide Real Estate' },
  ];

  return (
    <section id="market-value" className="py-24 relative bg-[#080C14] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 inline-block mb-3">
            Market Intelligence & Valuation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Comparable <span className="gold-gradient-text">Real Estate Domain Sales</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Premium real estate .com domains are proven wealth stores. Below are recent public benchmark domain sales in the real estate sector.
          </p>
        </div>

        {/* Valuation Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="glass-card rounded-xl p-6 border border-slate-800 text-center">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-1">High Intent</div>
            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">Commercial Traffic Grade</div>
            <p className="text-xs text-slate-400">Captures active buyers ready to transact on Miami real estate deals.</p>
          </div>

          <div className="glass-card rounded-xl p-6 border border-slate-800 text-center">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-1">Low Cost / High ROI</div>
            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">Zero Recurring Royalties</div>
            <p className="text-xs text-slate-400">One-time capital acquisition fee for perpetual asset ownership.</p>
          </div>

          <div className="glass-card rounded-xl p-6 border border-slate-800 text-center">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
              <Check className="w-5 h-5" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-1">100% Clean History</div>
            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-2">Verified Ownership</div>
            <p className="text-xs text-slate-400">Clear title, clean backlink profile, ready for immediate transfer.</p>
          </div>
        </div>

        {/* Comparable Sales Table / Cards */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl">
          
          <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Public Domain Benchmark Data</h3>
              <p className="text-xs text-slate-400">Historical public sales data of similar real estate domain assets</p>
            </div>
            <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-md border border-[#D4AF37]/20">
              Verified Market Data
            </span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparables.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-900/40 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <div>
                    <span className="font-mono text-sm sm:text-base font-semibold text-slate-200">
                      {item.domain}
                    </span>
                    <span className="text-xs text-slate-500 ml-2 font-sans">({item.highlights})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end space-x-4">
                  <span className="text-xs text-slate-400">{item.year}</span>
                  <span className="font-serif text-base sm:text-lg font-bold text-[#F4E0A5]">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}

            {/* Target Domain Card Highlight */}
            <div className="p-5 bg-gradient-to-r from-[#D4AF37]/15 via-[#9E7D20]/10 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-[#D4AF37]/60">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <span className="font-serif font-bold text-lg sm:text-xl text-white">
                    miamipropertydeals.com
                  </span>
                  <span className="text-xs text-[#D4AF37] font-semibold ml-2 uppercase tracking-wide">
                    (Your Target Asset)
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end space-x-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-md">
                  Open for Offers
                </span>
                <a
                  href="#make-offer"
                  className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-[#080C14] bg-gradient-to-r from-[#F4E0A5] via-[#D4AF37] to-[#A88418] px-4 py-2 rounded-lg shadow-md hover:brightness-110"
                >
                  <span>Submit Offer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
