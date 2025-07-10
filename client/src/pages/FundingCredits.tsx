import { useState } from 'react';

interface FundingCreditsProps {
  onBookingClick: () => void;
}

export default function FundingCredits({ onBookingClick }: FundingCreditsProps) {
  const [showRDForm, setShowRDForm] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    revenue: '',
    rd_spend: '',
    name: '',
    email: '',
    phone: '',
    authorize: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/rd-credits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you! We\'ve received your R&D credits request. We\'ll follow up shortly.');
        setFormData({
          company: '',
          industry: '',
          revenue: '',
          rd_spend: '',
          name: '',
          email: '',
          phone: '',
          authorize: false
        });
        setShowRDForm(false);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Funding & Credits
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access capital, improve credit scores, and unlock financial opportunities for business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-dollar-sign text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Funding Solutions</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We help businesses access the capital they need to grow, whether through traditional loans, 
                alternative financing, or government programs.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  SBA Loans & Government Programs
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Working Capital Lines of Credit
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Equipment Financing
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Invoice Factoring
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Credit Repair & Building</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Improve your personal and business credit scores to unlock better financing opportunities.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                  Credit Report Analysis
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                  Dispute Resolution
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                  Business Credit Establishment
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                  Credit Monitoring
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business funding consultation" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Funded?</h3>
              <p className="text-lg mb-6">
                Let our experts help you find the perfect funding solution for your business needs
              </p>
              <button 
                onClick={onBookingClick}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors w-full"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* R&D Credits Section */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">R&D Tax Credits</h2>
            <p className="text-xl">
              Claim immediate cash back for innovation you've already invested in
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">✅</div>
              <h3 className="text-lg font-semibold mb-2">Full Expensing</h3>
              <p>2022–2024 R&D costs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">💸</div>
              <h3 className="text-lg font-semibold mb-2">Fast Refunds</h3>
              <p>Cash back in 60–90 days</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">📆</div>
              <h3 className="text-lg font-semibold mb-2">Limited Time</h3>
              <p>One-year window to claim</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setShowRDForm(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Get My R&D Refund Estimate
            </button>
          </div>
        </div>

        {/* R&D Form Modal */}
        {showRDForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-4 my-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">R&D Tax Refund Estimate</h3>
                <button 
                  onClick={() => setShowRDForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Company Name" 
                    value={formData.company}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <input 
                    type="text" 
                    name="industry"
                    placeholder="Industry" 
                    value={formData.industry}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="number" 
                    name="revenue"
                    placeholder="Annual Revenue" 
                    value={formData.revenue}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <input 
                    type="number" 
                    name="rd_spend"
                    placeholder="Total R&D Spend (2022–2024)" 
                    value={formData.rd_spend}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    name="authorize"
                    checked={formData.authorize}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary"
                    required
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    I authorize LIV8 to contact my CPA and review tax filings
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Show Me My Refund
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Term Loans</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Traditional fixed-rate loans for established businesses with strong credit
            </p>
            <button 
              onClick={onBookingClick}
              className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Revenue Based Financing</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Flexible financing based on your monthly revenue performance
            </p>
            <button 
              onClick={onBookingClick}
              className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Merchant Cash Advance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Quick access to capital based on your credit card processing volume
            </p>
            <button 
              onClick={onBookingClick}
              className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}