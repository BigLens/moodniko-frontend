import { useState } from 'react'
import { Heart, Play, BookOpen, Film, Music, Mic, ExternalLink, Bookmark, Share2, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { 
  getContentTypeColor, 
  cn, 
  getAllMoods
} from '../lib/utils'

interface ContentItem {
  id: string
  title: string
  description: string
  imageUrl: string
  type: 'music' | 'movie' | 'book' | 'podcast'
  mood: string
  source: string
  rating?: number
  therapeuticBenefit: string
}

const ContentRecommendations = () => {
  const navigate = useNavigate()
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedMood, setSelectedMood] = useState<string>('all')

  // Mock data focused on mood therapy and emotional well-being
  const mockContent: ContentItem[] = [
    {
      id: '1',
      title: 'Happy - Pharrell Williams',
      description: 'An upbeat anthem that instantly lifts your spirits and spreads joy.',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center',
      type: 'music',
      mood: 'happy',
      source: 'Spotify',
      rating: 4.8,
      therapeuticBenefit: 'Mood booster, energy lifter'
    },
    {
      id: '2',
      title: 'The Secret Life of Walter Mitty',
      description: 'A feel-good adventure that inspires you to step out of your comfort zone and embrace life\'s possibilities.',
      imageUrl: 'https://images.unsplash.com/photo-1489599839929-2fa25ead3b93?w=300&h=300&fit=crop&crop=center',
      type: 'movie',
      mood: 'inspired',
      source: 'TMDB',
      rating: 4.6,
      therapeuticBenefit: 'Inspiration, courage builder'
    },
    {
      id: '3',
      title: 'The Alchemist',
      description: 'A magical story about following your dreams that helps you find purpose and hope in difficult times.',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
      type: 'book',
      mood: 'inspired',
      source: 'Google Books',
      rating: 4.7,
      therapeuticBenefit: 'Hope, purpose finder'
    },
    {
      id: '4',
      title: 'The Happiness Lab',
      description: 'Science-based insights into what makes us truly happy and practical strategies to cultivate lasting joy.',
      imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
      type: 'podcast',
      mood: 'focused',
      source: 'Spotify',
      rating: 4.9,
      therapeuticBenefit: 'Happiness science, practical tools'
    },
    {
      id: '5',
      title: 'Good Vibes - Lofi Beats',
      description: 'Gentle, uplifting music perfect for unwinding, reducing anxiety, and finding your calm center.',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop&crop=center',
      type: 'music',
      mood: 'relaxed',
      source: 'Spotify',
      rating: 4.5,
      therapeuticBenefit: 'Anxiety relief, calm inducer'
    },
    {
      id: '6',
      title: 'La La Land',
      description: 'A beautiful musical about dreams and love that reminds you to pursue your passions and find beauty in life.',
      imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=300&fit=crop&crop=center',
      type: 'movie',
      mood: 'romantic',
      source: 'TMDB',
      rating: 4.4,
      therapeuticBenefit: 'Dream encouragement, beauty appreciation'
    },
    {
      id: '7',
      title: 'The Power of Now',
      description: 'Learn mindfulness techniques to manage stress, anxiety, and live in the present moment.',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&crop=center',
      type: 'book',
      mood: 'stressed',
      source: 'Google Books',
      rating: 4.6,
      therapeuticBenefit: 'Stress reduction, mindfulness'
    },
    {
      id: '8',
      title: 'Calm Meditation',
      description: 'Guided meditation sessions designed to reduce stress, improve sleep, and enhance emotional well-being.',
      imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=300&fit=crop&crop=center',
      type: 'podcast',
      mood: 'relaxed',
      source: 'Spotify',
      rating: 4.8,
      therapeuticBenefit: 'Meditation, stress relief'
    }
  ]

  const contentTypes = [
    { id: 'all', label: 'All', icon: Heart, color: 'bg-gray-500' },
    { id: 'music', label: 'Music', icon: Music, color: 'bg-content-music' },
    { id: 'movie', label: 'Movies', icon: Film, color: 'bg-content-movie' },
    { id: 'book', label: 'Books', icon: BookOpen, color: 'bg-content-book' },
    { id: 'podcast', label: 'Podcasts', icon: Mic, color: 'bg-content-podcast' }
  ]

  // Use centralized mood system
  const moods = getAllMoods()
  const moodOptions = [{ id: 'all', label: 'All Moods' }, ...moods.map(mood => ({ id: mood.id, label: mood.label }))]

  const filteredContent = mockContent.filter(item => {
    const typeMatch = selectedType === 'all' || item.type === selectedType
    const moodMatch = selectedMood === 'all' || item.mood === selectedMood
    return typeMatch && moodMatch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'music': return <Music className="w-4 h-4" />
      case 'movie': return <Film className="w-4 h-4" />
      case 'book': return <BookOpen className="w-4 h-4" />
      case 'podcast': return <Mic className="w-4 h-4" />
      default: return <Heart className="w-4 h-4" />
    }
  }

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Mood-Boosting Content
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Handpicked recommendations designed to improve your emotional well-being. 
          Start exploring now, save your therapeutic favorites later! ✨
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-8">
        {/* Content Type Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Type</h3>
          <div className="flex flex-wrap gap-3">
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200",
                  selectedType === type.id
                    ? `${type.color} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                )}
              >
                <type.icon className="w-4 h-4" />
                <span className="font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mood Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Mood</h3>
          <div className="flex flex-wrap gap-3">
            {moodOptions.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200 font-medium",
                  selectedMood === mood.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                )}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto">
        {filteredContent.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No content found</h3>
            <p className="text-gray-500">Try adjusting your filters to discover more mood-boosting content.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <div key={item.id} className="content-card group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={cn(
                      "content-type-badge",
                      getContentTypeColor(item.type)
                    )}>
                      {getTypeIcon(item.type)}
                    </span>
                  </div>
                  {item.rating && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                      ⭐ {item.rating}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors group/save">
                      <Bookmark className="w-5 h-5" />
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/save:opacity-100 transition-opacity whitespace-nowrap">
                        Sign up to save
                      </span>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Therapeutic Benefit */}
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      💚 {item.therapeuticBenefit}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="capitalize">{item.type}</span>
                      <span>•</span>
                      <span>{item.source}</span>
                    </div>
                    
                    <button className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                      Try Now
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Signup CTA */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 text-center">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <UserPlus className="w-10 h-10 text-primary-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to build your emotional wellness library?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Create a free account to save your mood-boosting discoveries, get personalized therapeutic recommendations, 
            and track your emotional journey over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="btn-primary text-lg px-8 py-3"
            >
              Create Free Account
            </button>
            <button 
              onClick={() => navigate('/discover')}
              className="btn-secondary text-lg px-8 py-3"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>

      {/* Load More */}
      {filteredContent.length > 0 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/discover')}
            className="btn-secondary"
          >
            Load More Mood-Boosting Content
          </button>
        </div>
      )}
    </div>
  )
}

export default ContentRecommendations
