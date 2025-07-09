import { useEffect, useState } from 'react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    alert('Thank you for your interest! We will review your application and get back to you.');
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-4 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Join the LIV8 Team</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name" 
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Experience Level</label>
            <select 
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Select experience level...</option>
              <option value="no-experience">No experience</option>
              <option value="1-2-years">1-2 years</option>
              <option value="3-5-years">3-5 years</option>
              <option value="5-plus-years">5+ years</option>
            </select>
          </div>
          <textarea 
            name="message"
            placeholder="Tell us about your background and why you want to join LIV8..." 
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-secondary hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
