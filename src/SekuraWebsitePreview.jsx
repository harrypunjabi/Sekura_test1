import React, { useState } from 'react';

const SekuraWebsitePreview = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const correctPassword = 'sekura123'; // change this to your desired password

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
          <h1 className="text-xl font-bold mb-4">Enter Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
            placeholder="Password"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
          >
            Access Site
          </button>
        </div>
      </div>
    );
  }

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
      <section className="py-16 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl font-bold mb-4">Your Digital World, Secured</h1>
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

      {/* Use Cases Section */}
      <section className="grid grid-cols-3 gap-8 px-12 py-12">
        {["Small Business Owner", "Household Defender", "Digital Content Creator"].map((title, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="h-44 bg-gray-200 flex items-center justify-center font-semibold">Image Placeholder</div>
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
            <button className={`rounded-full py-2 px-5 font-semibold ${plan === 'Pro' ? 'bg-white text-orange-500' : 'bg-gray-700 hover:bg-gray-600'}`}>
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
