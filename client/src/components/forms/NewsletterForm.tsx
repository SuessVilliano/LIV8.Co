import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { addAffiliateToFormData } from '@/lib/affiliate';

interface NewsletterFormProps {
  className?: string;
  variant?: 'default' | 'inline' | 'popup';
}

export default function NewsletterForm({ className = '', variant = 'default' }: NewsletterFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    interests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dataWithAffiliate = addAffiliateToFormData(formData);
      await apiRequest('/api/newsletter', 'POST', dataWithAffiliate);

      setSubmitted(true);
      setFormData({ email: '', firstName: '', interests: '' });
    } catch (error) {
      console.error('Newsletter signup error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`text-center p-6 ${className}`}>
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-check text-green-600 text-2xl"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Successfully Subscribed!</h3>
        <p className="text-gray-600 dark:text-gray-300">You'll receive our latest updates and insights.</p>
      </div>
    );
  }

  const isInline = variant === 'inline';
  const isPopup = variant === 'popup';

  return (
    <div className={className}>
      {!isInline && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Get exclusive insights, tips, and opportunities delivered to your inbox
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={isInline ? "flex gap-2" : "space-y-4"}>
        {!isInline && (
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        <div className={isInline ? "flex-1" : ""}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {!isInline && (
          <div>
            <select
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select your interests (optional)</option>
              <option value="funding">Funding & Credit</option>
              <option value="ai">AI & Digital Solutions</option>
              <option value="health">Health & Supplements</option>
              <option value="solar">Solar & Energy</option>
              <option value="events">Events & Logistics</option>
              <option value="insurance">Insurance & Wealth</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isInline ? 'px-6 py-3' : 'w-full py-3 px-6'
          } bg-primary hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50`}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {!isPopup && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      )}
    </div>
  );
}