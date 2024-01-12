import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonal/Test'
import HBlog from './HBlog'
import HPrice from './HPrice'
import Contact from '../contact/Contact'

const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <HAbout />
        <Test />
        <HBlog />
        <HPrice />
    </>
  )
}

export default Home