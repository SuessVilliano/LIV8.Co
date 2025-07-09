import { DIVISIONS } from '@/lib/constants';

interface BrandsSectionProps {
  onBookingClick: () => void;
}

export default function BrandsSection({ onBookingClick }: BrandsSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Brand Ecosystem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Multiple specialized divisions working together to provide comprehensive solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIVISIONS.map((division) => (
            <div key={division.id} className={`bg-gradient-to-br ${division.bgColor} rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className={`w-16 h-16 bg-gradient-to-br ${division.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white font-bold text-xl">{division.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{division.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{division.description}</p>
              <button 
                onClick={onBookingClick}
                className={`${division.buttonColor} text-white px-6 py-2 rounded-lg font-medium transition-colors`}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
