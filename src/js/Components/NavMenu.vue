<script setup>
const menuItems = {
  about: {
    name: 'About Me',
    link: '#about'
  },
  gear: {
    name: 'Music and Gear',
    link: '#gear'
  },
  tabs: {
    name: 'Guitar Tabs',
    link: '#tabs'
  }
}
</script>

<template>
  <div class="flex flex-row h-16 items-center text-base space-x-4">
    <NavLink v-for="menuItem in menuItems" :item="menuItem"></NavLink>
  </div>
</template>