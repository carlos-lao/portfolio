// External Imports
import { useState, useEffect } from 'react';

//Internal Imports

const Navbar = ({ setNavTitle, hideNavTitle, currPage }) => {
    return (
        <nav className="navbar d-flex flex-column justify-content-center">
            <a href='#main' onMouseEnter={() => {if (currPage != 0) {setNavTitle('BACK TO TOP')}}} onMouseLeave={hideNavTitle} onClick={hideNavTitle}>
                <div className={`nav-border${currPage == 0 ? ' nav-button-hovered' : ''}`}>
                    <div className='nav-button'></div>
                </div>
            </a>
            <a href='#about'  onMouseEnter={() => {if (currPage != 1) {setNavTitle('ABOUT ME')}}} onMouseLeave={hideNavTitle} onClick={hideNavTitle}>
                <div className={`nav-border${currPage == 1 ? ' nav-button-hovered' : ''}`}>
                    <div className='nav-button'></div>
                </div>
            </a>
            <a href='#skills'  onMouseEnter={() => {if (currPage != 2) {setNavTitle('SKILLS')}}} onMouseLeave={hideNavTitle} onClick={hideNavTitle}>
                <div className={`nav-border${currPage == 2 ? ' nav-button-hovered' : ''}`}>
                    <div className='nav-button'></div>
                </div>
            </a>
            <a href='#projects'  onMouseEnter={() => {if (currPage != 3) {setNavTitle('RECENT PROJECTS')}}} onMouseLeave={hideNavTitle} onClick={hideNavTitle}>
                <div className={`nav-border${currPage == 3 ? ' nav-button-hovered' : ''}`}>
                    <div className='nav-button'></div>
                </div>
            </a>
            <a href='#contact'  onMouseEnter={() => {if (currPage != 4) {setNavTitle('CONTACT')}}} onMouseLeave={hideNavTitle} onClick={hideNavTitle}>
                <div className={`nav-border${currPage == 4 ? ' nav-button-hovered' : ''}`}>
                    <div className='nav-button'></div>
                </div>
            </a>
        </nav>
    );
}

export default Navbar;