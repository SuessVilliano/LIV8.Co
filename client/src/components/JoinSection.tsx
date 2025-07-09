interface JoinSectionProps {
  onJoinClick: () => void;
}

export default function JoinSection({ onJoinClick }: JoinSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10 dark:from-primary/20 dark:via-secondary/10 dark:to-purple-500/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join LIV8. Earn Across Every Industry We Touch.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Become a LIV8 consultant and earn commissions across our entire ecosystem of services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-dollar-sign text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Multiple Revenue Streams</h3>
                  <p className="text-gray-600 dark:text-gray-300">Earn commissions from all 8 service divisions with competitive rates and performance bonuses</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Comprehensive Training</h3>
                  <p className="text-gray-600 dark:text-gray-300">Complete onboarding and ongoing education across all service areas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-users text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Team Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">Join a collaborative network of successful consultants with mentorship opportunities</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Commission Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Digital & AI Services</span>
                  <span className="font-bold text-primary">15-25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Funding & Credit</span>
                  <span className="font-bold text-secondary">20-30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Solar & Energy</span>
                  <span className="font-bold text-yellow-600">$500-$2000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Insurance & Wealth</span>
                  <span className="font-bold text-purple-600">10-50%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business consulting team collaboration" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Earning?</h3>
              <p className="text-lg mb-6">Join our team of successful consultants and start building your income today</p>
              <button 
                onClick={onJoinClick}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
