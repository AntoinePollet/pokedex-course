<script setup lang="ts">
const pokemonId = useRoute('/pokemons/[pokemoId]').params.pokemoId

const { fetchPokemon } = usePokemonsStore()
const { pokemon } = storeToRefs(usePokemonsStore())

const loading = ref(true)

onMounted(async () => {
  loading.value = true
  await fetchPokemon(Number(pokemonId))
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" class="p-8">
    <div class="max-w-2xl mx-auto">
      <PokemonCard v-if="pokemon" :pokemon="pokemon" />
    </div>
  </div>
  <div v-else class="flex h-full justify-center items-center">
    <div class="loading loading-spinner loading-lg text-primary" />
  </div>
</template>
