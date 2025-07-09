import { useEffect } from 'react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingClick: () => void;
}

export default function ExitIntentModal({ isOpen, onClose, onBookingClick }: ExitIntentModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBookingClick = () => {
    onBookingClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-exclamation text-white text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Wait! Before You Go...</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Grab a FREE consultation with a LIV8 advisor and discover how we can elevate your success.
          </p>
          <div className="space-y-4">
            <button 
              onClick={handleBookingClick}
              className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Book My Free Call
            </button>
            <button 
              onClick={onClose}
              className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
