
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Cards } from './Components/Main/Cards';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <Footer/>
      </div>
  );
}

export default App;
