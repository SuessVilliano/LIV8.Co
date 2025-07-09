import { DIVISIONS } from '@/lib/constants';

interface DivisionsProps {
  onBookingClick: () => void;
}

export default function Divisions({ onBookingClick }: DivisionsProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Divisions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Multiple specialized divisions working together to provide comprehensive solutions across all industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIVISIONS.map((division) => (
            <div key={division.id} className={`bg-gradient-to-br ${division.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className={`w-20 h-20 bg-gradient-to-br ${division.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white font-bold text-2xl">{division.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{division.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{division.description}</p>
              <button 
                onClick={onBookingClick}
                className={`w-full ${division.buttonColor} text-white py-3 rounded-lg font-medium transition-colors`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
