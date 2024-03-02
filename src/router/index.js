import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import MealsByName from "../view/MealsByName.vue";
import MealsByLetter from "../view/MealsByLetter.vue";
import MealsByIngredient from "../view/MealsByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealsDetails from "../view/MealsDetails.vue";
import Ingredients from "../view/Ingredients.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "byIngredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealsDetails,
      },
      // {
      //   path: "/letter/:letter",
      //   name: "byletter",
      //   component: MealsList,
      // },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
