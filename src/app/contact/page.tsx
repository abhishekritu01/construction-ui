'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, HardHat, ArrowRight } from 'lucide-react';
import { Button } from '../component/Button';

const Page = () => {
    return (
        <div className="bg-gray-950 text-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden md:mt-0">
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
                                    CONTACT US
                                </span>
                            </motion.div>
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Get in <span className="text-yellow-400">Touch</span>
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-gray-300 max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                We&quot;re ready to discuss your next project or answer any questions you may have.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 md:py-24 relative">
                <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 p-8 md:p-10 rounded-xl border border-gray-700 backdrop-blur-sm"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                        placeholder="Your phone number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="residential">Residential Construction</option>
                                        <option value="commercial">Commercial Construction</option>
                                        <option value="industrial">Industrial Projects</option>
                                        <option value="careers">Careers</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <Button
                                    OnClick={() => { }}
                                    variant="hero"
                                    size="lg"
                                    className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-gray-400 mb-8">
                                    Reach out to us through any of these channels. Our team is ready to assist you with your construction needs.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                                        <MapPin className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Our Office</h3>
                                        <p className="text-gray-400">123 Construction Avenue</p>
                                        <p className="text-gray-400">Building City, BC 12345</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                                        <Phone className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Phone</h3>
                                        <p className="text-gray-400">Main: (123) 456-7890</p>
                                        <p className="text-gray-400">Toll-Free: (800) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                                        <Mail className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Email</h3>
                                        <p className="text-gray-400">info@constructionco.com</p>
                                        <p className="text-gray-400">support@constructionco.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 mr-4">
                                        <Clock className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                                        <p className="text-gray-400">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-400">Saturday: 9:00 AM - 2:00 PM</p>
                                        <p className="text-gray-400">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-800">
                                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                                <p className="text-gray-400 mb-6">
                                    For construction emergencies outside business hours, please call our 24/7 emergency line.
                                </p>
                                <Button variant="outline" size="lg" className="border-red-500 text-red-400 hover:bg-red-900/20">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Emergency: (800) 987-6543
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative h-96 md:h-[500px] bg-gray-900">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="text-center p-8">
                        <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                        <p className="text-gray-400 mb-6">123 Construction Avenue, Building City, BC 12345</p>
                        <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                            Get Directions
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                    {/* In a real implementation, you would embed a Google Map or similar here */}
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
                            Ready to <span className="text-yellow-400">Build Together?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Whether you have a project in mind or just want to learn more about our services, we&quot;re here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                                Call Us Now
                                <Phone className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-900/50">
                                View Our Services
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Page;