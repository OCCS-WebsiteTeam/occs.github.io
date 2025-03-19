import './App.scss';
import './App.css'
import NavBar from './components/header/navBar.js';
import LandingSection from './components/WebsiteSections/Landing/LandingSection.js';
import SecondPanel from './components/WebsiteSections/Second/Second.js';
import ThirdPanel from './components/WebsiteSections/Third/Third.js';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <LandingSection></LandingSection>
      <SecondPanel></SecondPanel>
      <ThirdPanel></ThirdPanel>
    </div>
  );
}

export default App;
