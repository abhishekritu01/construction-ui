'use client';
import { motion } from 'framer-motion';
import { Quote, HardHat, Star, ArrowRight } from 'lucide-react';
import { Button } from '../component/Button';

const Page = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      role: "Commercial Developer",
      company: "Urban Development Group",
      rating: 5,
      content: "Working with this construction team was an absolute pleasure. They delivered our office complex three weeks ahead of schedule while maintaining the highest quality standards. Their attention to detail and problem-solving skills saved us thousands in potential change orders.",
      image: "/testimonials/client1.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Homeowner",
      company: "",
      rating: 5,
      content: "Our custom home build exceeded all expectations. The project manager kept us informed at every stage, and the craftsmanship is exceptional. Two years later, we're still getting compliments from neighbors about the quality of construction.",
      image: "/testimonials/client2.jpg"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Facilities Director",
      company: "State University",
      rating: 5,
      content: "The science center they built for our university has become a showcase facility. They navigated the complex requirements of specialized labs and vibration-sensitive equipment with expertise. We've hired them for two additional projects since.",
      image: "/testimonials/client3.jpg"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Property Manager",
      company: "Luxury Living Properties",
      rating: 4,
      content: "Their renovation of our historic apartment building preserved the character while modernizing all systems. The tenants love the results, and we've seen a 20% increase in rental value. The only reason I didn't give 5 stars is because the project took two weeks longer than estimated.",
      image: "/testimonials/client4.jpg"
    },
    {
      id: 5,
      name: "Robert Kim",
      role: "CEO",
      company: "Advanced Manufacturing Inc.",
      rating: 5,
      content: "Our manufacturing facility was built to exacting specifications with zero defects. The team worked closely with our engineers to meet tight tolerances. The project came in under budget, which is almost unheard of in industrial construction.",
      image: "/testimonials/client5.jpg"
    },
    {
      id: 6,
      name: "Jennifer Adams",
      role: "Director",
      company: "Community Nonprofit",
      rating: 5,
      content: "They donated 20% of their labor to our community center project and still delivered premium quality work. The building has become a cornerstone of our neighborhood. Their commitment to community is as strong as their construction skills.",
      image: "/testimonials/client6.jpg"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "150+", label: "Five-Star Reviews" },
    { value: "85%", label: "Repeat Business" },
    { value: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden mt-16 md:mt-0">
        <div className="absolute inset-0 bg-[url('/hero-construction-BWbs2qRQ.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
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
                  CLIENT TESTIMONIALS
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                What Our <span className="text-yellow-400">Clients</span> Say
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Don&apos;t just take our word for it - hear from those who&apos;ve worked with us.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700"
              >
                <p className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <Quote className="w-6 h-6 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 italic">&apos;{testimonial.content}&apos;</p>
                </div>
                <div className="flex items-center mt-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-yellow-400"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-yellow-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch these video testimonials from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[url('/projects/office-tower-1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50" />
                <button className="relative z-10 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold text-lg">Commercial Office Project</h3>
                <p className="text-sm text-gray-400">Michael Johnson, Urban Development Group</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-[url('/projects/residential-1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50" />
                <button className="relative z-10 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold text-lg">Custom Home Build</h3>
                <p className="text-sm text-gray-400">Sarah Williams, Homeowner</p>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-yellow-400">Experience</span> Our Quality?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our list of satisfied clients. Let&apos;s discuss how we can bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-900/50">
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;