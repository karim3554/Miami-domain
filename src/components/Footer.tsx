import { ShieldCheck, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';

export default function Footer() {
  const whatsappLink = "https://wa.me/213793115371?text=Hi,%20I%20am%20interested%20in%20miamipropertydeals.com";

  return (
    <footer className="bg-[#070D1C] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E5B842] via-[#FDF0CD] to-[#B88E28] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0A1124] rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B842]" />
                </div>
              </div>
              <span className="font-serif font-bold text-xl text-white">
                miamipropertydeals<span className="text-[#E5B842]">.com</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-light">
              Exclusive premium domain asset for sale. Engineered for Miami real estate portals, luxury brokerages, property syndication networks, and high-intent proptech applications.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#E5B842]" />
              <span>Escrow & Transfer via GoDaddy</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#why-domain" className="hover:text-[#E5B842] transition-colors">
                  Why This Domain
                </a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-[#E5B842] transition-colors">
                  Commercial Use Cases
                </a>
              </li>
              <li>
                <a href="#market-value" className="hover:text-[#E5B842] transition-colors">
                  Market Valuation & Comps
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-[#E5B842] transition-colors">
                  Buyer Escrow Protection
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5B842] transition-colors">
                  Transfer FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Verification & Marketplace Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              GoDaddy Verification
            </h4>
            <p className="text-xs text-slate-300 font-light">
              This domain is officially registered and available for purchase via GoDaddy Escrow.
            </p>

            <div className="pt-2 flex flex-col space-y-2">
              <a
                href="https://www.godaddy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-[#E5B842]/50 text-xs text-slate-200 transition-all"
              >
                <span className="font-semibold">Buy Directly on GoDaddy</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E5B842]" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-3 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/70 border border-emerald-500/40 text-xs text-emerald-300 transition-all"
              >
                <span className="font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} miamipropertydeals.com. All Rights Reserved. Domain Asset Sale.</p>
          <p className="text-center sm:text-right">
            Verified on GoDaddy • Escrow Protection • Direct Ownership Transfer
          </p>
        </div>

      </div>
    </footer>
  );
}
