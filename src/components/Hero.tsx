import { useState } from 'react'
import { Heart, Sparkles, ArrowRight, Plus, Bookmark, Share2, Play, Music, Film, BookOpen, Mic, Check } from 'lucide-react'
import { 
  getContentTypeColor, 
  getAllMoods, 
  getMoodTherapeuticGoal,
  getMoodIcon
} from '../lib/utils'
import { MOOD_ICON_CONFIG } from '../config/moodConfig'

interface QuickContent {
  id: string
  title: string
  type: 'music' | 'movie' | 'book' | 'podcast'
  mood: string
  source: string
  imageUrl: string
  description: string
}

const Hero = () => {
  const [selectedMood, setSelectedMood] = useState('')
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([])
  const [showContentTypeSelection, setShowContentTypeSelection] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)

  // Use centralized mood system
  const moods = getAllMoods()

  const contentTypes = [
    { id: 'music', label: 'Music', icon: Music, emoji: '🎵', description: 'Songs and playlists' },
    { id: 'movie', label: 'Movies', icon: Film, emoji: '🎬', description: 'Films and shows' },
    { id: 'book', label: 'Books', icon: BookOpen, emoji: '📚', description: 'Books and stories' },
    { id: 'podcast', label: 'Podcasts', icon: Mic, emoji: '🎙️', description: 'Audio content' }
  ]

  // Content that helps improve the user's current mood (mood therapy approach)
  const getMoodTherapyContent = (mood: string, types: string[]): QuickContent[] => {
    const contentMap: Record<string, QuickContent[]> = {
      happy: [
        {
          id: '1',
          title: 'Happy - Pharrell Williams',
          type: 'music',
          mood: 'happy',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
          description: 'Keep your positive energy flowing with this upbeat anthem'
        },
        {
          id: '2',
          title: 'The Secret Life of Walter Mitty',
          type: 'movie',
          mood: 'happy',
          source: 'TMDB',
          imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
          description: 'A feel-good adventure that will maintain your happy spirit'
        },
        {
          id: '3',
          title: 'The Happiness Project',
          type: 'book',
          mood: 'happy',
          source: 'Google Books',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
          description: 'Learn to sustain and grow your happiness'
        },
        {
          id: '4',
          title: 'The Good Life',
          type: 'podcast',
          mood: 'happy',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
          description: 'Stories that will keep your positive mindset strong'
        }
      ],
      sad: [
        {
          id: '5',
          title: 'Good Vibes - Lofi Beats',
          type: 'music',
          mood: 'sad',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center',
          description: 'Gentle, uplifting beats to help lift your spirits'
        },
        {
          id: '6',
          title: 'The Alchemist',
          type: 'book',
          mood: 'sad',
          source: 'Google Books',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
          description: 'An inspiring journey that will help you find hope and purpose'
        },
        {
          id: '7',
          title: 'La La Land',
          type: 'movie',
          mood: 'sad',
          source: 'TMDB',
          imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=300&fit=crop&crop=center',
          description: 'A beautiful musical to brighten your day and lift your mood'
        },
        {
          id: '8',
          title: 'The Happiness Lab',
          type: 'podcast',
          mood: 'sad',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
          description: 'Science-based strategies to improve your emotional well-being'
        }
      ],
      relaxed: [
        {
          id: '9',
          title: 'Calm Meditation',
          type: 'podcast',
          mood: 'relaxed',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
          description: 'Deepen your relaxation with guided meditation'
        },
        {
          id: '10',
          title: 'Peaceful Pianoo',
          type: 'music',
          mood: 'relaxed',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=300&fit=crop&crop=center',
          description: 'Soothing melodies to enhance your peaceful state'
        },
        {
          id: '11',
          title: 'The Art of Stillness',
          type: 'book',
          mood: 'relaxed',
          source: 'Google Books',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
          description: 'Learn to cultivate and maintain inner peace'
        },
        {
          id: '12',
          title: 'Nature Documentaries',
          type: 'movie',
          mood: 'relaxed',
          source: 'TMDB',
          imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
          description: 'Serene visuals to enhance your calm and peaceful mood'
        }
      ],
      stressed: [
        {
          id: '13',
          title: 'Stress Relief Playlist',
          type: 'music',
          mood: 'stressed',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
          description: 'Calming tunes specifically designed to reduce stress and anxiety'
        },
        {
          id: '14',
          title: 'The Power of Now',
          type: 'book',
          mood: 'stressed',
          source: 'Google Books',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
          description: 'Learn mindfulness techniques to manage stress effectively'
        },
        {
          id: '15',
          title: 'Comedy Specials',
          type: 'movie',
          mood: 'stressed',
          source: 'TMDB',
          imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
          description: 'Laughter is the best medicine for stress relief'
        },
        {
          id: '16',
          title: 'Mindful Minutes',
          type: 'podcast',
          mood: 'stressed',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
          description: 'Quick mindfulness practices to help you find calm'
        }
      ],
      bored: [
        {
          id: '17',
          title: 'Adventure Soundtracks',
          type: 'music',
          mood: 'bored',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
          description: 'Energetic music to spark excitement and break boredom'
        },
        {
          id: '18',
          title: 'The Martian',
          type: 'movie',
          mood: 'bored',
          source: 'TMDB',
          imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
          description: 'An exciting survival story that will captivate your attention'
        },
        {
          id: '19',
          title: 'The 7 Habits of Highly Effective People',
          type: 'book',
          mood: 'bored',
          source: 'Google Books',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
          description: 'Transform boredom into productivity and personal growth'
        },
        {
          id: '20',
          title: 'How I Built This',
          type: 'podcast',
          mood: 'bored',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
          description: 'Inspiring entrepreneurial stories to motivate and engage you'
        }
      ],
      inspired: [
        {
          id: '21',
          title: 'Uplifting Soundtracks',
          type: 'music',
          mood: 'inspired',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
          description: 'Keep your inspiration flowing with motivational melodies'
        },
        {
          id: '22',
          title: 'Big Magic',
          type: 'book',
          mood: 'inspired',
          source: 'Google Books',
          imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
          description: 'Nurture your creative spirit and maintain inspiration'
        },
        {
          id: '23',
          title: 'The Pursuit of Happyness',
          type: 'movie',
          mood: 'inspired',
          source: 'TMDB',
          imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
          description: 'A true story of resilience that will fuel your motivation'
        },
        {
          id: '24',
          title: 'TED Talks Daily',
          type: 'podcast',
          mood: 'inspired',
          source: 'Spotify',
          imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
          description: 'Daily doses of inspiration to keep your creative fire burning'
        }
      ]
    }
    
    // Filter content based on selected types
    const allContent = contentMap[mood] || contentMap.happy
    if (types.length === 0 || types.includes('all')) {
      return allContent
    }
    return allContent.filter(item => types.includes(item.type))
  }

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood)
    setShowContentTypeSelection(true)
    setShowRecommendations(false)
    setSelectedContentTypes([])
  }

  const handleContentTypeToggle = (typeId: string) => {
    setSelectedContentTypes(prev => {
      if (prev.includes(typeId)) {
        return prev.filter(id => id !== typeId)
      } else {
        return [...prev, typeId]
      }
    })
  }

  const handleGetRecommendations = () => {
    if (selectedContentTypes.length > 0) {
      setShowRecommendations(true)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'music': return '🎵'
      case 'movie': return '🎬'
      case 'book': return '📚'
      case 'podcast': return '🎙️'
      default: return '❤️'
    }
  }

  const getMoodTherapyMessage = (moodId: string) => {
    return getMoodTherapeuticGoal(moodId)
  }

  const resetFlow = () => {
    setSelectedMood('')
    setSelectedContentTypes([])
    setShowContentTypeSelection(false)
    setShowRecommendations(false)
  }

  return (
    <div className="py-8 px-4">
      {/* Main Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
                 <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
           How are you feeling
           <span className="block text-primary-600">today?</span>
         </h1>
         {/* Production version - Stable deployment */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Share your mood and discover content that will help you feel better. 
          We're here to support your emotional well-being! ✨
        </p>
        
        {/* Mood Selection Grid - Always Visible */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Choose your current mood
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood.id)}
                className={`p-4 rounded-2xl transition-all duration-200 hover:scale-105 ${
                  selectedMood === mood.id 
                    ? `${mood.color} text-white shadow-lg` 
                    : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg border-2 border-transparent hover:border-primary-200'
                }`}
              >
                <div className="text-3xl mb-2">
                  {/* Future: Easy switch between emoji and human face images */}
                  {getMoodIcon(mood.id, MOOD_ICON_CONFIG.useHumanImages)}
                </div>
                <div className="text-sm font-medium capitalize">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Type Selection */}
      {showContentTypeSelection && (
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {getMoodTherapyMessage(selectedMood)} {getMoodIcon(selectedMood, MOOD_ICON_CONFIG.useHumanImages)}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                What type of content would help improve your mood? You can select multiple types!
              </p>
            </div>
            
            {/* Content Type Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleContentTypeToggle(type.id)}
                  className={`p-6 rounded-2xl transition-all duration-200 border-2 ${
                    selectedContentTypes.includes(type.id)
                      ? 'border-primary-500 bg-primary-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-primary-200 hover:bg-primary-50/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      selectedContentTypes.includes(type.id) ? 'bg-primary-100' : 'bg-gray-100'
                    }`}>
                      {type.emoji}
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{type.label}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                    {selectedContentTypes.includes(type.id) && (
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetRecommendations}
                disabled={selectedContentTypes.length === 0}
                className={`btn-primary flex items-center space-x-2 ${
                  selectedContentTypes.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Sparkles className="w-5 h-5" />
                <span>Get Mood-Boosting Content</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={resetFlow} className="btn-secondary">
                Choose Different Mood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Immediate Content Recommendations */}
      {showRecommendations && (
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {getMoodTherapyMessage(selectedMood)} {getMoodIcon(selectedMood, MOOD_ICON_CONFIG.useHumanImages)}
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Here are some {selectedContentTypes.join(', ')} recommendations to help improve your mood
              </p>
              <button onClick={resetFlow} className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                ← Choose different mood or content types
              </button>
            </div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {getMoodTherapyContent(selectedMood, selectedContentTypes).map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 transition-all duration-200 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getContentTypeColor(item.type)}`}>
                          {getTypeIcon(item.type)} {item.type}
                        </span>
                        <span className="text-sm text-gray-500">via {item.source}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors">
                          <Play className="w-4 h-4" />
                          <span className="text-sm font-medium">Try Now</span>
                        </button>
                        
                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors group/save">
                          <Bookmark className="w-4 h-4" />
                          <span className="text-sm font-medium">Save</span>
                          <span className="text-xs text-gray-400 group-hover/save:text-primary-500">
                            (Sign up to save)
                          </span>
                        </button>
                        
                        <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Want to save your mood-boosting favorites and track your emotional journey?
                </h3>
                <p className="text-gray-600 mb-4">
                  Create a free account to build your personal mood therapy library
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="btn-secondary">
                    Continue Exploring
                  </button>
                </div>
              </div>
              
              <button className="btn-primary text-lg px-8 py-4">
                Discover More Mood-Boosting Content
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Preview */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Mood Therapy</h3>
          <p className="text-gray-600">
            Our content is carefully selected to help improve your emotional well-being, not just match your current state.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Emotional Support</h3>
          <p className="text-gray-600">
            Get personalized content recommendations designed to lift your spirits and improve your mood.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Rich Content Library</h3>
          <p className="text-gray-600">
            Access millions of therapeutic content pieces from Spotify, TMDB, Google Books, and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
