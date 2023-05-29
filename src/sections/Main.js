// External Imports
import { useState, useEffect, forwardRef } from "react";

//Internal Imports
import { logo, mainBackground } from "../assets";

const Main = forwardRef((props, ref) => {
    const [showName, setShowName] = useState(true)

    const controlName = () => {
        setShowName(window.scrollY <= (window.innerHeight * 0.25))
    };

    useEffect( ()=> {
        window.addEventListener('scroll', controlName)

        return () => {
            window.removeEventListener('scroll', controlName)
        }
    }, [] );

    return (
        <div id="main" className="section" ref={ref}>
            <img src={mainBackground} id="bg-img" className="bg-main" alt="black and white image of waves" />
            <div id="title-overlay" className="bg-main"></div>
            <div className="container">
                <div className="d-flex align-items-center">
                    <div style={{width: '100%'}}>
                        <div className="d-flex align-items-start align-items-sm-end" style={{ height: '10vh' }}>
                            <h3 id="subtitle" className="monospace mt-3 mt-sm-5 mx-3 mx-sm-5">- computer science<br />- linguistics</h3>
                        </div>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
                            <img src={logo} id="spinning-logo" alt="spinning website logo" />
                        </div>
                        <div id="title-container" className="ms-3 ms-sm-5" style={{ height: '15vh', opacity: showName ? '100%' : '0%' }}>
                            <h1 id="title">CARLOS<span className="d-none d-sm-inline"> LAO</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default Main;