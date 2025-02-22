<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'pageChange', page: number): void
}>()

const showLeftEllipsis = computed(() => {
  return props.currentPage > 4
})

const showRightEllipsis = computed(() => {
  return props.currentPage < props.totalPages - 3
})

const middlePages = computed(() => {
  const pages = []
  let start, end

  if (props.currentPage <= 4) {
    start = 2
    end = Math.min(5, props.totalPages - 1)
  }
  else if (props.currentPage >= props.totalPages - 3) {
    start = props.totalPages - 4
    end = props.totalPages - 1
  }
  else {
    start = props.currentPage - 1
    end = props.currentPage + 1
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

function handlePageChange(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('pageChange', page)
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <ul class="flex items-center gap-2">
      <!-- Previous arrow -->
      <li>
        <button
          class="btn btn-square btn-sm"
          :class="{ 'btn-disabled': currentPage === 1 }"
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
        >
          <ChevronLeft :size="16" />
        </button>
      </li>

      <!-- First page -->
      <li>
        <button
          class="btn btn-square btn-sm"
          :class="{ 'btn-primary': currentPage === 1 }"
          @click="handlePageChange(1)"
        >
          1
        </button>
      </li>

      <!-- Left ellipsis -->
      <li v-if="showLeftEllipsis">
        <span class="px-2">...</span>
      </li>

      <!-- Middle pages -->
      <li v-for="page in middlePages" :key="page">
        <button
          class="btn btn-square btn-sm"
          :class="{ 'btn-primary': currentPage === page }"
          @click="handlePageChange(page)"
        >
          {{ page }}
        </button>
      </li>

      <!-- Right ellipsis -->
      <li v-if="showRightEllipsis">
        <span class="px-2">...</span>
      </li>

      <!-- Last page -->
      <li v-if="totalPages > 1">
        <button
          class="btn btn-square btn-sm"
          :class="{ 'btn-primary': currentPage === totalPages }"
          @click="handlePageChange(totalPages)"
        >
          {{ totalPages }}
        </button>
      </li>

      <!-- Next arrow -->
      <li>
        <button
          class="btn btn-square btn-sm"
          :class="{ 'btn-disabled': currentPage === totalPages }"
          :disabled="currentPage === totalPages"
          @click="handlePageChange(currentPage + 1)"
        >
          <ChevronRight :size="16" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.pagination-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;
}

.pagination-list li {
  display: flex;
  align-items: center;
}

.pagination-list button {
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-list button:hover:not(:disabled) {
  background: #f0f0f0;
}

.pagination-list .active button {
  background: #3498db;
  color: white;
  border-color: #3498db;
}

.pagination-list .disabled button {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination-list span {
  padding: 8px 12px;
}
</style>
