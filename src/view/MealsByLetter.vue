<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      >{{ letter }}</router-link
    >
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item
      v-for="meal of meals"
      :key="meal.idMeal"
      :meal="meal"
    ></meal-item>
  </div>
  >
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const meals = computed(() => store.state.mealByLetter);

watch(route, () => store.dispatch("searchMealByLetter", route.params.letter));
// onMounted(() => {
//   store.dispatch("searchMealByLetter", route.params.letter);
// });
</script>
