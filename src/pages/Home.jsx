import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { BrowserRouter, Router, Routes } from "react-router"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home