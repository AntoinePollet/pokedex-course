<script lang="ts" setup>
import type { Pokemon_V2_Pokemon } from '~/generated/graphql'
import { SparklesIcon } from 'lucide-vue-next'
import { firstUppercase, pokemonShinySprite, pokemonSprite } from '~/utilities'

const { pokemon } = defineProps<{
  pokemon: Pokemon_V2_Pokemon
}>()

const isShiny = ref<boolean>(false)
function toggleShiny() {
  isShiny.value = !isShiny.value
}
</script>

<template>
  <div class="card-body flex flex-col items-center">
    <h2 class="card-title">
      {{ firstUppercase(pokemon.name) }}
      <div class="tooltip" data-tip="toggle shiny">
        <button class="btn btn-ghost btn-sm btn-circle" @click="toggleShiny">
          <SparklesIcon :size="16" />
        </button>
      </div>
    </h2>
    <img :src="isShiny ? pokemonShinySprite(pokemon.id) : pokemonSprite(pokemon.id)" :alt="pokemon.name" class="h-32 w-32">
    <PokemonTypes :types="pokemon.pokemon_v2_pokemontypes" />
    <slot name="footer" />
  </div>
</template>
