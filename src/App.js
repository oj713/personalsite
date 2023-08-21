import Home from './Home';
import Bigelow from './Bigelow';
import Forecasting from './Forecasting';
import Narrative from './Narrative';
import Contact from './contact.js';
import NavigationTabs from './NavigationTabs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationTabs/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bigelow" element = {<Bigelow/>}/>
          <Route path="/forecasting" element = {<Forecasting/>}/>
          <Route path="/narrative" element = {<Narrative/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
