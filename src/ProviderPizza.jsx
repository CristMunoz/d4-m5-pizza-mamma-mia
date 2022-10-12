import { createContext, useState, useEffect} from 'react'

const PizzaContext = createContext(); //Crear el contexto

// Provider que tendrá los datos
const ProviderPizza = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [carritoCompra, setCarritoCompra] = useState([]);

// Obtener las pizzas
const getPizza = async () => {
    const res = await fetch(window.location.origin+"/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
};

useEffect(() => {
    getPizza();
}, []);

// Funciones del carrito de compra
const addCarrito = ({id, price, img, name}) => {
    const itemEncontradoIndex = carritoCompra.findIndex((p) => p.id === id);
    const item = {id, price, img, name, counter: 1};

    if(itemEncontradoIndex >= 0) {
        carritoCompra[itemEncontradoIndex].counter++;
        setCarritoCompra([...carritoCompra]);
    }
    else {
        setCarritoCompra([...carritoCompra, item]);
    }
};

// Función para añadir pizzas
const añadir = (i) => {
    carritoCompra[i].counter++;
    setCarritoCompra([...carritoCompra]);
};

// Función para quitar pizzas
const quitar = (i) => {
    const {counter} = carritoCompra[i];
    if(counter === 1) {
        carritoCompra.splice(i, 1);
    }
    else {
        carritoCompra[i].counter--;
    }
    setCarritoCompra([...carritoCompra]);
    };

    return (
        <PizzaContext.Provider value={{pizzas, carritoCompra, setCarritoCompra, addCarrito, añadir, quitar}}>
            {children}
        </PizzaContext.Provider>
    );
};

export {ProviderPizza};

export default PizzaContext;
