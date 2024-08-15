import React from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';
import { useSelector, useDispatch } from 'react-redux';

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'


export const FavoriteRecipes = () =>{
  
  // Extract favoriteRecipes and dispatch from props.
  // const { favoriteRecipes, dispatch } = props;

  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
    // dispatch(removeFromRecipe(recipe));
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  }
  
};