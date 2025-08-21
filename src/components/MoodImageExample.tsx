
import { MOOD_ICON_CONFIG, setMoodImageMode, getImageSizeClass } from '../config/moodConfig'
import { getMoodIcon, getAllMoods } from '../lib/utils'

// Example component showing how the mood image system works
const MoodImageExample = () => {
  const moods = getAllMoods()
  const currentSize = getImageSizeClass(MOOD_ICON_CONFIG.imageSize)

  const handleToggleImageMode = () => {
    setMoodImageMode(!MOOD_ICON_CONFIG.useHumanImages)
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Mood Image System Demo
      </h3>
      
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm font-medium text-gray-600">
            Current Mode: <span className="font-bold">{MOOD_ICON_CONFIG.useHumanImages ? 'Human Face Images' : 'Emojis'}</span>
          </span>
          <button
            onClick={handleToggleImageMode}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            Toggle Mode
          </button>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Image Size: {currentSize}</p>
          <p>Fallback to Emoji: {MOOD_ICON_CONFIG.fallbackToEmoji ? 'Enabled' : 'Disabled'}</p>
          <p>Image Format: {MOOD_ICON_CONFIG.imageFormat}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {moods.map((mood) => (
          <div key={mood.id} className="text-center">
            <div className={`${currentSize} mx-auto mb-2 flex items-center justify-center rounded-full ${mood.color} text-white text-2xl`}>
              {getMoodIcon(mood.id, MOOD_ICON_CONFIG.useHumanImages)}
            </div>
            <div className="text-xs font-medium text-gray-700 capitalize">{mood.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">How It Works:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• When <code>useHumanImages: false</code> → Shows emojis</li>
          <li>• When <code>useHumanImages: true</code> → Shows human face images</li>
          <li>• If human face image fails → Falls back to emoji</li>
          <li>• All images are sized to match emoji dimensions</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Future Implementation:</h4>
        <p className="text-sm text-blue-700">
          When you're ready to use human face images, simply:
        </p>
        <ol className="text-sm text-blue-700 mt-2 space-y-1">
          <li>1. Add human face images to <code>/public/assets/mood-faces/</code></li>
          <li>2. Update <code>HUMAN_FACE_MAPPING</code> in moodConfig.ts</li>
          <li>3. Set <code>useHumanImages: true</code></li>
        </ol>
      </div>
    </div>
  )
}

export default MoodImageExample
