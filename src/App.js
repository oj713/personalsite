import Home from './Home';
import Publications from './Publications';
import Projects from './Projects';
import Contact from './contact.js';
import Resume from './Resume';
import NavigationTabs from './NavigationTabs';
import ScrollToHash from './Assets/scrollToTop.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div class = "bg"></div>
        <div>
          <NavigationTabs/>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/publications" element = {<Publications/>}/>
            <Route path="/projects" element = {<Projects/>}/>
            <Route path="/resume" element = {<Resume/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
