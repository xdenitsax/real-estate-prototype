import React, { useState, useEffect, useLayoutEffect } from 'react'
import Dropdown from './components/Dropdown'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import GlobalStyle from './globalStyle'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './pages'
import About from './pages/About'
import Homes from './pages/Homes'
import Rentals from './pages/Rentals'
import Contact from './pages/Contact'
import Evanston from './pages/HomesInfo/Evanston'
import Montreal from './pages/HomesInfo/Montreal'
import KeyWest from './pages/HomesInfo/KeyWest'
import Mexico from './pages/HomesInfo/Mexico'
import SaltLakeCity from './pages/HomesInfo/SaltLakeCity'
import Shaumburg from './pages/HomesInfo/Shaumburg'
import Viena from './pages/HomesInfo/Viena'
import Texas from './pages/HomesInfo/Texas'
import CostaRica from './pages/HomesInfo/CostaRica'
import NewestHomes from './pages/HomesInfo/NewestHomes'

import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  console.log(location.pathname)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/homes' component={Homes} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/contact' component={Contact} />
        <Route path='/evanston' component={Evanston} />
        <Route path='/montreal' component={Montreal} />
        <Route path='/keywest' component={KeyWest} />
        <Route path='/mexico' component={Mexico} />
        <Route path='/salt-lake-city' component={SaltLakeCity} />
        <Route path='/shaumburg' component={Shaumburg} />
        <Route path='/viena' component={Viena} />
        <Route path='/texas' component={Texas} />
        <Route path='/costaRica' component={CostaRica} />
        <Route path='/newesthomes' component={NewestHomes} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
