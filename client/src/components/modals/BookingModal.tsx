import { useEffect, useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
    alert('Thank you! We will contact you soon to schedule your consultation.');
    onClose();
    setFormData({
      service: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Book Your Free Consultation</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Service</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Choose a service...</option>
              <option value="digital-ai">Digital & AI Solutions</option>
              <option value="funding">Funding & Credit</option>
              <option value="insurance">Insurance & Wealth</option>
              <option value="health">Health & Supplements</option>
              <option value="solar">Solar & Energy</option>
              <option value="events">Events/Logistics</option>
            </select>
          </div>
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
          <textarea 
            name="message"
            placeholder="Tell us about your needs..." 
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Schedule My Consultation
          </button>
        </form>
      </div>
    </div>
  );
}
