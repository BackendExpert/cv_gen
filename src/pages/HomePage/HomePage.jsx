import React from 'react'
import HeroSection from './HeroSection'
import Intro from './Intro'
import Examples from './Examples'
import HowtoCV from './HowtoCV'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <div className="">
            <Intro />
            <Examples />
            <HowtoCV />
        </div>
        <Footer />
    </div>
  )
}

export default HomePage