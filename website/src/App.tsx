import React, { useState } from 'react';
import { ArrowBigRight, Brain, Camera, ChevronDown, ChevronRight, LogIn, Menu, Type, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Flask backend later
    console.log('Login attempted:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">GestureType</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a>
              <a href="#why-us" className="text-gray-600 hover:text-purple-600 transition-colors">Why Us</a>
              <a href="#login" className="text-gray-600 hover:text-purple-600 transition-colors">Login</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600">How It Works</a>
              <a href="#why-us" className="block px-3 py-2 text-gray-600">Why Us</a>
              <a href="#login" className="block px-3 py-2 text-gray-600">Login</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Type With <span className="text-purple-600">Freedom</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering communication through head gestures
          </p>
          <a 
            href="#login"
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Try Now
            <ArrowBigRight className="ml-2" />
          </a>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Camera className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gesture Detection</h3>
              <p className="text-gray-600 text-center">Camera captures your head movements</p>
            </div>
            <ChevronDown className="md:hidden w-8 h-8 text-purple-600" />
            <ChevronRight className="hidden md:block w-8 h-8 text-purple-600" />
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Brain className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-gray-600 text-center">AI interprets your movements</p>
            </div>
            <ChevronDown className="md:hidden w-8 h-8 text-purple-600" />
            <ChevronRight className="hidden md:block w-8 h-8 text-purple-600" />
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Type className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Text Output</h3>
              <p className="text-gray-600 text-center">Your gestures become text</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Accessibility First</h3>
              <p className="text-gray-600">Designed specifically for individuals with limited mobility, ensuring everyone has a voice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">High Accuracy</h3>
              <p className="text-gray-600">Advanced computer vision algorithms ensure precise gesture recognition.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-gray-600">Intuitive interface that requires minimal training to get started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-8">Login to Get Started</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;