import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PizzaContext from '../ProviderPizza';


const Pizzas = () => {
  const [detallesPizza, setDetallesPizza] = useState({});
  const {pizzas, addCarrito} = useContext(PizzaContext);
  const {id} = useParams();

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);
    setDetallesPizza(datosPizza);
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  return (
    <div className="container my-5">
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
          src={detallesPizza.img}
          className="img-fluid rounded-start me-5 pe-5"
          alt={detallesPizza.name}
          style={{minWidth:"100vh"}}
          />
        </div>
        <div className="col-md-4 mx-auto ps-5">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{detallesPizza.name}</h5>
            <hr className='my-0' />
            <p className="card-text text-start fs-6">{detallesPizza.desc}</p>
            <h6 className="card-title text-start"><b>Ingredientes:</b></h6>
            <ul>
              {detallesPizza.ingredients?.map((ingredient, i) => (
                <li className='text-capitalize text-start' 
                  key={i} 
                  style={{listStyleType:'none'}}
                >
                  🍕 {ingredient}
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-end">
              <h3 className="card-title me-5">
                ${detallesPizza.price}
              </h3>
              <button 
                onClick={() => addCarrito(detallesPizza)}
                className="btn btn-danger"
              >
                Añadir 🛒
              </button> 
            </div>            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Pizzas;
