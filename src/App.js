// external
import 'bootstrap/dist/css/bootstrap.css';

// internal
import './styles/App.css';
import * as Section from './sections';

const App = () => {
  return (
    <div>
      <Section.Main />
      <Section.About />
      <Section.Skills />
      <Section.Projects />
      <Section.Contact />
      <div id="footer" className='d-flex py-3 justify-content-center'>
        <p id="footer-text">© 2023 | Made and designed by Carlos Lao</p>
      </div>
    </div>
  );
}

export default App;
