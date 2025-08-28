import { User } from '../types'
import { Link } from 'react-router-dom'
import { Heart, Bookmark, BarChart3, Settings, ArrowRight } from 'lucide-react'

interface DashboardProps {
  user: User
}

const Dashboard = ({ user }: DashboardProps) => {
  const quickActions = [
    {
      title: 'Track Your Mood',
      description: 'Record how you\'re feeling today',
      icon: Heart,
      href: '/mood-tracker',
      color: 'bg-red-100 text-red-700'
    },
    {
      title: 'Saved Content',
      description: 'View your mood-boosting favorites',
      icon: Bookmark,
      href: '/saved',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Analytics',
      description: 'See your emotional journey insights',
      icon: BarChart3,
      href: '/analytics',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Settings',
      description: 'Manage your preferences',
      icon: Settings,
      href: '/settings',
      color: 'bg-purple-100 text-purple-700'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Welcome Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome back, {user.displayName || user.email}! 👋
        </h1>
        <p className="text-xl text-gray-600">
          Ready to continue your emotional wellness journey?
        </p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            to={action.href}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{action.description}</p>
            <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
              <span className="text-sm">Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </Link>
        ))}
      </div>

      {/* Daily Motivation */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Daily Motivation 💫
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          "Your mood is a choice. Choose to be happy, choose to be positive, 
          choose to make the most of every moment."
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <span>Track your mood today</span>
          <span>•</span>
          <span>Discover new content</span>
          <span>•</span>
          <span>Build healthy habits</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
