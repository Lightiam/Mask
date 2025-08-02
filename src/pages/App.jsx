import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Mic, FileText, Settings, User, LogOut, Menu, X, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '../services/auth';
import VoiceRecognition from '../components/VoiceRecognition';
import JobDescriptionUpload from '../components/JobDescriptionUpload';

export default function AppPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('interview');
  const [jobDescriptions, setJobDescriptions] = useState([]);
  const [selectedJobDescription, setSelectedJobDescription] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const tabs = [
    { id: 'interview', label: 'Interview Practice', icon: <Mic className="w-5 h-5" /> },
    { id: 'jobs', label: 'Job Descriptions', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const handleJobDescriptionAdded = (jobDescription) => {
    const newJobDescription = {
      id: Date.now(),
      ...jobDescription,
      createdAt: new Date().toISOString()
    };
    setJobDescriptions(prev => [...prev, newJobDescription]);
  };

  const handleDeleteJobDescription = (id) => {
    setJobDescriptions(prev => prev.filter(job => job.id !== id));
    if (selectedJobDescription?.id === id) {
      setSelectedJobDescription(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 font-display">Pallybot AI</span>
                  <span className="text-xs text-gray-600 font-medium">Interview Co-pilot</span>
                </div>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user?.displayName || user?.email || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 font-display">Pallybot AI</span>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <nav className="p-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors mb-2 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-16 lg:z-30 bg-white border-r border-gray-200">
          <nav className="flex-1 p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="p-4 sm:p-6 lg:p-8">
            {activeTab === 'interview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2 font-display">
                    Interview Practice with Pallybot AI
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Practice your interview skills with AI-powered voice recognition and intelligent responses.
                  </p>

                  {jobDescriptions.length > 0 && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Job Description (optional)
                      </label>
                      <select
                        value={selectedJobDescription?.id || ''}
                        onChange={(e) => {
                          const selected = jobDescriptions.find(job => job.id === parseInt(e.target.value));
                          setSelectedJobDescription(selected || null);
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">No specific job selected</option>
                        {jobDescriptions.map((job) => (
                          <option key={job.id} value={job.id}>
                            {job.title} at {job.company}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                <VoiceRecognition selectedJobDescription={selectedJobDescription} />
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 font-display">Job Descriptions</h1>
                      <p className="text-gray-600 mt-2">
                        Upload job descriptions to get personalized interview responses from Pallybot AI.
                      </p>
                    </div>
                  </div>

                  <JobDescriptionUpload onJobDescriptionAdded={handleJobDescriptionAdded} />
                </div>

                {jobDescriptions.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 font-display">Your Job Descriptions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {jobDescriptions.map((job) => (
                        <div key={job.id} className="card p-4 border border-gray-200">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-semibold text-gray-900">{job.title}</h3>
                              <p className="text-sm text-gray-600">{job.company}</p>
                            </div>
                            <button
                              onClick={() => handleDeleteJobDescription(job.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                            {job.description.substring(0, 150)}...
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Added {new Date(job.createdAt).toLocaleDateString()}</span>
                            <span>{job.keywords?.length || 0} keywords extracted</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6 font-display">Settings</h1>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Account Information */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 font-display">Account Information</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input
                            type="email"
                            value={user?.email || ''}
                            disabled
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                          <input
                            type="text"
                            value={user?.displayName || ''}
                            disabled
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                          <input
                            type="text"
                            value={user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
                            disabled
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subscription */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 font-display">Subscription</h2>
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-blue-900">Free Plan</p>
                            <p className="text-sm text-blue-700">Basic features included</p>
                          </div>
                          <Bot className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                      <button
                        onClick={() => navigate('/billing')}
                        className="btn-primary w-full"
                      >
                        Manage Billing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
