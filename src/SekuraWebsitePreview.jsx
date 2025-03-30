import React from 'react';
import businessOwnerImg from './assets/legal-professional.png';
import householdDefenderImg from './assets/household-defender.png';
import contentCreatorImg from './assets/digital-content-creator.png';

const SekuraWebsitePreview = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">

      {/* Header */}
      <header className="flex justify-between items-center py-4 px-12 bg-white shadow-md">
        <div className="text-2xl font-bold">Sekura.ai</div>
        <nav className="flex items-center space-x-6 text-gray-600">
          {['Consumer', 'Enterprise', 'Features', 'Support'].map((item, idx) => (
            <button key={idx} className="hover:text-blue-500 transition">{item}</button>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
            <span className="text-lg">↓</span> Download
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors">
            My Account
          </button>
        </nav>
      </header>

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
      <section className="py-16 px-12 bg-gradient-to-br from-gray-50 to-blue-50">
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
      <section className="grid grid-cols-3 gap-8 py-12 px-12">
        {[
          {
            plan: 'Free',
            features: [
              '1 Protected Folder',
              '10 Documents',
              '100 Photos and Videos',
              'Strong Encryption',
              'Community Support',
              'Always Free'
            ],
            highlight: false,
            cta: 'Download Now',
            ctaIcon: '↓'
          },
          {
            plan: 'Pro',
            features: [
              'Unlimited Protected Folders',
              'Unlimited Documents',
              'Unlimited Photos and Videos',
              'Military-grade Encryption',
              'Premium 24/7 Support',
              'Real-time Threat Monitoring'
            ],
            highlight: true,
            price: {
              monthly: '$2.99/mo',
              yearly: '$30/year',
              savings: 'Save 16%'
            },
            cta: 'Get Pro',
            popular: true
          },
          {
            plan: 'Enterprise',
            subtext: 'Coming Soon',
            features: [
              'Everything in Pro, plus:',
              'Enterprise Data Scanning',
              'AI-Powered Data Classification',
              '• PII, PCI, PHI Detection',
              '• Sensitive Data Auto-tagging',
              'Custom Security Policies',
              'Role-based Access Control',
              'Enterprise SSO Integration',
              'Audit Logs & Compliance Reports',
              'Dedicated Success Manager',
              'Custom API Integration',
              'SLA Guarantee'
            ],
            highlight: false,
            specialNote: 'Local Government & Non-profits get 50% off',
            cta: 'Join Waitlist',
            ctaIcon: '🔔'
          }
        ].map(({ plan, subtext, features, highlight, specialNote, cta, ctaIcon, price, popular }) => (
          <div key={plan} className={`rounded-lg shadow-xl p-8 text-center relative ${highlight ? 'bg-orange-500 text-white transform scale-105' : 'bg-gray-800 text-white'}`}>
            {popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">Most Popular</span>
              </div>
            )}
            <h3 className="font-bold text-2xl mb-2">{plan}</h3>
            {subtext && <p className="text-sm mb-4 bg-blue-600 text-white px-3 py-1 rounded-full inline-block">{subtext}</p>}
            {price && typeof price === 'string' ? (
              <p className="text-lg mb-4 opacity-90">{price}</p>
            ) : price && (
              <div className="mb-4 space-y-1">
                <p className="text-lg font-bold">{price.monthly}</p>
                <p className="text-sm">or {price.yearly}</p>
                <p className="text-sm bg-green-500 text-white px-2 py-0.5 rounded-full inline-block">{price.savings}</p>
              </div>
            )}
            <ul className="mb-8 space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center gap-2">
                  <span className="text-green-400">{feature.startsWith('•') ? '└' : '✔'}</span>
                  {feature.startsWith('•') ? feature.substring(2) : feature}
                </li>
              ))}
            </ul>
            {specialNote && (
              <div className="mb-6 text-sm">
                <p className="text-orange-300 border border-orange-300 rounded-lg p-2">
                  {specialNote}
                </p>
              </div>
            )}
            <button className={`rounded-full py-3 px-6 font-semibold w-full flex items-center justify-center gap-2 ${
              highlight ? 'bg-white text-orange-500 hover:bg-orange-50' : 
              plan === 'Free' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}>
              {ctaIcon && <span className="text-xl">{ctaIcon}</span>}
              {cta}
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © 2025 Sekura.ai - All Rights Reserved
      </footer>

    </div>
  );
};

export default SekuraWebsitePreview;
