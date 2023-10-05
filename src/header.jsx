import React from 'react'

export default function Header() {
    return (
        <div style={{minHeight:60, background:"silver"}}>
            <div>
                Protfolio
            </div>
            <div>
                <nav >
                    <ul className='row-auto' style={{  margin:0}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
