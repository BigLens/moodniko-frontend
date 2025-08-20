import { Home, Heart, Settings, User, Music, Film, BookOpen, Mic, UserPlus } from 'lucide-react'
import type { ReactNode } from 'react'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                MoodNiko
              </h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Moods
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Discover
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Saved
              </a>
            </nav>
            
            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors group">
                <UserPlus className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Up</span>
                <span className="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Free
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <button className="flex flex-col items-center p-2 text-primary-600">
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <Heart className="w-5 h-5" />
            <span className="text-xs mt-1">Mood</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <Music className="w-5 h-5" />
            <span className="text-xs mt-1">Music</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <Film className="w-5 h-5" />
            <span className="text-xs mt-1">Movies</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">Books</span>
          </button>
          <button className="flex flex-col items-center p-2 text-gray-500">
            <Mic className="w-5 h-5" />
            <span className="text-xs mt-1">Podcasts</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Layout
