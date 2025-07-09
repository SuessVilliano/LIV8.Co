import Navigation from './Navigation';
import Footer from './Footer';
import ExitIntentModal from './modals/ExitIntentModal';
import TimedModal from './modals/TimedModal';
import NewsletterModal from './modals/NewsletterModal';
import BookingModal from './modals/BookingModal';
import JoinModal from './modals/JoinModal';
import { useModals } from '@/hooks/useModals';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const {
    exitIntentModal,
    timedModal,
    newsletterModal,
    bookingModal,
    joinModal,
    setBookingModal,
    setJoinModal,
    closeExitIntentModal,
    closeTimedModal,
    closeNewsletterModal
  } = useModals();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation onBookingClick={() => setBookingModal(true)} />
      <main>{children}</main>
      <Footer />
      
      {/* Modals */}
      <ExitIntentModal 
        isOpen={exitIntentModal} 
        onClose={closeExitIntentModal}
        onBookingClick={() => setBookingModal(true)}
      />
      <TimedModal 
        isOpen={timedModal} 
        onClose={closeTimedModal}
        onJoinClick={() => setJoinModal(true)}
      />
      <NewsletterModal 
        isOpen={newsletterModal} 
        onClose={closeNewsletterModal}
      />
      <BookingModal 
        isOpen={bookingModal} 
        onClose={() => setBookingModal(false)}
      />
      <JoinModal 
        isOpen={joinModal} 
        onClose={() => setJoinModal(false)}
      />
    </div>
  );
}
