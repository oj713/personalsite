import Home from './Home';
import Bigelow from './Bigelow';
import Code from './Code';
import Contact from './contact.js';
import Resume from './Resume';
import NavigationTabs from './NavigationTabs';
import LightDarkToggle from './LightDarkToggle';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div class = "bg"></div>
        <div>
          <div className="header d-flex justify-content-between">
            <LightDarkToggle/>
            <NavigationTabs/>
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bigelow" element = {<Bigelow/>}/>
            <Route path="/web" element = {<Code/>}/>
            <Route path="/resume" element = {<Resume/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
