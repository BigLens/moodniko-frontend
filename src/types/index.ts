// User Types
export interface User {
  id: string
  email: string
  displayName?: string
  bio?: string
  createdAt: Date
  updatedAt: Date
}

export interface UserPreferences {
  id: string
  userId: string
  displayName?: string
  bio?: string
  preferredContentTypes: string[]
  moodGoals: string[]
  notificationSettings: NotificationSettings
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  moodReminders: boolean
  contentRecommendations: boolean
}

// Auth Types
export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  confirmPassword: string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
}

// Mood Types
export interface Mood {
  id: string
  userId: string
  moodType: string
  intensity: number
  notes?: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface MoodDto {
  moodType: string
  intensity: number
  notes?: string
  tags?: string[]
}

export interface MoodHistory {
  id: string
  userId: string
  moods: Mood[]
  streak: number
  averageMood: number
  totalEntries: number
}

// Content Types
export interface Content {
  id: string
  title: string
  type: 'music' | 'movie' | 'book' | 'podcast'
  mood: string
  source: string
  imageUrl: string
  description: string
  url?: string
  duration?: number
  rating?: number
  tags: string[]
}

export interface ContentRecommendation {
  id: string
  content: Content
  score: number
  reason: string
  moodMatch: string
  userPreferenceMatch: number
}

export interface SavedContent {
  id: string
  userId: string
  contentId: string
  content: Content
  savedAt: Date
  notes?: string
  rating?: number
}

// Recommendation Types
export interface RecommendationRequest {
  userId: string
  currentMood: string
  preferredContentTypes: string[]
  limit?: number
  includeSaved?: boolean
}

export interface RecommendationMetrics {
  accuracy: number
  userSatisfaction: number
  diversity: number
  novelty: number
  totalRecommendations: number
}

// Navigation Types
export interface NavigationItem {
  id: string
  label: string
  path: string
  icon: string
  requiresAuth: boolean
}

// UI State Types
export interface AppState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  currentMood: string | null
  selectedContentTypes: string[]
}

// Form Types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'select' | 'textarea' | 'number'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: {
    minLength?: number
    maxLength?: number
    pattern?: string
    message?: string
  }
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Error Types
export interface ApiError {
  message: string
  statusCode: number
  error: string
  details?: Record<string, unknown>
}
