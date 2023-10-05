import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';

export default function About() {
    const cvFile = '../public/cv/NoyNosrati_Fullstack.pdf'; // Replace with the actual path to your CV file

    return (
        // <div className='min-h-[200px] md:flex items-center max-w-[800px] m-auto'>
        <>
            <div className='text-center lg:items-center justify-center mt-20 lg:p-0 md:pl-20 m-auto lg:block md:flex mb-16'>
                <div className='lg:w-full md:w-2/6'>
                    <h2 className='text-4xl font-bold  text-[#001b5e] lg:pb-12 pb-7'>About Me</h2>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <a href={cvFile} download="NoyNosrati_Fullstack.pdf" className="">
                            Download CV
                        </a>
                    </button>
                </div>
                <div className='lg:pr-8 lg:w-full lg:pt-12 md:w-4/6'> <p className='pb-12 pt-7 md:pt-0 px-5'>Motivated fullstack developer with expertise in JavaScript framework (React.js,
                    Node.js), MongoDB,
                    HTML, and CSS. Passionate about learning and adopting newtechnologies. Seeking an exciting opportunity in fullstack development.</p>
                    <div className='flex w-20 items-center justify-between m-auto'>
                        <div className="group relative">
                            <a href='https://github.com/noyNosrati' target='_blank'>
                                
                                <svg
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <span className="absolute  top-[-130%] left-[0%]  z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                GitHub
                            </span>
                        </div>
                        <div className="group relative">
                            <a href='#contact'>
                            <AiOutlineMail size={38} className="w-8 hover:scale-125 duration-200 
                            hover:text-blue-500
                            hover:text-stroke-blue-500"/>
                            </a>
                            <span className="absolute  top-[-100%] left-[0%]  z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                                Contact
                            </span>
                        </div>

                    </div>
                </div>

            </div>

        </>


    )
}
