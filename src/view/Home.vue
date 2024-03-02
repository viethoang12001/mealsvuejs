<template>
  <div class="flex flex-col p-8">
    
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";
const meals = computed(() => store.state.meals);

onMounted(async () => {
  const res = await axiosClient.get("/list.php?i=list");
});
</script>
