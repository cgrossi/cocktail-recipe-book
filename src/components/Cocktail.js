import React, { useState } from 'react';
import axios from 'axios';

const Cocktail = ({name, id}) => {
  const [cocktail, setCocktail] = useState({})
  const [show, setShow] = useState(false)

  const getCocktail = () => {
    if (Object.keys(cocktail).length === 0) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
          setCocktail(response.data.drinks[0])
          setShow(show => !show)
        })
    } else {
      setCocktail({})
      setShow(show => !show)
    }
  }

  if (show) {
    const measures = Object.entries(cocktail)
      .filter(entry => entry[0].includes("Measure"))
    const ingredients = Object.entries(cocktail)
      .filter(entry => entry[0].includes("Ingredient"))
      .filter(entry => entry[1] !== null)

    const {
      strDrink: name,
      strDrinkThumb: image,
      strGlass: glass,
      strInstructions: instructions
    } = cocktail

    const renderIng = () => {
      return ingredients.map((ingredient, i) => <li key={i}>{ingredient[1]} {measures[i][1] && `: ${measures[i][1]}`}</li>)
    }

    return (
      <div onClick={getCocktail} className="recipe">
        <p>{name}</p>
        <div>
          <img src={image} width="125px" alt={name} />
        </div>
        <div>
          <p>Ingredients You'll Need:</p>
          {renderIng()}
        </div>
        <p>Glass: {glass}</p>
        <div>
          <p>Instructions:</p>
    <p className="lowercase">{instructions}</p>
        </div>
      </div>
    )
  } else {
      return (
        <div className="cocktail-list-item">
          <span onClick={getCocktail}>{name}</span>
        </div>
      )
  }

}

export default Cocktail;