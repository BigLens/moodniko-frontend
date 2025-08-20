import { Heart, Users, Clock, TrendingUp, Star, Smile } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Users Supported',
      description: 'People using MoodNiko to improve their emotional well-being'
    },
    {
      icon: Heart,
      value: '2.5M+',
      label: 'Moods Tracked',
      description: 'Emotional states monitored and analyzed for better understanding'
    },
    {
      icon: TrendingUp,
      value: '15M+',
      label: 'Content Discovered',
      description: 'Therapeutic content pieces that have helped improve moods'
    },
    {
      icon: Clock,
      value: '45 min',
      label: 'Avg. Session Time',
      description: 'Time users spend exploring mood-boosting content'
    },
    {
      icon: Star,
      value: '94%',
      label: 'Mood Improvement Rate',
      description: 'Users report feeling better after using recommended content'
    },
    {
      icon: Smile,
      value: '4.8/5',
      label: 'User Satisfaction',
      description: 'Average rating from users who found emotional support'
    }
  ]

  return (
    <div className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transforming Emotional Well-being
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how MoodNiko is helping people around the world improve their moods, 
            find emotional support, and build better mental health habits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{stat.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Story */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Real Impact on Real Lives
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">😊</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Mood Improvement</h4>
                <p className="text-gray-600 text-sm">
                  9 out of 10 users report feeling better within 30 minutes of using recommended content
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Stress Reduction</h4>
                <p className="text-gray-600 text-sm">
                  Average stress levels decrease by 40% after engaging with therapeutic content
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💪</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Emotional Resilience</h4>
                <p className="text-gray-600 text-sm">
                  Users develop better coping mechanisms and emotional awareness over time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of users who are already improving their emotional well-being
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Emotional Wellness Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stats
