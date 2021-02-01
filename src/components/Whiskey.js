import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail';

const Whiskey = () => {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Whiskey')
      .then(response => {
        setCocktails(response.data.drinks)
      })
  }, [])

  return (
    <div>
      <h2>Whiskey Recipes</h2>
      <div className="info lowercase">(Click to show / hide recipe)</div>
      {cocktails.map(cocktail => {
      return (
      <Cocktail name={cocktail.strDrink} key={cocktail.idDrink} id={cocktail.idDrink}/>
      )
    })}
    </div>
  )
}

export default Whiskey;