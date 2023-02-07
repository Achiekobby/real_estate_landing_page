import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import "../scss/Home.scss"
import Sidebar from '../components/Sidebar'
import Benefits from '../components/Benefits'
import Duties from '../components/Duties'
import Services from '../components/Services'
import Statistics from '../components/Statistics'
import Choose from '../components/Choose'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = ()=>{
    setSidebar(!sidebar)
  }
  return (
    <div className='home'>
      <Navbar handleSidebar = {handleSidebar}/>
      <Sidebar sidebar = {sidebar} handleSidebar = {handleSidebar}/>
      <Header/>
      <Benefits/>
      <Duties/>
      <Services/>
      <Statistics/>
      <Choose/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home