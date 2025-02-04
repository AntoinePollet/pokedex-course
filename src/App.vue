<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vue3 pokedex course',
  meta: [
    {
      name: 'description',
      content: 'Vue3 / pinia / graphql / typescript / vite / vitest / tailwindcss / vueuse / advanced web development course',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => '/favicon.ico',
    },
  ],
})
</script>

<template>
  <div class="h-screen w-screen">
    <RouterView />
  </div>
</template>
