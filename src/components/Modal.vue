<script setup lang="ts">
import { computed } from 'vue'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

const props = defineProps<{
  isOpen: boolean
  title?: string
  size?: ModalSize
}>()

const emit = defineEmits(['close'])

const sizeClasses = {
  'sm': 'max-w-sm',
  'md': 'max-w-md',
  'lg': 'max-w-lg',
  'xl': 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
}

const modalSize = computed(() => sizeClasses[props.size || 'md'])

function closeModal() {
  emit('close')
}
</script>

<template>
  <teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        @click="closeModal"
      />

      <!-- Modal -->
      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <div
            class="relative w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all" :class="[modalSize]"
          >
            <!-- Header -->
            <div v-if="title" class="mb-4">
              <h3 class="text-lg font-medium leading-6">
                {{ title }}
              </h3>
            </div>

            <!-- Close button -->
            <button
              class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-hidden cursor-pointer"
              @click="closeModal"
            >
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Content -->
            <div class="mt-2">
              <slot />
            </div>

            <!-- Footer -->
            <div class="mt-6 flex justify-end">
              <slot name="footer">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Close
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
