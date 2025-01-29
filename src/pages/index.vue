<script lang="ts" setup>
import {
  Blocks,
  BookOpen,
  CheckCircle,
  Clock,
  Code2,
  GraduationCap,
  Laptop,
  Puzzle,
  Rocket,
  Target,
  Users,
} from 'lucide-vue-next'

const courseData = {
  title: 'Modern Web Development Masterclass',
  tagline: 'Master the Modern Web Stack',
  duration: '12 Weeks',
  students: '500+',
  completionRate: '94%',
  technologies: [
    {
      category: 'Core Framework',
      items: [
        { name: 'Vue 3', description: 'Latest Vue features with Composition API' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'GraphQL', description: 'Data query and manipulation language' },
      ],
    },
    {
      category: 'State & Styling',
      items: [
        { name: 'Pinia', description: 'State management for Vue 3' },
        { name: 'TailwindCSS', description: 'Utility-first CSS framework' },
        { name: 'DaisyUI', description: 'Component library for Tailwind' },
      ],
    },
    {
      category: 'Development Tools',
      items: [
        { name: 'Vite', description: 'Next-gen frontend tooling' },
        { name: 'Vitest', description: 'Unit testing framework' },
      ],
    },
  ],
  highlights: [
    { icon: Rocket, title: 'Project-Based', text: 'Learn by building real applications' },
    { icon: Target, title: 'Industry Ready', text: 'Focus on current best practices' },
    { icon: Users, title: 'Community', text: 'Join our active learning community' },
    { icon: Clock, title: 'Lifetime Access', text: 'Learn at your own pace' },
  ],
  modules: [
    {
      title: 'Vue 3 Fundamentals',
      duration: '2 weeks',
      topics: ['Composition API', 'Vue Router', 'Component Design'],
    },
    {
      title: 'TypeScript Integration',
      duration: '2 weeks',
      topics: ['Type Safety', 'Interfaces', 'Generics'],
    },
    {
      title: 'State Management',
      duration: '2 weeks',
      topics: ['Pinia Setup', 'Actions & State', 'Persistence'],
    },
    {
      title: 'Testing & Optimization',
      duration: '2 weeks',
      topics: ['Vitest Setup', 'Component Testing', 'Performance'],
    },
  ],
}
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <!-- Tech Stack -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">
          <Blocks class="w-12 h-12 mb-4 mx-auto" />
          Technology Stack
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(tech, index) in courseData.technologies"
            :key="index"
            class="card bg-base-200"
          >
            <div class="card-body">
              <h3 class="card-title mb-4">
                {{ tech.category }}
              </h3>
              <ul class="space-y-4">
                <li
                  v-for="item in tech.items"
                  :key="item.name"
                  class="flex items-start gap-3"
                >
                  <Code2 class="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 class="font-bold">
                      {{ item.name }}
                    </h4>
                    <p class="text-sm opacity-80">
                      {{ item.description }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.stat {
  @apply bg-primary p-4 rounded-lg;
}
</style>
