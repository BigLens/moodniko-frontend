import { Heart, Phone, Globe, BookOpen, Users, Shield, AlertTriangle, Lightbulb } from 'lucide-react'

const MentalHealthResources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h1>
          <p className="text-lg text-gray-600">Comprehensive resources to support your emotional wellness journey</p>
          <p className="text-sm text-gray-500 mt-2">Your mental health matters - help is always available</p>
        </div>

        {/* Crisis Resources - Prominent */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-2">🆘 Crisis Resources</h2>
              <p className="text-red-700 mb-4">
                If you're experiencing a mental health crisis or having thoughts of self-harm, help is available 24/7:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    National Crisis Hotlines
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li><strong>988</strong> - Suicide & Crisis Lifeline</li>
                    <li><strong>1-800-273-8255</strong> - National Suicide Prevention</li>
                    <li><strong>Text HOME to 741741</strong> - Crisis Text Line</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">Emergency Services</h3>
                  <ul className="space-y-2 text-red-700">
                    <li><strong>911</strong> - Emergency Services</li>
                    <li><strong>Go to nearest ER</strong> - Emergency Room</li>
                    <li><strong>Call local crisis center</strong> - Community Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Help */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="w-8 h-8 text-primary-600 mr-3" />
            Professional Mental Health Support
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Finding a Therapist</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Online Directories</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Psychology Today Therapist Finder</li>
                    <li>• GoodTherapy Directory</li>
                    <li>• BetterHelp Online Therapy</li>
                    <li>• Talkspace Professional Network</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Insurance & Cost</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Check your insurance coverage</li>
                    <li>• Look for sliding scale options</li>
                    <li>• Community mental health centers</li>
                    <li>• University training clinics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of Therapy</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Cognitive Behavioral Therapy (CBT)</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Dialectical Behavior Therapy (DBT)</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Acceptance & Commitment Therapy (ACT)</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Mindfulness-Based Therapy</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Psychodynamic Therapy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Help Tools */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 text-primary-600 mr-3" />
            Self-Help Tools & Techniques
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mindfulness & Meditation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Deep breathing exercises</li>
                <li>• Progressive muscle relaxation</li>
                <li>• Guided meditation apps</li>
                <li>• Body scan techniques</li>
                <li>• Mindful walking</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Coping Strategies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Grounding techniques (5-4-3-2-1)</li>
                <li>• Journaling and mood tracking</li>
                <li>• Creative expression (art, music)</li>
                <li>• Physical exercise and movement</li>
                <li>• Social connection and support</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lifestyle Changes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular sleep schedule</li>
                <li>• Balanced nutrition</li>
                <li>• Limit alcohol and caffeine</li>
                <li>• Time in nature</li>
                <li>• Hobbies and interests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
            Educational Resources & Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Books & Literature</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"The Body Keeps the Score"</h4>
                  <p className="text-sm text-gray-600">Bessel van der Kolk - Trauma and healing</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"Feeling Good"</h4>
                  <p className="text-sm text-gray-600">David Burns - CBT techniques</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"The Happiness Trap"</h4>
                  <p className="text-sm text-gray-600">Russ Harris - ACT principles</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"Mindfulness in Plain English"</h4>
                  <p className="text-sm text-gray-600">Bhante Gunaratana - Meditation guide</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Courses & Podcasts</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Coursera Mental Health Courses</h4>
                  <p className="text-sm text-gray-600">Free online mental health education</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"The Mental Illness Happy Hour"</h4>
                  <p className="text-sm text-gray-600">Podcast about mental health experiences</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"Therapy for Black Girls"</h4>
                  <p className="text-sm text-gray-600">Mental health podcast for Black women</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">"The Hilarious World of Depression"</h4>
                  <p className="text-sm text-gray-600">Comedy meets mental health awareness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Communities */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-8 h-8 text-primary-600 mr-3" />
            Support Communities & Groups
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Communities</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Reddit Mental Health</h4>
                  <p className="text-sm text-blue-700">r/mentalhealth, r/anxiety, r/depression</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">Facebook Support Groups</h4>
                  <p className="text-sm text-green-700">Various condition-specific groups</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-1">Discord Mental Health Servers</h4>
                  <p className="text-sm text-purple-700">Real-time chat and support</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">In-Person Support</h3>
              <div className="space-y-3">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-1">NAMI Support Groups</h4>
                  <p className="text-sm text-orange-700">National Alliance on Mental Illness</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h4 className="font-medium text-teal-800 mb-1">DBSA Groups</h4>
                  <p className="text-sm text-teal-700">Depression and Bipolar Support Alliance</p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-medium text-indigo-800 mb-1">Local Community Centers</h4>
                  <p className="text-sm text-indigo-700">Check your area for mental health groups</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apps & Technology */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="w-8 h-8 text-primary-600 mr-3" />
            Mental Health Apps & Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Meditation & Mindfulness</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Headspace</h4>
                  <p className="text-sm text-gray-600">Guided meditation and mindfulness</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Calm</h4>
                  <p className="text-sm text-gray-600">Sleep stories and relaxation</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Insight Timer</h4>
                  <p className="text-sm text-gray-600">Free meditation app with community</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mood Tracking & Therapy</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">MoodNiko</h4>
                  <p className="text-sm text-gray-600">Your emotional wellness companion</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Daylio</h4>
                  <p className="text-sm text-gray-600">Mood and activity tracking</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Woebot</h4>
                  <p className="text-sm text-gray-600">AI-powered CBT chatbot</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-700">
                These resources are provided for informational purposes only and are not intended to replace professional 
                medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for 
                personalized guidance. If you're experiencing severe symptoms or a mental health crisis, please seek 
                immediate professional help or contact emergency services.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Additional Help */}
        <section className="bg-primary-50 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Need More Help?</h2>
          <p className="text-gray-700 text-center mb-6">
            If you need assistance finding resources or have questions about mental health support, 
            our team is here to help guide you.
          </p>
          <div className="text-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-xl transition-colors duration-200">
              Contact Our Support Team
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MentalHealthResources
