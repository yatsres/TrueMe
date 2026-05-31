'use client';

import { useState, useEffect } from 'react';
import { trackFormSubmit, trackLead } from '@/lib/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    source: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new CustomEvent('modalOpen'));
    } else {
      document.body.style.overflow = 'unset';
      window.dispatchEvent(new CustomEvent('modalClose'));
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackFormSubmit();
        trackLead();
        setFormData({
          name: '',
          phone: '',
          email: '',
          source: '',
          message: '',
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
      onClick={onClose}
    >
      {/* Modal container - two column layout */}
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', minHeight: '600px', aspectRatio: '16 / 9' }}
      >
        {/* Left side - Text content with lime background */}
        <div
          className="p-12 flex flex-col justify-between"
          style={{ backgroundColor: '#d2ff72' }}
        >
          <div>
            <h2 className="tm_subheader mb-8" style={{ color: '#427047', lineHeight: '1.2' }}>
              Would you like to<br />know more?
            </h2>

            <p className="tm_body mb-8" style={{ color: '#427047', lineHeight: '1.6' }}>
              If you feel your teenager needs friendship, confidence, connection, emotional support, or simply a space where they can safely be themselves — we would love to meet you.
            </p>

            <p className="tm_body_bold mb-8" style={{ color: '#427047', lineHeight: '1.6' }}>
              Fill out the form and our team will contact you personally and answer all your questions.
            </p>

            <p className="tm_body mb-0" style={{ color: '#427047', lineHeight: '1.6' }}>
              We'll contact you personally, answer your questions, and walk you through the process.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-12 flex flex-col justify-start" style={{ backgroundColor: '#d2ff72' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name *"
                required
                className="w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none tm_body"
                style={{ borderColor: '#F5F1ED', color: '#427047' }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff751f';
                  e.target.style.color = '#427047';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#F5F1ED';
                  if (!e.target.value) {
                    e.target.style.color = '#999999';
                  }
                }}
              />
            </div>

            {/* Phone field */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number (with country code) *"
                required
                className="w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none tm_body"
                style={{ borderColor: '#F5F1ED', color: '#427047' }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff751f';
                  e.target.style.color = '#427047';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#F5F1ED';
                  if (!e.target.value) {
                    e.target.style.color = '#999999';
                  }
                }}
              />
            </div>

            {/* Email field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address *"
                required
                className="w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none tm_body"
                style={{ borderColor: '#F5F1ED', color: '#427047' }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff751f';
                  e.target.style.color = '#427047';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#F5F1ED';
                  if (!e.target.value) {
                    e.target.style.color = '#999999';
                  }
                }}
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none tm_body"
                style={{ borderColor: '#F5F1ED', color: formData.source ? '#427047' : '#999999' }}
                onFocus={(e) => (e.target.style.borderColor = '#ff751f')}
                onBlur={(e) => (e.target.style.borderColor = '#F5F1ED')}
              >
                <option value="" style={{ color: '#999999' }}>How did you hear about us?</option>
                <option value="instagram" style={{ color: '#427047' }}>Instagram</option>
                <option value="telegram" style={{ color: '#427047' }}>Telegram</option>
                <option value="friend" style={{ color: '#427047' }}>Friend's recommendation</option>
                <option value="returning" style={{ color: '#427047' }}>I've been with you before</option>
              </select>
            </div>

            {/* Message field */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Questions or anything else we should know? (optional)"
                rows={4}
                className="w-full px-4 py-3 border-2 rounded-xl transition-colors focus:outline-none resize-none tm_body"
                style={{ borderColor: '#F5F1ED', color: '#427047' }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff751f';
                  e.target.style.color = '#427047';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#F5F1ED';
                  if (!e.target.value) {
                    e.target.style.color = '#999999';
                  }
                }}
              />
            </div>

            {/* Submit status messages */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl" style={{ backgroundColor: '#d2ff72', color: '#427047' }}>
                <p className="tm_body font-semibold">Thank you! We'll be in touch soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-100">
                <p className="tm_body font-semibold text-red-700">Something went wrong. Please try again.</p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full tm_button font-semibold transition-luxury hover-luxury-lift hover-luxury-scale disabled:opacity-50"
              style={{ backgroundColor: '#ff751f', color: 'white' }}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
