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
    </div>
  )
}

export default Home