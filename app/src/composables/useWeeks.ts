import { ref } from 'vue'
import type { Week } from '@/types'

// Singleton - shared state
export const weeks = ref<Week[]>([])

// Factory - Generated unique state
export function generateWeeks() {
  const newWeeks = ref<Week[]>([])
  return newWeeks
}
