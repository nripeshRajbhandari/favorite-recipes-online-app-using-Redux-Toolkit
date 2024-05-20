import allRecipesData from '../../data.js'
import { createSlice } from '@reduxjs/toolkit';

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: [],
  reducers: {
    loadData: () => allRecipesData,
    addToRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id);
    },
    removeFromRecipe: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { loadData, addToRecipe, removeFromRecipe } = allRecipesSlice.actions;

export default allRecipesSlice.reducer;



//following code block has been replaced by above code blocks using redux toolkit  
/*
//initialize action creator
export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}

//initialize state slice and define slice reducer
const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}
*/