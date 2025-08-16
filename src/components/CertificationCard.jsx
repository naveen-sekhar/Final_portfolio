import React from 'react';
import { Award, Calendar, Building2, FileText } from 'lucide-react';

const CertificationCard = ({ certification }) => {
  const handleCertificateClick = () => {
    if (certification.certificateFile) {
      // Open certificate in new tab
      window.open(certification.certificateFile, '_blank');
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'in progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'planned':
      case 'planned 2026':
      case 'planned 2025':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  const isClickable = certification.certificateFile && 
    certification.status.toLowerCase() === 'completed';

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
              {certification.name}
            </h3>
          </div>
          
          {/* Status Badge */}
          <div>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(certification.status)}`}>
              {certification.status}
            </span>
          </div>
        </div>

        {/* Issuer and Year */}
        <div className="flex items-center gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4" />
            <span>{certification.issuer}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{certification.year}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
          {certification.description}
        </p>

        {/* Action Button */}
        {isClickable ? (
          <button
            onClick={handleCertificateClick}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            View Certificate
          </button>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium py-3 px-4 rounded-lg cursor-not-allowed">
            <FileText className="w-4 h-4" />
            Certificate Pending
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
