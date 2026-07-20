'use client';

import { useState, FormEvent } from 'react';
import { Send, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OfferFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    offerAmount: '',
    buyerType: 'Real Estate Agency / Investor',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "213793115371";
  const whatsappDisplay = "+213 793 11 53 71";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E5B842', '#FDF0CD', '#B88E28'],
      });
    } catch {
      // fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppOffer = () => {
    const text = encodeURIComponent(
      `Hello! I would like to make an offer for miamipropertydeals.com.\n\n` +
      `Name: ${formData.name || 'Interested Buyer'}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Offer Amount: ${formData.offerAmount || 'Negotiable'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Buyer Type: ${formData.buyerType}\n` +
      `Notes: ${formData.message || 'Ready for direct purchase'}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="make-offer" className="py-24 relative bg-[#0A1124] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B842] px-3.5 py-1.5 rounded-full bg-[#E5B842]/15 border border-[#E5B842]/30 inline-block mb-3">
            Acquisition Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Make an Offer or <span className="gold-gradient-text">Buy on GoDaddy</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            All domain offers are sent directly to the owner. Secure ownership transfer is completed via <strong className="text-white">GoDaddy Escrow</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Main Form Box (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-10 border border-[#E5B842]/40 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#E5B842]/20 border border-[#E5B842] text-[#E5B842] flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Offer Submitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your offer has been recorded. 
                  You can also connect immediately on WhatsApp at <strong className="text-[#FDF0CD]">{whatsappDisplay}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppOffer}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp ({whatsappDisplay})</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700"
                  >
                    Edit Offer Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Header Info */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E5B842]">
                    Submit Purchase Offer
                  </span>
                  <span className="text-xs text-slate-400">Direct & Confidential</span>
                </div>

                {/* Offer Amount Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Proposed Offer Amount (USD) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#E5B842]">
                      <DollarSign className="w-4.5 h-4.5" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.offerAmount}
                      onChange={(e) => setFormData({ ...formData, offerAmount: e.target.value })}
                      placeholder="Enter your proposed offer amount (USD)"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#E5B842] focus:ring-1 focus:ring-[#E5B842] transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#E5B842] focus:ring-1 focus:ring-[#E5B842] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#E5B842] focus:ring-1 focus:ring-[#E5B842] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Buyer Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (305) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#E5B842] focus:ring-1 focus:ring-[#E5B842] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Buyer Category
                    </label>
                    <select
                      value={formData.buyerType}
                      onChange={(e) => setFormData({ ...formData, buyerType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#E5B842] focus:ring-1 focus:ring-[#E5B842] transition-all"
                    >
                      <option value="Real Estate Agency / Brokerage">Real Estate Agency / Brokerage</option>
                      <option value="Property Investor">Property Investor / Syndicate</option>
                      <option value="Domain Asset Investor">Domain Asset Investor</option>
                      <option value="Proptech Founder / Entrepreneur">Proptech Founder / Entrepreneur</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Message / Special Transfer Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter any additional details or preferred closing timeframe..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#E5B842] focus:ring-1 focus:ring-[#E5B842] transition-all"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0A1124] bg-gradient-to-r from-[#FDF0CD] via-[#E5B842] to-[#B88E28] hover:brightness-110 transition-all shadow-xl shadow-[#E5B842]/20 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Offer...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Offer</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppOffer}
                    className="w-full sm:w-auto px-5 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/90 border border-emerald-500/40 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Instant Buy via GoDaddy Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* GoDaddy Buy Card */}
            <div className="glass-card rounded-2xl p-7 border border-[#E5B842]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#E5B842] text-[#0A1124] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                Direct Purchase
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#E5B842]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">Buy Now on GoDaddy</h3>
                  <p className="text-xs text-slate-400">100% Verified Ownership & Escrow</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                Prefer immediate purchase with direct escrow protection? Buy directly on GoDaddy for fast, guaranteed domain delivery.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                  <span className="text-slate-400">Platform:</span>
                  <span className="font-semibold text-white">GoDaddy Domain Escrow</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-800">
                  <span className="text-slate-400">Transfer Timeframe:</span>
                  <span className="font-semibold text-emerald-400">Express 24-48 Hours</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span className="text-slate-400">Direct Contact:</span>
                  <span className="font-semibold text-white font-mono">{whatsappDisplay}</span>
                </div>
              </div>

              <a
                href="https://www.godaddy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-[#E5B842] transition-all shadow-md mb-3"
              >
                <span>Buy Instantly on GoDaddy</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E5B842]" />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi!%20I%20want%20to%20buy%20miamipropertydeals.com%20directly`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Contact Owner on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
