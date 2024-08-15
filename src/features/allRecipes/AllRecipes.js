import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice';
import { loadData ,selectFilteredAllRecipes } from './allRecipesSlice';

import React, { useEffect } from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { useSelector, useDispatch } from 'react-redux';

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

export const AllRecipes = () => {
  
  // const { allRecipes, dispatch } = props;
  const allRecipes = useSelector(selectFilteredAllRecipes);

  const dispatch = useDispatch();

  //during the first render of the all recipes component..
  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, [])
  
  const onAddRecipeHandler = (recipe) => {
    // dispatch(addToRecipe(recipe));
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}>
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};