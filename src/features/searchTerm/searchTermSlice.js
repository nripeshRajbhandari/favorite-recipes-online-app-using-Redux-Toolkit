import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state,action) => {
      return action.payload;
    },
    clearSearchTerm: (state) => {
      return ''
    }
  }
});


//export selectors and slice
export const selectSearchTerm = (state) => state.searchTerm;  


//export slice reducer and action creators
export default searchTermSlice.reducer;
export const {setSearchTerm,clearSearchTerm} = searchTermSlice.actions;


// const initialState = ''

// export const searchTermReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'searchTerm/setSearchTerm':
//       return action.payload;
//     case 'searchTerm/clearSearchTerm':
//       return '';
//     default:
//       return state;
//   }
// }

// export function setSearchTerm(term) {
//   return {
//     type: 'searchTerm/setSearchTerm',
//     payload: term
//   }
// }

// export function clearSearchTerm() {
//   return {
//     type: 'searchTerm/clearSearchTerm'
//   }
// }
