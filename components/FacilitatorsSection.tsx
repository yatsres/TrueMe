'use client';

import { useState } from 'react';
import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function FacilitatorsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();
  const [imageStyle, setImageStyle] = React.useState({ marginTop: '0px', height: '400px' });
  const [julieImageStyle, setJulieImageStyle] = React.useState({ marginTop: '0px', height: '500px' });
  const [iraImageStyle, setIraImageStyle] = React.useState({ marginTop: '0px', height: '500px' });
  const [julieCarouselIndex, setJulieCarouselIndex] = React.useState(0);
  const [iraCarouselIndex, setIraCarouselIndex] = React.useState(0);
  const detailsRef = React.useRef(null);

  const julieImages = ['/img_072_102.jpg', '/img_072_103.jpg', '/img_072_101.png'];
  const iraImages = ['/img_072_202.jpg', '/img_072_203.jpg', '/img_072_201.png'];

  // Autoplay Julie carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setJulieCarouselIndex(prev => (prev + 1) % julieImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [julieImages.length]);

  // Autoplay Ira carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIraCarouselIndex(prev => (prev + 1) % iraImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [iraImages.length]);

  React.useEffect(() => {
    const updateAlignment = () => {
      const heading = document.querySelector('#facilitators-heading');
      const button = document.querySelector('#facilitators-button');

      if (heading && button) {
        const headingRect = heading.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        // Height from heading top to button bottom
        const height = buttonRect.bottom - headingRect.top;

        setImageStyle({
          marginTop: '0px',
          height: `${height}px`
        });
      }
    };

    const updateJulieImageAlignment = () => {
      const julieHeading = document.querySelector('#julie-heading');
      const julieLogos = document.querySelector('#julie-logos');

      if (julieHeading && julieLogos) {
        const headingRect = julieHeading.getBoundingClientRect();
        const logosRect = julieLogos.getBoundingClientRect();

        // Height from heading top to logos bottom
        const height = logosRect.bottom - headingRect.top;

        setJulieImageStyle({
          marginTop: '0px',
          height: `${height}px`
        });
      }
    };

    const updateIraImageAlignment = () => {
      const iraHeading = document.querySelector('#ira-heading');
      const iraLogos = document.querySelector('#ira-logos');

      if (iraHeading && iraLogos) {
        const headingRect = iraHeading.getBoundingClientRect();
        const logosRect = iraLogos.getBoundingClientRect();

        // Height from heading top to logos bottom
        const height = logosRect.bottom - headingRect.top;

        setIraImageStyle({
          marginTop: '0px',
          height: `${height}px`
        });
      }
    };

    // Small delay to ensure DOM is fully painted
    setTimeout(() => {
      updateAlignment();
      updateJulieImageAlignment();
      updateIraImageAlignment();
    }, 50);

    window.addEventListener('resize', () => {
      updateAlignment();
      updateJulieImageAlignment();
      updateIraImageAlignment();
    });

    return () => {
      window.removeEventListener('resize', () => {
        updateAlignment();
        updateJulieImageAlignment();
      });
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      if (detailsRef.current) {
        const rect = detailsRef.current.getBoundingClientRect();
        // If the details section has scrolled out of view (top is below viewport)
        if (rect.top > window.innerHeight) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div id="facilitators">
      {/* 071_Facilitators - Header/Overview */}
      <section
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 lg:px-[20%] py-16 lg:py-24 cursor-pointer transition-all gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
        style={{ backgroundColor: '#F5F1ED' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left column - Image */}
            <div
              className="rounded-3xl overflow-hidden hover:opacity-95 transition-opacity"
              style={{ backgroundColor: '#C4A574', marginTop: '0px', height: '100%' }}
            >
              <img src="/img_071_01.png" alt="Facilitators" className="w-full h-full object-cover" />
            </div>

            {/* Right column - Content */}
            <div
              className="flex flex-col justify-center"
            >
              <h2 className="tm_title_2 mb-8 lg:mb-12" style={{ color: '#ff751f' }} id="facilitators-heading">
                Facilitators
              </h2>

              <h3 className="tm_subheader_2 mb-6 lg:mb-8" style={{ color: '#427047' }}>
                Our facilitators are educated and experienced in areas such as:
              </h3>

              <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-12 tm_body text-gray-800" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>Pedagogical and Psychological Education Process Integrative Psychotherapy</li>
                <li>Child Psychology</li>
                <li>Human-Personal Approach to Children Dance and Movement Therapy</li>
                <li>Awareness Facilitators Method</li>
                <li>Neuro-Linguistic Programming (NLP)</li>
              </ul>

              <p className="tm_body text-gray-800 mb-8 lg:mb-12">
                They combine professional experience with something equally important: a real love for working with teenagers
              </p>

              <button
                className="w-full lg:w-auto px-12 lg:px-16 py-5 lg:py-6 rounded-full tm_button flex items-center justify-center gap-3 transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated"
                style={{ backgroundColor: '#ff751f', color: 'white' }}
                id="facilitators-button"
              >
                READ MORE
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.5s' }}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 072_Facilitators - Detailed Content (Hidden by default) */}
      <section
        ref={detailsRef}
        className="overflow-hidden px-3 lg:px-[20%] transition-all"
        style={{
          backgroundColor: '#F5F1ED',
          pointerEvents: isOpen ? 'auto' : 'none',
          maxHeight: isOpen ? '2500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="py-16 lg:py-24">
          <div className="mx-auto" style={{ maxWidth: '1440px' }}>
            {/* Julie Burtasova */}
            <div
              className="mb-20 lg:mb-32 grid grid-cols-1 items-start"
              style={{ gridTemplateColumns: '40% 60%', gap: '2rem' }}
            >
              {/* Left - Content (40%) */}
              <div>
                <h3 className="tm_heading mb-6 lg:mb-8" style={{ color: '#ff751f' }} id="julie-heading">
                  Julie<br />Burtasova
                </h3>

                <p className="tm_subheader_2 text-gray-800 mb-6">
                  <span className="tm_subheader_2" style={{ color: '#427047' }}>Julie Burtasova is a Practical Psychologist, Social Pedagogue, Awareness Facilitator, and Trainer for teenagers.</span>
                </p>

                <div className="space-y-4 tm_body text-gray-800">
                  <p>She has a great passion for working with children and teenagers and has been doing so since the age of 18. She strongly believes in the potential of every child and that providing a supportive environment can change the teenage experience.</p>

                  <p>Julie's dedication to her work led her to study Psychology and Pedagogy at University and to continue her education by studying new paradigms of working with children and teenagers from all over the world.</p>

                  <p>For the past 15 years, Julie has developed and conducted training programs for teenagers, helping hundreds of kids to become more confident, pursue their dreams, make friends, and be true to themselves.</p>
                </div>
              </div>

              {/* Right - Single Image */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
                <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#C4A574', position: 'relative', aspectRatio: '1 / 1' }}>
                  <img
                    src="/img_072_101.png"
                    alt="Julie Burtasova"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Logos/Certifications - bottom aligned */}
                <div className="flex gap-2 w-full" id="julie-logos">
                  <div style={{ flex: '0.94', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_121.png" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '1', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_122.png" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '1.19', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_123.png" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '1.41', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_124.png" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '2.81', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_125.jpg" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
              </div>
            </div>


            {/* Ira Grysha */}
            <div
              className="grid grid-cols-1 items-start"
              style={{ gridTemplateColumns: '60% 40%', gap: '2rem' }}
            >
              {/* Left - Single Image */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
                <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#C4A574', position: 'relative', aspectRatio: '1 / 1' }}>
                  <img
                    src="/img_072_201.png"
                    alt="Ira Grysha"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Logos/Certifications - bottom aligned */}
                <div className="flex gap-2 w-full" id="ira-logos">
                  <div style={{ flex: '1', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_221.png" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '1.19', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_222.png" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '2.81', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_223.jpg" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ flex: '3.70', height: '60px', position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <img src="/img_072_224.webp" alt="Certification" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <h3 className="tm_heading mb-6 lg:mb-8" style={{ color: '#ff751f' }} id="ira-heading">
                  Ira<br />Grysha
                </h3>

                <p className="tm_subheader_2 text-gray-800 mb-6">
                  <span className="tm_subheader_2" style={{ color: '#427047' }}>Ira Grysha is an experienced Pedagogue and Awareness Facilitator with over 17 years of experience working with teenagers and adults.</span>
                </p>

                <div className="space-y-4 tm_body text-gray-800">
                  <p>She believes in recognizing individuals' strengths and providing genuine attention and presence to help teens grow. Iryna understands the crucial role teenagers play in shaping the future, which is why she has worked as a teen development program trainer since 2010.</p>

                  <p>Her participants have completed numerous social and charitable projects, including fundraising, sports, and environmental events. With a first degree in Pedagogy, Iryna is continuously expanding her expertise in Psychology and facilitation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
