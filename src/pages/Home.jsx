import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import "../scss/Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home