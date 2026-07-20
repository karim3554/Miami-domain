import { Globe, Search, Shield, Zap, TrendingUp, Compass } from 'lucide-react';

export default function WhyDomainSection() {
  const valueDrivers = [
    {
      icon: Globe,
      title: 'Tier-1 Premium .COM Extension',
      description:
        'The globally trusted gold standard extension for international investors, wealth funds, and real estate buyers. Zero trust friction.',
    },
    {
      icon: Search,
      title: 'Powerhouse Keyword Combo',
      description:
        'Combines three high-cpm search terms: "Miami" + "Property" + "Deals". Instantly captures buyers actively looking for real estate.',
    },
    {
      icon: Zap,
      title: 'Instant Authority & Credibility',
      description:
        'Positions your brand as the premier property destination in South Florida from day one without spending millions in ad recall.',
    },
    {
      icon: TrendingUp,
      title: 'Built-in SEO & Paid Ad Efficiency',
      description:
        'Higher organic Click-Through-Rates (CTR) on Google Search and lower cost-per-click (CPC) for Google Ads campaigns.',
    },
    {
      icon: Shield,
      title: 'Scarcity & Wealth Preservation',
      description:
        'Exact match Miami real estate .com domains are non-reproducible assets that appreciate as Miami real estate continues to surge.',
    },
    {
      icon: Compass,
      title: 'Flexible Business Models',
      description:
        'Perfect for a luxury brokerage, investment syndicate, off-market wholesaler, proptech platform, or lead generation portal.',
    },
  ];

  return (
    <section id="why-domain" className="py-24 relative bg-[#080C14] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 inline-block mb-3">
            Digital Asset Fundamentals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why <span className="gold-gradient-text">miamipropertydeals.com</span> is a High-Yield Asset
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            In prime real estate, location is everything. In the digital economy, your domain name is your prime location. Here is why this domain commands top market value.
          </p>
        </div>

        {/* Value Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valueDrivers.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-7 border border-slate-800 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/60 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#F4E0A5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors">
                  <span>Key Value Driver #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box */}
        <div className="mt-16 glass-panel rounded-2xl p-8 border border-[#D4AF37]/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-xl font-bold text-white">
              Looking to establish a commanding presence in Miami real estate?
            </h4>
            <p className="text-sm text-slate-300">
              Domains like this rarely become available on the open market. Secure it before a competitor does.
            </p>
          </div>
          <a
            href="#make-offer"
            className="whitespace-nowrap px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#080C14] bg-gradient-to-r from-[#F4E0A5] via-[#D4AF37] to-[#A88418] hover:brightness-110 transition-all shadow-md shadow-[#D4AF37]/20"
          >
            Submit Confidential Offer
          </a>
        </div>

      </div>
    </section>
  );
}
