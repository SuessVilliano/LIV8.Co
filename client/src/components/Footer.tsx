import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L8</span>
              </div>
              <span className="text-2xl font-bold">LIV8</span>
            </div>
            <p className="text-gray-400">
              Elevating your life, wealth, health, and business through comprehensive solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services#digital-ai" className="hover:text-white transition-colors">Digital & AI</Link></li>
              <li><Link href="/services#funding" className="hover:text-white transition-colors">Funding & Credit</Link></li>
              <li><Link href="/services#insurance" className="hover:text-white transition-colors">Insurance & Wealth</Link></li>
              <li><Link href="/services#health" className="hover:text-white transition-colors">Health & Supplements</Link></li>
              <li><Link href="/services#solar" className="hover:text-white transition-colors">Solar & Energy</Link></li>
              <li><Link href="/services#events" className="hover:text-white transition-colors">Events/Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/join" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <a href="tel:813-441-9686" className="hover:text-white transition-colors">813-441-9686</a>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@liv8.co" className="hover:text-white transition-colors">info@liv8.co</a>
              </div>
              <div className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>Tampa, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LIV8. All rights reserved. | <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> | <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
}
