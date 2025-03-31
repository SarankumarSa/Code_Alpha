import Header from './Components/Header';
import Mid from './Components/Mid';
import About from './Components/About';
import './App.css';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Foot from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Mid/>
     <About/>
     <Projects/>
     <Resume/>
     <Contact/>
     <Foot/>
    </div>
  );
}

export default App;
