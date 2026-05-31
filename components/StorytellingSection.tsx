'use client';

import { useContext } from 'react';
import { AboutDetailContext } from '@/context/AboutDetailContext';
import { useInView } from '@/hooks/useInView';

export default function StorytellingSection() {
  const { showDetails } = useContext(AboutDetailContext);
  const { ref, isInView } = useInView();
  const questions = [
    'Who am I, really?',
    'Where do I belong?',
    'Am I interesting to anyone?',
    'Is something wrong with me?',
    'Can I trust other people?',
    'Why do I feel so different sometimes?',
    'What do I actually want?',
  ];

  const challenges = [
    'self-doubt',
    'fear of being judged',
    'loneliness',
    'body insecurity',
    'difficulty expressing emotions',
    'conflicts with others',
    'not knowing where they belong',
  ];

  return (
    <section
      ref={ref}
      className={`overflow-hidden px-3 lg:px-[20%] transition-all gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
      style={{
        backgroundColor: '#F5F1ED',
        pointerEvents: showDetails ? 'auto' : 'none',
        height: showDetails ? 'auto' : 0,
        minHeight: showDetails ? 'auto' : 0,
        maxHeight: showDetails ? '2000px' : 0,
        opacity: showDetails ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="py-20 lg:py-section-gap">
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" style={{ gridTemplateRows: 'auto auto auto', alignItems: 'start' }}>

            {/* Row 1, Column 1: Heading + body text */}
            <div style={{ marginLeft: '40px', marginRight: '40px' }}>
              <p className="tm_subheader mb-8" style={{ color: '#ff751f' }}>
                Teenagehood is a time when a lot is happening inside.
              </p>
              <div className="space-y-6">
                <p className="tm_body text-trueme-dark">
                  Teenagers are trying to understand who they are and where they belong.
                </p>
                <p className="tm_body text-trueme-dark">
                  They want to be themselves. But they are also afraid that if they really show who they are, they might not be accepted.
                </p>
                <p className="tm_body text-trueme-dark">
                  So they move between trying to fit in and trying to stand out.
                </p>
                <p className="tm_body text-trueme-dark">
                  And this creates confusion, pressure, and doubt.
                </p>
              </div>
            </div>

            {/* Row 1, Column 2: Heading + questions */}
            <div style={{ marginLeft: '40px', marginRight: '40px' }}>
              <p className="tm_subheader mb-8" style={{ color: '#ff751f' }}>
                This is where many questions start to come up:
              </p>
              <ul className="space-y-2">
                {questions.map((question, index) => {
                  const icons = [
                    '/icon_022_02.png',
                    '/icon_022_03.png',
                    '/icon_022_04.png',
                    '/icon_022_05.png',
                    '/icon_022_06.png',
                    '/icon_022_07.png',
                    '/icon_022_02.png',
                  ];
                  return (
                    <li key={index} className="tm_body_big text-trueme-dark flex items-start gap-3">
                      <img
                        src={icons[index]}
                        alt={question}
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'contain',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      />
                      <span>{question}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Row 2: Dashed line spanning both columns */}
            <div style={{ gridColumn: '1 / -1' }}>
              <hr style={{ borderColor: '#ff751f', borderStyle: 'dashed', margin: '3rem 0' }} />
            </div>

            {/* Row 3, Column 1: Body text */}
            <div style={{ paddingTop: '60px', marginLeft: '40px', marginRight: '40px' }}>
              <div className="space-y-6">
                <p className="tm_body text-trueme-dark">
                  Many teenagers feel alone in this, even when they are surrounded by people. They talk, but don't always feel understood.
                </p>
                <p className="tm_body text-trueme-dark">
                  They carry things inside that they don't really know how to say out loud. We create a space where they don't have to go through this alone.
                </p>
                <p className="tm_body text-trueme-dark">
                  Through real experience - not lectures - teenagers spend time together, talk, listen, share, create, support each other, and slowly begin to open up.
                </p>
              </div>
            </div>

            {/* Row 3, Column 2: Challenges with icons + background image */}
            <div
              style={{
                backgroundImage: 'url(/icon_022_01.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '400px',
                borderRadius: '60px',
                overflow: 'hidden',
                position: 'relative',
                marginLeft: '40px',
                marginRight: '40px',
                padding: '32px',
              }}
            >
              <p className="tm_subheader mb-8" style={{ color: '#427047' }}>
                At the same time, we work with what many of them go through:
              </p>
              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0">•</span>
                    <p className="tm_body text-trueme-dark">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
