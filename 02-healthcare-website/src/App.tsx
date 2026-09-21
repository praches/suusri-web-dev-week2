import { ThemeProvider } from '@/lib/theme';
import { BookingProvider } from '@/lib/booking';
import { useGsapAnimations } from '@/lib/useGsap';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Departments } from '@/components/Departments';
import { Doctors } from '@/components/Doctors';
import { Packages } from '@/components/Packages';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Gallery } from '@/components/Gallery';
import { SymptomChecker } from '@/components/SymptomChecker';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';

function AppContent() {
  const rootRef = useGsapAnimations();

  return (
    <div ref={rootRef as React.RefObject<HTMLDivElement>} className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Departments />
        <Doctors />
        <Packages />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <SymptomChecker />
        <Contact />
      </main>
      <Footer />
      <BookingModal />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <AppContent />
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;
