import LogoDisplay from "./components/LogoDisplay/LogoDisplay";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import WhoAreWe from '../src/components/WhoWeAre/WhoWeAre'

function App() {
  return (
    <div className="App">
    <NavBar />
    <div>
    <LogoDisplay className="lg" /><br></br>
    </div>
    <WhoAreWe />
    </div>
  );
}

export default App;
