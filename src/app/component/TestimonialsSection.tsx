'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    company: "Thompson Developments",
    role: "CEO",
    content: "Working with this construction team was a game-changer for our high-rise project. Their attention to detail and ability to meet aggressive timelines without compromising quality was exceptional.",
    rating: 5,
    project: "Skyline Tower"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    company: "Oceanview Properties",
    role: "Project Manager",
    content: "The hurricane-resistant features they implemented in our Miami property gave our clients incredible peace of mind. Their engineering solutions were innovative and cost-effective.",
    rating: 5,
    project: "Harbor View Residences"
  },
  {
    id: 3,
    name: "James Wilson",
    company: "Texas Industrial Group",
    role: "Director of Operations",
    content: "Their industrial park construction was completed two weeks ahead of schedule, which is unheard of in this industry. The robotic automation integration was flawless.",
    rating: 4,
    project: "Industrial Park Complex"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-400/10 blur-3xl"></div>

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
              CLIENT VOICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building <span className="text-yellow-400">Trust</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear what our clients say about working with our team
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <FaQuoteLeft className="text-yellow-400/30 text-3xl mr-4 mt-1" />
                <div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic">{testimonial.content}</p>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{testimonial.role}, {testimonial.company}</span>
                  <span className="text-yellow-400/80">{testimonial.project}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-800"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-400">Industry Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;