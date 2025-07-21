'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { ArrowRight, Play, Award, Users, Building, HardHat } from "lucide-react";
import { motion, useInView, useAnimation, stagger, animate, Variants, Easing } from "framer-motion";

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{
    id: string;
    size: string;
    top: string;
    left: string;
    duration: string;
    delay: string;
  }> | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  // Generate particles only on client side
  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 24 }).map((_, i) => ({
        id: `particle-${i}`,
        size: `${Math.random() * 6 + 3}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 20 + 15}s`,
        delay: `${Math.random() * 5}s`
      }));
    };
    setParticles(generateParticles());

    if (isInView) {
      controls.start("visible");
      animate(".stat-item", { opacity: 1, y: 0 }, { delay: stagger(0.1), duration: 0.5 });
    }
  }, [isInView, controls]);

  const stats = [
    { value: '500+', label: 'Projects', icon: Building, delay: '0.2s' },
    { value: '1000+', label: 'Clients', icon: Users, delay: '0.4s' },
    { value: '20+', label: 'Years', icon: HardHat, delay: '0.6s' },
    { value: '50+', label: 'Awards', icon: Award, delay: '0.8s' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut" as const
        }
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-gray-950"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-construction-BWbs2qRQ.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/70"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <div>
              <motion.div 
                className="flex items-center justify-center lg:justify-start mb-6"
                variants={itemVariants}
              >
                <div className="h-0.5 w-8 bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 font-mono font-medium tracking-wider text-sm">
                  INDUSTRY LEADERS SINCE 2003
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="block">Building Dreams</span>
                <span className="block text-yellow-400">Into Reality</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-400 mb-8 max-w-2xl"
                variants={itemVariants}
              >
                We combine cutting edge technology with decades of construction expertise to deliver exceptional results for every project.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                variants={itemVariants}
              >
                <Button variant="hero" size="lg" className="group bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="bg-transparent border-gray-700 text-white hover:bg-gray-800">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Showcase
                </Button>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="stat-item bg-gray-900/50 p-4 rounded-lg border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 opacity-0 translate-y-10"
                      initial={{ opacity: 0, y: 20 }}
                    >
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <Icon className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Floating Consultation Card */}
          <motion.div 
            className="relative hidden lg:block"
            initial="hidden"
            animate={["visible", "float"]}
            variants={floatVariants}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Free Project Consultation
              </h3>
              <p className="text-gray-400 mb-6">
                Get expert advice and detailed project estimates from our team
              </p>
              <Button variant="cta" size="lg" className="w-full group bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Schedule Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Animated Particles */}
      {particles && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div 
              key={particle.id}
              className="absolute rounded-full bg-yellow-400/20"
              style={{
                width: particle.size,
                height: particle.size,
                top: particle.top,
                left: particle.left,
                filter: 'blur(0.5px)'
              }}
              animate={{
                y: [0, -100, -200, -300],
                x: [0, 50, -50, 0],
                opacity: [0.2, 0.8, 0.8, 0.2]
              }}
              transition={{
                duration: parseFloat(particle.duration),
                delay: parseFloat(particle.delay),
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;