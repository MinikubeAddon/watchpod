import React from 'react';
import PropTypes from 'prop-types';

const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) => (
        <div key={recipe._id}>
          <h5>{recipe.title}</h5>
          <img src={recipe.pic}/>
          <ol>
            {recipe.ingredients.map((ing, i) => (
              <li key={`${recipe._id}ing${i}`}>{ing}</li>
            ))}
          </ol>
          <div>
            {recipe.directions.map((dir, i) => (
              <p key={`${recipe._id}dir${i}`}>{dir}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    directions: PropTypes.arrayOf(PropTypes.string).isRequired,
    href: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }))
}

export default Recipes;
