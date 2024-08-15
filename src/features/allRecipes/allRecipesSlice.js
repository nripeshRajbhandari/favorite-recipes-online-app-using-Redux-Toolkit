import allRecipesData from '../../data.js'
import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, removeRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const allRecipesSlice = createSlice({
  name: 'allRecipes',
  initialState: [],
  reducers: {
    loadData: () => allRecipesData,
  },
  
  // Handling two different actions for the same listener in different slices using Redux Toolkit   
  extraReducers: (builder)=> {
    builder
    .addCase(addRecipe, (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id);
     })
    .addCase(removeRecipe, (state,action) =>{
      state.push(action.payload);
    })
  }
  // extraReducers:{
  //   ['favoriteRecipes/addRecipe'] : (state, action) => {
  //     return state.filter(recipe => recipe.id !==action.payload.id);
  //   },
  //   ['favoriteRecipes/removeRecipe'] : (state, action) => {
  //     state.push(action.payload);
  //   }
  // }
});


//export Selectors

export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
}


//export slice reducer and action creators
export const { loadData } = allRecipesSlice.actions;

export default allRecipesSlice.reducer;

// export const allRecipesSlice = createSlice({
//   name: 'allRecipes',
//   initialState: [],
//   reducers: {
//     loadData: () => allRecipesData,
//     addToRecipe: (state, action) => {
//       return state.filter(recipe => recipe.id !== action.payload.id);
//     },
//     removeFromRecipe: (state, action) => {
//       state.push(action.payload);
//     }
//   }
// });

// export const { loadData, addToRecipe, removeFromRecipe } = allRecipesSlice.actions;




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