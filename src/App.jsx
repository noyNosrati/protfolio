import { useState } from 'react'

import './App.css'
import SideNav from './sideNav'
import Strip from './strip'
import Projects from './projects'
import { Contact } from './contact'
import Skills from './skills'
import About from './about'
import Footer from './footer'


function App() {

  return (
    <div>
      <SideNav />
      <Strip />
      <div className='max-w-[1400px] mx-auto'>
        <div className='lg:flex items-start  justify-center'>
          <div className='lg:w-2/5'><About /> </div>
          <div className='lg:w-2/5'><Skills /> </div>
        </div>
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </div>

  )
}

export default App
