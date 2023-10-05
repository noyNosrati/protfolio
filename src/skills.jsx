import React from 'react'

export default function Skills() {

    return (
        <div className='py-20'>
            <h1 className='mb-28 text-4xl font-bold text-center text-[#001b5e]'>Skills</h1>
            <div className="main m-auto my-auto">
                <div className="card">
                    <img
                        className="html"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                        alt="html"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="css"
                        src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
                        alt="css"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="react"
                        src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                        alt="react"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="node"
                        src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
                        alt="node"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="mongo"
                        src='https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg'
                        alt="mongo"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="bootstrap"
                        src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
                        alt="bootstrap"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="tailwind object-contain"
                        src='https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg'
                        alt="tailwind"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="sql object-contain"
                        src='https://upload.wikimedia.org/wikipedia/he/6/62/MySQL.svg'
                        alt="sql"
                        width="30px"
                        height="30px"
                    />
                </div>
                <div className="card">
                    <img
                        className="java object-contain"
                        src='https://upload.wikimedia.org/wikipedia/he/0/05/Java_Logo.svg.png'
                        alt="java"
                        width="30px"
                        height="30px"
                    />
                </div>
                {/* Repeat the pattern for other social icons */}
                <p className="text">HOVER<br /><br />FOR<br /><br />TECHNOLOGIES</p>
                <div className="main_back"></div>
            </div>
        </div>

    );
}
