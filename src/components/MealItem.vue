<template>
  <div class="bg-white shadow">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 object-cover w-full"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        dolorum recusandae vero adipisci
      </p>
      <div>
        <youtube-button :href="meal.strYoutube"> Go to Youtube </youtube-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
