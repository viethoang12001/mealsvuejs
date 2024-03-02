<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item
      v-for="meal of meals"
      :key="meal.idMeal"
      :meal="meal"
    ></meal-item>
  </div>
  <div v-if="!meals.length" class="flex justify-center text-gray-600">
    There no Meals
  </div>
</template>
<script setup>
import MealItem from "./MealItem.vue";
const { meals } = defineProps({
  meals: {
    type: Object,
    required: true,
  },
});
</script>
