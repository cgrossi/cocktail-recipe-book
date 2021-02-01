import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail';

const Vodka = () => {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
      .then(response => {
        setCocktails(response.data.drinks)
      })
  }, [])

  return (
    <div>
      <h2>Vodka Recipes</h2>
      <div className="info lowercase">(Click to show / hide recipe)</div>
      {cocktails.map(cocktail => {
      return (
      <Cocktail name={cocktail.strDrink} key={cocktail.idDrink} id={cocktail.idDrink}/>
      )
    })}
    </div>
  )
}

export default Vodka;