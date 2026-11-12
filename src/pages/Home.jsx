import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ModernEducation from '../components/ModernEducation';
import PopularPrograms from '../components/PopularPrograms';
import FeatureBanner from '../components/FeatureBanner';
import WhyChooseArch from '../components/WhyChooseArch';
import MentorsTeaser from '../components/MentorsTeaser';
import TestimonialSlider from '../components/TestimonialSlider';
import FaqAccordion from '../components/FaqAccordion';

export default function Home({ onOpenEnroll }) {
  return (
    <main className="w-full">
      {/* 1. Hero Section matching screenshot */}
      <Hero onOpenEnroll={onOpenEnroll} />

      {/* 2. Scrolling ticker */}
      <Marquee />

      {/* 3. Modern Education Section */}
      <ModernEducation />

      {/* 4. Popular Programs Section */}
      <PopularPrograms onOpenEnroll={onOpenEnroll} />

      {/* 5. Feature Banner with Overlapping Info Cards */}
      <FeatureBanner onOpenEnroll={onOpenEnroll} />

      {/* 6. Why Choose ARCH Feature Grid */}
      <WhyChooseArch />

      {/* 7. Mentors Teaser */}
      <MentorsTeaser />

      {/* 8. Testimonials */}
      <TestimonialSlider />

      {/* 9. FAQ Accordion */}
      <FaqAccordion />
    </main>
  );
}
