import axiosClient from "../axiosClient.js";
export function searchMeals({ commit }, keywords) {
  axiosClient.get(`search.php?s=${keywords}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
export function searchMealByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealByLetter", data.meals);
  });
}
export function searchMealByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealByIngredient", data.meals);
  });
}
