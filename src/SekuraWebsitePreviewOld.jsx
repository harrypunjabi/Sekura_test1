import React from 'react';
import businessOwnerImg from './assets/legal-professional.png';
import householdDefenderImg from './assets/household-defender.png';
import contentCreatorImg from './assets/digital-content-creator.png';

const SekuraWebsitePreviewOld = () => {
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

      {/* Hero Section - OLD VERSION */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 py-2">Your Digital World, Secured</h1>
        <p className="mb-6">AI-Powered Security, Fully Private, Under Your Control</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg">
          ▶ Play Demo (3:08)
        </button>
        <ul className="flex justify-center gap-8 mt-8 text-green-600">
          {['Ransomware Protection', 'Secure Cloud Upload', 'Sensitive Data Lock', 'Prevent Unauthorized Access'].map((feat, idx) => (
            <li key={idx}>✔️ {feat}</li>
          ))}
        </ul>
      </section>

      {/* Rest of the sections remain the same */}
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

      {/* Rest of the component... */}
    </div>
  );
};

export default SekuraWebsitePreviewOld; 