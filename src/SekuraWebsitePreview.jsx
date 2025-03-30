import React from 'react';
import businessOwnerImg from './assets/legal-professional.png';
import householdDefenderImg from './assets/household-defender.png';
import contentCreatorImg from './assets/digital-content-creator.png';

const SekuraWebsitePreview = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">

      {/* Header/Navigation */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              Sekura.ai
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#consumer" className="text-gray-600 hover:text-gray-900">Consumer</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#enterprise" className="text-gray-600 hover:text-gray-900">Enterprise</a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-600 hover:text-gray-900">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-12 px-4 md:px-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left side content */}
              <div className="flex-1 text-left space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Your Digital World, Secured
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  AI-Powered Security, Fully Private, Under Your Control
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2 transition-all">
                    <span className="text-lg">▶</span> Watch Demo
                  </button>
                  <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
                    <span className="text-xl">↓</span> Download Free
                  </button>
                </div>
              </div>
              
              {/* Right side features */}
              <div className="flex-1">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <ul className="space-y-4">
                    {[
                      'Ransomware Protection',
                      'Secure Cloud Upload',
                      'Sensitive Data Lock',
                      'Prevent Unauthorized Access'
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Powerful Features for Complete Protection</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Advanced security features designed to protect what matters most, powered by cutting-edge AI technology
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Security Features */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="text-blue-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Security</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-green-500 group-hover:scale-110 transition-transform">⚡</span>
                    <div>
                      <p className="font-medium">Real-time Protection</p>
                      <p className="text-sm text-gray-600">AI-powered threat detection and instant response</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-green-500 group-hover:scale-110 transition-transform">🛡️</span>
                    <div>
                      <p className="font-medium">Military-grade Encryption</p>
                      <p className="text-sm text-gray-600">AES-256 encryption with perfect forward secrecy</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-green-500 group-hover:scale-110 transition-transform">🔒</span>
                    <div>
                      <p className="font-medium">Secure Storage</p>
                      <p className="text-sm text-gray-600">Protected vaults for sensitive files</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Privacy Features */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="text-purple-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Privacy</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-purple-500 group-hover:scale-110 transition-transform">👁️</span>
                    <div>
                      <p className="font-medium">Zero-Knowledge Privacy</p>
                      <p className="text-sm text-gray-600">We can't access your data, ever</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-purple-500 group-hover:scale-110 transition-transform">🔍</span>
                    <div>
                      <p className="font-medium">Data Scanner</p>
                      <p className="text-sm text-gray-600">Identifies and secures sensitive information automatically</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-purple-500 group-hover:scale-110 transition-transform">📱</span>
                    <div>
                      <p className="font-medium">Cross-device Privacy</p>
                      <p className="text-sm text-gray-600">Sync protection across all devices</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Ease of Use Features */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                <div className="text-orange-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ease of Use</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-orange-500 group-hover:scale-110 transition-transform">🎯</span>
                    <div>
                      <p className="font-medium">One-Click Protection</p>
                      <p className="text-sm text-gray-600">Secure files with a single click</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-orange-500 group-hover:scale-110 transition-transform">🔄</span>
                    <div>
                      <p className="font-medium">Auto-Sync</p>
                      <p className="text-sm text-gray-600">Changes sync automatically across devices</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 group cursor-pointer">
                    <span className="text-orange-500 group-hover:scale-110 transition-transform">📊</span>
                    <div>
                      <p className="font-medium">Smart Dashboard</p>
                      <p className="text-sm text-gray-600">Monitor your security in real-time</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                <span>See All Features</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 py-12">
          {[
            { 
              title: "Professional Services", 
              img: businessOwnerImg,
              description: "Perfect for small business owners, legal professionals, and service providers. Protect client data, financial records, and confidential documents with military-grade encryption and secure sharing capabilities."
            },
            { 
              title: "Household Defender", 
              img: householdDefenderImg,
              description: "Keep your family's personal information, photos, and financial records safe from cyber threats and ransomware."
            },
            { 
              title: "Digital Content Creator", 
              img: contentCreatorImg,
              description: "Secure your creative assets and unreleased content with advanced access controls and real-time monitoring."
            }
          ].map(({ title, img, description }, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="aspect-[4/3] relative">
                <img 
                  src={img} 
                  alt={title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">For {title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="bg-blue-900 py-16 px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-white text-3xl font-bold mb-4">Customer Stories</h2>
            <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">See how professionals and families trust Sekura.ai to protect their digital world</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  quote: "As a legal professional, data security is paramount. Sekura.ai's encryption has given us peace of mind when handling sensitive client documents and communications.",
                  author: "Sarah Chen",
                  role: "Chief Security Officer",
                  company: "LegalTech Solutions"
                },
                {
                  quote: "With cyber threats everywhere, I needed a solution to protect our family photos and financial documents. Sekura.ai makes enterprise-grade security accessible for home use.",
                  author: "Michael Rodriguez",
                  role: "Dad and Husband",
                  company: "Protected since 2023"
                },
                {
                  quote: "The real-time monitoring has prevented several unauthorized access attempts to our pre-release content. It's like having a security team watching 24/7.",
                  author: "Alex Kim",
                  role: "Content Director",
                  company: "Creative Studios"
                },
                {
                  quote: "The AI-powered threat detection caught suspicious patterns that our previous security solution missed. The automated response saved us countless hours.",
                  author: "James Wilson",
                  role: "IT Security Manager",
                  company: "DataGuard Inc"
                }
              ].map((item) => (
                <div key={item.author} className="bg-white rounded-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6">{item.quote}</p>
                  <p className="font-semibold text-gray-900">{item.author}</p>
                  <p className="text-gray-500">{item.role}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700">{item.company}</a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                Read More Stories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Download CTA Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="max-w-6xl mx-auto px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Digital World?</h2>
                <p className="text-blue-100 text-lg mb-6">Download Sekura.ai now and take control of your security.</p>
                <div className="flex gap-4">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold shadow-lg flex items-center gap-2 transition-all">
                    <span className="text-2xl">↓</span> Download Now
                  </button>
                  <button className="border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-bold transition-all">
                    View Documentation
                  </button>
                </div>
              </div>
              <div className="text-white text-center md:text-right">
                <p className="text-3xl font-bold mb-2">1M+</p>
                <p className="text-blue-100">Protected Users</p>
                <p className="text-3xl font-bold mb-2 mt-4">99.9%</p>
                <p className="text-blue-100">Threat Detection Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 text-center mb-12">Choose the plan that's right for you</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Free</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    1 Protected Folder
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    10 Documents
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    100 Photos and Videos
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Strong Encryption
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Community Support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Always Free
                  </li>
                </ul>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <span>↓</span> Download Now
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8 relative border-2 border-blue-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
                <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">$2.99</span>
                  <span className="text-gray-600">/mo</span>
                </div>
                <div className="mb-6">
                  <span className="text-gray-600">or $30/year</span>
                  <span className="ml-2 bg-green-500 text-white text-sm px-2 py-1 rounded">Save 16%</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited Protected Folders
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited Documents
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited Photos and Videos
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Military-grade Encryption
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium 24/7 Support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Real-time Threat Monitoring
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Pro
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Everything in Pro, plus:
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Enterprise Data Scanning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    AI-Powered Data Classification
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    PII, PCI, PHI Detection
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Sensitive Data Auto-tagging
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom Security Policies
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Role-based Access Control
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Enterprise SSO Integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Audit Logs & Compliance Reports
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Dedicated Success Manager
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Custom API Integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    SLA Guarantee
                  </li>
                </ul>
                <div className="text-center text-gray-500 mb-4 text-sm">
                  Local Government & Non-profits get 50% off
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © 2025 Sekura.ai - All Rights Reserved
      </footer>

    </div>
  );
};

export default SekuraWebsitePreview;
