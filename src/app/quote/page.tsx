'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HardHat, ArrowRight } from 'lucide-react';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-construction-BWbs2qRQ.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                  <HardHat className="mr-2 h-4 w-4" />
                  GET A FREE QUOTE
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Start Your <span className="text-yellow-400">Project</span> Today
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-800"
          >
            <div className="md:flex">
              {/* Left Side - Form */}
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Get Your Free Quote</h2>
                  <p className="text-gray-400">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
                </div>

                {submitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-900/30 text-green-400 border border-green-400/30 mb-4">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                    <p className="text-gray-400 mb-6">We&apos;ve received your request and will contact you shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">
                        Project Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                      >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="renovation">Home Renovation</option>
                        <option value="remodeling">Remodeling</option>
                        <option value="addition">Home Addition</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-1">
                        Project Details <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={4}
                        required
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                        placeholder="Describe your project in detail..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">
                          Estimated Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="1+ years">1+ years</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition text-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-25k">Under $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-250k">$100,000 - $250,000</option>
                          <option value="250k-plus">$250,000+</option>
                          <option value="unsure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center"
                      >
                        Request Free Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Right Side - Info */}
              <div className="md:w-1/2 p-8 md:p-12 bg-gray-800/50 border-l border-gray-700">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">Why Choose BuildRite?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">20+ years of construction experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Licensed, bonded, and insured</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Free, no-obligation estimates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">Competitive pricing with quality materials</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mt-1 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">24-hour response time</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Process</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold mr-3 mt-1">1</div>
                      <div>
                        <h3 className="font-semibold text-white">Initial Consultation</h3>
                        <p className="text-gray-400 text-sm">We&apos;ll discuss your project needs and vision</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold mr-3 mt-1">2</div>
                      <div>
                        <h3 className="font-semibold text-white">Site Evaluation</h3>
                        <p className="text-gray-400 text-sm">We&apos;ll assess your property and take measurements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold mr-3 mt-1">3</div>
                      <div>
                        <h3 className="font-semibold text-white">Detailed Proposal</h3>
                        <p className="text-gray-400 text-sm">You&apos;ll receive a comprehensive quote</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-bold mr-3 mt-1">4</div>
                      <div>
                        <h3 className="font-semibold text-white">Project Start</h3>
                        <p className="text-gray-400 text-sm">We&apos;ll begin work on your agreed schedule</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-white">Contact Info</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-gray-300">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-300">info@buildrite.com</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-300">123 Construction Ave, Build City, BC 12345</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;