// external
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// internal
import './styles/App.css';
import * as Section from './sections';

const App = () => {


  // disables fake anchor tags with href='#'
  useEffect(() => {
    const disableAnchor = (e) => {
      e.preventDefault()
    }

    document.querySelectorAll("a[href^='#']").forEach(node => {
      node.addEventListener('click', disableAnchor);
    })

    return ()  => {
      document.querySelectorAll("a[href^='#']").forEach(node => {
        node.addEventListener('click', disableAnchor);
      })
    }
  }, [])

  return (
    <div>
      <Section.Main />
      <Section.About />
      <Section.Skills />
      <Section.Projects />
      <div id="footer" className='d-flex py-3 justify-content-center'>
        <p id="footer-text">© 2023 | Made and designed by Carlos Lao</p>
      </div>
    </div>
  );
}

export default App;
