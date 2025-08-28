import { useState } from 'react'
import { 
  User, 
  Mail, 
  Calendar, 
  Edit3, 
  Save, 
  X, 
  Heart, 
  TrendingUp, 
  Award,
  Bookmark,
  Clock,
  Star,
  BarChart3
} from 'lucide-react'
import type { User as UserType, MoodHistory } from '../../types'

interface UserProfileProps {
  user: UserType
  moodHistory: MoodHistory
  onUpdateProfile: (updates: Partial<UserType>) => void
  isLoading?: boolean
}

const UserProfile = ({ user, moodHistory, onUpdateProfile, isLoading = false }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    email: user.email,
    displayName: user.displayName || '',
    bio: user.bio || ''
  })

  const handleSave = () => {
    onUpdateProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm({
      email: user.email,
      displayName: user.displayName || '',
      bio: user.bio || ''
    })
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date))
  }

  const getMoodTrend = () => {
    if (moodHistory.moods.length < 2) return 'neutral'
    const recent = moodHistory.moods.slice(-7)
    const avg = recent.reduce((sum, mood) => sum + mood.intensity, 0) / recent.length
    if (avg > 3.5) return 'improving'
    if (avg < 2.5) return 'declining'
    return 'stable'
  }

  const getMoodTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-5 h-5 text-green-500" />
      case 'declining': return <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
      default: return <TrendingUp className="w-5 h-5 text-gray-500" />
    }
  }

  const getMoodTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'text-green-600 bg-green-50'
      case 'declining': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Profile</h1>
        <p className="text-lg text-gray-600">Manage your account and view your mood journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Avatar Section */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                {isEditing && (
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Change Avatar
                  </button>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                ) : (
                  <p className="text-gray-900">{user.email}</p>
                )}
              </div>

              {/* Display Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Display Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editForm.displayName}
                    onChange={(e) => handleInputChange('displayName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your display name"
                  />
                ) : (
                  <p className="text-gray-900">{user.displayName || 'Not set'}</p>
                )}
              </div>

              {/* Bio Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={editForm.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="text-gray-900">{user.bio || 'No bio added yet'}</p>
                )}
              </div>

              {/* Member Since */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Member Since
                </label>
                <p className="text-gray-900">{formatDate(user.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Mood Overview */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mood Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Current Streak</span>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="font-semibold">{moodHistory.streak} days</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Entries</span>
                <span className="font-semibold">{moodHistory.totalEntries}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Mood</span>
                <span className="font-semibold">{moodHistory.averageMood.toFixed(1)}/5</span>
              </div>
            </div>
          </div>

          {/* Mood Trend */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mood Trend</h3>
            <div className="text-center">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getMoodTrendColor(getMoodTrend())}`}>
                {getMoodTrendIcon(getMoodTrend())}
                <span className="font-medium capitalize">{getMoodTrend()}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Based on your last 7 entries
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 bg-primary-50 text-primary-700 rounded-xl hover:bg-primary-100 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>View Saved Content</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                <BarChart3 className="w-5 h-5" />
                <span>View Analytics</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Track Mood</span>
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl">
                <Award className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-800">First Entry</p>
                  <p className="text-sm text-yellow-600">Started your mood journey</p>
                </div>
              </div>
              
              {moodHistory.streak >= 7 && (
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                  <Star className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Week Warrior</p>
                    <p className="text-sm text-green-600">7-day mood streak</p>
                  </div>
                </div>
              )}
              
              {moodHistory.totalEntries >= 30 && (
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-800">Dedicated Tracker</p>
                    <p className="text-sm text-blue-600">30+ mood entries</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
