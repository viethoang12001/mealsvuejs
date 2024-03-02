<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <div class="p-8 pb-0 mb-4">
      <input
        v-model="keyWords"
        type="text"
        class="rounded border-2 bg-white border-gray-200 w-full"
        placeholder="Search for Ingredient "
      />
    </div>
    <RouterLink
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of ingredientComputed"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </RouterLink>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import axiosClient from "../axiosClient";
const ingredients = ref([]);
const keyWords = ref("");
const ingredientComputed = computed(() => {
  return ingredients.value.filter((data) => {
    if (!ingredientComputed) return ingredients;
    return data.strIngredient.toLowerCase().includes(keyWords.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
