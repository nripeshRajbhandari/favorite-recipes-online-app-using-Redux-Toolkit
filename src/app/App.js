import React from "react";
import { AllRecipes } from "../features/allRecipes/AllRecipes";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes";
import { SearchTerm } from "../features/searchTerm/SearchTerm";

export default function App() {

  // const { state, dispatch } = props;

  // const visibleAllRecipes = getFilteredRecipes(state.allRecipes, state.searchTerm);
  // const visibleFavoriteRecipes = getFilteredRecipes(state.favoriteRecipes, state.searchTerm);

  return (
    <main>
       <section>
        <SearchTerm />
      </section>

      <section>
        <h2>Favorite Recipes</h2>
        <FavoriteRecipes />
      </section>

      <hr />

      <section>
        <h2>All Recipes</h2>
        <AllRecipes />
      </section>
     
    </main>
  );
}

/* Utility Helpers */

// function getFilteredRecipes(recipes, searchTerm) {
//   return recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
// }