
import Cart from '@/app/Cart/page'
import React from 'react'
import Account from './Account/page'
import Header from '@/components/header'
import Navbar from '@/components/Navbar'
import Contact from './Contact/page'

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Account/>
      <Contact/>
    </div>
  )
}

export default Home