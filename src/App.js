// external
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// internal
import './styles/App.css';
import { mainBackground } from './assets';
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
      <img src={mainBackground} id="bg-img" className="bg-main" alt="black and white image of waves" />
      <div id="title-overlay" className="bg-main"></div>
      <div className="container">
        <Section.Main />
        <Section.About />
      </div>
    </div>
  );
}

export default App;
