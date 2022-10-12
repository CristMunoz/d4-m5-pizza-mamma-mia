import React from 'react'
import PizzaCard from '../components/PizzaCard';

const Home = ({pizzas}) => {
  return (
    <>
      <div className='main-container text-center my-5'>
        <PizzaCard />
      </div>
    </>
  )
}

export default Home;