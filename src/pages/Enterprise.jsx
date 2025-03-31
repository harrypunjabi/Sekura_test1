import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Enterprise = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              <Link to="/" className="hover:text-blue-700">Sekura.ai</Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <HashLink smooth to="/#consumer" className="text-gray-600 hover:text-gray-900">Consumer</HashLink>
              <HashLink smooth to="/#features" className="text-gray-600 hover:text-gray-900">Features</HashLink>
              <HashLink smooth to="/#pricing" className="text-gray-600 hover:text-gray-900">Pricing</HashLink>
              <Link to="/enterprise" className="text-gray-600 hover:text-gray-900">Enterprise</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
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

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>

            {/* Product & Services */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-3">
                <li><HashLink smooth to="/#features" className="text-base text-gray-600 hover:text-gray-900">Features</HashLink></li>
                <li><HashLink smooth to="/#pricing" className="text-base text-gray-600 hover:text-gray-900">Pricing</HashLink></li>
                <li><Link to="/enterprise" className="text-base text-gray-600 hover:text-gray-900">Enterprise</Link></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">API Reference</a></li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Support Tickets</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Developer Resources</a></li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Security</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section with Social Links and Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Social Links */}
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-base text-gray-500">
                &copy; {new Date().getFullYear()} Sekura. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Enterprise; 