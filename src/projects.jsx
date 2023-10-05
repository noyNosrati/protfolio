import React from 'react'
import ProjectItem from './projectItem'
import stripProtfolio from '../public/img/stripProtfolio.jpeg'
import chillSpacePic from '../public/img/ChillSpace.png'
import booksApiPic from '../public/img/booksApi.png'
import tutoroPic from '../public/img/tutoro.png'
import allCountriesPic from '../public/img/allCountries.png'

export default function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-2 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus nulla excepturi optio! Est veniam impedit commodi debitis quo placeat.</p>
        <div className='grid md:grid-cols-2 gap-12'>
        {/* <ProjectItem img={stripProtfolio} title={"ChillSpace"} skills={"React | Node.js | MongoDB | Bootstrap"} text={"A user-friendly social app for outdoor recreation exploration"} pLink={"https://chillspacee.netlify.app/"} gitLink={"https://github.com/noyNosrati/chillSpace_client"}/> */}
        <ProjectItem img={chillSpacePic} title={"ChillSpace"} text={"Main project"} skills={"React | Node.js | MongoDB | Bootstrap"} pLink={"https://chillspacee.netlify.app/"} gitLink={"https://github.com/noyNosrati/chillSpace_client"}/>
        <ProjectItem img={booksApiPic} title={"BooksApi"} skills={"Node.js | MongoDB"} pLink={"https://books-api.cyclic.app/"} gitLink={"https://github.com/noyNosrati/booksApi"}/>
        <ProjectItem img={allCountriesPic} title={"All Countries"} skills={"HTML | CSS | JS Vanilla"} pLink={"https://all-countries-atlas.netlify.app/"} gitLink={"https://github.com/noyNosrati/all-countries"}/>
        <ProjectItem img={tutoroPic} title={"TuToto"} skills={"HTML | CSS"} pLink={"https://tutoro.netlify.app/"} gitLink={"https://github.com/noyNosrati/tuToroWeb"}/>
        
        </div>
    </div>
  )
}
