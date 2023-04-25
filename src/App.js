
import './App.css';
import { ItemListContainer } from './Components/Conteiner/ItemListContainer';
import { Footer } from './Components/Footer/Footer';
import { Cards } from './Components/Main/Cards';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda on-line"}/>
      <Cards/>
      <Footer/>

      </div>
  );
}

export default App;
