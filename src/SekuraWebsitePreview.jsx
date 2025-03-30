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
        <nav className="flex space-x-5 text-gray-600">
          {['Consumer', 'Enterprise', 'Download', 'Features', 'Support'].map((item, idx) => (
            <button key={idx} className="hover:text-blue-500 transition">{item}</button>
          ))}
          <button className="border px-4 py-1 rounded-lg font-semibold">My Account</button>
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

      {/* Use Cases Section */}
      <section className="grid grid-cols-3 gap-8 px-12 py-12">
        {[
          { 
            title: "Legal Professional", 
            img: businessOwnerImg,
            description: "Protect sensitive client data and legal documents with military-grade encryption and secure sharing capabilities."
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

      {/* Testimonials Section */}
      <section className="bg-blue-900 py-16 px-12">
        <h2 className="text-center text-white text-3xl font-bold mb-12">Customer Stories</h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              company: "LegalTech Solutions",
              logo: "LTS",
              quote: "Sekura.ai's encryption has become essential for protecting our clients' sensitive legal documents.",
              author: "Sarah Chen",
              role: "Chief Security Officer"
            },
            {
              company: "Family First",
              logo: "FF",
              quote: "Finally, a security solution that's powerful enough for a tech expert but simple enough for the whole family.",
              author: "Michael Rodriguez",
              role: "Home User"
            },
            {
              company: "Creative Studios",
              logo: "CS",
              quote: "The real-time monitoring alerts have saved our unreleased content from multiple breach attempts.",
              author: "Alex Kim",
              role: "Content Director"
            },
            {
              company: "DataGuard Inc",
              logo: "DG",
              quote: "The AI-powered threat detection is leagues ahead of traditional security solutions.",
              author: "James Wilson",
              role: "IT Manager"
            }
          ].map((item) => (
            <div key={item.company} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{item.logo}</span>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 mb-4">"{item.quote}"</p>
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">{item.author}</p>
                  <p className="text-gray-500">{item.role}</p>
                  <p className="text-blue-600 font-medium mt-1">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
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
              'Basic Encryption',
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
            features: [
              'Custom Security Policies',
              'Team Management',
              'API Access',
              'Dedicated Support Manager',
              'Custom Integration',
              'SLA Guarantee'
            ],
            highlight: false,
            cta: 'Contact Sales'
          }
        ].map(({ plan, features, highlight, cta, ctaIcon, price, popular }) => (
          <div key={plan} className={`rounded-lg shadow-xl p-8 text-center relative ${highlight ? 'bg-orange-500 text-white transform scale-105' : 'bg-gray-800 text-white'}`}>
            {popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">Most Popular</span>
              </div>
            )}
            <h3 className="font-bold text-2xl mb-2">{plan}</h3>
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
                  <span className="text-green-400">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
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
