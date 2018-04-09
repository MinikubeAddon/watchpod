import React from 'react';
import PropTypes from 'prop-types';

const Recipes = (props) => {
  return (
    <div className="flex-container">
      {props.recipes.map((recipe) => (
        <div key={recipe._id} className="item">
          <div className="recipe-content" href={recipe.href}>
            <div className="text-center">
              <h5>{recipe.title}</h5>
              <div className="image-container">
                <img className="image" src={recipe.pic}/>
              </div>
              
            </div>
            
            <div className="directions">
              <hr />
              <div className="text-center">
                <a href={recipe.href}>{recipe.href}</a>
              </div>
            </div>
            
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
