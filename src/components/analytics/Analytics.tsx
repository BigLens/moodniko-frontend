import { useState, useMemo } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Heart, 
  Music, 
  Film, 
  BookOpen, 
  Mic,
  Target,
  Award,
  Clock,
  Activity,
  PieChart,
  LineChart,
  Download
} from 'lucide-react'
import type { Mood, RecommendationMetrics, SavedContent } from '../../types'

interface AnalyticsProps {
  moodHistory: Mood[]
  savedContent: SavedContent[] // Use proper type instead of any
  recommendationMetrics: RecommendationMetrics
  onExportData: () => void
}

const Analytics = ({ moodHistory, savedContent, recommendationMetrics, onExportData }: AnalyticsProps) => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [selectedMetric, setSelectedMetric] = useState<'mood' | 'content' | 'recommendations'>('mood')

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ]

  const metrics = [
    { value: 'mood', label: 'Mood Trends', icon: Heart },
    { value: 'content', label: 'Content Insights', icon: BarChart3 },
    { value: 'recommendations', label: 'Recommendations', icon: Target }
  ]

  // Calculate mood statistics
  const moodStats = useMemo(() => {
    const filteredMoods = filterMoodsByTimeRange(moodHistory, timeRange)
    
    if (filteredMoods.length === 0) {
      return {
        averageMood: 0,
        moodTrend: 'neutral',
        topMood: 'none',
        moodCount: 0,
        streak: 0
      }
    }

    const averageMood = filteredMoods.reduce((sum, mood) => sum + mood.intensity, 0) / filteredMoods.length
    
    // Calculate trend
    const recentMoods = filteredMoods.slice(-7)
    const olderMoods = filteredMoods.slice(0, -7)
    let moodTrend = 'neutral'
    
    if (recentMoods.length > 0 && olderMoods.length > 0) {
      const recentAvg = recentMoods.reduce((sum, mood) => sum + mood.intensity, 0) / recentMoods.length
      const olderAvg = olderMoods.reduce((sum, mood) => sum + mood.intensity, 0) / olderMoods.length
      moodTrend = recentAvg > olderAvg ? 'improving' : recentAvg < olderAvg ? 'declining' : 'stable'
    }

    // Find top mood
    const moodCounts: Record<string, number> = {}
    filteredMoods.forEach(mood => {
      moodCounts[mood.moodType] = (moodCounts[mood.moodType] || 0) + 1
    })
    const topMood = Object.entries(moodCounts).sort(([,a], [,b]) => b - a)[0]?.[0] || 'none'

    // Calculate streak
    let streak = 0
    for (let i = filteredMoods.length - 1; i >= 0; i--) {
      if (filteredMoods[i].intensity >= 3) {
        streak++
      } else {
        break
      }
    }

    return {
      averageMood: Math.round(averageMood * 10) / 10,
      moodTrend,
      topMood,
      moodCount: filteredMoods.length,
      streak
    }
  }, [moodHistory, timeRange])

  // Calculate content insights
  const contentInsights = useMemo(() => {
    const filteredContent = filterContentByTimeRange(savedContent, timeRange)
    
    const typeCounts: Record<string, number> = {}
    const moodCounts: Record<string, number> = {}
    
    filteredContent.forEach(item => {
      typeCounts[item.content.type] = (typeCounts[item.content.type] || 0) + 1
      moodCounts[item.content.mood] = (moodCounts[item.content.mood] || 0) + 1
    })

    const topContentType = Object.entries(typeCounts).sort(([,a], [,b]) => b - a)[0]?.[0] || 'none'
    const topMood = Object.entries(moodCounts).sort(([,a], [,b]) => b - a)[0]?.[0] || 'none'

    return {
      totalSaved: filteredContent.length,
      topContentType,
      topMood,
      typeDistribution: typeCounts,
      moodDistribution: moodCounts
    }
  }, [savedContent, timeRange])

  const filterMoodsByTimeRange = (moods: Mood[], range: string) => {
    const now = new Date()
    const cutoff = new Date()
    
    switch (range) {
      case '7d':
        cutoff.setDate(now.getDate() - 7)
        break
      case '30d':
        cutoff.setDate(now.getDate() - 30)
        break
      case '90d':
        cutoff.setDate(now.getDate() - 90)
        break
      case '1y':
        cutoff.setFullYear(now.getFullYear() - 1)
        break
    }
    
    return moods.filter(mood => new Date(mood.createdAt) >= cutoff)
  }

  const filterContentByTimeRange = (content: SavedContent[], range: string) => { // Use proper type instead of any
    const now = new Date()
    const cutoff = new Date()
    
    switch (range) {
      case '7d':
        cutoff.setDate(now.getDate() - 7)
        break
      case '30d':
        cutoff.setDate(now.getDate() - 30)
        break
      case '90d':
        cutoff.setDate(now.getDate() - 90)
        break
      case '1y':
        cutoff.setFullYear(now.getFullYear() - 1)
        break
    }
    
    return content.filter(item => new Date(item.savedAt) >= cutoff)
  }

  const getMoodTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-6 h-6 text-green-500" />
      case 'declining': return <TrendingDown className="w-6 h-6 text-red-500" />
      default: return <Activity className="w-6 h-6 text-blue-500" />
    }
  }

  const getMoodTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'text-green-600 bg-green-50'
      case 'declining': return 'text-red-600 bg-red-50'
      default: return 'text-blue-600 bg-blue-50'
    }
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'music': return <Music className="w-5 h-5" />
      case 'movie': return <Film className="w-5 h-5" />
      case 'book': return <BookOpen className="w-5 h-5" />
      case 'podcast': return <Mic className="w-5 h-5" />
      default: return <BarChart3 className="w-5 h-5" />
    }
  }

  const renderMoodTrends = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Mood</p>
              <p className="text-3xl font-bold text-gray-900">{moodStats.averageMood}/5</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Mood Trend</p>
              <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getMoodTrendColor(moodStats.moodTrend)}`}>
                {getMoodTrendIcon(moodStats.moodTrend)}
                <span className="capitalize">{moodStats.moodTrend}</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Top Mood</p>
              <p className="text-xl font-bold text-gray-900 capitalize">{moodStats.topMood}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className="text-3xl font-bold text-gray-900">{moodStats.streak} days</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Mood Chart Placeholder */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Mood Over Time</h3>
          <div className="flex items-center space-x-2">
            <LineChart className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-500">Chart visualization coming soon</span>
          </div>
        </div>
        <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <LineChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Interactive mood chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContentInsights = () => (
    <div className="space-y-6">
      {/* Content Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Saved</p>
              <p className="text-3xl font-bold text-gray-900">{contentInsights.totalSaved}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Top Content Type</p>
              <p className="text-xl font-bold text-gray-900 capitalize">{contentInsights.topContentType}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              {getContentTypeIcon(contentInsights.topContentType)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Preferred Mood</p>
              <p className="text-xl font-bold text-gray-900 capitalize">{contentInsights.topMood}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Type Distribution</h3>
          <div className="space-y-3">
            {Object.entries(contentInsights.typeDistribution).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getContentTypeIcon(type)}
                  <span className="font-medium capitalize">{type}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${(count / contentInsights.totalSaved) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Mood Distribution</h3>
          <div className="space-y-3">
            {Object.entries(contentInsights.moodDistribution).map(([mood, count]) => (
              <div key={mood} className="flex items-center justify-between">
                <span className="font-medium capitalize">{mood}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(count / contentInsights.totalSaved) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderRecommendations = () => (
    <div className="space-y-6">
      {/* Recommendation Quality */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Accuracy</p>
              <p className="text-3xl font-bold text-gray-900">{Math.round(recommendationMetrics.accuracy * 100)}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Satisfaction</p>
              <p className="text-3xl font-bold text-gray-900">{Math.round(recommendationMetrics.userSatisfaction * 100)}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Diversity</p>
              <p className="text-3xl font-bold text-gray-900">{Math.round(recommendationMetrics.diversity * 100)}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <PieChart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-3xl font-bold text-gray-900">{recommendationMetrics.totalRecommendations}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Improvement Suggestions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations for Improvement</h3>
        <div className="space-y-4">
          {recommendationMetrics.accuracy < 0.8 && (
            <div className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <Target className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-800">Improve Recommendation Accuracy</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Try tracking your mood more consistently to help our AI better understand your preferences.
                </p>
              </div>
            </div>
          )}

          {recommendationMetrics.userSatisfaction < 0.7 && (
            <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <Heart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-800">Enhance User Satisfaction</p>
                <p className="text-sm text-blue-700 mt-1">
                  Rate more content and provide feedback to help us personalize your experience.
                </p>
              </div>
            </div>
          )}

          {recommendationMetrics.diversity < 0.6 && (
            <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl">
              <PieChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-green-800">Increase Content Diversity</p>
                <p className="text-sm text-green-700 mt-1">
                  Explore different content types and moods to discover new favorites.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
          <p className="text-lg text-gray-600">Track your mood journey and discover patterns</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 lg:mt-0">
          <button
            onClick={onExportData}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Time Range Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Range</h3>
            <p className="text-sm text-gray-600">Select the period for your analytics</p>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value as '7d' | '30d' | '90d' | '1y')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  timeRange === range.value
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Tabs */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          {metrics.map((metric) => (
            <button
              key={metric.value}
                              onClick={() => setSelectedMetric(metric.value as 'mood' | 'content' | 'recommendations')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                selectedMetric === metric.value
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              <metric.icon className="w-4 h-4" />
              <span>{metric.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {selectedMetric === 'mood' && renderMoodTrends()}
      {selectedMetric === 'content' && renderContentInsights()}
      {selectedMetric === 'recommendations' && renderRecommendations()}
    </div>
  )
}

export default Analytics
