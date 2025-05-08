<script setup lang="ts">
import type { Pokemon_V2_Evolutionchain } from '~/generated/graphql'

const { evolutions, isOpen } = defineProps<{
  evolutions: Pokemon_V2_Evolutionchain
  isOpen: boolean
  loading: boolean
}>()

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}
</script>

<template>
  <Modal :is-open="isOpen" title="Evolution Chain" size="3xl" @close="closeModal">
    <div v-if="loading" class="flex justify-center items-center h-full">
      <div class="loading loading-spinner loading-lg text-primary" />
    </div>

    <div v-else class="px-6 py-4 max-h-96 overflow-y-auto">
      <PokemonEvolutions v-if="evolutions" :evolutions="evolutions" no-title />
    </div>

    <!-- Optional custom footer -->
    <template #footer>
      <button
        class="btn btn-primary"
        @click="closeModal"
      >
        Close
      </button>
    </template>
  </Modal>
</template>
