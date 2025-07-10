import { useState } from 'react';

interface EventsLogisticsProps {
  onBookingClick: () => void;
}

export default function EventsLogistics({ onBookingClick }: EventsLogisticsProps) {
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you! We\'ve received your event request. We\'ll contact you soon to discuss details.');
        setFormData({
          eventType: '',
          eventDate: '',
          eventLocation: '',
          guestCount: '',
          budget: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          description: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Events & Logistics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seamless event planning and logistics management for corporate and personal occasions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-calendar-check text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Corporate Events</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                From conferences to team building, we handle all aspects of your corporate events
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                  Conference Planning & Management
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                  Team Building Activities
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                  Product Launch Events
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                  Awards Ceremonies
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Personal Events</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Make your special occasions unforgettable with our comprehensive event planning
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  Weddings & Receptions
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  Birthday Celebrations
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  Anniversary Parties
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-purple-500 mr-3"></i>
                  Holiday Gatherings
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional event planning" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Event?</h3>
              <p className="text-lg mb-6">
                Let our expert planners create an unforgettable experience for you and your guests
              </p>
              <button 
                onClick={onBookingClick}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors w-full"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Logistics Services */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Logistics & Transportation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-truck text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Freight & Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reliable freight and shipping solutions for businesses of all sizes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-warehouse text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Warehousing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secure storage and inventory management solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-route text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Supply Chain</h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end supply chain optimization and management
              </p>
            </div>
          </div>
        </div>

        {/* Event Details Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Tell Us About Your Event
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Type *
                </label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select event type...</option>
                  <option value="conference">Conference/Meeting</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="team-building">Team Building</option>
                  <option value="product-launch">Product Launch</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Date *
                </label>
                <input 
                  type="date" 
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Location *
                </label>
                <input 
                  type="text" 
                  name="eventLocation"
                  placeholder="City, State or Venue"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Expected Guest Count *
                </label>
                <select 
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select guest count...</option>
                  <option value="1-25">1-25 guests</option>
                  <option value="26-50">26-50 guests</option>
                  <option value="51-100">51-100 guests</option>
                  <option value="101-250">101-250 guests</option>
                  <option value="251-500">251-500 guests</option>
                  <option value="500+">500+ guests</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company (if applicable)
                </label>
                <input 
                  type="text" 
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Description & Special Requirements
              </label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                placeholder="Please describe your event vision, special requirements, catering needs, entertainment, etc."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Submit Event Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}