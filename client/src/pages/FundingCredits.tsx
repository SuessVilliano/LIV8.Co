import { useState } from 'react';

interface FundingCreditsProps {
  onBookingClick: () => void;
}

export default function FundingCredits({ onBookingClick }: FundingCreditsProps) {
  const [showFundFindersForm, setShowFundFindersForm] = useState(false);

  const handleOptInClick = () => {
    setShowFundFindersForm(true);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            R&D Tax Refund Recovery & Acceleration Program
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Powered by LIV8 Fund Finders
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/UK8piq2lj2I?si=Mvxb-_10mfKyyWbb" 
                title="R&D Refunds Explained" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-check-circle text-green-500 mr-4"></i>
            Why This Matters
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Each year, over <strong>$85 billion</strong> in R&D tax credits are left unclaimed by businesses. 
            Whether you're a startup or scaling company, you may be missing out on thousands in refundable tax credits — 
            and the IRS just opened the door to retroactively claim what's yours.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">2025 Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300">Claim 100% expensing for R&D costs</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Retroactive Claims</h3>
              <p className="text-gray-600 dark:text-gray-300">File for cash refunds from 2022–2024</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Payroll Offsets</h3>
              <p className="text-gray-600 dark:text-gray-300">Offset payroll taxes if you're not profitable</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Even if you've never filed or thought you didn't qualify.
          </p>
        </div>

        {/* What Qualifies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-lightbulb text-yellow-500 mr-4"></i>
            What Qualifies for R&D Credits?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">If your business worked on:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Software or app development
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                AI or automation integration
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Building or improving platforms
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Developing tools, prototypes, formulas
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Internal systems development
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Paying contractors for tech/workflow optimization
              </li>
            </ul>
          </div>
          <p className="text-lg font-medium text-gray-900 dark:text-white mt-6">
            ...you likely qualify.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-search text-blue-500 mr-4"></i>
            What We Do at LIV8 Fund Finders
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium">
            We find unclaimed funds for businesses.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <p className="text-gray-700 dark:text-gray-300">Analyze 2022–2024 tax filings for missed credits</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <p className="text-gray-700 dark:text-gray-300">Identify qualifying expenses for R&D and payroll tax offsets</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <p className="text-gray-700 dark:text-gray-300">File amendments and credit applications</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <p className="text-gray-700 dark:text-gray-300">Build a strategy for 2025 full deduction</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                <p className="text-gray-700 dark:text-gray-300">Provide IRS-ready documentation & audit defense</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-bold text-gray-900 dark:text-white mt-6">
            We don't just file forms. We unlock cash.
          </p>
        </div>

        {/* Full Service Support */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-briefcase text-purple-500 mr-4"></i>
            Full-Service Support
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Whether you're already working with a CPA or not, we handle everything from A to Z:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-300">R&D studies & documentation</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Coordination</h3>
              <p className="text-gray-600 dark:text-gray-300">Payroll coordination</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">Federal + state level credit optimization</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">IRS Support</h3>
              <p className="text-gray-600 dark:text-gray-300">IRS paperwork and tracking</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Audit Defense</h3>
              <p className="text-gray-600 dark:text-gray-300">Unlimited audit defense & support</p>
            </div>
          </div>
        </div>

        {/* Who Can Benefit */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-chart-line text-purple-500 mr-4"></i>
            Who Can Benefit?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-rocket text-blue-500 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">Startups & tech founders</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-cogs text-gray-500 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">Engineers, product builders</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-hammer text-yellow-500 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">Construction firms & fabricators</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-shopping-cart text-green-500 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">Ecommerce businesses</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-brain text-purple-500 mr-3"></i>
                <span className="text-gray-700 dark:text-gray-300">AI, automation & software implementers</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mt-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>If your company earns less than $5 million/year and started within the past 5 years,</strong> 
              you may be eligible for up to <strong className="text-green-600">$500,000/year</strong> in payroll tax offsets — even without profitability.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-clipboard-list text-blue-500 mr-4"></i>
            Submit Your Eligibility Info
          </h2>
          <div className="text-center mb-8">
            <button
              onClick={handleOptInClick}
              className="bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Eligibility Assessment
            </button>
          </div>
          
          {showFundFindersForm && (
            <div className="border-t pt-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Form widget will load here - Make Forms integration
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Widget ID: 6873cb185f135ed8af140fb1
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Video Call Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <i className="fas fa-phone text-green-500 mr-4"></i>
            Book a Free Estimate Call
          </h2>
          <div className="mb-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Xs29LBxwqU4?si=_z3T-9w9HAQ6XhgH" 
                title="LIV8 Fund Finders: Unclaimed Business Cash" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              R&D Tax Refund Estimate Call – LIV8 Fund Finders
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">What to Expect:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Review your last 3 years for unclaimed refunds
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                Estimate your 2025 savings
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-check text-green-500 mr-3"></i>
                No pressure — just insight & clarity
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              You don't need to prepare anything. Just show up.
            </p>
            <div className="mt-6">
              <button
                onClick={onBookingClick}
                className="bg-gradient-to-r from-secondary to-green-700 hover:from-green-700 hover:to-secondary text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Free Call
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Leave Money on the Table</h2>
          <p className="text-xl mb-6 opacity-90">
            Most businesses don't know they qualify — and that means they're leaving cash on the table. 
            Submit your business info and schedule your free call to find out how much money you could recover.
          </p>
          <p className="text-lg mb-8 font-medium">
            No cost. No risk. Just real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleOptInClick}
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Eligibility Assessment
            </button>
            <button
              onClick={onBookingClick}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Schedule Free Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}