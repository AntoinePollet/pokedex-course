<script setup lang="ts">
import type { Pokemon_V2_Pokemontype } from '~/generated/graphql'
import { colorFromType } from '~/utilities'

const { types } = defineProps<{
  types: Pokemon_V2_Pokemontype[]
}>()
</script>

<template>
  <div class="font-bold text-primary">
    <template v-for="type in types" :key="type.id">
      <div class="badge gap-1" :class="colorFromType(type.pokemon_v2_type!.name).style">
        <img
          :src="colorFromType(type.pokemon_v2_type!.name).icon" height="12" width="12"
          :style="`filter: ${colorFromType(type.pokemon_v2_type!.name).iconColor === 'black' ? 'brightness(0)' : 'brightness(10)'}`"
        >
        {{ type.pokemon_v2_type?.name }}
      </div>
    </template>
  </div>
</template>
