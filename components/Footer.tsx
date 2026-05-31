'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (type: string) => {
    setActiveModal(type);
    window.dispatchEvent(new Event('modalOpen'));
  };

  const closeModal = () => {
    setActiveModal(null);
    window.dispatchEvent(new Event('modalClose'));
  };

  const generatePDF = (type: 'privacy' | 'cookie' | 'terms') => {
    const content = modalContent[type];
    const doc = new jsPDF();
    let yPosition = 20;

    // Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(content.title, 20, yPosition);
    yPosition += 15;

    // Last updated
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    doc.text(`Last updated: ${content.lastUpdated}`, 20, yPosition);
    yPosition += 10;

    doc.setTextColor(0, 0, 0);

    // Content sections
    content.sections.forEach((section) => {
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Section heading
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(section.heading, 20, yPosition);
      yPosition += 8;

      // Section content
      if (section.content) {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const lines = doc.splitTextToSize(section.content, 170);
        doc.text(lines, 20, yPosition);
        yPosition += lines.length * 5 + 5;
      }

      yPosition += 3;
    });

    doc.save(`${type}-policy.pdf`);
  };

  const modalContent = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: '26/05/2026',
      sections: [
        {
          heading: 'At True Me Camp, we respect your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).',
          content: null,
        },
        {
          heading: 'What information we collect',
          content: 'Name\nEmail address\nPhone number\nCountry of residence\nAny information you choose to provide through our contact or registration forms',
        },
        {
          heading: 'Why we collect your information',
          content: 'Respond to your inquiries\nProvide information about our programs\nCommunicate regarding registrations and participation\nShare important updates related to the camp',
        },
        {
          heading: 'How your data is stored',
          content: 'Your information is stored securely and accessed only by authorized team members.',
        },
        {
          heading: 'Third-party services',
          content: 'We may use trusted third-party services such as:\n\nGoogle Analytics\nMeta Pixel\nTypeform / Tally / Google Forms\nEmail communication platforms\n\nThese services may process limited personal data necessary for their operation.',
        },
        {
          heading: 'Your rights',
          content: 'Under GDPR, you have the right to:\n\nAccess your personal data\nRequest correction or deletion\nWithdraw consent\nRequest limitation of processing\n\nTo request any of the above, please contact us at: trueme.projects@gmail.com',
        },
        {
          heading: 'Cookies',
          content: 'Our website may use cookies and analytics tools to improve user experience and understand website traffic.',
        },
      ],
    },
    cookie: {
      title: 'Cookie Policy',
      lastUpdated: '26/05/2026',
      sections: [
        {
          heading: 'Our website uses cookies and similar technologies to improve your browsing experience and analyze website traffic.',
          content: null,
        },
        {
          heading: 'What are cookies?',
          content: 'Cookies are small text files stored on your device when you visit a website.',
        },
        {
          heading: 'What cookies we use',
          content: 'Essential cookies — necessary for website functionality\nAnalytics cookies — to understand how visitors use the website\nMarketing cookies — for advertising and social media purposes',
        },
        {
          heading: 'Managing cookies',
          content: 'You can accept, reject, or manage cookies through our cookie banner or browser settings.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      lastUpdated: '26/05/2026',
      sections: [
        {
          heading: 'By using this website, you agree to these Terms & Conditions.',
          content: null,
        },
        {
          heading: 'Website purpose',
          content: 'This website provides information about True Me Camp programs and allows users to submit inquiries or registration requests.',
        },
        {
          heading: 'No guarantee of participation',
          content: 'Submitting a registration or inquiry form does not guarantee participation in the program. Participation is confirmed only after direct communication and approval from the True Me Camp team.',
        },
        {
          heading: 'Program changes',
          content: 'We reserve the right to modify program details, schedules, locations, facilitators, or activities when necessary.',
        },
        {
          heading: 'Intellectual property',
          content: 'All content on this website, including text, images, branding, logos, and design, belongs to True Me Camp unless otherwise stated. Content may not be copied, reproduced, or distributed without written permission.',
        },
        {
          heading: 'Limitation of liability',
          content: 'We strive to provide accurate and up-to-date information, but we do not guarantee that all website content is complete, current, or error-free.',
        },
        {
          heading: 'External links',
          content: 'Our website may contain links to third-party websites. We are not responsible for their content, services, or privacy practices.',
        },
        {
          heading: 'Privacy',
          content: 'Your use of this website is also governed by our Privacy Policy and Cookie Policy.',
        },
      ],
    },
  };

  const Modal = ({ type }: { type: 'privacy' | 'cookie' | 'terms' }) => {
    const content = modalContent[type];

    return (
      activeModal === type && (
          <>
            {/* Backdrop - blurred but not dark, closes modal on click */}
            <div
              onClick={() => closeModal()}
              className="fixed inset-0 z-40 pointer-events-auto modal-backdrop"
              style={{ backdropFilter: 'blur(8px)' }}
            />

            {/* Modal */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none"
              onClick={() => closeModal()}
            >
              <div
                className="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl max-h-[85vh] overflow-y-auto relative pointer-events-auto modal-content gpu-accelerated"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 lg:p-12">
                  {/* Close Button */}
                  <button
                    onClick={() => closeModal()}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  {/* Title */}
                  <h2 className="tm_title mb-2" style={{ color: '#427047' }}>
                    {content.title}
                  </h2>
                  <p className="tm_body text-gray-500 mb-8">
                    Last updated: {content.lastUpdated}
                  </p>

                  {/* Content Sections */}
                  <div className="space-y-6 mb-8">
                    {content.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className={idx === 0 ? 'tm_body_big mb-3' : 'tm_heading mb-3'} style={{ color: '#427047' }}>
                          {section.heading}
                        </h3>
                        {section.content && (
                          <p className="tm_body text-gray-700 whitespace-pre-line">
                            {section.content}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between gap-4 pt-6 border-t border-gray-200">
                    <a
                      href="mailto:trueme.projects@gmail.com"
                      className="px-6 py-3 rounded-full tm_button transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated"
                      style={{ backgroundColor: '#427047', color: 'white' }}
                    >
                      CONTACT US
                    </a>
                    <button
                      onClick={() => generatePDF(type)}
                      className="px-6 py-3 rounded-full tm_button transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated flex items-center gap-2"
                      style={{ backgroundColor: '#ff751f', color: 'white' }}
                    >
                      <span>DOWNLOAD</span>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(0deg)' }}>
                        <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
    );
  };

  return (
    <>
      <footer
        className="w-full px-3 lg:px-[20%] py-12 lg:py-16"
        style={{ backgroundColor: '#0A2120' }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1440px' }}>
          <div className="flex items-end justify-between w-full">
            {/* Left: Logo & Copyright */}
            <div
              className="flex-shrink-0 w-64"
            >
              <div>
                <img
                  src="/img_tm_logo.png"
                  alt="TRUE me camp"
                  className="mb-4"
                  style={{ width: '150px', height: 'auto' }}
                />
                <p className="tm_body opacity-60 text-white whitespace-nowrap">
                  © 2026 Superside.<br />All rights reserved.
                </p>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <div
              className="hidden lg:flex gap-8 justify-center flex-1"
            >
              <button
                onClick={() => openModal('privacy')}
                className="tm_nav text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal('cookie')}
                className="tm_nav text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => openModal('terms')}
                className="tm_nav text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>

            {/* Right: Social Icons */}
            <div
              className="flex-shrink-0 w-64 flex justify-end"
            >
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border-2 border-white opacity-60 hover:opacity-100 flex items-center justify-center transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal type="privacy" />
      <Modal type="cookie" />
      <Modal type="terms" />
    </>
  );
}
