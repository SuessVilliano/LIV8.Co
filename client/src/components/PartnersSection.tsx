import { PARTNERS } from '@/lib/constants';

export default function PartnersSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Working with industry leaders to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold text-primary mb-2">{partner.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{partner.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
