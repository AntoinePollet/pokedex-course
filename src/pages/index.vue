<script lang="ts" setup>
import {
  Bell,
  Blocks,
  BookOpen,
  CheckCircle,
  Clock,
  Code2,
  Database,
  Download,
  GitBranch,
  Globe,
  GraduationCap,
  HardDrive,
  Laptop,
  Moon,
  Puzzle,
  Rocket,
  Smartphone,
  Target,
  TestTube,
  Users,
} from 'lucide-vue-next'

const technicalConcepts = [
  {
    icon: Database,
    title: 'Data Loaders',
    description: 'Learn to efficiently manage and load data with optimized data loading patterns',
  },
  {
    icon: Download,
    title: 'Lazy Loading',
    description: 'Optimize performance by implementing resource loading on demand',
  },
  {
    icon: BookOpen,
    title: 'Pagination',
    description: 'Implement efficient pagination systems for better data handling',
  },
  {
    icon: HardDrive,
    title: 'Local Storage',
    description: 'Master browser storage techniques for persistent data management',
  },
  {
    icon: Bell,
    title: 'Toasts',
    description: 'Enhance user experience with a robust notification system',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Implement theme switching capabilities with user preference persistence',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Create fluid layouts that work perfectly across all devices',
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Write comprehensive unit tests using Vitest framework',
  },
  {
    icon: Globe,
    title: 'Progressive Web App',
    description: 'Add offline capabilities and native app-like features',
  },
  {
    icon: GitBranch,
    title: 'CI/CD',
    description: 'Set up automated testing and deployment pipelines',
  },
]

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

    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">
          Technical Concepts
        </h2>
        <p class="text-center mb-12 max-w-2xl mx-auto">
          Master these essential technical concepts that will take your development skills to the next level
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div
            v-for="(concept, index) in technicalConcepts"
            :key="index"
            class="card bg-base-100 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div class="card-body items-center text-center p-6">
              <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <component
                  :is="concept.icon"
                  class="w-8 h-8 text-primary"
                />
              </div>
              <h3 class="card-title text-lg mb-2">
                {{ concept.title }}
              </h3>
              <p class="text-sm opacity-80">
                {{ concept.description }}
              </p>
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
