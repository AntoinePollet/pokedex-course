<script setup lang="ts">
import type { Pokemon_V2_Pokemonability } from '~/generated/graphql'

const { abilities } = defineProps<{
  abilities: Pokemon_V2_Pokemonability[]
}>()
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">
        Abilities
      </h2>
      <div v-for="ability in abilities" :key="ability.id" class="space-y-4 [&:not(:first-child)]:mt-4">
        <h3 class="card-title text-secondary">
          {{ ability.pokemon_v2_ability!.name }}
        </h3>
        <div class="text-sm">
          <span class="font-bold">Effect: </span>{{ ability.pokemon_v2_ability?.pokemon_v2_abilityeffecttexts[0].effect }}
        </div>
        <div class="text-sm">
          <span class="font-bold">Short Effect:</span> {{ ability.pokemon_v2_ability?.pokemon_v2_abilityeffecttexts[0].short_effect }}
        </div>
      </div>
    </div>
  </div>
</template>
