import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Team() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b border-gray-200 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                Sekura.ai
              </Link>
            </div>

            <nav className="hidden md:flex space-x-10">
              <HashLink smooth to="/#features" className="text-base font-medium text-gray-500 hover:text-gray-900">Features</HashLink>
              <HashLink smooth to="/#pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</HashLink>
              <Link to="/enterprise" className="text-base font-medium text-gray-500 hover:text-gray-900">Enterprise</Link>
              <Link to="/team" className="text-base font-medium text-gray-500 hover:text-gray-900">Team</Link>
            </nav>

            <div className="flex items-center justify-end md:flex-1 lg:w-0">
              <button className="ml-8 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download
              </button>
              <Link to="/signin" className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Meet Our Team</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              We're a dedicated group of security professionals and engineers working to make the digital world safer.
            </p>
          </div>

          {/* Team grid */}
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {/* Team Member 1 - Tikka Nagi */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 h-80 flex items-center justify-center bg-gray-50">
                <img className="w-full h-full object-contain" src="/nagi.webp" alt="Tikka Nagi" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Tikka Nagi</p>
                  <p className="mt-1 text-gray-500">Founder</p>
                  <a href="https://www.linkedin.com/in/nagii/" 
                     className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn Profile
                  </a>
                  <p className="mt-3 text-base text-gray-500">
                    As a seasoned Computer Scientist and Security Expert, I bring deep technical proficiency in cybersecurity, networking, and infrastructure design to the entrepreneurial landscape. With a proven track record of developing and executing long-term strategic plans and automation solutions, I specialize in building robust systems that align technology initiatives with business objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 - Harinder */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 h-80 flex items-center justify-center bg-gray-50">
                <img className="w-full h-full object-contain" src="/harinder.webp" alt="Harinder" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Harinder</p>
                  <p className="mt-1 text-gray-500">Co-Founder</p>
                  <p className="mt-3 text-base text-gray-500">
                    With over 15 years of experience in data management, AI governance, and enterprise data strategy, Harinder leads Sekura AI's vision of securing data at scale. He has driven the development and execution of cutting-edge AI solutions, enabling businesses to protect their data while ensuring compliance with industry standards like GDPR and HIPAA. Harinder's background in product management and his leadership in launching innovative solutions have empowered global enterprises to transform their operations securely and efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 - Dominic */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 h-80 flex items-center justify-center bg-gray-50">
                <img className="w-full h-full object-contain" src="/dominic.webp" alt="Dominic" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">Dominic</p>
                  <p className="mt-1 text-gray-500">Founding Team Member</p>
                  <p className="mt-3 text-base text-gray-500">
                    As a dedicated data science and AI professional with nearly two decades of experience, I am committed to leveraging advanced technologies to drive transformative change. My inquisitive nature inspires me to develop AI-driven solutions that enable organizations to optimize data utilization while ensuring security and compliance. I am proud to be part of the team, contributing to innovative projects that enhance data protection and operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Product & Services */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-3">
                <li><HashLink smooth to="#features" className="text-base text-gray-400 hover:text-white transition-colors">Features</HashLink></li>
                <li><HashLink smooth to="#pricing" className="text-base text-gray-400 hover:text-white transition-colors">Pricing</HashLink></li>
                <li><Link to="/enterprise" className="text-base text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Support Tickets</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Developer Resources</a></li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section with Social Links and Copyright */}
          <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="https://twitter.com/sekuraai" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/sekuraai" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/sekuraai" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Sekura. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 