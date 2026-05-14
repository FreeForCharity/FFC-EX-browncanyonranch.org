import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import Programs from '@/components/home-page/Programs'
import VisitorInfo from '@/components/home-page/VisitorInfo'
import DonateCTA from '@/components/home-page/DonateCTA'

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Programs />
      <VisitorInfo />
      <DonateCTA />
    </>
  )
}

export default HomePage
