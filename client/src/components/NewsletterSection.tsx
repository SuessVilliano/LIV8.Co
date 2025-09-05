import NewsletterForm from '@/components/forms/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-primary dark:bg-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="newsletter-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#newsletter-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get exclusive insights, funding opportunities, and industry trends delivered to your inbox. 
            Plus, receive our comprehensive business growth guide - completely free.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <NewsletterForm className="" />
            
            {/* Bonus offer */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                <i className="fas fa-gift mr-2"></i>
                Free Business Growth Guide Included
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mt-12 text-blue-100">
          <div className="flex items-center">
            <i className="fas fa-users mr-2"></i>
            <span className="text-sm">Join 10,000+ subscribers</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-shield-alt mr-2"></i>
            <span className="text-sm">No spam, ever</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-times mr-2"></i>
            <span className="text-sm">Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}