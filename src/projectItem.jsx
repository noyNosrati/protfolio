import React from 'react'

export default function ProjectItem({ img, title, text, skills, gitLink, pLink }) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-white  to-[#2813a0]'>
            <img src={img} alt="title" className='rounded-xl group-hover:opacity-5 w-full h-full object-left object-center' />
            <div className='absolute justify-center items-center opacity-0 group-hover:opacity-100'>
                <h3 className='py-1 text-2xl font-bold text-white tracking-wide text-center w-full'>
                    {title}
                </h3>
                {skills && <div className='py-1 w-full text-center font-semibold'>{skills}</div>}
                {text && <div className='py-1 px-5 w-full text-center uppercase'>{text}</div>}
                {pLink &&
                    <div className='py-1 w-full text-center'>
                        <a href={pLink} target='_blank' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">See the website</a>
                    </div>
                }
                {gitLink &&
                    <div className='py-1 w-full text-center'>
                        <a href={gitLink} target='_blank' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">GitHub</a>
                    </div>
                }

            </div>
        </div>
    )
}
