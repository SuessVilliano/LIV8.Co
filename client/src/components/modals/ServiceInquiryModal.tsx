import { useState } from 'react';
import ServiceInquiryForm from '@/components/forms/ServiceInquiryForm';

interface ServiceInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  } | null;
}

export default function ServiceInquiryModal({ isOpen, onClose, service }: ServiceInquiryModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className={`bg-gradient-to-r ${service.color} p-6 rounded-t-2xl text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <i className={`${service.icon} text-2xl`}></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="text-blue-100 mt-1">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <ServiceInquiryForm
            service={service.id}
            title={service.title}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}