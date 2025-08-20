# MoodNiko Frontend

A beautiful, responsive frontend for the MoodNiko mood-based content recommendation app. Built with React, TypeScript, and TailwindCSS.

## 🎯 Project Overview

MoodNiko is a mood-based content generation app that helps users discover personalized content (music, movies, books, podcasts) based on their current emotional state. This frontend provides an intuitive interface for users to:

- **Track their moods** with detailed context and insights
- **Discover content** filtered by mood and content type
- **Get personalized recommendations** based on emotional patterns
- **Save and manage** their favorite content

##  Features

### Interface
- **Modern Design**: Clean, intuitive interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Mood-Based Colors**: Dynamic color schemes that reflect different emotional states
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### Mood Tracking
- **Quick Mood Input**: One-click mood selection with emojis
- **Detailed Mood Logging**: Track intensity, context, activities, and more
- **Mood History**: Visual timeline of emotional patterns
- **Insights Dashboard**: Analytics and trends about your emotional well-being

### Content Discovery
- **Multi-Platform Content**: Music (Spotify), Movies (TMDB), Books (Google Books), Podcasts
- **Smart Filtering**: Filter by mood, content type, and preferences
- **Personalized Recommendations**: Intelligence-powered suggestions based on your mood patterns
- **Content Cards**: Beautiful cards with ratings, descriptions, and quick actions

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Bottom Navigation**: Easy thumb navigation on mobile
- **Adaptive Layouts**: Components that adapt to different screen sizes
- **Touch-Friendly**: Large touch targets and smooth gestures

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moodniko-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Layout.tsx      # Main layout with header and navigation
│   ├── Hero.tsx        # Hero section with mood input
│   ├── ContentRecommendations.tsx  # Content discovery and filtering
│   ├── MoodTracker.tsx # Mood logging and history
│   ├── Stats.tsx       # Statistics and social proof
│   └── Footer.tsx      # Footer with links and info
├── lib/
│   └── utils.ts        # Utility functions and helpers
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and TailwindCSS
```


## Configuration

### TailwindCSS
The project uses a custom TailwindCSS configuration with:
- Extended color palette for moods and content types
- Custom animations and transitions
- Responsive breakpoints
- Component classes for common patterns

### PostCSS
Configured with autoprefixer for cross-browser compatibility.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Future Enhancements

- **Authentication System**: User login/registration
- **Backend Integration**: Connect to MoodNiko backend APIs
- **Real-time Updates**: Live mood tracking and recommendations
- **Offline Support**: PWA capabilities
- **Dark Mode**: Theme switching
- **Internationalization**: Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Design Inspiration**: Modern web app patterns and best practices