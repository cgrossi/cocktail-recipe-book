import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Cocktail from './Cocktail';

const Whiskey = () => {
  const [cocktails, setCocktails] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey')
      .then(response => {
        setCocktails(response.data.drinks)
      })
      .then(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h2>Whiskey Recipes</h2>
      <div className="info lowercase">(Click to show / hide recipe)</div>
      {!isLoading ? cocktails.map(cocktail => {
      return (
      <Cocktail name={cocktail.strDrink} key={cocktail.idDrink} id={cocktail.idDrink}/>
      )
    }) : <Loading />}
    </div>
  )
}

export default Whiskey;