import React from 'react'
import HeroSection from './component/HeroSection'
// import ConstructionNavbar from './component/ConstructionNavbar'
import ConstructionServices from './component/ConstructionServices'
import ProjectShowcase from './component/ProjectShowcase'
import TestimonialsSection from './component/TestimonialsSection'
import OurProcessSection from './component/OurProcessSection'
import ContactCTA from './component/ContactCTA'
// import Footer from './component/Footer'

const page = () => {
  return (
    <>
      <HeroSection />
      <ConstructionServices />
      < ProjectShowcase />
      <TestimonialsSection />
      <OurProcessSection />
      <ContactCTA />
    </>
  )
}

export default page