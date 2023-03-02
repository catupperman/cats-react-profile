import React, { useState } from 'react';
import NavBar from './Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

//handles the function of page changes

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}


