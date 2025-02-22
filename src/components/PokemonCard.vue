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
  <div class="card-body">
    <h2 class="card-title">
      {{ firstUppercase(pokemon.name) }}
      <div class="tooltip" data-tip="toogle shiny">
        <button class="btn btn-ghost btn-circle" @click="toggleShiny">
          <SparklesIcon :size="16" />
        </button>
      </div>
    </h2>
    <img :src="isShiny ? pokemonShinySprite(pokemon.id) : pokemonSprite(pokemon.id)" :alt="pokemon.name">
    <PokemonTypes :types="pokemon.pokemon_v2_pokemontypes" />
  </div>
</template>
