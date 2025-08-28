import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Hero from './components/Hero'
import ContentRecommendations from './components/ContentRecommendations'
import MoodTracker from './components/MoodTracker'
import Stats from './components/Stats'
import AuthPage from './components/auth/AuthPage'
import UserProfile from './components/profile/UserProfile'
import SavedContent from './components/content/SavedContent'
import Settings from './components/settings/Settings'
import Analytics from './components/analytics/Analytics'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import MentalHealthResources from './components/MentalHealthResources'
import { User, UserPreferences, MoodHistory, SavedContent as SavedContentType, RecommendationMetrics } from './types'

// Mock data for development
const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  displayName: 'John Doe',
  bio: 'Passionate about emotional wellness and personal growth',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date()
}

const mockUserPreferences: UserPreferences = {
  id: '1',
  userId: '1',
  displayName: 'John Doe',
  bio: 'Passionate about emotional wellness and personal growth',
  preferredContentTypes: ['music', 'movie', 'book'],
  moodGoals: ['stress-relief', 'happiness'],
  notificationSettings: {
    email: true,
    push: true,
    moodReminders: true,
    contentRecommendations: true
  }
}

const mockMoodHistory: MoodHistory = {
  id: '1',
  userId: '1',
  moods: [
    { id: '1', userId: '1', moodType: 'happy', intensity: 4, notes: 'Great day!', tags: ['work', 'friends'], createdAt: new Date('2024-01-15'), updatedAt: new Date('2024-01-15') },
    { id: '2', userId: '1', moodType: 'relaxed', intensity: 3, notes: 'Peaceful evening', tags: ['home', 'meditation'], createdAt: new Date('2024-01-14'), updatedAt: new Date('2024-01-14') },
    { id: '3', userId: '1', moodType: 'stressed', intensity: 2, notes: 'Work pressure', tags: ['work'], createdAt: new Date('2024-01-13'), updatedAt: new Date('2024-01-13') }
  ],
  streak: 3,
  averageMood: 3.0,
  totalEntries: 3
}

const mockSavedContent: SavedContentType[] = [
  {
    id: '1',
    userId: '1',
    contentId: '1',
    content: {
      id: '1',
      title: 'Happy - Pharrell Williams',
      type: 'music',
      mood: 'happy',
      source: 'Spotify',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
      description: 'Keep your positive energy flowing with this upbeat anthem',
      tags: ['upbeat', 'positive', 'energy']
    },
    savedAt: new Date('2024-01-15'),
    notes: 'Perfect for morning motivation',
    rating: 5
  },
  {
    id: '2',
    userId: '1',
    contentId: '2',
    content: {
      id: '2',
      title: 'The Secret Life of Walter Mitty',
      type: 'movie',
      mood: 'happy',
      source: 'TMDB',
      imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
      description: 'A feel-good adventure that will maintain your happy spirit',
      tags: ['adventure', 'feel-good', 'inspiration']
    },
    savedAt: new Date('2024-01-14'),
    notes: 'Great for lifting spirits',
    rating: 4
  }
]

const mockRecommendationMetrics: RecommendationMetrics = {
  accuracy: 0.85,
  userSatisfaction: 0.78,
  diversity: 0.72,
  novelty: 0.65,
  totalRecommendations: 24
}

const App = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Simulate authentication
  const handleLogin = async () => {
    setIsLoading(true)
    setError(null)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock successful login
    setUser(mockUser)
    setIsLoading(false)
  }

  const handleRegister = async () => {
    setIsLoading(true)
    setError(null)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock successful registration
    setUser(mockUser)
    setIsLoading(false)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleUpdateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates })
    }
  }

  const handleUpdatePreferences = (preferences: Partial<UserPreferences>) => {
    // Update user preferences logic
    console.log('Updating preferences:', preferences)
  }

  const handleRemoveContent = (contentId: string) => {
    // Remove saved content logic
    console.log('Removing content:', contentId)
  }

  const handlePlayContent = (content: SavedContentType) => {
    // Play content logic
    console.log('Playing content:', content)
  }

  const handleShareContent = (content: SavedContentType) => {
    // Share content logic
    console.log('Sharing content:', content)
  }

  const handleRateContent = (contentId: string, rating: number) => {
    // Rate content logic
    console.log('Rating content:', contentId, rating)
  }

  const handleDeleteAccount = () => {
    // Delete account logic
    console.log('Deleting account')
    setUser(null)
  }

  const handleExportData = () => {
    // Export data logic
    console.log('Exporting data')
  }

  // Check if user is authenticated
  const isAuthenticated = !!user

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <Navigation 
          user={user} 
          onLogout={handleLogout}
        />

        {/* Main Content */}
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              isAuthenticated ? (
                <Dashboard user={user} />
              ) : (
                <>
                  <Hero />
                  <ContentRecommendations />
                  <MoodTracker />
                  <Stats />
                </>
              )
            } />
            
            <Route path="/login" element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <AuthPage 
                  onLogin={handleLogin}
                  onRegister={handleRegister}
                  isLoading={isLoading}
                  error={error}
                />
              )
            } />
            
            <Route path="/register" element={
              isAuthenticated ? (
                <Navigate to="/" replace />
              ) : (
                <AuthPage 
                  onLogin={handleLogin}
                  onRegister={handleRegister}
                  isLoading={isLoading}
                  error={error}
                />
              )
            } />

            {/* Public Routes */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/resources" element={<MentalHealthResources />} />

            {/* Protected Routes */}
            <Route path="/mood-tracker" element={
              isAuthenticated ? (
                <MoodTracker />
              ) : (
                <Navigate to="/login" replace />
              )
            } />

            <Route path="/discover" element={
              <ContentRecommendations />
            } />

            <Route path="/saved" element={
              isAuthenticated ? (
                <SavedContent 
                  savedContent={mockSavedContent}
                  onRemoveContent={handleRemoveContent}
                  onPlayContent={handlePlayContent}
                  onShareContent={handleShareContent}
                  onRateContent={handleRateContent}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } />

            <Route path="/analytics" element={
              isAuthenticated ? (
                <Analytics 
                  moodHistory={mockMoodHistory.moods}
                  savedContent={mockSavedContent}
                  recommendationMetrics={mockRecommendationMetrics}
                  onExportData={handleExportData}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } />

            <Route path="/profile" element={
              isAuthenticated ? (
                <UserProfile 
                  user={user}
                  moodHistory={mockMoodHistory}
                  onUpdateProfile={handleUpdateProfile}
                  isLoading={isLoading}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } />

            <Route path="/settings" element={
              isAuthenticated ? (
                <Settings 
                  userPreferences={mockUserPreferences}
                  onUpdatePreferences={handleUpdatePreferences}
                  onDeleteAccount={handleDeleteAccount}
                  onExportData={handleExportData}
                  isLoading={isLoading}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            } />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App