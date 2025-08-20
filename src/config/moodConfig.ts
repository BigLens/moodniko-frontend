// Centralized mood configuration for easy maintenance and future improvements
export interface MoodIconConfig {
  useHumanImages: boolean // Toggle between emoji and human face images
  humanImagePath: string // Path for human expression images
  fallbackToEmoji: boolean // Always fallback to emoji if human image fails
  imageSize: 'sm' | 'md' | 'lg' | 'xl' // Image sizing (should match emoji sizes)
  animationEnabled: boolean // Enable/disable mood image animations
  imageFormat: 'jpg' | 'png' | 'webp' // Preferred image format
}

export interface MoodCategory {
  id: string
  name: string
  description: string
  moodIds: string[]
  color: string
  icon: string
}

// Easy configuration to switch between emoji and human face images
export const MOOD_ICON_CONFIG: MoodIconConfig = {
  useHumanImages: false, // Toggle this to switch between emoji and human face images
  humanImagePath: '/assets/mood-faces/', // Path for human expression images
  fallbackToEmoji: true, // Always fallback to emoji if human image fails
  imageSize: 'lg', // Default image size (should match emoji size)
  animationEnabled: true, // Enable/disable mood image animations
  imageFormat: 'webp' // Preferred format for human images
}

// Mood categories for better organization
export const MOOD_CATEGORIES: MoodCategory[] = [
  {
    id: 'positive',
    name: 'Positive Emotions',
    description: 'Uplifting and energizing feelings',
    moodIds: ['happy', 'excited', 'energetic', 'inspired', 'romantic'],
    color: 'bg-green-100',
    icon: '✨'
  },
  {
    id: 'calm',
    name: 'Calm & Peaceful',
    description: 'Tranquil and balanced states',
    moodIds: ['relaxed', 'calm', 'focused'],
    color: 'bg-blue-100',
    icon: '🧘'
  },
  {
    id: 'challenging',
    name: 'Challenging Emotions',
    description: 'Difficult feelings that need support',
    moodIds: ['sad', 'stressed', 'bored'],
    color: 'bg-red-100',
    icon: '💙'
  },
  {
    id: 'reflective',
    name: 'Reflective & Nostalgic',
    description: 'Thoughtful and memory-based emotions',
    moodIds: ['nostalgic'],
    color: 'bg-purple-100',
    icon: '🕰️'
  }
]

// Human face/expression image mapping for each mood
export const HUMAN_FACE_MAPPING: Record<string, string> = {
  // Example of how human face images would be mapped
  // happy: 'happy-face.webp',        // Smiling, joyful expression
  // sad: 'sad-face.webp',            // Downcast, melancholic expression
  // excited: 'excited-face.webp',    // Bright, enthusiastic expression
  // relaxed: 'relaxed-face.webp',    // Calm, peaceful expression
  // stressed: 'stressed-face.webp',  // Tense, worried expression
  // bored: 'bored-face.webp',        // Uninterested, listless expression
  // inspired: 'inspired-face.webp',  // Creative, motivated expression
  // focused: 'focused-face.webp',    // Concentrated, determined expression
  // calm: 'calm-face.webp',          // Centered, balanced expression
  // romantic: 'romantic-face.webp',  // Loving, affectionate expression
  // nostalgic: 'nostalgic-face.webp', // Thoughtful, sentimental expression
  // energetic: 'energetic-face.webp' // Vital, dynamic expression
}

// Function to easily switch between emoji and human face images
export function setMoodImageMode(useHumanImages: boolean) {
  MOOD_ICON_CONFIG.useHumanImages = useHumanImages
  // Could also trigger a re-render or update components
  console.log(`Mood image mode changed to: ${useHumanImages ? 'Human Face Images' : 'Emojis'}`)
}

// Function to get image size classes (should match emoji sizes)
export function getImageSizeClass(size: MoodIconConfig['imageSize']): string {
  const sizeMap = {
    sm: 'w-6 h-6',      // text-lg equivalent
    md: 'w-8 h-8',      // text-2xl equivalent
    lg: 'w-12 h-12',    // text-3xl equivalent
    xl: 'w-16 h-16'     // text-4xl equivalent
  }
  return sizeMap[size]
}

// Function to get mood category
export function getMoodCategory(moodId: string): MoodCategory | undefined {
  return MOOD_CATEGORIES.find(category => category.moodIds.includes(moodId))
}

// Function to get all moods in a category
export function getMoodsByCategory(categoryId: string): string[] {
  const category = MOOD_CATEGORIES.find(cat => cat.id === categoryId)
  return category?.moodIds || []
}

// Function to validate human face image paths
export function validateHumanFaceImage(moodId: string): boolean {
  if (!MOOD_ICON_CONFIG.useHumanImages) return false
  
  const imagePath = HUMAN_FACE_MAPPING[moodId]
  if (!imagePath) return false
  
  // Future: Add actual file validation logic
  // For now, just check if the mapping exists
  return true
}

// Function to get human face image URL
export function getHumanFaceImageUrl(moodId: string): string | null {
  if (!MOOD_ICON_CONFIG.useHumanImages) return null
  
  const imageFile = HUMAN_FACE_MAPPING[moodId]
  if (!imageFile) return null
  
  return `${MOOD_ICON_CONFIG.humanImagePath}${imageFile}`
}

// Export default configuration
export default {
  MOOD_ICON_CONFIG,
  MOOD_CATEGORIES,
  HUMAN_FACE_MAPPING,
  setMoodImageMode,
  getImageSizeClass,
  getMoodCategory,
  getMoodsByCategory,
  validateHumanFaceImage,
  getHumanFaceImageUrl
}
