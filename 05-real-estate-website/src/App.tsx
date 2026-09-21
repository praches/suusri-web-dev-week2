import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { type Property } from '@/data';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyCategories from '@/components/PropertyCategories';
import PropertyModal from '@/components/PropertyModal';
import WhyChooseUs from '@/components/WhyChooseUs';
import Agents from '@/components/Agents';
import Testimonials from '@/components/Testimonials';
import LocationGuide from '@/components/LocationGuide';
import MortgageCalculator from '@/components/MortgageCalculator';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [modalProperty, setModalProperty] = useState<Property | null>(null);
  const [enquiryProperty, setEnquiryProperty] = useState<Property | null>(null);
  const [searchFilters, setSearchFilters] = useState({ type: '', location: '', price: 0 });

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero background scale-in
      gsap.fromTo(
        '.hero-bg > div',
        { scale: 1.3, opacity: 0 },
        { scale: 1.1, opacity: 1, duration: 2, ease: 'power2.out' }
      );

      // Hero text entrance
      gsap.fromTo(
        '.hero-bg + div > div > p',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
      );

      // Property cards elevation on scroll
      gsap.utils.toArray<HTMLElement>('.property-card-reveal').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: (i % 3) * 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Category cards reveal
      gsap.utils.toArray<HTMLElement>('.category-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Why Choose Us cards
      gsap.utils.toArray<HTMLElement>('.why-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Agent cards
      gsap.utils.toArray<HTMLElement>('.agent-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Section titles reveal
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
        gsap.fromTo(
          title,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: title,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleSearch = (filters: { type: string; location: string; price: number }) => {
    setSearchFilters(filters);
  };

  const handleCategorySelect = (type: string) => {
    setSearchFilters((prev) => ({ ...prev, type, location: '', price: 0 }));
  };

  const handleEnquire = (property: Property) => {
    setEnquiryProperty(property);
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={rootRef}>
      <Header />
      <Hero onSearch={handleSearch} />
      <FeaturedProperties
        onQuickView={setModalProperty}
        onEnquire={handleEnquire}
        searchFilters={searchFilters}
      />
      <PropertyCategories onSelectCategory={handleCategorySelect} />
      <WhyChooseUs />
      <Agents />
      <Testimonials />
      <LocationGuide />
      <MortgageCalculator />
      <EnquiryForm
        selectedProperty={enquiryProperty}
        onClose={() => setEnquiryProperty(null)}
      />
      <Footer />
      <PropertyModal
        property={modalProperty}
        onClose={() => setModalProperty(null)}
        onEnquire={handleEnquire}
      />
    </div>
  );
}
