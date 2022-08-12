import React from 'react';
import './NavBar.css'
export default function NavBar() {

    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <a href="#"> Home </a>
                    </li>
                    <li>
                        <a href="#"> About </a>
                    </li>
                    <li>
                        <a href="#"> Contact </a>
                    </li>
                    <li> <a href="#"> Terms of use </a>
                    </li>
                    <li>
                        <a href="#"> Join Us </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
