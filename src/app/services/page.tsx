'use client';
import { motion } from 'framer-motion';
import { HardHat, Hammer, ShieldCheck, Building, Home, Factory, Wrench, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Button } from '../component/Button';

const Page = () => {
  const services = [
    {
      title: "Commercial Construction",
      description: "From office buildings to retail spaces, we deliver high-quality commercial projects on time and within budget.",
      icon: <Building className="w-8 h-8 text-yellow-400" />,
      features: [
        "Office buildings",
        "Retail centers",
        "Mixed-use developments",
        "Hospitality projects"
      ]
    },
    {
      title: "Residential Construction",
      description: "Custom homes and multi-family residences built with precision and care for lasting quality.",
      icon: <Home className="w-8 h-8 text-yellow-400" />,
      features: [
        "Custom single-family homes",
        "Townhouses & condominiums",
        "Luxury residences",
        "Home renovations"
      ]
    },
    {
      title: "Industrial Construction",
      description: "Specialized facilities designed for efficiency, safety, and long-term functionality.",
      icon: <Factory className="w-8 h-8 text-yellow-400" />,
      features: [
        "Warehouses & distribution centers",
        "Manufacturing plants",
        "Industrial parks",
        "Specialized facilities"
      ]
    },
    {
      title: "Construction Management",
      description: "Comprehensive oversight from planning to completion for seamless project execution.",
      icon: <ClipboardCheck className="w-8 h-8 text-yellow-400" />,
      features: [
        "Project planning",
        "Budget management",
        "Scheduling",
        "Quality control"
      ]
    },
    {
      title: "Renovation Services",
      description: "Transforming existing spaces with innovative design and quality craftsmanship.",
      icon: <Wrench className="w-8 h-8 text-yellow-400" />,
      features: [
        "Commercial renovations",
        "Residential remodels",
        "Historic restorations",
        "Tenant improvements"
      ]
    },
    {
      title: "Special Projects",
      description: "Custom solutions for unique construction challenges and specialized requirements.",
      icon: <HardHat className="w-8 h-8 text-yellow-400" />,
      features: [
        "Design-build services",
        "Green building projects",
        "Specialty structures",
        "Emergency repairs"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We listen to your needs and project requirements",
      icon: <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">1</div>
    },
    {
      step: "02",
      title: "Planning",
      description: "Our team develops a comprehensive project plan",
      icon: <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">2</div>
    },
    {
      step: "03",
      title: "Design",
      description: "Architects and engineers create detailed designs",
      icon: <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">3</div>
    },
    {
      step: "04",
      title: "Construction",
      description: "Our skilled team brings the project to life",
      icon: <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">4</div>
    },
    {
      step: "05",
      title: "Completion",
      description: "Final inspection and project handover",
      icon: <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">5</div>
    }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-construction-BWbs2qRQ.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                  <HardHat className="mr-2 h-4 w-4" />
                  OUR SERVICES
                </span>
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Building <span className="text-yellow-400">Solutions</span><br />That Last Generations
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Comprehensive construction services tailored to your unique needs and vision.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-yellow-400">Construction</span> Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              From concept to completion, we deliver exceptional results across all construction sectors
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex mb-6">
                  <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800/50">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-yellow-400">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              A structured approach that ensures quality and efficiency at every stage
            </motion.p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[url('/construction-site-dark.jpg')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Why <span className="text-yellow-400">Choose</span> Our Services
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                    <Hammer className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
                    <p className="text-gray-300">Our skilled professionals bring decades of experience to every project.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                    <ShieldCheck className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safety Commitment</h3>
                    <p className="text-gray-300">Industry-leading safety protocols protect everyone involved.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                    <ClipboardCheck className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Project Transparency</h3>
                    <p className="text-gray-300">Regular updates and open communication throughout the process.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Request a Service Quote</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Service Needed</label>
                  <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Commercial Construction</option>
                    <option>Residential Construction</option>
                    <option>Industrial Construction</option>
                    <option>Construction Management</option>
                    <option>Renovation Services</option>
                    <option>Special Projects</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Project Details</label>
                  <textarea 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
                    rows={4}
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <Button variant="hero" size="lg" className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  Get Your Free Quote
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="text-yellow-400">Build</span> With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re planning a new construction project or need expert renovation services, our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-900/50">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;