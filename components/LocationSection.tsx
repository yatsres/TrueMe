'use client';

import { useEffect, useRef } from 'react';
import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function LocationSection() {
  const { ref, isInView } = useInView();
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame - faster
    const singleSetWidth = carousel.scrollWidth / 2; // Since we'll duplicate items

    const interval = setInterval(() => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0; // Loop back seamlessly
      }
      carousel.scrollLeft = scrollPosition;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = carouselRef2.current;
    if (!carousel) return;

    let scrollPosition = carousel.scrollWidth / 2; // Start at the middle
    const scrollSpeed = 0.5; // Pixels per frame - faster
    const singleSetWidth = carousel.scrollWidth / 2; // Since we'll duplicate items

    const interval = setInterval(() => {
      scrollPosition -= scrollSpeed; // Move in opposite direction
      if (scrollPosition <= 0) {
        scrollPosition = singleSetWidth; // Loop back seamlessly
      }
      carousel.scrollLeft = scrollPosition;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const carouselImages = [
    '/img_092_01.jpg',
    '/img_092_02.jpg',
    '/img_092_03.jpg',
    '/img_092_04.jpg',
    '/img_092_05.jpg',
    '/img_092_06.png',
    '/img_092_07.jpg',
  ];

  const carouselImages2 = [
    '/img_094_05.jpg',
    '/img_094_04.jpg',
    '/img_094_03.jpg',
    '/img_094_02.jpg',
    '/img_094_01.jpg',
  ];

  return (
    <div id="location">
      {/* 091_Location - Background video with heading and text */}
      <section
        ref={ref}
        className={`relative w-full px-3 lg:px-[20%] py-16 lg:py-24 gpu-accelerated overflow-hidden ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
        style={{
          minHeight: '790px',
        }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/vid_091-poster.jpg"
        >
          <source src="/vid_091.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="flex flex-col items-start justify-center h-full min-h-96 text-left">
            <h2
              className="tm_title_2 mb-8 lg:mb-12"
              style={{ color: '#d2ff72' }}
            >
              Location &<br />Accommodation
            </h2>

            <div className="max-w-3xl">
              <p className="tm_subheader text-white mb-6">
                The camp takes place at Quinta da Enxara, a peaceful space in the Mafra area, surrounded by nature.
              </p>
            </div>
            <p className="tm_body_big text-white text-right">
              Teenagers live together at the Quinta throughout the week. The environment is calm, green, and safe — with plenty of space to relax, connect, and be outdoors.
            </p>
          </div>
        </div>
      </section>

      {/* 092_Location - Image Carousel */}
      <section className="w-full" style={{ backgroundColor: '#F5F1ED', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ paddingLeft: '2%', paddingRight: '2%' }}>
          <div
            ref={carouselRef}
            className="flex gap-2 lg:gap-3 overflow-x-auto"
            style={{ scrollBehavior: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
              {[...carouselImages, ...carouselImages].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 overflow-hidden cursor-pointer"
                  style={{
                    width: '400px',
                    height: '300px',
                    position: 'relative'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${image})`,
                      transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)'
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <div className="flex items-center justify-center p-8" style={{ backgroundColor: '#F5F1ED', minHeight: '500px' }}>
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* 093_Location - Rooms and Facilities Details */}
      <section className="w-full px-3 lg:px-[20%] py-16 lg:py-24" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          {/* Top section - Text and room images */}
          <div className="mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start" style={{ gridTemplateColumns: '2fr 3fr' }}>
            {/* Left - Text content */}
            <div>
              <h3 className="tm_subheader_2 mb-6 lg:mb-8" style={{ color: '#427047' }}>
                Participants stay in rooms of <br />
                <span style={{ color: '#427047' }}>3–4 people</span>, each with a <span style={{ color: '#427047' }}>private bathroom (toilet and shower).</span>
              </h3>

              <p className="text-lg lg:text-xl text-gray-800 mb-6 leading-relaxed">
                Meals are prepared by a professional chef, and we provide five meals per day.
              </p>
            </div>

            {/* Right - Room image */}
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: '300px', height: '400px' }}>
              <img
                src="/img_094_03.jpg"
                alt="Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom section - Large image and text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start" style={{ gridTemplateColumns: '3fr 2fr' }}>
            {/* Left - Large image */}
            <div className="rounded-3xl overflow-hidden" style={{ minHeight: '400px' }}>
              <img
                src="/img_094_05.jpg"
                alt="Common area"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Text */}
            <div>
              <p
                className="tm_subheader_2"
                style={{ color: '#ff751f' }}
              >
                Everything is designed so teenagers can feel comfortable, supported, and at ease during their time with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 094_Location - Duplicate Image Carousel */}
      <section className="w-full" style={{ backgroundColor: '#F5F1ED', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ paddingLeft: '2%', paddingRight: '2%' }}>
          <div
            ref={carouselRef2}
            className="flex gap-2 lg:gap-3 overflow-x-auto"
            style={{ scrollBehavior: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
              {[...carouselImages2, ...carouselImages2].map((image, index) => (
                <div
                  key={`carousel-dup-${index}`}
                  className="flex-shrink-0 overflow-hidden cursor-pointer"
                  style={{
                    width: '400px',
                    height: '300px',
                    position: 'relative'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${image})`,
                      transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)'
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
