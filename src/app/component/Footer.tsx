'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaHardHat } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 pt-20 pb-10 border-t border-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <FaHardHat className="text-yellow-400 text-3xl mr-3" />
              <span className="text-2xl font-bold text-white">BUILDCON</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building excellence since 2008. We specialize in commercial, residential, and industrial construction projects with a focus on innovation and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Residential Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Industrial Facilities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Project Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Sustainable Building</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Construction Way<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18005551234" className="hover:text-yellow-400 transition-colors">+1 (800) 555-1234</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@buildcon.com" className="hover:text-yellow-400 transition-colors">info@buildcon.com</a>
              </div>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BuildCon Construction. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;