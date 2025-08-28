import { Shield, Lock, Eye, Database, Users, Globe } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Your privacy and data security are our top priorities</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 text-primary-600 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At MoodNiko, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              emotional wellness application and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="w-6 h-6 text-primary-600 mr-3" />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Email address and account credentials</li>
                  <li>Profile information (display name, bio)</li>
                  <li>Mood tracking data and emotional insights</li>
                  <li>Content preferences and interactions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Usage Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information and technical logs</li>
                  <li>Analytics and performance data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 text-primary-600 mr-3" />
              How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Core Services</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Provide personalized mood tracking</li>
                  <li>• Deliver relevant content recommendations</li>
                  <li>• Generate emotional wellness insights</li>
                  <li>• Improve app functionality and user experience</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Communication</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Send important service updates</li>
                  <li>• Provide customer support</li>
                  <li>• Share wellness tips and resources</li>
                  <li>• Respond to your inquiries and feedback</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 text-primary-600 mr-3" />
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in app operations</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-primary-600 mr-3" />
              Data Security
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-primary-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Secure data centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Regular security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Access controls and monitoring</span>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Access & Control</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• View and update your personal information</li>
                  <li>• Download your data</li>
                  <li>• Delete your account and data</li>
                  <li>• Opt-out of communications</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Data Portability</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Export your mood tracking data</li>
                  <li>• Transfer data to other services</li>
                  <li>• Request data in machine-readable format</li>
                </ul>
              </div>
            </div>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Globe className="w-6 h-6 text-primary-600 mr-3" />
              International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your data may be processed in countries other than your own. We ensure that all data transfers 
              comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> privacy@moodniko.com</p>
              <p><strong>Address:</strong> Privacy Team, MoodNiko Inc.</p>
              <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes through the app or via email. Your continued use of MoodNiko 
              after such changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
