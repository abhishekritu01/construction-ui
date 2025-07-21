'use client';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { HardHat, Building, Hammer, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '../component/Button';

const Page = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const features = [
    {
      title: "Innovative Solutions",
      description: "We combine cutting-edge technology with proven construction methods.",
      icon: <Hammer className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Safety First",
      description: "Rigorous protocols ensure every project meets the highest safety standards.",
      icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Sustainable Practices",
      description: "Environmentally responsible construction is at our core.",
      icon: <Building className="w-6 h-6 text-yellow-400" />
    }
  ];

  const milestones = [
    { year: "2003", event: "Company Founded", description: "Started as a small residential contractor" },
    { year: "2010", event: "First Commercial Project", description: "Expanded into commercial construction" },
    { year: "2015", event: "100th Project", description: "Reached major milestone in project delivery" },
    { year: "2023", event: "National Recognition", description: "Awarded for excellence in construction" }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('/hero-construction-BWbs2qRQ.jpg')] bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <motion.div variants={item} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                  <HardHat className="mr-2 h-4 w-4" />
                  BUILDING THE FUTURE
                </span>
              </motion.div>
              <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-yellow-400">Constructing</span> Excellence <br />For Over Two Decades
              </motion.h1>
              <motion.p variants={item} className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10">
                Delivering innovative construction solutions with uncompromising quality and safety standards.
              </motion.p>
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  Explore Our Work
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-900/50">
                  Learn About Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-400 pl-14">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-yellow-400/10 -skew-x-12 -translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img 
                src="/construction-team-working.jpg" 
                alt="Our team at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-8">
                <div className="bg-yellow-400/90 text-gray-900 p-4 rounded-lg max-w-xs">
                  <p className="font-bold">&apos;Quality is never an accident; it&quot;s always the result of intelligent effort.&apos;</p>
                  <p className="text-sm mt-2">- Michael Johnson, Founder</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-1"
          >
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-400/10 text-yellow-400 mb-4">
              OUR STORY
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Building <span className="text-yellow-400">Legacies</span> Since 2003
            </h2>
            <p className="text-gray-400 mb-6 text-lg">
              What began as a small local contractor has grown into a nationally recognized construction firm, without ever compromising our core values of integrity, quality, and client satisfaction.
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering commitment to excellence in every project we undertake.
            </p>
            <Button variant="hero" size="lg" className="group bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Read Our Full Story
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-yellow-400">Milestones</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key moments that shaped our journey and growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-yellow-400/30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2 z-10" />
                  
                  <div className={`w-full md:w-5/12 p-6 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="inline-block px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                      <p className="text-yellow-400 font-bold">{milestone.year}</p>
                    </div>
                  </div>
                  
                  <div className={`w-full md:w-5/12 p-6 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[url('/construction-site-dark.jpg')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="p-6">
              <p className="text-5xl font-bold text-yellow-400 mb-2">20+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold text-yellow-400 mb-2">500+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold text-yellow-400 mb-2">1000+</p>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold text-yellow-400 mb-2">50+</p>
              <p className="text-gray-300">Industry Awards</p>
            </div>
          </motion.div>
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
              Ready to Start Your <span className="text-yellow-400">Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to bring your vision to life with quality craftsmanship and innovative solutions.
            </p>
            <Button variant="hero" size="lg" className="group bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Get a Free Consultation
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;