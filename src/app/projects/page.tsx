'use client';
import { motion } from 'framer-motion';
import { HardHat, Building, Home, Factory, MapPin, ArrowRight, Expand, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../component/Button';
import { useState } from 'react';

const Page = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Downtown Office Tower",
      category: "Commercial",
      location: "New York, NY",
      year: "2023",
      description: "A 45-story Class A office building with ground-floor retail in the heart of Manhattan's financial district.",
      fullDescription: "This landmark tower features a sleek glass facade with energy-efficient design elements. The project included complex foundation work in a dense urban environment and was completed three weeks ahead of schedule. The building has achieved LEED Platinum certification for its sustainable features.",
      features: [
        "45 stories, 650,000 sq ft",
        "LEED Platinum certified",
        "Urban infill construction",
        "Completed 3 weeks early"
      ],
      images: [
        "/projects/office-tower-1.jpg",
        "/projects/office-tower-2.jpg",
        "/projects/office-tower-3.jpg"
      ]
    },
    {
      id: 2,
      title: "Lakeside Residential Community",
      category: "Residential",
      location: "Austin, TX",
      year: "2022",
      description: "A luxury residential development with 150 single-family homes surrounding a private lake.",
      fullDescription: "This master-planned community features custom-designed homes ranging from 2,500 to 5,000 sq ft. Our team managed all aspects from land development to final construction. The project included extensive landscaping and community amenities like walking trails, a clubhouse, and private docks.",
      features: [
        "150 luxury homes",
        "20 acres of preserved green space",
        "Community clubhouse",
        "Private lake access"
      ],
      images: [
        "/projects/residential-1.jpg",
        "/projects/residential-2.jpg",
        "/projects/residential-3.jpg"
      ]
    },
    {
      id: 3,
      title: "Advanced Manufacturing Facility",
      category: "Industrial",
      location: "Detroit, MI",
      year: "2021",
      description: "A 300,000 sq ft high-tech manufacturing plant for automotive components.",
      fullDescription: "This state-of-the-art facility was built to exacting specifications for precision manufacturing. The project included specialized clean rooms, heavy equipment foundations, and complex mechanical systems. We worked closely with the client's engineering team to meet tight tolerances throughout the construction process.",
      features: [
        "300,000 sq ft facility",
        "15-ton crane capacity",
        "Specialized clean rooms",
        "Completed on budget"
      ],
      images: [
        "/projects/industrial-1.jpg",
        "/projects/industrial-2.jpg",
        "/projects/industrial-3.jpg"
      ]
    },
    {
      id: 4,
      title: "Historic Hotel Renovation",
      category: "Renovation",
      location: "Boston, MA",
      year: "2020",
      description: "Restoration and modernization of a 1920s landmark hotel.",
      fullDescription: "This sensitive renovation preserved the building's historic character while upgrading all mechanical, electrical, and plumbing systems. Our team worked with preservation specialists to restore original details like terrazzo floors, plaster moldings, and wrought iron features. The project received a preservation award from the local historical society.",
      features: [
        "Landmark designation preserved",
        "Original details restored",
        "Modern mechanical systems",
        "Preservation award winner"
      ],
      images: [
        "/projects/hotel-1.jpg",
        "/projects/hotel-2.jpg",
        "/projects/hotel-3.jpg"
      ]
    },
    {
      id: 5,
      title: "University Science Center",
      category: "Institutional",
      location: "Chicago, IL",
      year: "2019",
      description: "A 150,000 sq ft interdisciplinary research facility for a major university.",
      fullDescription: "This complex project included specialized laboratories, lecture halls, and collaborative spaces. We coordinated with multiple research departments to meet diverse technical requirements. The building features vibration-sensitive foundations for precision equipment and advanced HVAC systems for laboratory environments.",
      features: [
        "12 research laboratories",
        "300-seat lecture hall",
        "Vibration-controlled foundations",
        "LEED Gold certified"
      ],
      images: [
        "/projects/university-1.jpg",
        "/projects/university-2.jpg",
        "/projects/university-3.jpg"
      ]
    },
    {
      id: 6,
      title: "Mixed-Use Urban Development",
      category: "Commercial",
      location: "Seattle, WA",
      year: "2018",
      description: "A vibrant downtown complex with retail, office, and residential spaces.",
      fullDescription: "This urban infill project transformed a former industrial site into a thriving mixed-use community. The development includes ground-floor retail, mid-level office space, and luxury condominiums with panoramic views. Our team navigated complex zoning requirements and community input processes to deliver a project that complements the neighborhood character.",
      features: [
        "400,000 sq ft total",
        "Ground-floor retail",
        "Public plaza",
        "Transit-oriented design"
      ],
      images: [
        "/projects/mixed-use-1.jpg",
        "/projects/mixed-use-2.jpg",
        "/projects/mixed-use-3.jpg"
      ]
    }
  ];

  const categories = [
    { name: "All", icon: <HardHat className="w-5 h-5" /> },
    { name: "Commercial", icon: <Building className="w-5 h-5" /> },
    { name: "Residential", icon: <Home className="w-5 h-5" /> },
    { name: "Industrial", icon: <Factory className="w-5 h-5" /> }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handlePrevImage = () => {
    const currentProject = projects.find(p => p.id === expandedProject);
    if (currentProject) {
      setCurrentImageIndex(prev => 
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    const currentProject = projects.find(p => p.id === expandedProject);
    if (currentProject) {
      setCurrentImageIndex(prev => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
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
                  OUR PORTFOLIO
                </span>
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Our <span className="text-yellow-400">Projects</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Explore our diverse portfolio of completed construction projects across multiple sectors.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-900/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "hero" : "outline"}
                size="lg"
                className={`group ${activeCategory === category.name ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'border-gray-700 text-white hover:bg-gray-800'}`}
                OnClick={() => setActiveCategory(category.name)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/concrete-texture.jpg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400/90 text-gray-900 self-end">
                      {project.category}
                    </span>
                    <div>
                      <div className="flex items-center text-yellow-400 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-white text-white hover:bg-white/10"
                        OnClick={() => {
                          setExpandedProject(project.id);
                          setCurrentImageIndex(0);
                        }}
                      >
                        <Expand className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-yellow-400 hover:text-yellow-300"
                      OnClick={() => {
                        setExpandedProject(project.id);
                        setCurrentImageIndex(0);
                      }}
                    >
                      Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {expandedProject !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/80 transition-opacity"
              onClick={() => setExpandedProject(null)}
            />

            {/* Modal Content */}
            <div className="relative bg-gray-900 rounded-xl overflow-hidden max-w-6xl w-full mx-4 my-8 max-h-[90vh] overflow-y-auto">
              {projects.filter(p => p.id === expandedProject).map(project => (
                <div key={project.id}>
                  {/* Image Gallery */}
                  <div className="relative h-96 bg-gray-800">
                    <img 
                      src={project.images[currentImageIndex]} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/50 p-3 rounded-full border border-gray-700 hover:bg-gray-800/80 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevImage();
                      }}
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/50 p-3 rounded-full border border-gray-700 hover:bg-gray-800/80 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextImage();
                      }}
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-yellow-400' : 'bg-gray-500'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                        <p className="text-gray-400 text-lg">{project.fullDescription}</p>
                      </div>
                      <div className="md:w-80 space-y-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">PROJECT DETAILS</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                              <span className="text-gray-400">Category</span>
                              <span className="font-medium">{project.category}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                              <span className="text-gray-400">Location</span>
                              <span className="font-medium">{project.location}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-800 pb-2">
                              <span className="text-gray-400">Year</span>
                              <span className="font-medium">{project.year}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">KEY FEATURES</h3>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                        OnClick={() => setExpandedProject(null)}
                      >
                        Close Project
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
              Ready to Start <span className="text-yellow-400">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with our expertise and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-gray-900/50">
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;