'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the domain transfer process work?',
      a: 'Once your offer is accepted or you purchase directly on GoDaddy, payment is secured via GoDaddy Escrow. We then provide the official domain authorization code (EPP key) or perform an instant account push to your GoDaddy registrar account within 24-48 hours.',
    },
    {
      q: 'Can I purchase miamipropertydeals.com directly on GoDaddy?',
      a: 'Yes! The domain is registered and listed for secure purchase via GoDaddy. You can complete the entire transaction through GoDaddy Escrow with full financial protection.',
    },
    {
      q: 'Are installment payments or lease-to-own options available?',
      a: 'No. This asset is available for direct full purchase only. We do not offer installments or lease-to-own plans. Full domain ownership is transferred immediately upon payment clearance through GoDaddy Escrow.',
    },
    {
      q: 'How fast will I receive the domain after making an offer?',
      a: 'Transfers are typically completed within 24 to 48 hours of escrow clearance. If both parties use GoDaddy accounts, account-to-account push is usually completed within minutes.',
    },
    {
      q: 'Is my payment protected?',
      a: 'Absolutely. All payments are held safely by GoDaddy Escrow until you confirm receipt and control of the domain. Money is only released to the seller after transfer confirmation.',
    },
  ];

  const whatsappLink = "https://wa.me/213793115371?text=Hello!%20I%20have%20a%20question%20about%20buying%20miamipropertydeals.com";

  return (
    <section id="faq" className="py-20 relative bg-[#0A1124] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B842] px-3.5 py-1.5 rounded-full bg-[#E5B842]/15 border border-[#E5B842]/30 inline-block mb-3">
            Acquisition Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-300 text-base font-light">
            Everything you need to know about purchasing and securing <strong className="text-white">miamipropertydeals.com</strong> via GoDaddy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl border border-slate-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between space-x-4 focus:outline-none hover:bg-slate-900/50 transition-colors"
                >
                  <span className="font-serif font-bold text-white text-base sm:text-lg flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-[#E5B842] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E5B842] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm font-light leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-[#E5B842]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base">Have a custom inquiry or offer?</h4>
            <p className="text-xs text-slate-300">Connect directly with the domain owner via WhatsApp.</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 flex items-center space-x-2 transition-all shadow-md shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
