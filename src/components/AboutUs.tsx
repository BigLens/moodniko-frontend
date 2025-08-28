import { Heart, Users, Target, Award, Globe, Shield, Zap } from 'lucide-react'

const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotional Wellness First',
      description: 'We prioritize your mental health and emotional well-being above everything else.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by mental health professionals and users who understand emotional challenges.'
    },
    {
      icon: Target,
      title: 'Personalized Experience',
      description: 'AI-powered recommendations tailored to your unique emotional patterns and preferences.'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'Content and features backed by psychological research and therapeutic best practices.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Supporting users worldwide in their journey toward better emotional health.'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'Your emotional data is protected with enterprise-grade security and privacy controls.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Mental Health Officer',
      bio: 'Clinical psychologist with 15+ years experience in cognitive behavioral therapy.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Product',
      bio: 'Former Google PM passionate about mental health technology and user experience.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      bio: 'Neuroscientist specializing in emotional regulation and digital therapeutics.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About MoodNiko
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make emotional wellness accessible to everyone, 
            everywhere. Through technology, empathy, and science, we're building 
            a world where mental health support is just a click away.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To democratize access to emotional wellness tools and create a supportive 
            community where everyone can thrive mentally and emotionally. We believe 
            that mental health is not a luxury, but a fundamental human right.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MoodNiko was born from a simple observation: while physical health 
                  has countless apps and tools, emotional wellness remains largely 
                  underserved by technology.
                </p>
                <p>
                  Founded in 2023 by a team of mental health professionals, engineers, 
                  and designers, we set out to bridge this gap. We combined the latest 
                  in AI technology with proven therapeutic approaches to create 
                  something truly unique.
                </p>
                <p>
                  Today, MoodNiko serves thousands of users worldwide, helping them 
                  track their emotional journey, discover mood-boosting content, and 
                  build healthier mental habits.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The Future</h3>
                  <p className="text-gray-600">
                    We're just getting started. Our vision extends far beyond mood tracking 
                    to comprehensive emotional wellness ecosystems that integrate with 
                    healthcare providers, workplaces, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to revolutionizing mental health technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Empathy First</h3>
              <p className="text-gray-600">
                Every feature we build starts with understanding the human experience 
                of emotional challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scientific Rigor</h3>
              <p className="text-gray-600">
                We base our approach on evidence-based research and continuously 
                validate our methods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Mental health support should be available to everyone, regardless 
                of background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
