import { useState } from 'react'

import './App.css'
import SideNav from './sideNav'
import Strip from './strip'
import Projects from './projects'
import { Contact } from './contact'
import Skills from './skills'


function App() {

  return (
   <div>
  <SideNav/>
  <Strip/>
  <Skills/>
  <Projects/>
  <Contact/>
   </div>
   
  )
}

export default App
