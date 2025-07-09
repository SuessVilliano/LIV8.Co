import { WHO_WE_HELP } from '@/lib/constants';

interface WhoWeHelpSectionProps {
  onBookingClick: () => void;
}

export default function WhoWeHelpSection({ onBookingClick }: WhoWeHelpSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who We Help Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From entrepreneurs to established businesses, we provide tailored solutions for every stage of growth
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {WHO_WE_HELP.map((item) => (
            <div key={item.id} className="text-center group cursor-pointer" onClick={onBookingClick}>
              <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${item.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
