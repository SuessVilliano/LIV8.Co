import { SERVICES } from '@/lib/constants';

interface ServicesProps {
  onBookingClick: () => void;
}

export default function Services({ onBookingClick }: ServicesProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate every aspect of your business and personal success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <button 
                onClick={onBookingClick}
                className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
