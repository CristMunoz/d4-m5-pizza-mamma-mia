import { useContext } from 'react'
import { Container, Table } from 'react-bootstrap';
import { formatearPrecios } from '../helpers/formatearPrecios';
import PizzaContext from '../ProviderPizza';

const Carrito = () => {
  const {carritoCompra, añadir, quitar} = useContext(PizzaContext);
  const total = carritoCompra.reduce((a, {counter, price}) => a + price * counter, 0);

  return (
    <>
      <Container className='my-5'>
        <h2>Detalles del pedido:</h2>
        <hr />
        <Table className='mt-5' striped bordered hover>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Pizza</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {carritoCompra.map((item, p) => (
              <tr key={p}>
                <td className='text-capitalize text-start me-5'>
                  <img src={item.img} alt="" width="70px" className='mx-3'/>
                  <b>Pizza {item.name}</b>
                </td>
                <td>
                  <b>${formatearPrecios(item.price * item.counter)}</b>
                </td>
                <td>
                  <button 
                    onClick={() => quitar(p)} 
                    className='btn btn-danger'
                  >
                    -
                  </button>
                  <b className="mx-2">
                    {item.counter}
                  </b>
                  <button 
                  onClick={() => añadir(p)} 
                  className='btn btn-primary'
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}  
          </tbody>
        </Table>
        <h4 className='my-4'>Total a Pagar: ${formatearPrecios(total)}</h4>
        <button className='btn btn-success'>
          Ir a Pagar
        </button>
      </Container>
    </>
  )
}

export default Carrito;
