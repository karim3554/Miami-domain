import { ShieldCheck, Lock, CheckCircle, Zap, ExternalLink, MessageSquare } from 'lucide-react';

export default function TrustBadgeSection() {
  const steps = [
    {
      num: '01',
      title: 'Make an Offer or Buy on GoDaddy',
      desc: 'Submit your purchase proposal via our form or buy directly on GoDaddy.',
    },
    {
      num: '02',
      title: 'Funds Secured via GoDaddy Escrow',
      desc: 'Payment is safely held in escrow until domain ownership transfer is completed.',
    },
    {
      num: '03',
      title: 'Express 24-48h Domain Push',
      desc: 'The official authorization code (EPP) is transferred directly to your registrar account.',
    },
  ];

  const whatsappLink = "https://wa.me/213793115371?text=Hello!%20I%20want%20to%20verify%20the%20transfer%20of%20miamipropertydeals.com";

  return (
    <section id="trust" className="py-20 relative bg-[#0B1228] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B842] px-3.5 py-1.5 rounded-full bg-[#E5B842]/15 border border-[#E5B842]/30 inline-block mb-3">
            GoDaddy Escrow Guarantee
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            100% Safe & <span className="gold-gradient-text">Verified Transaction</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Direct ownership transfer backed by GoDaddy's industry-leading domain escrow services.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          
          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center flex flex-col items-center hover:border-[#E5B842]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#E5B842] mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-white text-base">Verified on GoDaddy</h4>
            <p className="text-xs text-slate-400 mt-1">Official Domain Registrar Listing</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center flex flex-col items-center hover:border-[#E5B842]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#E5B842] mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-white text-base">GoDaddy Escrow</h4>
            <p className="text-xs text-slate-400 mt-1">100% Buyer Financial Security</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center flex flex-col items-center hover:border-[#E5B842]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#E5B842] mb-3">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-white text-base">Authentic Ownership</h4>
            <p className="text-xs text-slate-400 mt-1">Clean Title & Instant Control</p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-800 text-center flex flex-col items-center hover:border-[#E5B842]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-[#E5B842] mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-white text-base">Fast 24-48h Push</h4>
            <p className="text-xs text-slate-400 mt-1">Direct Registrar Transfer</p>
          </div>

        </div>

        {/* 3 Step Process */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 border border-[#E5B842]/40 shadow-xl">
          <h3 className="font-serif text-xl font-bold text-white text-center mb-8">
            Domain Transfer & Delivery Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2">
                <span className="font-serif text-3xl font-extrabold text-[#E5B842]/50 mb-1">
                  {step.num}
                </span>
                <h4 className="font-bold text-white text-sm">{step.title}</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Full ownership rights transferred immediately upon payment confirmation</span>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-emerald-400 hover:underline font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Questions? Chat on WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
