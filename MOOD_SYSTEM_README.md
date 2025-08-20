# Scalable Mood System - MoodNiko Frontend

## Overview
This document explains the scalable mood system implemented in the MoodNiko frontend, designed to easily switch between emojis and human face/expression images while maintaining code maintainability.

## Architecture

### 1. Centralized Configuration (`src/config/moodConfig.ts`)
- **Single source of truth** for all mood-related configurations
- **Easy toggle** between emoji and human face image modes
- **Centralized paths** for human expression image assets
- **Mood categorization** for better organization

### 2. Utility Functions (`src/lib/utils.ts`)
- **Centralized mood definitions** with all mood properties
- **Helper functions** for getting mood data
- **Image switching logic** that respects configuration
- **Fallback mechanisms** for missing human face images

### 3. Component Integration
- **All components** use the centralized mood system
- **Consistent behavior** across the application
- **Easy updates** when mood definitions change

## How to Switch Between Emoji and Human Face Images

### Current State: Using Emojis
```typescript
// In src/config/moodConfig.ts
export const MOOD_ICON_CONFIG: MoodIconConfig = {
  useHumanImages: false, // ← Currently false (using emojis)
  humanImagePath: '/assets/mood-faces/',
  fallbackToEmoji: true,
  imageSize: 'lg',
  animationEnabled: true
}
```

### Future: Switch to Human Face Images
```typescript
// In src/config/moodConfig.ts
export const MOOD_ICON_CONFIG: MoodIconConfig = {
  useHumanImages: true, // ← Change to true
  humanImagePath: '/assets/mood-faces/',
  fallbackToEmoji: true,
  imageSize: 'lg',
  animationEnabled: true
}

// Add human face image mappings
export const HUMAN_FACE_MAPPING: Record<string, string> = {
  happy: 'happy-face.webp',        // Smiling, joyful expression
  sad: 'sad-face.webp',            // Downcast, melancholic expression
  excited: 'excited-face.webp',    // Bright, enthusiastic expression
  relaxed: 'relaxed-face.webp',    // Calm, peaceful expression
  stressed: 'stressed-face.webp',  // Tense, worried expression
  bored: 'bored-face.webp',        // Uninterested, listless expression
  inspired: 'inspired-face.webp',  // Creative, motivated expression
  focused: 'focused-face.webp',    // Concentrated, determined expression
  calm: 'calm-face.webp',          // Centered, balanced expression
  romantic: 'romantic-face.webp',  // Loving, affectionate expression
  nostalgic: 'nostalgic-face.webp', // Thoughtful, sentimental expression
  energetic: 'energetic-face.webp' // Vital, dynamic expression
}
```

## File Structure

```
src/
├── config/
│   └── moodConfig.ts          # Centralized mood configuration
├── lib/
│   └── utils.ts               # Mood utility functions
└── components/
    ├── Hero.tsx               # Uses centralized mood system
    ├── MoodTracker.tsx        # Uses centralized mood system
    └── ContentRecommendations.tsx # Uses centralized mood system
```

## Key Benefits

### 1. **Easy Maintenance**
- **Single file** to update mood definitions
- **Centralized configuration** for image modes
- **Consistent behavior** across all components

### 2. **Future-Proof**
- **Easy switch** between emoji and human face images
- **Scalable architecture** for new mood types
- **Flexible categorization** system

### 3. **Developer Experience**
- **Clear separation** of concerns
- **Type-safe** mood definitions
- **Intuitive API** for mood operations

## Usage Examples

### Getting Mood Data
```typescript
import { 
  getAllMoods, 
  getMoodIcon, 
  getMoodColor, 
  getMoodTherapeuticGoal,
  MOOD_ICON_CONFIG 
} from '../lib/utils'

// Get all available moods
const moods = getAllMoods()

// Get mood icon (respects current configuration)
const icon = getMoodIcon('happy', MOOD_ICON_CONFIG.useHumanImages)

// Get mood color
const color = getMoodColor('happy')

// Get therapeutic goal
const goal = getMoodTherapeuticGoal('happy')
```

### Switching Image Modes
```typescript
import { setMoodImageMode } from '../config/moodConfig'

// Switch to human face images
setMoodImageMode(true)

// Switch back to emojis
setMoodImageMode(false)
```

### Adding New Moods
```typescript
// In src/lib/utils.ts, add to MOODS array
export const MOODS: MoodDefinition[] = [
  // ... existing moods
  {
    id: 'new-mood',
    label: 'New Mood',
    emoji: '🌟',
    color: 'bg-yellow-300',
    description: 'Description of the new mood',
    therapeuticGoal: 'Therapeutic goal for this mood'
  }
]

// If using human face images, also add to moodConfig.ts
export const HUMAN_FACE_MAPPING: Record<string, string> = {
  // ... existing mappings
  'new-mood': 'new-mood-face.webp'
}
```

## Migration Path

### Phase 1: Current Implementation
- Using emojis for all mood representations
- Centralized mood system in place
- All components integrated

### Phase 2: Human Face Image Preparation (Future)
- Design or source human face/expression images
- Place images in `/public/assets/mood-faces/` directory
- Update `HUMAN_FACE_MAPPING` in `moodConfig.ts`

### Phase 3: Image Switch (Future)
- Change `useHumanImages: true` in `moodConfig.ts`
- Test human face image rendering
- Ensure fallback to emojis works

### Phase 4: Image Optimization (Future)
- Add image caching
- Implement lazy loading
- Add image preloading

## Technical Details

### Mood Definition Interface
```typescript
export interface MoodDefinition {
  id: string           // Unique identifier
  label: string        // Display name
  emoji: string        // Emoji representation
  color: string        // TailwindCSS color class
  description: string  // Human-readable description
  therapeuticGoal: string // Mood therapy purpose
}
```

### Image Configuration Interface
```typescript
export interface MoodIconConfig {
  useHumanImages: boolean    // Toggle between modes
  humanImagePath: string     // Path to human face images
  fallbackToEmoji: boolean   // Safety fallback
  imageSize: 'sm' | 'md' | 'lg' | 'xl' // Image sizing (matches emoji sizes)
  animationEnabled: boolean  // Animation toggle
  imageFormat: 'jpg' | 'png' | 'webp' // Preferred image format
}
```

## Human Face Image Requirements

When you're ready to implement human face images:

### File Format
- **WebP preferred** (modern, lightweight, good quality)
- **PNG acceptable** (good quality, transparent background support)
- **JPG acceptable** (smaller file size, good for photos)

### Image Specifications
- **Size**: Should match emoji sizes (recommended: 64x64px, 128x128px, or 256x256px)
- **Style**: Real human expressions or high-quality AI-generated faces
- **Background**: Transparent or consistent background
- **Quality**: High resolution, clear facial expressions

### Naming Convention
```
/public/assets/mood-faces/
├── happy-face.webp        # Smiling, joyful expression
├── sad-face.webp          # Downcast, melancholic expression
├── excited-face.webp      # Bright, enthusiastic expression
├── relaxed-face.webp      # Calm, peaceful expression
├── stressed-face.webp     # Tense, worried expression
├── bored-face.webp        # Uninterested, listless expression
├── inspired-face.webp     # Creative, motivated expression
├── focused-face.webp      # Concentrated, determined expression
├── calm-face.webp         # Centered, balanced expression
├── romantic-face.webp     # Loving, affectionate expression
├── nostalgic-face.webp    # Thoughtful, sentimental expression
└── energetic-face.webp    # Vital, dynamic expression
```

### Image Design Guidelines
- **Clear facial expressions** that clearly represent each emotion
- **Consistent style** across all mood images
- **Diverse representation** (age, gender, ethnicity)
- **Professional quality** suitable for production use
- **Accessible design** with good contrast and clarity

## Testing the System

### Test Emoji Mode
```typescript
// Ensure useHumanImages is false
console.log(MOOD_ICON_CONFIG.useHumanImages) // Should be false

// Test mood icon retrieval
const icon = getMoodIcon('happy', false)
console.log(icon) // Should return emoji
```

### Test Human Face Image Mode
```typescript
// Switch to human face images
setMoodImageMode(true)

// Test mood icon retrieval
const icon = getMoodIcon('happy', true)
console.log(icon) // Should return human face image or fallback to emoji
```

## Best Practices

1. **Always use utility functions** instead of hardcoding mood data
2. **Test both image modes** when making changes
3. **Keep mood definitions consistent** across the application
4. **Use TypeScript interfaces** for type safety
5. **Document new moods** when adding them
6. **Test fallback behavior** for missing human face images
7. **Ensure human face images are appropriately sized** to match emoji dimensions

## Common Issues & Solutions

### Issue: Images not switching
**Solution**: Check `MOOD_ICON_CONFIG.useHumanImages` value and ensure human face image files exist

### Issue: Missing mood data
**Solution**: Verify mood ID exists in `MOODS` array and check for typos

### Issue: Human face images not loading
**Solution**: Check file paths in `HUMAN_FACE_MAPPING` and ensure files exist in the specified directory

### Issue: Image sizing mismatch
**Solution**: Ensure human face images are sized appropriately to match emoji dimensions

## Future Enhancements

1. **Image caching** for better performance
2. **Lazy loading** for human face images
3. **Image preloading** for critical moods
4. **Dynamic image switching** based on user preferences
5. **Image animation** support
6. **Accessibility improvements** for screen readers
7. **Multiple image variants** for each mood (different expressions, styles)

---

This system provides a robust foundation for mood management while maintaining the flexibility to evolve from emojis to human face images seamlessly. The centralized architecture ensures consistency and makes future improvements straightforward. The human face images will provide a more relatable and engaging user experience while maintaining the same emoji-sized dimensions for consistency.
