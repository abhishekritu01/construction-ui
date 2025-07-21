'use client';

import { motion } from 'framer-motion';
import { FaHardHat, FaDraftingCompass, FaHammer, FaBuilding } from 'react-icons/fa';

const processSteps = [
  {
    id: 1,
    title: "Consultation & Planning",
    icon: <FaDraftingCompass className="text-3xl text-yellow-400" />,
    description: "We begin with in-depth discussions to understand your vision, followed by comprehensive site analysis and feasibility studies.",
    duration: "1-4 Weeks"
  },
  {
    id: 2,
    title: "Design & Engineering",
    icon: <FaHardHat className="text-3xl text-yellow-400" />,
    description: "Our architects and engineers create detailed plans, incorporating sustainable practices and innovative solutions.",
    duration: "2-8 Weeks"
  },
  {
    id: 3,
    title: "Preconstruction",
    icon: <FaHammer className="text-3xl text-yellow-400" />,
    description: "We finalize permits, assemble the perfect team, and establish project timelines with clear milestones.",
    duration: "2-6 Weeks"
  },
  {
    id: 4,
    title: "Construction",
    icon: <FaBuilding className="text-3xl text-yellow-400" />,
    description: "Our skilled craftsmen bring the project to life with daily progress reports and strict quality control.",
    duration: "Varies by Project"
  }
];

const OurProcessSection = () => {
  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <div className="h-0.5 w-8 bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 font-mono font-medium tracking-wider text-sm">
              OUR METHOD
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-yellow-400">Blueprint</span> for Success
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A transparent, step-by-step approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-yellow-400 transform -translate-x-1/2 scale-y-0 origin-top" style={{ transform: 'translateX(-50%) scaleY(1)', transformOrigin: 'top' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:col-start-2 md:row-start-' + (index + 1)}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-yellow-400 border-4 border-gray-950 transform -translate-y-1/2" 
                  style={{ left: index % 2 === 0 ? 'calc(100% - 1rem)' : '-1rem' }}></div>
                
                <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 h-full">
                  <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <div className="text-yellow-400 font-mono text-sm">{step.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3.5 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 transition-colors flex items-center mx-auto">
            Download Our Process PDF
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcessSection;