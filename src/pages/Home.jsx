import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../services/auth'
import { Mic, Brain, Target, Zap, Star, CheckCircle, ArrowRight, Bot } from 'lucide-react'
import PricingSection from '../components/PricingSection'
import AuthModal from '../components/AuthModal'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('register')

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice Recognition",
      description: "Practice interviews naturally with real-time speech-to-text technology"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Responses",
      description: "Get intelligent, contextual answers powered by advanced AI"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Job-Specific Training",
      description: "Upload job descriptions for tailored interview practice"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Feedback",
      description: "Instant analysis and improvement suggestions for your responses"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "Pallybot AI helped me ace my technical interviews. The voice recognition is incredibly accurate!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager at Microsoft",
      content: "The job-specific training feature is a game-changer. Got my dream job thanks to Pallybot AI!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Data Scientist at Netflix",
      content: "Best interview preparation tool I've ever used. The AI responses are spot-on!",
      rating: 5
    }
  ]

  const handleGetStarted = () => {
    if (user) {
      navigate('/app')
    } else {
      setAuthMode('register')
      setShowAuthModal(true)
    }
  }

  const handleLogin = () => {
    setAuthMode('login')
    setShowAuthModal(true)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="font-secondary text-2xl font-bold gradient-text">Pallybot AI</span>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <button 
                  onClick={() => navigate('/app')}
                  className="btn-primary"
                >
                  Go to App
                </button>
              ) : (
                <>
                  <button 
                    onClick={handleLogin}
                    className="btn-secondary"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={handleGetStarted}
                    className="btn-primary"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-8 animate-pulse-glow">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Interview Co-pilot
            </div>
            <h1 className="text-5xl md:text-7xl font-secondary font-bold mb-6">
              Master Your 
              <span className="gradient-text block">Next Interview</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Practice interviews with voice recognition, get AI-powered feedback, and train on specific job descriptions. 
              Your personal interview co-pilot is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Practicing Free <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-secondary font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive interview preparation powered by cutting-edge AI technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:animate-pulse-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-secondary font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection onGetStarted={handleGetStarted} />

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-secondary font-bold mb-4">
              Loved by <span className="gradient-text">Professionals</span>
            </h2>
            <p className="text-xl text-gray-600">See what our users say about Pallybot AI</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-secondary font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-secondary font-bold text-white mb-6">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of professionals who've landed their dream jobs with Pallybot AI
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-brand-600 font-medium px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-secondary text-xl font-bold">Pallybot AI</span>
            </div>
            <p className="text-gray-400">© 2024 Pallybot AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onSwitchMode={(mode) => setAuthMode(mode)}
        />
      )}
    </div>
  )
}

export default Home