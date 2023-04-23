// external
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// internal
import './styles/App.css';
import * as Section from './sections';
import * as Overlay from './overlays';

const overlayInitState = {visible: false, content: null}

const App = () => {
  const [overlay, setOverlay] = useState(overlayInitState)

  const renderOverlay = () => (
    <div className='fullscreen-overlay d-flex justify-content-center align-items-center'>
      {overlay.content()}
    </div>
)

  return (
    <div>
      {overlay.visible && renderOverlay()}
      <Section.Main />
      <Section.About 
        showOverlay={() => { 
          setOverlay({
            visible: true, 
            content: () => (<Overlay.SuggestionBox hide={() => setOverlay(overlayInitState)}/>)
          }) 
        }}
      />
      <Section.Skills />
      <Section.Projects 
        displayProject={(project) => { 
          setOverlay({
            visible: true, 
            content: () => (<Overlay.ProjectDetails project={project} hide={() => setOverlay(overlayInitState)}/>)
          }) 
        }}
      />
      <Section.Contact displayProject/>
      <div id="footer" className='d-flex py-3 justify-content-center'>
        <p id="footer-text">© 2023 | Made and designed by Carlos Lao</p>
      </div>
    </div>
  );
}

export default App;
