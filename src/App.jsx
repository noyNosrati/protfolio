import { useState } from 'react'

import './App.css'
import SideNav from './sideNav'
import Strip from './strip'
import Projects from './projects'
import { Contact } from './contact'
import Skills from './skills'
import About from './about'


function App() {

  return (
    <div>
      <SideNav />
      <Strip />
      <div className=' '>
        <div className='lg:flex items-start  justify-center'>
          <div className='lg:w-2/5'><About /></div>
          <div className='lg:w-2/5'><Skills /></div>
        </div>

      </div>
      <Projects />
      <Contact />
    </div>

  )
}

export default App
