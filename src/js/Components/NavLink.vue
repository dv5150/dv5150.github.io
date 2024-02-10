<script setup>
const props = defineProps({
  item: Object
})
</script>

<template>
  <a class="mont-bold text-emerald-700" :href="item.url">{{ item.name }}</a>
</template>