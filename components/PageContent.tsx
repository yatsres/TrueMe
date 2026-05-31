'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardGrid from '@/components/CardGrid';
import AboutSection from '@/components/AboutSection';
import StorytellingSection from '@/components/StorytellingSection';
import AboutSection023 from '@/components/AboutSection023';
import WhatSection030 from '@/components/WhatSection030';
import WhatTeensSection from '@/components/WhatTeensSection';
import MethodsSection from '@/components/MethodsSection';
import ResultsSection from '@/components/ResultsSection';
import FacilitatorsSection from '@/components/FacilitatorsSection';
import VideoSection from '@/components/VideoSection';
import LocationSection from '@/components/LocationSection';
import PriceSection from '@/components/PriceSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { useBookingModal } from '@/context/BookingModalContext';

export default function PageContent() {
  const { isOpen, closeModal } = useBookingModal();

  return (
    <>
      <main className="overflow-hidden scroll-smooth">
        {/* 000_header */}
        <Header />

        {/* 001_hero */}
        <Hero />

        {/* 002_cards */}
        <CardGrid />

        {/* 021_about */}
        <AboutSection />

        {/* 022_about */}
        <StorytellingSection />

        {/* 023_about */}
        <AboutSection023 />

        {/* 030_what */}
        <WhatSection030 />

        {/* 041_what & 042_what */}
        <WhatTeensSection />

        {/* 051_what & 052_what */}
        <MethodsSection />

        {/* 061_what & 062_what */}
        <ResultsSection />

        {/* 070_Vd01 */}
        <VideoSection />

        {/* 071_facilitators & 072_facilitators */}
        <FacilitatorsSection />

        {/* 091_location & 092_location & 093_location */}
        <LocationSection />

        {/* 110_price */}
        <PriceSection />

        {/* 121_faq */}
        <FAQSection />

        {/* 999_footer */}
        <Footer />
      </main>

      {/* Booking Modal */}
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
