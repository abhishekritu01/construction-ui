'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
  FaBuilding,
  FaCheck,
  FaChevronRight,
  FaHome,
  FaShieldAlt,
  FaTools
} from 'react-icons/fa';

const ConstructionServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Memoize services data to prevent unnecessary re-renders
  const services = useMemo(() => [
    {
      title: "Commercial Construction",
      description: "State-of-the-art commercial buildings with innovative designs and sustainable materials.",
      icon: <FaBuilding className="w-6 h-6" />,
      features: ["LEED Certification", "5-10 Year Warranty", "3D Modeling"]
    },
    {
      title: "Residential Development",
      description: "Custom luxury homes and residential complexes with premium finishes and smart home technology.",
      icon: <FaHome className="w-6 h-6" />,
      features: ["Custom Designs", "Energy Efficient", "Smart Homes"]
    },
    {
      title: "Industrial Facilities",
      description: "Heavy-duty industrial complexes built for maximum efficiency and durability.",
      icon: <FaShieldAlt className="w-6 h-6" />,
      features: ["Heavy Machinery", "Safety First", "24/7 Support"]
    },
    {
      title: "Renovation & Remodeling",
      description: "Transforming existing spaces with modern designs while preserving structural integrity.",
      icon: <FaTools className="w-6 h-6" />,
      features: ["Historic Preservation", "Modern Upgrades", "Space Optimization"]
    }
  ], []);

  // Memoize stats to prevent unnecessary re-renders
  const stats = useMemo(() => [
    { value: "200+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Industry Awards" },
    { value: "24/7", label: "Support Available" }
  ], []);

  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header - Lazy loaded */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <div className="h-0.5 w-8 bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 font-mono font-medium tracking-wider text-sm">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building <span className="text-yellow-400">Excellence</span> in Every Project
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From groundbreaking to ribbon cutting, we deliver quality construction services with precision and professionalism.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Buttons */}
          <div className="lg:w-1/3">
            <div className="flex lg:flex-col overflow-x-auto pb-4 lg:pb-0 gap-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-6 py-4 rounded-lg text-left transition-all ${activeTab === index ? 'bg-gray-800 border-l-4 border-yellow-400' : 'bg-gray-900 hover:bg-gray-800'}`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-md mr-4 ${activeTab === index ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'}`}>
                      {service.icon}
                    </div>
                    <span className={`font-bold ${activeTab === index ? 'text-white' : 'text-gray-300'}`}>
                      {service.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content - Only render the active tab content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 h-full"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{services[activeTab].title}</h3>
                <p className="text-gray-300">{services[activeTab].description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-yellow-400 font-medium mb-4">KEY FEATURES</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors flex items-center">
                  Learn More
                  <FaChevronRight className="w-4 h-4 ml-2 flex-shrink-0" />
                </button>
                <button className="px-6 py-3 bg-transparent text-yellow-400 font-bold rounded-lg hover:bg-gray-800 transition-colors border border-gray-700">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Banner - Lazy loaded */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionServices;