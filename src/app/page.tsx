'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyDomainSection from '@/components/WhyDomainSection';
import UseCasesSection from '@/components/UseCasesSection';
import ValuationComparablesSection from '@/components/ValuationComparablesSection';
import DomainValuationCalculator from '@/components/DomainValuationCalculator';
import TrustBadgeSection from '@/components/TrustBadgeSection';
import OfferFormSection from '@/components/OfferFormSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyToast = () => {
    setToastMessage('Domain name copied to clipboard: miamipropertydeals.com');
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col justify-between selection:bg-[#D4AF37]/30 selection:text-[#FFF0CA]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="flex-1">
        <HeroSection onCopyDomain={handleCopyToast} />
        <WhyDomainSection />
        <UseCasesSection />
        <ValuationComparablesSection />
        <DomainValuationCalculator />
        <TrustBadgeSection />
        <OfferFormSection />
        <FAQSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A]/95 border border-[#D4AF37] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md flex items-center space-x-2 animate-bounce">
          <Check className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
