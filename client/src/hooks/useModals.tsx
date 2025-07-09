import { useState, useEffect } from 'react';

export function useModals() {
  const [exitIntentModal, setExitIntentModal] = useState(false);
  const [timedModal, setTimedModal] = useState(false);
  const [newsletterModal, setNewsletterModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);

  const [exitIntentTriggered, setExitIntentTriggered] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  // Exit intent detection
  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered && !localStorage.getItem('exitIntentDismissed')) {
        setExitIntentTriggered(true);
        setTimeout(() => {
          setExitIntentModal(true);
        }, 1000);
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    return () => document.removeEventListener('mouseleave', handleExitIntent);
  }, [exitIntentTriggered]);

  // Timed modal
  useEffect(() => {
    if (!localStorage.getItem('timedModalDismissed')) {
      setTimeout(() => {
        setTimedModal(true);
      }, 10000);
    }
  }, []);

  // Scroll triggered modal
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTriggered) return;
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 75) {
        setScrollTriggered(true);
        setTimeout(() => {
          setNewsletterModal(true);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTriggered]);

  const closeExitIntentModal = () => {
    setExitIntentModal(false);
    localStorage.setItem('exitIntentDismissed', 'true');
  };

  const closeTimedModal = () => {
    setTimedModal(false);
    localStorage.setItem('timedModalDismissed', 'true');
  };

  const closeNewsletterModal = () => {
    setNewsletterModal(false);
    localStorage.setItem('newsletterModalDismissed', 'true');
  };

  return {
    exitIntentModal,
    timedModal,
    newsletterModal,
    bookingModal,
    joinModal,
    setExitIntentModal,
    setTimedModal,
    setNewsletterModal,
    setBookingModal,
    setJoinModal,
    closeExitIntentModal,
    closeTimedModal,
    closeNewsletterModal
  };
}
