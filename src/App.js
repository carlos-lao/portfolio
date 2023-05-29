// external
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// internal
import './styles/App.css';
import * as Section from './sections';
import * as Overlay from './overlays';
import Navbar from './Navbar';

const overlayInitState = {visible: false, content: null}
const navOverlayInitState = {visible: false, title: ''}

const App = () => {
  const [overlay, setOverlay] = useState(overlayInitState)
  const [navOverlay, setNavOverlay] = useState(navOverlayInitState)
  const [currPage, setCurrPage] = useState(null);

  const mainRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const renderOverlay = () => (
    <div className='fullscreen-overlay d-flex justify-content-center align-items-center'>
      {overlay.content()}
    </div>
  )

  const renderNavOverlay = () => (
    <div id='nav-overlay' style={navOverlay.visible ? {} : {zIndex: -1, opacity: '0%'}} className='fullscreen-overlay d-flex justify-content-center align-items-begin'>
      <h1 className='nav-text'>{navOverlay.title}</h1>
    </div>
  )

  useEffect(() => {
    const controlNavbar = () => {
      const mainRect = mainRef.current.getClientRects()[0]
      const aboutRect = aboutRef.current.getClientRects()[0]
      const skillsRect = skillsRef.current.getClientRects()[0]
      const projectsRect = projectsRef.current.getClientRects()[0]

      if (mainRect.y > (-1) * mainRect.height/2) {
        setCurrPage(0);
      } else if (aboutRect.y > (-1) * aboutRect.height/2) {
        setCurrPage(1);
      } else if (skillsRect.y > (-1) * skillsRect.height/2) {
        setCurrPage(2);
      } else if (projectsRect.y > (-1) * projectsRect.height/2) {
        setCurrPage(3);
      } else {
        setCurrPage(4);
      }
    }
  
    controlNavbar()
    window.addEventListener('scroll', controlNavbar)

    return () => {
        window.removeEventListener('scroll', controlNavbar)
    }
  })

  return (
    <div>
      {overlay.visible && renderOverlay()}
      {renderNavOverlay()}
      <Navbar 
        setNavTitle={(title) => setNavOverlay({visible: true, title})} 
        hideNavTitle={() => setNavOverlay(navOverlayInitState)}
        currPage={currPage}
      />
      <Section.Main ref={mainRef}/>
      <Section.About 
        showOverlay={() => { 
          setOverlay({
            visible: true, 
            content: () => (<Overlay.SuggestionBox hide={() => setOverlay(overlayInitState)}/>)
          }) 
        }}
        ref={aboutRef}
      />
      <Section.Skills ref={skillsRef}/>
      <Section.Projects 
        displayProject={(project) => { 
          setOverlay({
            visible: true, 
            content: () => (<Overlay.ProjectDetails project={project} hide={() => setOverlay(overlayInitState)}/>)
          }) 
        }}
        ref={projectsRef}
      />
      <Section.Contact ref={contactRef}/>
      <div id="footer" className='d-flex py-3 justify-content-center'>
        <p id="footer-text">© 2023 | Made and designed by Carlos Lao</p>
      </div>
    </div>
  );
}

export default App;
