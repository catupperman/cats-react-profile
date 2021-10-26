import React, { useState } from 'react';
import NavBar from './Navbar';
import AboutMe from './pages/AboutMe';
import Header from './pages/Header';
import Projects from './pages/Projects';


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
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}


