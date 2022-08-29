import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Item from '../components/Item'


const Home = () => {

  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading} = pizzastate

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])


  return (
    <div className='container row justify-content-center'>
      {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something went wrong</h1>): 
      (
        pizzas.map(pizza => {
          return <div className='container col-md-5 m-5' key={pizza._id}> 
               <div className='container'>
                   <Item pizza={pizza}/>
               </div>
          </div>
       })
      )}
    </div>
  )
}

export default Home