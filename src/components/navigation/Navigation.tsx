import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Home, 
  Heart, 
  BarChart3, 
  Settings, 
  User as UserIcon, 
  LogOut, 
  Bookmark,
  Search,
  Bell,
  ChevronDown,
  Users,
  MessageCircle
} from 'lucide-react'
import type { User } from '../../types'

interface NavigationProps {
  user: User | null
  onLogout: () => void
}

const Navigation = ({ user, onLogout }: NavigationProps) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home, requiresAuth: false },
    { name: 'About Us', href: '/about', icon: Users, requiresAuth: false },
    { name: 'Contact', href: '/contact', icon: MessageCircle, requiresAuth: false },
    { name: 'Mood Tracker', href: '/mood-tracker', icon: Heart, requiresAuth: true },
    { name: 'Discover', href: '/discover', icon: Search, requiresAuth: false },
    { name: 'Saved', href: '/saved', icon: Bookmark, requiresAuth: true },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, requiresAuth: true },
    { name: 'Settings', href: '/settings', icon: Settings, requiresAuth: true },
  ]

  const isActive = (path: string) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close user dropdown when location changes
  useEffect(() => {
    setIsUserMenuOpen(false)
  }, [location.pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isUserMenuOpen && !target.closest('.user-dropdown')) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isUserMenuOpen])

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                <div className="text-white text-lg">😊</div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                MoodNiko
              </span>
            </div>
          </div>

                     {/* Right side - Navigation + Auth buttons (desktop only) */}
           <div className="desktop-nav flex items-center space-x-4">
            {/* Navigation Items */}
            <div className="flex items-center space-x-4">
              {navigationItems.map((item) => {
                if (item.requiresAuth && !user) return null
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200">
              <Bell className="w-5 h-5" />
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative user-dropdown">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-3 p-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium">{user.email}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      <UserIcon className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={onLogout}
                      className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
                         ) : (
               <div className="relative user-dropdown">
                 <button
                   onClick={toggleUserMenu}
                   className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
                 >
                   <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                     <UserIcon className="w-4 h-4 text-primary-600" />
                   </div>
                   <ChevronDown className="w-4 h-4" />
                 </button>

                 {/* User Auth Dropdown */}
                 {isUserMenuOpen && (
                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                     <Link
                       to="/login"
                       className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                     >
                       <UserIcon className="w-4 h-4" />
                       <span>Sign In</span>
                     </Link>
                   </div>
                 )}
               </div>
            )}
          </div>

                     {/* Mobile menu button */}
           <div className="mobile-nav-button">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

             {/* Mobile Navigation Menu */}
       {isMobileMenuOpen && (
         <div className="mobile-nav-button">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {navigationItems.map((item) => {
              if (item.requiresAuth && !user) return null
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            
            {/* Mobile User Actions */}
            {user ? (
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3 px-3 py-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user.email}</span>
                </div>
                <Link
                  to="/profile"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 px-3 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/settings"
                  onClick={closeMobileMenu}
                  className="flex items-center space-x-3 px-3 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={() => {
                    onLogout()
                    closeMobileMenu()
                  }}
                  className="flex items-center space-x-3 w-full px-3 py-3 text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
                         ) : (
               <div className="pt-4 border-t border-gray-100 space-y-2">
                 <Link
                   to="/login"
                   onClick={closeMobileMenu}
                   className="block w-full text-center px-3 py-3 text-gray-600 hover:text-primary-600 font-medium transition-colors"
                 >
                   Sign In
                 </Link>
               </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation