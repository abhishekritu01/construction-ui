'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Skyline Tower",
    type: "Commercial",
    location: "New York, NY",
    year: "2023",
    description: "45-story mixed-use tower with LEED Platinum certification",
    image: "/projects/skytower.jpg",
    features: ["Green roof", "Smart glass facade", "Seismic reinforcement"]
  },
  {
    id: 2,
    title: "Harbor View Residences",
    type: "Residential",
    location: "Miami, FL",
    year: "2022",
    description: "Luxury waterfront condominium complex",
    image: "/projects/harbor.jpg",
    features: ["Hurricane-resistant", "Private docks", "Rooftop amenities"]
  },
  {
    id: 3,
    title: "Industrial Park Complex",
    type: "Industrial",
    location: "Houston, TX",
    year: "2021",
    description: "500,000 sq ft manufacturing and distribution center",
    image: "/projects/industrial.jpg",
    features: ["Robotic automation", "Solar array", "Rail access"]
  }
];

const ProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>

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
              OUR WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-yellow-400">Building</span> Excellence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of award-winning construction projects
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Project Content */}
          <motion.div
            key={projects[currentProject].id}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden border-2 border-gray-800 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${projects[currentProject].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full mb-2">
                  {projects[currentProject].type}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {projects[currentProject].title}
                </h3>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">{projects[currentProject].location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">{projects[currentProject].year}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg">
                {projects[currentProject].description}
              </p>

              <h4 className="text-yellow-400 font-medium mb-4">KEY FEATURES</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {projects[currentProject].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3.5 bg-transparent text-yellow-400 font-bold rounded-md hover:bg-gray-800 transition-colors border-2 border-yellow-400/50 hover:border-yellow-400 flex items-center">
                View Full Case Study
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center lg:justify-end gap-4 mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <button 
              onClick={prevProject}
              className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors border border-gray-700"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextProject}
              className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors border border-gray-700"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* All Projects Link */}
        <div className="text-center mt-16">
          <button className="px-8 py-3.5 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 transition-colors flex items-center mx-auto">
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;