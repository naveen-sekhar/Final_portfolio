import React, { useState } from 'react';
import { contactData } from '../data/mockData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink, MessageCircle, User, FileText, Clock, CheckCircle, Shield, Code, Award } from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  // Removed send message form and related logic as requested. Only contact info and social links remain.

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactData.socialLinks.github,
      icon: Github,
      description: 'View my code repositories and open source contributions'
    },
    {
      name: 'LinkedIn',
      url: contactData.socialLinks.linkedin,
      icon: Linkedin,
      description: 'Connect with me professionally and view my career journey'
    },
    {
      name: 'Twitter',
      url: contactData.socialLinks.twitter,
      icon: Twitter,
      description: 'Follow my thoughts on cybersecurity and tech trends'
    },
    {
      name: 'Website',
      url: contactData.socialLinks.personal_website,
      icon: ExternalLink,
      description: 'Visit my personal website and blog'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss opportunities? 
            Let's connect and build something secure together.
          </p>
            <a
              href="mailto:naveensekhar06@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
            >
              <span>Let's Connect</span>
            </a>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-slate-600 dark:text-slate-400 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                      <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
                      <a 
                        href={`mailto:${contactData.email}`}
                        className="text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-200 font-medium"
                      >
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                      <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</p>
                      <p className="text-slate-900 dark:text-white font-medium">{contactData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                      <Clock className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Availability</p>
                      <p className="text-slate-900 dark:text-white font-medium">{contactData.availability}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors duration-200 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                          <IconComponent className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{social.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{social.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-slate-600 dark:text-slate-400 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Contact</h2>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 border border-slate-200 dark:border-slate-700 group"
                  >
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Send Email</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Get in touch directly</p>
                    </div>
                  </a>
                  
                  <a 
                    href={contactData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 border border-slate-200 dark:border-slate-700 group"
                  >
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Connect on LinkedIn</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Professional networking</p>
                    </div>
                  </a>
                  
                  <a 
                    href={contactData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 border border-slate-200 dark:border-slate-700 group"
                  >
                    <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white">View GitHub</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Check out my projects</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-6 h-6 text-slate-600 dark:text-slate-400 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Areas of Expertise</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="text-slate-900 dark:text-white font-medium">Cybersecurity</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <Code className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="text-slate-900 dark:text-white font-medium">IoT Security</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <Award className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="text-slate-900 dark:text-white font-medium">Penetration Testing</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <Clock className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <span className="text-slate-900 dark:text-white font-medium">Incident Response</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Current Focus</p>
                  <p className="text-slate-900 dark:text-white font-medium">{contactData.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;