import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { MOOD_ICON_CONFIG, getHumanFaceImageUrl } from '../config/moodConfig'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Centralized mood system for easy maintenance and future improvements
export interface MoodDefinition {
  id: string
  label: string
  emoji: string
  color: string
  description: string
  therapeuticGoal: string
  // Future: humanFaceImage?: string
  // Future: humanFaceImageUrl?: string
}

export const MOODS: MoodDefinition[] = [
  {
    id: 'happy',
    label: 'Happy',
    emoji: '😊',
    color: 'bg-yellow-500',
    description: 'Feeling joyful and content',
    therapeuticGoal: 'Maintain and enhance positive energy'
  },
  {
    id: 'sad',
    label: 'Sad',
    emoji: '😢',
    color: 'bg-blue-500',
    description: 'Feeling down or melancholic',
    therapeuticGoal: 'Lift spirits and find hope'
  },
  {
    id: 'excited',
    label: 'Excited',
    emoji: '🤩',
    color: 'bg-orange-500',
    description: 'Feeling enthusiastic and energized',
    therapeuticGoal: 'Channel energy into positive outcomes'
  },
  {
    id: 'relaxed',
    label: 'Relaxed',
    emoji: '😌',
    color: 'bg-green-500',
    description: 'Feeling calm and peaceful',
    therapeuticGoal: 'Deepen and maintain inner peace'
  },
  {
    id: 'energetic',
    label: 'Energetic',
    emoji: '⚡',
    color: 'bg-yellow-400',
    description: 'Feeling full of vitality',
    therapeuticGoal: 'Direct energy into productive activities'
  },
  {
    id: 'calm',
    label: 'Calm',
    emoji: '🧘',
    color: 'bg-teal-500',
    description: 'Feeling centered and balanced',
    therapeuticGoal: 'Maintain emotional equilibrium'
  },
  {
    id: 'romantic',
    label: 'Romantic',
    emoji: '💕',
    color: 'bg-pink-500',
    description: 'Feeling loving and affectionate',
    therapeuticGoal: 'Nurture beautiful feelings and connections'
  },
  {
    id: 'nostalgic',
    label: 'Nostalgic',
    emoji: '🕰️',
    color: 'bg-purple-500',
    description: 'Feeling sentimental about the past',
    therapeuticGoal: 'Honor memories while creating new ones'
  },
  {
    id: 'focused',
    label: 'Focused',
    emoji: '🎯',
    color: 'bg-indigo-500',
    description: 'Feeling concentrated and determined',
    therapeuticGoal: 'Maintain and strengthen concentration'
  },
  {
    id: 'inspired',
    label: 'Inspired',
    emoji: '✨',
    color: 'bg-purple-400',
    description: 'Feeling creative and motivated',
    therapeuticGoal: 'Keep creative fire burning bright'
  },
  {
    id: 'stressed',
    label: 'Stressed',
    emoji: '😰',
    color: 'bg-red-500',
    description: 'Feeling overwhelmed or anxious',
    therapeuticGoal: 'Find calm and reduce stress'
  },
  {
    id: 'bored',
    label: 'Bored',
    emoji: '😐',
    color: 'bg-gray-500',
    description: 'Feeling uninterested or restless',
    therapeuticGoal: 'Transform boredom into excitement'
  }
]

// Helper functions that use the centralized mood system
export function getMoodDefinition(moodId: string): MoodDefinition | undefined {
  return MOODS.find(mood => mood.id === moodId)
}

export function getMoodEmoji(moodId: string): string {
  const mood = getMoodDefinition(moodId)
  return mood?.emoji || '❤️'
}

export function getMoodColor(moodId: string): string {
  const mood = getMoodDefinition(moodId)
  return mood?.color || 'bg-gray-500'
}

export function getMoodLabel(moodId: string): string {
  const mood = getMoodDefinition(moodId)
  return mood?.label || 'Unknown'
}

export function getMoodDescription(moodId: string): string {
  const mood = getMoodDefinition(moodId)
  return mood?.description || 'Mood not defined'
}

export function getMoodTherapeuticGoal(moodId: string): string {
  const mood = getMoodDefinition(moodId)
  return mood?.therapeuticGoal || 'Improve emotional well-being'
}

// Future: Easy switch to human face images using centralized config
export function getMoodIcon(moodId: string, useHumanImages: boolean = false): string {
  if (useHumanImages) {
    // Try to get human face image URL from centralized config
    const humanFaceUrl = getHumanFaceImageUrl(moodId)
    if (humanFaceUrl) {
      // For now, return emoji as fallback
      // Future: This will return a React component with the human face image
      // and fallback to emoji if the image fails to load
      return getMoodEmoji(moodId)
    }
  }
  return getMoodEmoji(moodId)
}

// Future: Function to get human face image component (when ready to implement)
export function getMoodImageComponent(moodId: string): { url: string | null; fallback: string } {
  const humanFaceUrl = getHumanFaceImageUrl(moodId)
  return {
    url: humanFaceUrl,
    fallback: getMoodEmoji(moodId)
  }
}

// Content type utilities
export function getContentTypeColor(type: string): string {
  const colorMap: Record<string, string> = {
    music: 'bg-content-music',
    movie: 'bg-content-movie',
    book: 'bg-content-book',
    podcast: 'bg-content-podcast'
  }
  return colorMap[type] || 'bg-gray-500'
}

// Export the centralized config for easy access
export { MOOD_ICON_CONFIG } from '../config/moodConfig'

// Future: Function to easily switch between emoji and human face images
export function setMoodImageMode(useHumanImages: boolean) {
  // This will be handled by the centralized config
  MOOD_ICON_CONFIG.useHumanImages = useHumanImages
}

// Future: Function to get all available moods for easy filtering/display
export function getAllMoods(): MoodDefinition[] {
  return MOODS
}

// Future: Function to get moods by category
export function getMoodsByCategory(category: 'positive' | 'negative' | 'neutral'): MoodDefinition[] {
  const categoryMap: Record<string, string[]> = {
    positive: ['happy', 'excited', 'relaxed', 'energetic', 'calm', 'romantic', 'inspired', 'focused'],
    negative: ['sad', 'stressed', 'bored'],
    neutral: ['nostalgic']
  }
  
  const moodIds = categoryMap[category] || []
  return MOODS.filter(mood => moodIds.includes(mood.id))
}
