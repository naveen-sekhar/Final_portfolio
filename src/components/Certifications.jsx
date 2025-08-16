import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import CertificationCard from './CertificationCard';
import { aboutData } from '../data/mockData';

const Certifications = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and credentials that validate my cybersecurity expertise
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {aboutData.skills.certifications.filter(cert => cert.status === 'Completed').length}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">Completed</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {aboutData.skills.certifications.filter(cert => cert.status === 'In Progress').length}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">In Progress</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {aboutData.skills.certifications.filter(cert => cert.status.includes('Planned')).length}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">Planned</p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.skills.certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>

        {/* Note about certificates */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-lg text-sm">
            <Award className="w-4 h-4" />
            Click on completed certifications to view the actual certificate documents
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
