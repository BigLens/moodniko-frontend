import { FileText, CheckCircle, AlertTriangle, Scale, Users, Shield } from 'lucide-react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">Please read these terms carefully before using MoodNiko</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-primary-600 mr-3" />
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using MoodNiko, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-primary-600 mr-3" />
              Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MoodNiko is an emotional wellness application designed to help users:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Track and monitor emotional patterns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Discover mood-boosting content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Access wellness resources and tools
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Generate emotional insights and analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Build healthy mental health habits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    Connect with wellness community
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 text-primary-600 mr-3" />
              User Accounts and Registration
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Account Creation</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>You must be at least 13 years old to create an account</li>
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Account Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>You are responsible for all activities under your account</li>
                  <li>Keep your account information up to date</li>
                  <li>Do not share your account with others</li>
                  <li>Use the service in compliance with applicable laws</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-primary-600 mr-3" />
              Acceptable Use Policy
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-medium text-green-800 mb-2">✅ What You Can Do</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Use the app for personal emotional wellness</li>
                  <li>• Share positive and supportive content</li>
                  <li>• Connect with other users respectfully</li>
                  <li>• Provide constructive feedback</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-medium text-red-800 mb-2">❌ What You Cannot Do</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Harass, bully, or harm other users</li>
                  <li>• Share inappropriate or harmful content</li>
                  <li>• Attempt to hack or compromise the service</li>
                  <li>• Use the service for illegal activities</li>
                  <li>• Impersonate others or provide false information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
              which is incorporated into these Terms by reference.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Data Protection Commitments</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• We implement industry-standard security measures</li>
                <li>• Your personal data is encrypted and protected</li>
                <li>• We do not sell your personal information</li>
                <li>• You have control over your data and privacy settings</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Scale className="w-6 h-6 text-primary-600 mr-3" />
              Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Our Rights</h3>
                <p className="text-gray-700">
                  MoodNiko and its original content, features, and functionality are owned by MoodNiko Inc. and are protected 
                  by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Your Rights</h3>
                <p className="text-gray-700">
                  You retain ownership of content you create and share on the platform. By posting content, you grant us a 
                  license to use, display, and distribute your content as part of our service.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
              Important Disclaimers
            </h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-medium text-yellow-800 mb-3">Medical Disclaimer</h3>
              <p className="text-yellow-700 mb-4">
                <strong>Important:</strong> MoodNiko is designed to support emotional wellness but is NOT a substitute for 
                professional mental health care, medical advice, diagnosis, or treatment.
              </p>
              <ul className="text-yellow-700 space-y-2 text-sm">
                <li>• Always seek professional help for serious mental health concerns</li>
                <li>• In case of crisis, contact emergency services or crisis hotlines</li>
                <li>• The app provides general wellness tools, not medical treatment</li>
                <li>• Consult healthcare providers for personalized medical advice</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, MoodNiko Inc. shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your use of the service.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> This limitation does not apply to damages caused by our gross negligence or willful misconduct, 
                or where such limitation is prohibited by applicable law.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Account Termination</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>You may terminate your account at any time</li>
                  <li>We may terminate accounts that violate these terms</li>
                  <li>Termination results in loss of access to the service</li>
                  <li>Your data will be handled according to our Privacy Policy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of significant changes through 
              the app or via email. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where MoodNiko Inc. 
              is incorporated, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> legal@moodniko.com</p>
              <p><strong>Address:</strong> Legal Team, MoodNiko Inc.</p>
              <p><strong>Response Time:</strong> We aim to respond within 72 hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
