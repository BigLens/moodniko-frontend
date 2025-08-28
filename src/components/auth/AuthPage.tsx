import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import type { LoginCredentials, RegisterCredentials } from '../../types'

interface AuthPageProps {
  onLogin: (credentials: LoginCredentials) => void
  onRegister: (credentials: Omit<RegisterCredentials, 'confirmPassword'>) => void
  isLoading?: boolean
  error?: string
}

const AuthPage = ({ onLogin, onRegister, isLoading = false, error }: AuthPageProps) => {
  const [isLoginMode, setIsLoginMode] = useState(true)

  const handleSwitchToRegister = () => {
    setIsLoginMode(false)
  }

  const handleSwitchToLogin = () => {
    setIsLoginMode(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="text-4xl">😊</div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">
            MoodNiko
          </h1>
          <p className="text-gray-600 text-lg">
            Your emotional wellness companion
          </p>
        </div>

        {/* Auth Forms */}
        <div className="transition-all duration-500 ease-in-out">
          {isLoginMode ? (
            <LoginForm
              onSubmit={onLogin}
              isLoading={isLoading}
              error={error}
              onSwitchToRegister={handleSwitchToRegister}
            />
          ) : (
            <RegisterForm
              onSubmit={onRegister}
              isLoading={isLoading}
              error={error}
              onSwitchToLogin={handleSwitchToLogin}
            />
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Why MoodNiko?
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Personalized mood-boosting content</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Track your emotional journey</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>AI-powered recommendations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Build your wellness library</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
                          <p>© 2025 MoodNiko. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <button className="hover:text-primary-600 transition-colors">Privacy</button>
            <button className="hover:text-primary-600 transition-colors">Terms</button>
            <button className="hover:text-primary-600 transition-colors">Support</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
