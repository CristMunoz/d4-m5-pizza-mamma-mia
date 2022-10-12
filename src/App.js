import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Pizzas from './views/Pizzas';
import Carrito from './views/Carrito';
import { ProviderPizza } from './ProviderPizza';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderPizza>
          <NavBar />
          <Banner />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizzas/:id' element={<Pizzas />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </ProviderPizza>
      </BrowserRouter>
    </div>
  );
}

export default App;
