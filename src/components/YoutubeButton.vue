<template>
  <a
    :href="href"
    taget="_blank "
    class="px-3 py-2 rounded border-2 border-red-500 bg-red-400 hover:bg-red-600 text-white transition-all"
    ><slot></slot></a
  >
</template>
<script setup>
const props = defineProps({
  href: String,
});
</script>
