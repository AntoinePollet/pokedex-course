<script setup lang="ts">
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
        <div class="card-body">
          <h2 class="card-title">
            {{ pokemon.name }}
          </h2>
          <div class="font-bold text-primary">
            <template v-for="type in pokemon.pokemon_v2_pokemontypes" :key="type.id">
              <div class="badge badge-primary">
                {{ type.pokemon_v2_type?.name }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex h-full justify-center items-center">
      <div class="loading loading-spinner loading-lg text-primary" />
    </div>
  </div>
</template>
