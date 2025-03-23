<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const params = computed(() => route.params) as ComputedRef<{ pokemonId: string }>
const { fetchPokemon } = usePokemonsStore()
const { pokemon, pokemonEvolutions } = storeToRefs(usePokemonsStore())

const loading = ref(true)

watch(params, async (params) => {
  if (!params.pokemonId)
    return
  loading.value = true
  await fetchPokemon(Number(params.pokemonId))
  loading.value = false
})

onMounted(async () => {
  loading.value = true
  await fetchPokemon(Number(params.value.pokemonId))
  loading.value = false
})
</script>

<template>
  <div v-if="!loading" class="p-8">
    <div class="max-w-4xl mx-auto card shadow-lg rounded-xl relative">
      <div v-if="pokemon" class="card-body">
        <div class="flex">
          <PokemonCard :pokemon="pokemon" />
          <PokemonAbility :abilities="pokemon.pokemon_v2_pokemonabilities" />
        </div>
        <PokemonEvolutions v-if="pokemonEvolutions" :evolutions="pokemonEvolutions" />
      </div>

      <button class="btn btn-circle btn-sm absolute top-4 left-4" @click="router.push(`/pokemons/${Number(params.pokemonId) - 1}`)">
        <ArrowLeftIcon :size="16" />
      </button>

      <button class="btn btn-circle btn-sm absolute top-4 right-4" @click="router.push(`/pokemons/${Number(params.pokemonId) + 1}`)">
        <ArrowRightIcon :size="16" />
      </button>
    </div>
  </div>
  <div v-else class="flex h-full justify-center items-center">
    <div class="loading loading-spinner loading-lg text-primary" />
  </div>
</template>
