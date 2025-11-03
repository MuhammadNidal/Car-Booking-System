import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-100 border-t border-gray-200"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-1 group">
              <span className="font-bold text-2xl text-[#193CB8]">
                AutoChoice
              </span>
            </Link>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Your trusted partner in finding the perfect car. Quality, transparency, and service you can count on.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/cars/used" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">Used Cars</Link></li>
              <li><Link to="/cars/new" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">New Cars</Link></li>
              <li><Link to="/sell" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">Sell Your Car</Link></li>
              <li><Link to="/compare" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">Compare</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-[#193CB8] transition-colors">Privacy Policy</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter Section – Fixed responsiveness */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-gray-900 mb-4">Stay in the Loop</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest deals and offers straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                aria-label="Email Address"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193CB8]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#193CB8] focus:ring-offset-2 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div className="border-t border-gray-200" variants={itemVariants}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} AutoChoice. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="#" aria-label="Facebook" className="text-gray-500 hover:text-[#193CB8] transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="#" aria-label="Twitter" className="text-gray-500 hover:text-[#193CB8] transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="#" aria-label="Instagram" className="text-gray-500 hover:text-[#193CB8] transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="#" aria-label="LinkedIn" className="text-gray-500 hover:text-[#193CB8] transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;