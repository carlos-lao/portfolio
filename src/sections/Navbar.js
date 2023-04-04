// External Imports
import { useState, useEffect } from 'react';

//Internal Imports

const Navbar = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ showNav, setShowNav ] = useState(false);

    const controlExpand = () => {
        if (window.scrollY < window.innerHeight) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    };

    useEffect( ()=> {
        window.addEventListener('scroll', controlExpand)

        return () => {
            window.removeEventListener('scroll', controlExpand)
        }
    }, [] );

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-blend sticky-top px-0 px-md-3 position-absolute w-80">
            {/* <a className="navbar-brand urbanist" href="#">Navbar</a> */}
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav"
                onClick={() => setShowMenu(!showMenu)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse${showMenu ? ' show' : ''}`} id="navbarNav">
                <ul className={`navbar-nav ${!showMenu && 'flex-row justify-content-around w-100'}`}>
                    <li className="nav-item active">
                        <a className="nav-link urbanist" href="#">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link urbanist" href="#">SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link urbanist" href="#">RESUMÉ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link urbanist" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link urbanist" href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;