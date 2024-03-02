<template>
  <div class="p-8 pb-0">
    <input
      v-model="keywords"
      type="text"
      class="rounded border-2 bg-white border-gray-200 w-full"
      placeholder="Search for meals "
      @change="searchMeals"
    />
  </div>
  <meals :meals="meals"></meals>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keywords = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  if (keywords.value) {
    store.dispatch("searchMeals", keywords.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keywords.value = route.params.name;
  if (keywords.value) {
    searchMeals();
  }
});
</script>
