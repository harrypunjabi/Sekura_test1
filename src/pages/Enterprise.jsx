import React from 'react';

const Enterprise = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              <a href="/" className="hover:text-blue-700">Sekura.ai</a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#consumer" className="text-gray-600 hover:text-gray-900">Consumer</a>
              <a href="/#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="/#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="/enterprise" className="text-gray-600 hover:text-gray-900">Enterprise</a>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Security for the Digital Age</h1>
              <p className="text-xl mb-8">Protect your organization's digital assets with Sekura's advanced AI-powered security platform. Trusted by Fortune 500 companies for comprehensive threat detection and prevention.</p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Enterprise Quote
              </button>
            </div>
            <div className="hidden md:block">
              {/* Add enterprise security illustration/image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Enterprise-Grade Protection</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Comprehensive security solutions designed for large-scale organizations with complex security requirements.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Security</h3>
              <p className="text-gray-600">Advanced threat detection using machine learning algorithms that adapt to new security threats in real-time. Identifies and blocks sophisticated attack patterns before they cause damage.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">24/7 Expert Support</h3>
              <p className="text-gray-600">Dedicated security team with 15-minute response time for critical issues. Direct access to security engineers and threat analysts for immediate assistance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Custom Integration</h3>
              <p className="text-gray-600">Seamless integration with your existing security stack including SIEM, SOAR, and EDR solutions. Custom API endpoints for specialized security workflows.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">Real-time security dashboards with actionable insights. Comprehensive audit logs and compliance reporting with automated risk assessments.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Enterprise Controls</h3>
              <p className="text-gray-600">Granular access controls with role-based permissions. Single Sign-On (SSO) integration, and advanced security policy management across multiple teams.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Global Infrastructure</h3>
              <p className="text-gray-600">Distributed security network across 30+ global data centers. Enterprise-grade encryption with dedicated regional instances for data sovereignty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Enterprise-Grade Security</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading organizations that trust Sekura to protect their digital assets. Our enterprise team will create a custom security solution tailored to your needs.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Custom Demo
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Enterprise Security Guide
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Enterprise-Ready Platform</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Built to meet the highest security standards with industry-leading certifications and compliance measures.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Security Certifications</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>SOC 2 Type II Certified:</strong> Annual independent security audits</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>ISO 27001 Certified:</strong> International security management standards</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>GDPR Compliant:</strong> Full European data protection compliance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>HIPAA Compliant:</strong> Healthcare data security standards</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Enterprise Infrastructure</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>99.99% Uptime SLA:</strong> Guaranteed platform availability</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Global CDN Network:</strong> 30+ points of presence worldwide</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Security Audits:</strong> Quarterly penetration testing and security reviews</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span><strong>Disaster Recovery:</strong> Multi-region failover with 15-minute RTO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise; 