import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { formatearPrecios } from '../helpers/formatearPrecios';
import PizzaContext from '../ProviderPizza';

const PizzaCard = () => {
  const {pizzas, addCarrito} = useContext(PizzaContext);

  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
        <div 
          key={pizza.id} 
          className="card col-lg-3 col-md-6" 
          style={{width:"25rem", textAlign:"left"}}
        >
          <img 
            src={pizza.img} 
            className="card-img-top" 
            alt={pizza.name} 
            style={{width:"25rem"}}
          />
          <div className="card-body">
            <h5 className="card-title text-capitalize">{pizza.name}</h5>
            <hr />
            <h6 className="card-text"><b>Ingredientes:</b></h6>
            <ul>
              {pizza.ingredients.map((ingredient, i) => (
                <li 
                  key={i} 
                  className='text-capitalize' 
                  style={{listStyleType:'none'}}
                >
                  🍕 {ingredient}
                </li>
              ))}
            </ul>
            <hr />
            <h3 className="card-title text-center my-3">
              ${formatearPrecios(pizza.price)}
            </h3>
            <div className="d-flex justify-content-center">
              <button 
                to={`/pizza/${pizza.id}`} 
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
                className="btn btn-info text-white text-center me-2"
              >
                Ver Más 👀
              </button>
              <button
                onClick={() => addCarrito(pizza)}
                className="btn btn-danger"
              >
                Añadir 🛒
              </button> 
            </div>        
          </div>
        </div>
      ))}
    </>
  )
}

export default PizzaCard;