import { useState, useMemo } from 'react'
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Bookmark, 
  Play, 
  Share2, 
  Trash2, 
  Music,
  Film,
  BookOpen,
  Mic,
  Star,
  Tag
} from 'lucide-react'
import type { SavedContent as SavedContentType } from '../../types'

interface SavedContentProps {
  savedContent: SavedContentType[]
  onRemoveContent: (contentId: string) => void
  onPlayContent: (content: SavedContentType) => void
  onShareContent: (content: SavedContentType) => void
  onRateContent: (contentId: string, rating: number) => void
}

const SavedContent = ({ 
  savedContent, 
  onRemoveContent, 
  onPlayContent, 
  onShareContent, 
  onRateContent 
}: SavedContentProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedMood, setSelectedMood] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'title'>('date')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const contentTypes = [
    { id: 'all', label: 'All Types', icon: Bookmark },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'movie', label: 'Movies', icon: Film },
    { id: 'book', label: 'Books', icon: BookOpen },
    { id: 'podcast', label: 'Podcasts', icon: Mic }
  ]

  const moodFilters = [
    { id: 'all', label: 'All Moods', color: 'bg-gray-100' },
    { id: 'happy', label: 'Happy', color: 'bg-yellow-100' },
    { id: 'sad', label: 'Sad', color: 'bg-blue-100' },
    { id: 'relaxed', label: 'Relaxed', color: 'bg-green-100' },
    { id: 'stressed', label: 'Stressed', color: 'bg-red-100' },
    { id: 'bored', label: 'Bored', color: 'bg-purple-100' },
    { id: 'inspired', label: 'Inspired', color: 'bg-orange-100' }
  ]

  const filteredContent = useMemo(() => {
    let filtered = savedContent

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by content type
    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.content.type === selectedType)
    }

    // Filter by mood
    if (selectedMood !== 'all') {
      filtered = filtered.filter(item => item.content.mood === selectedMood)
    }

    // Sort content
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        case 'title':
          return a.content.title.localeCompare(b.content.title)
        default:
          return 0
      }
    })

    return filtered
  }, [savedContent, searchQuery, selectedType, selectedMood, sortBy])

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'music': return <Music className="w-4 h-4" />
      case 'movie': return <Film className="w-4 h-4" />
      case 'book': return <BookOpen className="w-4 h-4" />
      case 'podcast': return <Mic className="w-4 h-4" />
      default: return <Bookmark className="w-4 h-4" />
    }
  }

  const getContentTypeColor = (type: string) => {
    switch (type) {
      case 'music': return 'bg-purple-100 text-purple-700'
      case 'movie': return 'bg-red-100 text-red-700'
      case 'book': return 'bg-blue-100 text-blue-700'
      case 'podcast': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(new Date(date))
  }

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRateContent(savedContent.find(item => item.content.id === savedContent[0].content.id)?.id || '', star)}
            className="text-gray-300 hover:text-yellow-400 transition-colors"
          >
            <Star className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : ''}`} />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Saved Content</h1>
        <p className="text-lg text-gray-600">Your personal collection of mood-boosting content</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search saved content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-white text-primary-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Content Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Content Type</label>
                <div className="space-y-2">
                  {contentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors ${
                        selectedType === type.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <type.icon className="w-4 h-4" />
                      <span className="text-sm">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Mood</label>
                <div className="space-y-2">
                  {moodFilters.map((mood) => (
                    <button
                      key={mood.id}
                      onClick={() => setSelectedMood(mood.id)}
                      className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors ${
                        selectedMood === mood.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${mood.color}`}></div>
                      <span className="text-sm">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Sort By</label>
                <div className="space-y-2">
                  {[
                    { value: 'date', label: 'Date Saved' },
                    { value: 'rating', label: 'Rating' },
                    { value: 'title', label: 'Title' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value as 'date' | 'rating' | 'title')}
                      className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors ${
                        sortBy === option.value
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="text-sm">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredContent.length} of {savedContent.length} saved items
        </p>
      </div>

      {/* Content Grid/List */}
      {filteredContent.length === 0 ? (
        <div className="text-center py-16">
          <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No saved content found</h3>
          <p className="text-gray-500">
            {searchQuery || selectedType !== 'all' || selectedMood !== 'all'
              ? 'Try adjusting your filters or search terms'
              : 'Start saving content to build your personal library'
            }
          </p>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 ${
                viewMode === 'list' ? 'flex items-start space-x-4 p-6' : 'p-6'
              }`}
            >
              {/* Content Image */}
              <div className={`${viewMode === 'list' ? 'w-24 h-24 flex-shrink-0' : 'w-full h-48'} rounded-xl overflow-hidden mb-4`}>
                <img
                  src={item.content.imageUrl}
                  alt={item.content.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Content Info */}
              <div className="flex-1">
                {/* Content Type Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getContentTypeColor(item.content.type)}`}>
                    {getContentTypeIcon(item.content.type)}
                    <span className="capitalize">{item.content.type}</span>
                  </span>
                  <span className="text-xs text-gray-500">{formatDate(item.savedAt)}</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.content.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.content.description}
                </p>

                {/* Tags */}
                {item.content.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.content.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {item.content.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{item.content.tags.length - 3} more</span>
                    )}
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Rating:</span>
                    {renderRatingStars(item.rating || 0)}
                  </div>
                  <span className="text-sm text-gray-500">via {item.content.source}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onPlayContent(item)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-primary-600 text-white py-2 px-4 rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm font-medium">Play</span>
                  </button>
                  
                  <button
                    onClick={() => onShareContent(item)}
                    className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => onRemoveContent(item.id)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SavedContent
