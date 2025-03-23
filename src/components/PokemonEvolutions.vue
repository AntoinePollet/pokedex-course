<script setup lang="ts">
import type { Pokemon_V2_Evolutionchain } from '~/generated/graphql'

const { evolutions } = defineProps <{
  evolutions: Pokemon_V2_Evolutionchain
}>()
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">
        Evolutions
      </h2>
      <div class="flex">
        <div v-if="evolutions.pokemon_v2_pokemonspecies.length <= 1" class="text-sm italic">
          This pokemon does not evolve
        </div>
        <template v-for="evolution in evolutions.pokemon_v2_pokemonspecies" v-else :key="evolution.id">
          <PokemonCard :pokemon="evolution.pokemon_v2_pokemons[0]" />
        </template>
      </div>
    </div>
  </div>
</template>
