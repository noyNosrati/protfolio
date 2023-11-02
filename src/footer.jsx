import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-slate-500 text-white">
            <div className="py-4 mx-auto lg:px-20 md:px-10 px-5">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center text-center md:text-start">
                    <div className="sm:w-1/3 sm:p-0 pt-2 md:ml-2">
                        <ul className="list-none justify-between flex-wrap flex">
                            <li className='w-1/2'><a href="#about" className="text-gray-300 hover:text-white">ABOUT</a></li>
                            <li className='w-1/2'><a href="#" className="text-gray-300 hover:text-white">HOME</a></li>
                            <li className='w-1/2'><a href="#projects" className="text-gray-300 hover:text-white">PROJECTS</a></li>
                            <li className='w-1/2'><a href="#contact" className="text-gray-300 hover:text-white">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="sm:w-1/3 text-start  sm:p-0 pt-2">
                        <div className="flex justify-start items-start">
                            <h4 className="text-white font-bold text-xl py-2">Noy Nosrati</h4>
                        </div>
                    </div>
                    <div>
                        <div className="sm:w-1/3  sm:p-0 pt-2">
                            <div className='flex justify-between w-[100px] m-auto pb-2'>
                                <a href='https://www.linkedin.com/in/noy-nosrati/' target='_blank'><FaLinkedinIn className='cursor-pointer hover:text-sky-800' size={25} /></a>
                                <a href='https://github.com/noyNosrati' target='_blank'><FaGithub className='cursor-pointer hover:text-zinc-900' size={25} /></a>
                            </div>
                            <div className=' sm:p-0 pt-3'>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded inline-flex items-center">
                                    <svg className=" " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                    <a href={'../public/cv/NoyNosrati_Fullstack.pdf'} download="NoyNosrati_Fullstack.pdf" className="">
                                        Download CV
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
