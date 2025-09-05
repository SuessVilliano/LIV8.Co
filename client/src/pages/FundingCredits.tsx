import { useState, useEffect } from 'react';

interface FundingCreditsProps {
  onBookingClick: () => void;
}

export default function FundingCredits({ onBookingClick }: FundingCreditsProps) {
  const [showScrollWidget, setShowScrollWidget] = useState(false);

  const handleOptInClick = () => {
    window.open('https://sqr.co/RDRefund', '_blank');
    setShowScrollWidget(false);
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show widget when user scrolls 50% down the page
      if (scrollPosition > documentHeight * 0.5 && !showScrollWidget) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setShowScrollWidget(true);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [showScrollWidget]);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Funding & Credit Hub
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Complete Funding Solutions by LIV8
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
            From personal credit to business funding, trading capital to R&D tax credits - we've got you covered
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-tie text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Personal Credit</h3>
              <p className="text-gray-600 dark:text-gray-300">Credit repair, building, and personal funding solutions</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Business Credit</h3>
              <p className="text-gray-600 dark:text-gray-300">Business lines of credit and commercial funding</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Trading Capital</h3>
              <p className="text-gray-600 dark:text-gray-300">Forex, futures, and crypto trading funding</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/30 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">R&D Credits</h3>
              <p className="text-gray-600 dark:text-gray-300">Tax credit recovery and acceleration</p>
            </div>
          </div>
        </div>

        {/* Personal Credit Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-user-circle text-blue-500 mr-4"></i>
            Personal Credit Solutions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Transform your financial future with our comprehensive personal credit services. Whether you're rebuilding, 
            building from scratch, or seeking personal funding, we have the expertise to get you there.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <i className="fas fa-tools text-blue-500 text-2xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Credit Repair</h3>
              <p className="text-gray-600 dark:text-gray-300">Remove negative items and boost your credit score</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <i className="fas fa-building text-blue-500 text-2xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Credit Building</h3>
              <p className="text-gray-600 dark:text-gray-300">Establish strong credit from the ground up</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <i className="fas fa-hand-holding-usd text-blue-500 text-2xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Personal Funding</h3>
              <p className="text-gray-600 dark:text-gray-300">Access personal loans and financing options</p>
            </div>
          </div>
        </div>

        {/* Business Credit Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-briefcase text-green-500 mr-4"></i>
            Business Credit & Funding
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Scale your business with the right funding solutions. From startup capital to growth funding, 
            we connect you with the resources you need to succeed.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Business Lines of Credit</h4>
                  <p className="text-gray-600 dark:text-gray-300">Flexible funding for day-to-day operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Equipment Financing</h4>
                  <p className="text-gray-600 dark:text-gray-300">Fund essential business equipment and technology</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">SBA Loans</h4>
                  <p className="text-gray-600 dark:text-gray-300">Government-backed loans with favorable terms</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Invoice Factoring</h4>
                  <p className="text-gray-600 dark:text-gray-300">Convert receivables to immediate cash flow</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Merchant Cash Advances</h4>
                  <p className="text-gray-600 dark:text-gray-300">Fast funding based on future sales</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Working Capital Loans</h4>
                  <p className="text-gray-600 dark:text-gray-300">Fund growth and operational expenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Funding Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-chart-trending-up text-purple-500 mr-4"></i>
            Trading Capital & Funding
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Access capital for trading in forex, futures, crypto, and traditional markets. 
            Whether you're a seasoned trader or getting started, we connect you with funding partners.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-exchange-alt text-purple-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Forex Trading</h3>
              <p className="text-gray-600 dark:text-gray-300">Currency trading capital with competitive rates</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-chart-bar text-purple-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Futures Trading</h3>
              <p className="text-gray-600 dark:text-gray-300">Commodities and derivatives trading funding</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-bitcoin text-purple-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Crypto Trading</h3>
              <p className="text-gray-600 dark:text-gray-300">Digital asset trading capital and support</p>
            </div>
          </div>
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What We Offer Traders:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Funded trading accounts
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Proprietary trading firm connections
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Risk management tools
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Platform access and training
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Profit sharing opportunities
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Educational resources
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* R&D Tax Credits Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-lightbulb text-orange-500 mr-4"></i>
            R&D Tax Credit Recovery
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Each year, over <strong>$85 billion</strong> in R&D tax credits are left unclaimed by businesses. 
            Don't leave money on the table - we help recover what's rightfully yours.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What Qualifies:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Software or app development
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  AI or automation integration
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Platform development
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Prototypes and formulas
                </li>
              </ul>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Companies earning less than $5M/year</strong> may qualify for up to 
                  <strong className="text-orange-600">$500,000/year</strong> in payroll tax offsets.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our R&D Services:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <i className="fas fa-search text-orange-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Credit Analysis</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Review 2022-2024 filings for missed credits</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-file-alt text-orange-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Documentation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">IRS-ready documentation and studies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-orange-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Audit Defense</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Unlimited audit support and defense</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose LIV8 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-star text-yellow-500 mr-4"></i>
            Why Choose LIV8 for Your Funding Needs?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We're not just another funding company - we're your comprehensive financial growth partner.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Personalized Service</h3>
              <p className="text-gray-600 dark:text-gray-300">One-on-one guidance tailored to your unique situation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Fast Approval</h3>
              <p className="text-gray-600 dark:text-gray-300">Quick turnaround times to get you funded faster</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Full Support</h3>
              <p className="text-gray-600 dark:text-gray-300">From application to funding, we're with you every step</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-network-wired text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Extensive Network</h3>
              <p className="text-gray-600 dark:text-gray-300">Access to hundreds of lenders and funding sources</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Growth Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">Strategies designed to scale your financial success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Seasoned professionals with years of experience</p>
            </div>
          </div>
        </div>

        {/* Who We Help */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-users text-teal-500 mr-4"></i>
            Who We Help
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            From individuals to enterprises, we serve clients across all industries and funding needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-user text-blue-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Individuals</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Personal credit repair, building, and funding solutions</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-rocket text-green-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Startups</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Launch funding, business credit, and growth capital</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-building text-purple-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Small Business</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Working capital, equipment financing, and expansion funds</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-chart-line text-orange-500 text-3xl mb-4"></i>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Traders</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Trading capital for forex, futures, crypto, and stocks</p>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Ready to Get Funded?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Take the first step towards securing your funding. Our experts are ready to help you find the perfect solution.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-file-alt text-primary text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quick Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Get a free evaluation of your funding options and eligibility</p>
              <button
                onClick={handleOptInClick}
                className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Start Free Assessment
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
              <i className="fas fa-phone text-secondary text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Expert Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Speak directly with our funding specialists about your needs</p>
              <button
                onClick={onBookingClick}
                className="w-full bg-gradient-to-r from-secondary to-green-700 hover:from-green-700 hover:to-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Success Stories & Video */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            <i className="fas fa-trophy text-yellow-500 mr-4"></i>
            Success Stories & How We Work
          </h2>
          <div className="mb-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Xs29LBxwqU4?si=_z3T-9w9HAQ6XhgH" 
                title="LIV8 Funding Success Stories" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                What Our Clients Say
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700 dark:text-gray-300 italic">"LIV8 helped me secure $150K in business funding when banks said no."</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">- Sarah K, Tech Startup</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700 dark:text-gray-300 italic">"My credit score went from 520 to 750 in just 8 months."</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">- Mike D, Restaurant Owner</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Free Consultation Call
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">What to Expect:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Review your financial goals and needs
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Explore all available funding options
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Create a personalized funding strategy
                </li>
              </ul>
              <button
                onClick={onBookingClick}
                className="w-full bg-gradient-to-r from-secondary to-green-700 hover:from-green-700 hover:to-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Your Funding Solution Awaits</h2>
          <p className="text-xl mb-6 opacity-90">
            Whether you need personal credit help, business funding, trading capital, or tax credit recovery - 
            we have the expertise and connections to make it happen.
          </p>
          <p className="text-lg mb-8 font-medium">
            Take action today. Your financial future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOptInClick}
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Assessment
            </button>
            <button
              onClick={onBookingClick}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Book Expert Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll-triggered Widget */}
      {showScrollWidget && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 max-w-sm">
            <button
              onClick={() => setShowScrollWidget(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dollar-sign text-white text-xl"></i>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Need Funding?
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get your FREE funding assessment before you leave
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleOptInClick}
                  className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
                >
                  Get Free Funding Assessment
                </button>
                
                <button
                  onClick={onBookingClick}
                  className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
                >
                  Schedule Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}