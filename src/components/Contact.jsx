import React, { useState } from 'react';
import { contactData } from '../data/mockData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink, MessageCircle, User, FileText, Shield, Code, Award, Clock } from 'lucide-react';

const Contact = () => {
  // Removed formData, isSubmitting, submitStatus as they are no longer needed.

  // Removed handleInputChange as it's no longer used.

  // Removed handleSubmit as it's no longer used.

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactData.socialLinks.github,
      icon: Github,
      color: 'hover:text-purple-400 hover:shadow-purple-500/25'
    },
    {
      name: 'LinkedIn',
      url: contactData.socialLinks.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:shadow-blue-500/25'
    },
    {
      name: 'Twitter',
      url: contactData.socialLinks.twitter,
      icon: Twitter,
      color: 'hover:text-cyan-400 hover:shadow-cyan-500/25'
    },
    {
      name: 'Website',
      url: contactData.socialLinks.personal_website,
      icon: ExternalLink,
      color: 'hover:text-green-400 hover:shadow-green-500/25'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss opportunities? Let's connect and build something secure together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
                  Let's Connect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href={`mailto:${contactData.email}`}
                        className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{contactData.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Availability</p>
                  <p className="text-cyan-400 font-medium">{contactData.availability}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Follow My Work</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-cyan-400" />
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="flex items-center space-x-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group"
                  >
                    <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Send Email</p>
                      <p className="text-gray-400 text-sm">Get in touch directly</p>
                    </div>
                  </a>
                  
                  <a 
                    href={contactData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
                  >
                    <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                      <Linkedin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Connect on LinkedIn</p>
                      <p className="text-gray-400 text-sm">Professional networking</p>
                    </div>
                  </a>
                  
                  <a 
                    href={contactData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
                  >
                    <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                      <Github className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">View GitHub</p>
                      <p className="text-gray-400 text-sm">Check out my projects</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl blur opacity-75"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                  Areas of Expertise
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-medium">Cybersecurity</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                    <Code className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">IoT Security</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Penetration Testing</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Incident Response</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Current Focus</p>
                  <p className="text-cyan-400 font-medium">Available for internships and entry-level positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;