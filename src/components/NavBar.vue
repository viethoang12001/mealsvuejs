<template>
  <head class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5 hover:bg-purple-200"
        >Home</router-link
      >
      <div>
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          >Search Meals</router-link
        >
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          >Meals By Letter</router-link
        >
        <router-link
          :to="{ name: 'byIngredients' }"
          class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200"
          >Meals by Ingredients</router-link
        >
      </div>
    </head>
</template>
