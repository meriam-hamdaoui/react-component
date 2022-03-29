import './App.css';
import Contact from './Components/Contact/Contact';
import Address from './Components/Foot/Address';
import NavBar from './Components/NavBar/NavBar';
import Head from './Components/Profile/Head';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Head/>
      <Skills />
      <Contact/>
      <Address />
    </div>
  );
}

export default App;
