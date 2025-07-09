import { useEffect, useState } from 'react';
import { STATS } from '@/lib/constants';

interface HeroSectionProps {
  onExploreServices: () => void;
  onBookingClick: () => void;
}

export default function HeroSection({ onExploreServices, onBookingClick }: HeroSectionProps) {
  const [counters, setCounters] = useState(STATS.map(() => 0));

  useEffect(() => {
    const animateCounters = () => {
      STATS.forEach((stat, index) => {
        const duration = 2000;
        const step = stat.value / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= stat.value) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = stat.value;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, 16);
      });
    };

    animateCounters();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-purple-500/10 dark:from-primary/20 dark:via-secondary/10 dark:to-purple-500/20 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Elevate Your</span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Life, Wealth, Health</span>
                <span className="text-gray-900 dark:text-white"> & Business</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Consulting. Funding. Health. Solar. AI. All in One Ecosystem. 
                Transform every aspect of your success with our comprehensive suite of services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExploreServices}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-rocket mr-2"></i>
                Explore Services
              </button>
              <button 
                onClick={onBookingClick}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Free Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              {STATS.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-2xl font-bold ${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-purple-600'}`}>
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
              alt="Professional business team collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg animate-bounce-gentle">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
