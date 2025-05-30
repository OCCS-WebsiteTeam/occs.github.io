import './App.scss';
import './App.css'
import NavBar from './components/header/navBar.js';
import LandingSection from './components/WebsiteSections/Landing/LandingSection.js';
import SecondPanel from './components/WebsiteSections/Second/Second.js';




function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LandingSection className="test"></LandingSection>
      <SecondPanel></SecondPanel>
    </div>
  );
}

export default App;
