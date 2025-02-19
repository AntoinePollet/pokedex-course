<script setup lang="ts">
import PokemonCard from '~/components/PokemonCard.vue'

const { pokemons } = storeToRefs(usePokemonsStore())
const { fetchPokemons } = usePokemonsStore()

const loading = ref(true)

onMounted(async () => {
  try {
    await fetchPokemons()
    loading.value = false
  }
  catch {
    loading.value = false
  }
})
</script>

<template>
  <div class="p-8 h-full">
    <div v-if="!loading" class="grid grid-cols-6 gap-4">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="card bg-base-100 shadow-md">
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
    <div v-else class="flex h-full justify-center items-center">
      <div class="loading loading-spinner loading-lg text-primary" />
    </div>
  </div>
</template>
