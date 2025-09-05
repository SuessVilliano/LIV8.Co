import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { addAffiliateToFormData } from '@/lib/affiliate';

export default function BookConsultation() {
  const [, setLocation] = useLocation();
  const [isTracking, setIsTracking] = useState(true);

  useEffect(() => {
    // Track the consultation booking click for affiliate program
    const trackBooking = async () => {
      try {
        // Get affiliate data from URL/localStorage
        const affiliateData = {
          action: 'consultation_booking_click',
          timestamp: new Date().toISOString(),
          page: 'book_consultation'
        };
        
        const dataWithAffiliate = addAffiliateToFormData(affiliateData);
        
        // Send tracking data to webhook
        await fetch('/api/track-event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataWithAffiliate),
        });
        
        console.log('Consultation booking tracked for affiliate program');
        
        // Wait a moment to ensure tracking is sent, then redirect
        setTimeout(() => {
          window.location.href = 'https://sqr.co/BookACall';
        }, 1000);
        
      } catch (error) {
        console.error('Failed to track consultation booking:', error);
        // Redirect anyway if tracking fails
        setTimeout(() => {
          window.location.href = 'https://sqr.co/BookACall';
        }, 500);
      }
    };

    trackBooking();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-calendar-alt text-blue-600 text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Redirecting to Booking Calendar
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            You're being redirected to our consultation booking calendar...
          </p>
        </div>

        {isTracking && (
          <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Processing your request...</span>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            If you're not redirected automatically:
          </p>
          <a
            href="https://sqr.co/BookACall"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Book Your Consultation Now
          </a>
        </div>

        <div className="mt-4">
          <button
            onClick={() => setLocation('/')}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm transition-colors"
          >
            ← Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}