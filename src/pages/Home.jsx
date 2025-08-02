import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Mic, FileText, Users, Star, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';
import { useAuth } from '../services/auth';
import PricingSection from '../components/PricingSection';
import AuthModal from '../components/AuthModal';

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('register');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Mic className="w-8 h-8 text-blue-500" />,
      title: "Voice Recognition",
      description: "Real-time speech-to-text transcription with advanced AI processing for natural conversation flow."
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Responses",
      description: "Intelligent interview responses generated using advanced AI models trained on industry best practices."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: "Job-Specific Training",
      description: "Upload job descriptions to get tailored responses that match specific role requirements."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Interview Simulation",
      description: "Practice with realistic interview scenarios and get immediate feedback on your responses."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "Pallybot AI helped me ace my technical interviews. The job-specific training made all the difference!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager at Meta",
      content: "The voice recognition is incredibly accurate, and the AI responses are spot-on. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist at Netflix",
      content: "Game-changer for interview prep. The personalized responses based on job descriptions are amazing.",
      rating: 5
    }
  ];

  const handleGetStarted = () => {
    if (user) {
      navigate('/app');
    } else {
      setAuthMode('register');
      setShowAuthModal(true);
    }
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 font-display">Pallybot AI</span>
                <span className="text-xs text-gray-600 font-medium">Interview Co-pilot</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Welcome, {user.displayName || user.email}</span>
                  <button
                    onClick={() => navigate('/app')}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Go to App</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLogin}
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleGetStarted}
                    className="btn-primary"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {user ? (
                <div className="space-y-4">
                  <div className="text-gray-700">Welcome, {user.displayName || user.email}</div>
                  <button
                    onClick={() => navigate('/app')}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <span>Go to App</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={handleLogin}
                    className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium py-2"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleGetStarted}
                    className="btn-primary w-full"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Pallybot AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your AI-powered interview co-pilot. Practice with voice recognition, get intelligent responses, 
              and ace your next interview with personalized training.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleGetStarted}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <Mic className="w-5 h-5" />
              <span>Start Practicing Now</span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-50 rounded-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection onGetStarted={handleGetStarted} />

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Loved by Job Seekers Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how Pallybot AI has helped thousands of professionals land their dream jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-display">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've successfully prepared with Pallybot AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-display">Pallybot AI</span>
                <span className="text-xs text-gray-400">Interview Co-pilot</span>
              </div>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Pallybot AI. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering careers with AI technology</p>
            </div>
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
  );
}
