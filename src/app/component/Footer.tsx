// /
// /about
// /contact
// /project
// /services
// /faq
// /testimonials

'use client';
import { motion } from 'framer-motion';
import { HardHat, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Button } from '../component/Button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 pt-20 pb-10 border-t border-gray-800 overflow-hidden">
      {/* Decorative construction elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-20 w-40 h-40 bg-gray-800/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              <HardHat className="text-yellow-400 w-8 h-8 mr-3" />
              <span className="text-2xl font-bold text-white">CONSTRUCT<span className="text-yellow-400">CO</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Building excellence since 2003. We deliver innovative construction solutions with uncompromising quality and safety standards across commercial, residential, and industrial sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-400 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                <FaYoutube className="text-lg" />
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
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#commercial" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Residential Development
                </Link>
              </li>
              <li>
                <Link href="/services#industrial" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Industrial Facilities
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Renovation Services
                </Link>
              </li>
              <li>
                <Link href="/services#management" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Construction Management
                </Link>
              </li>
              <li>
                <Link href="/services#sustainable" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center group">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Sustainable Building
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <address className="not-italic">123 Construction Avenue<br />Building City, BC 12345</address>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="tel:+18005551234" className="hover:text-yellow-400 transition-colors">(800) 555-1234</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@constructco.com" className="hover:text-yellow-400 transition-colors">info@constructco.com</a>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="mt-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ConstructCo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Sitemap</Link>
              <Link href="/careers" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Careers</Link>
              <Link href="/safety" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">Safety Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;