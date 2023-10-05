import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Strip() {
    return (
        <div>
            <img className='w-full h-screen object-cover object-center scale-x-[-1] ' src='img/stripProtfolio.jpeg' />
            <div className='w-full h-screen absolute left-0 top-0 bg-white/30'>
                <div className='w-full h-full max-w-[1200px] m-auto flex flex-col  justify-start items-start pl-3'>
                    <div className='md:pl-20 pt-40'>
                        <h2 className='sm:text-2xl text-1xl'>Hello, it's me</h2>
                        <h1 className='p-[10px] sm:text-5xl text-4xl font-bold text-gray-800'>Noy Nosrati</h1>
                        <h5 className='flex sm:text-3xl text-2xl text-gray-800'>
                            <TypeAnimation
                                sequence={[
                                    `And I'm a Full-Stack Developer`,
                                    2000,
                                    `And I'm a Coder`,
                                    2000,
                                    `And I'm a Tech Enthusiast`,
                                    2000,

                                ]}
                                wrapper="div"
                                cursor={true}
                                //   speed={50}
                                style={{ fontSize: '1em', display: 'inline-block', paddingLeft: "10px" }}
                                repeat={Infinity}
                            />
                        </h5>

                    </div>
                    <div className='flex justify-between pt-6 max-w-[80px] w-full pl-[10px] md:ml-20'>
                        <a href='https://www.linkedin.com/in/noy-nosrati/' target='_blank'><FaLinkedinIn className='cursor-pointer hover:text-white' size={25} /></a>
                        <a href='https://github.com/noyNosrati' target='_blank'><FaGithub className='cursor-pointer hover:text-white' size={25} /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}
