<template>
  <meals :meals="meals"></meals>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealByIngredient);
onMounted(() => {
  store.dispatch("searchMealByIngredient", route.params.ingredient);
});
</script>
