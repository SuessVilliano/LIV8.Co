import { useEffect } from 'react';

interface TimedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJoinClick: () => void;
}

export default function TimedModal({ isOpen, onClose, onJoinClick }: TimedModalProps) {
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

  const handleJoinClick = () => {
    onJoinClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-user-plus text-white text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Looking to Earn?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            LIV8 is hiring consultants. Join our team and earn across multiple industries.
          </p>
          <div className="space-y-4">
            <button 
              onClick={handleJoinClick}
              className="w-full bg-secondary hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </button>
            <button 
              onClick={onClose}
              className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Not Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
