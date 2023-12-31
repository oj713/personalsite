import Home from './Home';
import Bigelow from './Bigelow';
import Forecasting from './Forecasting';
import Code from './Code';
import Contact from './contact.js';
import Resume from './Resume';
import NavigationTabs from './NavigationTabs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div class = "bg"></div>
        <div>
          <NavigationTabs/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bigelow" element = {<Bigelow/>}/>
            <Route path="/web" element = {<Code/>}/>
            <Route path="/resume" element = {<Resume/>}/>
            <Route path="/forecasting" element = {<Forecasting/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
