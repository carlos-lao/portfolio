// External Imports
import { useState, useEffect } from "react";

//Internal Imports
import { logo } from "../assets";

const Main = () => {
    const [showName, setShowName] = useState(true)

    const controlName = () => {
        if (window.scrollY > window.innerHeight * 0.25) {
        setShowName(false);
        } else {
        setShowName(true);
        }
    };

    useEffect( ()=> {
        window.addEventListener('scroll', controlName)

        return () => {
            window.removeEventListener('scroll', controlName)
        }
    }, [] );

    return (
        <div id="main" className="section d-flex align-items-center">
            <div style={{width: '100%'}}>
                <div className="d-flex align-items-start align-items-sm-end" style={{ height: '10vh' }}>
                    <h3 id="subtitle" className="monospace m-3 ms-sm-5">- computer science<br />- linguistics</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
                    <img src={logo} id="spinning-logo" alt="spinning website logo" />
                </div>
                <div id="title-container" className="ms-3 ms-sm-5" style={{ height: '15vh', opacity: showName ? '100%' : '0%' }}>
                    <h1 id="title">CARLOS<span className="d-none d-sm-inline"> LAO</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Main;