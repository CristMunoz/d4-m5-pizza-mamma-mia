import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatearPrecios } from '../helpers/formatearPrecios'
import PizzaContext from '../ProviderPizza'

const NavBar = () => {
  const {carritoCompra} = useContext(PizzaContext);
  const total = carritoCompra.reduce(
    (prevValue, {counter, price}) => (prevValue + price) * counter, 0);

  return (
    <>
        <Navbar className='bgc-custom' variant="dark">
            <Container>
                <Link to='/' className='text-white' style={{textDecoration:"none"}}>
                  <h4>🍕 Pizzería Mamma Mia!</h4></Link>
                <Nav className='ms-auto'>
                  <Link to='/carrito' className='text-white' style={{textDecoration:"none"}}>
                    <h4>🛒 ${formatearPrecios(total)}</h4>
                  </Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar;