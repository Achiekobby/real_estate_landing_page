import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import "../scss/Home.scss"
import Sidebar from '../components/Sidebar'
import Benefits from '../components/Benefits'
import Duties from '../components/Duties'
import Services from '../components/Services'
import Statistics from '../components/Statistics'

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
    </div>
  )
}

export default Home