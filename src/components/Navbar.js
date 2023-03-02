import React from 'react';
import './styles/Navbar.css'

//handles the changes of each page and remains constant across each page- eventual esthetic changes would be nice

function NavBar({ currentPage, handlePageChange}){
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <button
                href="#aboutme"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </button>
            </li>
            <li className="nav-item">
                <button 
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </button>
            </li>
            <li className="nav-item">
                <button
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </button>
            </li>
            <li className="nav-item">
                <button
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </button>
            </li>
        </ul>
    )
}

export default NavBar;