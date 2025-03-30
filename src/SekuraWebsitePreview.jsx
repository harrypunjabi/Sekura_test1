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
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all">
                  Get Started
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
          { title: "Legal Professional", img: businessOwnerImg },
          { title: "Household Defender", img: householdDefenderImg },
          { title: "Digital Content Creator", img: contentCreatorImg }
        ].map(({ title, img }, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="aspect-[4/3] relative">
              <img 
                src={img} 
                alt={title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">For {title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-900 py-10 px-12">
        <h2 className="text-center text-white font-semibold mb-6">Customer Stories</h2>
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-20 bg-gray-300 flex items-center justify-center">Logo</div>
              <div className="p-4 text-sm">
                <p className="italic">"Sekura.ai has completely improved our data security."</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="grid grid-cols-3 gap-8 py-12 px-12">
        {['Free', 'Pro', 'Enterprise'].map((plan, idx) => (
          <div key={idx} className={`rounded-lg shadow-xl p-6 text-center ${plan === 'Pro' ? 'bg-orange-500 text-white transform scale-105' : 'bg-gray-800 text-white'}`}>
            <h3 className="font-bold text-2xl mb-4">{plan}</h3>
            <ul className="mb-6">
              <li>✔️ Protected Folders</li>
              <li>✔️ Advanced Encryption</li>
              <li>✔️ Priority Support</li>
            </ul>
            <button className={`rounded-full py-2 px-5 font-semibold ${plan === 'Enterprise' ? 'bg-white text-orange-500' : plan === 'Pro' ? 'bg-white text-orange-500' : 'bg-gray-700 hover:bg-gray-600'}`}>
              {plan === 'Enterprise' ? 'Contact Sales' : plan === 'Pro' ? 'Get Started' : 'Download'}
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
