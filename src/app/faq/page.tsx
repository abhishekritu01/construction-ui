'use client';
import { motion } from 'framer-motion';
import { HardHat, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../component/Button';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary based on size and complexity. A residential home typically takes 6-12 months, while commercial projects can range from 8 months to several years. During our initial consultation, we'll provide a detailed timeline based on your specific project requirements."
    },
    {
      question: "What sets your construction company apart from others?",
      answer: "We combine 20+ years of experience with cutting-edge technology and a commitment to sustainable building practices. Our rigorous quality control processes, attention to detail, and client-focused approach ensure exceptional results. We also maintain a 98% client satisfaction rate across all projects."
    },
    {
      question: "Do you handle permits and regulatory approvals?",
      answer: "Yes, our team manages all necessary permits and approvals as part of our comprehensive service. We have extensive experience navigating local building codes and regulations, which helps prevent delays and ensures compliance throughout the construction process."
    },
    {
      question: "What safety measures do you implement on site?",
      answer: "Safety is our top priority. We implement OSHA-compliant protocols, conduct daily safety briefings, and employ full-time safety officers on all projects. Our workers receive regular training, and we maintain a safety record that's 30% better than industry averages."
    },
    {
      question: "Can you work within my budget?",
      answer: "Absolutely. We provide transparent cost estimates and work closely with clients to maximize value without compromising quality. Our project managers help identify cost-saving opportunities and alternative materials that maintain structural integrity while staying within budget."
    },
    {
      question: "Do you offer design-build services?",
      answer: "Yes, we provide complete design-build solutions through our in-house team of architects and engineers. This integrated approach ensures seamless coordination between design and construction phases, often resulting in cost savings and faster project completion."
    },
    {
      question: "What warranty do you provide on your work?",
      answer: "We offer a 10-year structural warranty and 2-year workmanship warranty on all projects. Additionally, we provide manufacturer warranties for materials and systems. Our commitment to quality means we stand behind our work long after project completion."
    },
    {
      question: "How do you handle project changes or modifications?",
      answer: "We have a formal change order process that includes detailed documentation, cost analysis, and client approval before implementation. Our project managers communicate changes clearly and work to minimize any impact on schedule or budget."
    }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
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
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Answers to <span className="text-yellow-400">Common</span> Questions
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Everything you need to know about working with our construction team.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Construction <span className="text-yellow-400">FAQs</span>
            </h2>
            <p className="text-xl text-gray-400">
              Can&quot;t find what you&quot;re looking for? Contact our team for more information.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center p-6 text-left ${activeIndex === index ? 'bg-gray-800/50' : 'bg-gray-900/30'}`}
                >
                  <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
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
              Still Have <span className="text-yellow-400">Questions?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team is ready to provide detailed answers and guide you through your construction project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-900/50">
                Call Now: (800) 555-1234
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;