import { Heart, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                MoodNiko
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your emotional wellness companion. Discover content that helps improve your mood, 
              track your emotional journey, and build better mental health habits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Mood Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Content Discovery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Emotional Insights</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Wellness Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">Mental Health Resources</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MoodNiko. All rights reserved. Dedicated to improving emotional well-being.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-gray-400 text-sm">for better mental health</span>
          </div>
        </div>

        {/* Mental Health Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300 text-sm text-center">
            <strong>Important:</strong> MoodNiko is designed to support emotional well-being but is not a substitute for professional mental health care. 
            If you're experiencing severe emotional distress, please contact a mental health professional or call your local crisis hotline.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
