<script setup lang="ts">
import PokemonCard from '~/components/PokemonCard.vue'

const { pokemons, page } = storeToRefs(usePokemonsStore())
const { fetchPokemons } = usePokemonsStore()

const router = useRouter()

const POKEMONS_COUNT = 905
const TOTAL_PAGES = Math.ceil(POKEMONS_COUNT / 20)
const loading = ref(true)

async function handlePageChange(p: number) {
  page.value = p

  try {
    loading.value = true
    await fetchPokemons()
    loading.value = false
  }
  catch {
    loading.value = false
  }
}

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
  <div class="p-8 h-full flex flex-1 flex-col overflow-auto">
    <div v-if="!loading" class="grid grid-cols-6 gap-4 overflow-auto p-4">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="card bg-base-100 shadow-md cursor-pointer">
        <PokemonCard :pokemon="pokemon" @click="router.push(`/pokemons/${pokemon.id}`)" />
      </div>
    </div>
    <div v-else class="flex h-full justify-center items-center">
      <div class="loading loading-spinner loading-lg text-primary" />
    </div>

    <Pagination
      class="pt-8"
      :current-page="page"
      :total-pages="TOTAL_PAGES"
      @page-change="handlePageChange"
    />
  </div>
</template>
