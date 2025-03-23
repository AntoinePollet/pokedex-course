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
    <div class="max-w-4xl mx-auto card shadow-lg rounded-xl">
      <div v-if="pokemon" class="card-body">
        <div class="flex">
          <PokemonCard :pokemon="pokemon" class="" />
          <PokemonAbility :abilities="pokemon.pokemon_v2_pokemonabilities" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex h-full justify-center items-center">
    <div class="loading loading-spinner loading-lg text-primary" />
  </div>
</template>
