import { useState } from 'react'
import { Heart, Plus, X, Calendar, TrendingUp, Activity, Users, Zap, Coffee, Moon, Sun, Cloud, CloudRain } from 'lucide-react'
import { 
  getAllMoods, 
  getMoodIcon, 
  getMoodColor, 
  getMoodTherapeuticGoal,
  MOOD_ICON_CONFIG 
} from '../lib/utils'

interface MoodEntry {
  id: string
  feeling: string
  intensity: number
  context: string
  triggers: string
  notes: string
  location: string
  weather: string
  activity: string
  socialContext: string
  energyLevel: number
  stressLevel: number
  sleepQuality: number
  moodDurationMinutes: number
  moodChangeReason: string
  timestamp: Date
}

const MoodTracker = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedMood, setSelectedMood] = useState('')
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([
    {
      id: '1',
      feeling: 'happy',
      intensity: 8,
      context: 'Work',
      triggers: 'Completed a big project',
      notes: 'Felt accomplished and proud of my work',
      location: 'Office',
      weather: 'Sunny',
      activity: 'Working',
      socialContext: 'Team collaboration',
      energyLevel: 9,
      stressLevel: 2,
      sleepQuality: 8,
      moodDurationMinutes: 240,
      moodChangeReason: 'Project completion',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: '2',
      feeling: 'stressed',
      intensity: 6,
      context: 'Personal',
      triggers: 'Upcoming deadline',
      notes: 'Need to find ways to manage this stress better',
      location: 'Home',
      weather: 'Cloudy',
      activity: 'Planning',
      socialContext: 'Alone',
      energyLevel: 5,
      stressLevel: 7,
      sleepQuality: 6,
      moodDurationMinutes: 180,
      moodChangeReason: 'Work pressure',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
    },
    {
      id: '3',
      feeling: 'relaxed',
      intensity: 7,
      context: 'Leisure',
      triggers: 'Weekend break',
      notes: 'Finally feeling at peace after a busy week',
      location: 'Park',
      weather: 'Sunny',
      activity: 'Walking',
      socialContext: 'With friends',
      energyLevel: 6,
      stressLevel: 1,
      sleepQuality: 9,
      moodDurationMinutes: 300,
      moodChangeReason: 'Weekend relaxation',
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000)
    }
  ])

  // Use centralized mood system
  const moods = getAllMoods()

  const activities = [
    'Working', 'Exercising', 'Socializing', 'Reading', 'Watching TV',
    'Cooking', 'Walking', 'Meditating', 'Shopping', 'Studying'
  ]

  const socialContexts = [
    'Alone', 'With friends', 'With family', 'At work', 'In public',
    'One-on-one', 'Group setting', 'Online', 'Phone call'
  ]

  const weatherOptions = [
    'Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Snowy', 'Windy', 'Clear', 'Overcast'
  ]

  const handleQuickMood = (moodId: string) => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      feeling: moodId,
      intensity: 5,
      context: 'Quick Entry',
      triggers: 'Quick mood check',
      notes: '',
      location: 'Unknown',
      weather: 'Unknown',
      activity: 'Unknown',
      socialContext: 'Unknown',
      energyLevel: 5,
      stressLevel: 5,
      sleepQuality: 5,
      moodDurationMinutes: 0,
      moodChangeReason: 'Quick entry',
      timestamp: new Date()
    }
    setMoodEntries(prev => [newEntry, ...prev])
  }

  const handleDetailedMood = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle detailed mood submission
    setShowModal(false)
  }

  const getMoodInsight = (moodId: string) => {
    return getMoodTherapeuticGoal(moodId)
  }

  const getMoodTrend = (entries: MoodEntry[]) => {
    if (entries.length < 2) return "Not enough data yet"
    
    const recentMoods = entries.slice(0, 3).map(entry => entry.feeling)
    const positiveMoods = ['happy', 'excited', 'relaxed', 'calm', 'inspired', 'romantic']
    const positiveCount = recentMoods.filter(mood => positiveMoods.includes(mood)).length
    
    if (positiveCount >= 2) return "Your mood has been trending positive lately! 🎉"
    if (positiveCount === 1) return "Your mood has been mixed. Consider what's helping and what's not."
    return "Your mood has been challenging lately. Remember, it's okay to seek support and mood-boosting content."
  }

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Track Your Emotional Journey
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Monitor your moods, understand your patterns, and discover what helps improve your emotional well-being.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Quick Mood Input */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How are you feeling right now?
            </h3>
            <p className="text-gray-600">
              Quick mood check to help us understand your current emotional state
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleQuickMood(mood.id)}
                className="p-4 rounded-2xl transition-all duration-200 hover:scale-105 bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg border-2 border-transparent hover:border-primary-200"
              >
                <div className="text-3xl mb-2">
                  {/* Future: Easy switch between emoji and custom icons */}
                  {getMoodIcon(mood.id, MOOD_ICON_CONFIG.useCustomIcons)}
                </div>
                <div className="text-sm font-medium capitalize">{mood.label}</div>
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              <span>Log Detailed Mood</span>
            </button>
          </div>
        </div>

        {/* Mood Insights */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Current Mood Status */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary-600" />
              Mood Insights
            </h3>
            {moodEntries.length > 0 && (
              <div>
                <p className="text-gray-600 mb-3">
                  {getMoodInsight(moodEntries[0].feeling)}
                </p>
                <p className="text-sm text-gray-500">
                  {getMoodTrend(moodEntries)}
                </p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-primary-600" />
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{moodEntries.length}</div>
                <div className="text-sm text-gray-600">Moods Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {moodEntries.length > 0 ? Math.round(moodEntries.reduce((acc, entry) => acc + entry.intensity, 0) / moodEntries.length) : 0}
                </div>
                <div className="text-sm text-gray-600">Avg. Intensity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mood History */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Your Mood History
          </h3>
          
          {moodEntries.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No mood entries yet. Start tracking to see your emotional patterns!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {moodEntries.map((entry) => (
                <div key={entry.id} className="border border-gray-200 rounded-2xl p-6 hover:border-primary-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${getMoodColor(entry.feeling)}`}>
                        {/* Future: Easy switch between emoji and custom icons */}
                        {getMoodIcon(entry.feeling, MOOD_ICON_CONFIG.useCustomIcons)}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 capitalize">
                          {entry.feeling}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Intensity</div>
                      <div className="text-lg font-semibold text-primary-600">{entry.intensity}/10</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Context</div>
                      <div className="text-gray-900">{entry.context}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Activity</div>
                      <div className="text-gray-900">{entry.activity}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Location</div>
                      <div className="text-gray-900">{entry.location}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Weather</div>
                      <div className="text-gray-900">{entry.weather}</div>
                    </div>
                  </div>
                  
                  {entry.notes && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Notes</div>
                      <div className="text-gray-900">{entry.notes}</div>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4" />
                      <span>Energy: {entry.energyLevel}/10</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{entry.socialContext}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Moon className="w-4 h-4" />
                      <span>Sleep: {entry.sleepQuality}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detailed Mood Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Log Detailed Mood</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleDetailedMood} className="space-y-6">
              {/* Mood Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How are you feeling?</label>
                <div className="grid grid-cols-4 gap-3">
                  {moods.map((mood) => (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setSelectedMood(mood.id)}
                      className={`p-3 rounded-xl transition-all duration-200 ${
                        selectedMood === mood.id
                          ? `${mood.color} text-white`
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {/* Future: Easy switch between emoji and custom icons */}
                        {getMoodIcon(mood.id, MOOD_ICON_CONFIG.useCustomIcons)}
                      </div>
                      <div className="text-xs capitalize">{mood.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intensity: {selectedMood ? `How ${selectedMood} are you?` : 'How strong is this feeling?'}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="5"
                  className="w-full slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Very Low</span>
                  <span>Very High</span>
                </div>
              </div>

              {/* Context and Triggers */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Context</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select context</option>
                    <option>Work</option>
                    <option>Personal</option>
                    <option>Social</option>
                    <option>Health</option>
                    <option>Leisure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Main Trigger</label>
                  <input
                    type="text"
                    placeholder="What triggered this mood?"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Activity and Social Context */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Activity</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select activity</option>
                    {activities.map(activity => (
                      <option key={activity}>{activity}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Social Context</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Select social context</option>
                    {socialContexts.map(context => (
                      <option key={context}>{context}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Energy, Stress, and Sleep */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Energy Level</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="5"
                    className="w-full slider"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stress Level</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="5"
                    className="w-full slider"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sleep Quality</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="5"
                    className="w-full slider"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any additional thoughts about your mood..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Save Mood Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default MoodTracker
