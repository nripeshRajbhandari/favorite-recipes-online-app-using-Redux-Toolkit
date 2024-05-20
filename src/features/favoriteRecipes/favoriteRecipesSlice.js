import { createSlice } from '@reduxjs/toolkit';
//initialise state slice and define slice reducer

export const favoriteRecipesSlice = createSlice ({
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state,action) =>{
      state.push(action.payload);
    },
    removeRecipe: (state,action) =>{
      return state.filter(recipe => recipe.id !== action.payload.id);
    }
  }

})


export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;
export default favoriteRecipesSlice.reducer; 


//Below codes has been replaced by above codes using redux toolkit libraries.
/*
const initialState = [];
export const favoriteRecipesReducer = (favoriteRecipes = initialState, action) => {
  switch (action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...favoriteRecipes, action.payload]
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(recipe => recipe.id !== action.payload.id)
    default:
      return favoriteRecipes;
  }
}

//action creators
export function addRecipe(recipe) {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  }
}

export function removeRecipe(recipe) {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  }
}
*/