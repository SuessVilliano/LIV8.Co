import { SERVICES } from '@/lib/constants';

interface ServicesSectionProps {
  onBookingClick: () => void;
}

export default function ServicesSection({ onBookingClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate every aspect of your business and personal success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-lg mb-6 w-full h-32 object-cover"
              />
              <button 
                onClick={() => {
                  if (service.id === 'digital-ai') {
                    window.open('https://liv8ai.com', '_blank');
                  } else if (service.id === 'funding') {
                    window.location.href = '/funding-credits';
                  } else if (service.id === 'insurance') {
                    window.open('https://smartlifebrokers.com', '_blank');
                  } else if (service.id === 'health') {
                    window.open('https://liv8health.com', '_blank');
                  } else if (service.id === 'solar') {
                    window.open('https://liv8solar.com', '_blank');
                  } else if (service.id === 'events') {
                    window.location.href = '/events-logistics';
                  } else {
                    onBookingClick();
                  }
                }}
                className={`w-full ${service.id === 'digital-ai' ? 'bg-primary hover:bg-blue-700' : 
                  service.id === 'funding' ? 'bg-secondary hover:bg-green-700' : 
                  service.id === 'insurance' ? 'bg-purple-600 hover:bg-purple-700' : 
                  service.id === 'health' ? 'bg-red-600 hover:bg-red-700' : 
                  service.id === 'solar' ? 'bg-yellow-600 hover:bg-yellow-700' : 
                  'bg-indigo-600 hover:bg-indigo-700'} text-white py-3 rounded-lg font-medium transition-colors`}
              >
                {service.id === 'digital-ai' || service.id === 'health' || service.id === 'solar' || service.id === 'insurance' ? 'Visit Site' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
