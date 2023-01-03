import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features/>
      <AboutUs/>
      <Footer/>
    </>
  )
}
