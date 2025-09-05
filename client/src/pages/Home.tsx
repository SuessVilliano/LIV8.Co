import HeroSection from '@/components/HeroSection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';
import ServicesSection from '@/components/ServicesSection';
import BrandsSection from '@/components/BrandsSection';
import NewsletterSection from '@/components/NewsletterSection';
import JoinSection from '@/components/JoinSection';
import PartnersSection from '@/components/PartnersSection';
import TestimonialsSection from '@/components/TestimonialsSection';

interface HomeProps {
  onBookingClick: () => void;
  onJoinClick: () => void;
}

export default function Home({ onBookingClick, onJoinClick }: HomeProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HeroSection onExploreServices={scrollToServices} onBookingClick={onBookingClick} />
      <WhoWeHelpSection onBookingClick={onBookingClick} />
      <ServicesSection onBookingClick={onBookingClick} />
      <BrandsSection onBookingClick={onBookingClick} />
      <NewsletterSection />
      <JoinSection onJoinClick={onJoinClick} />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
}
