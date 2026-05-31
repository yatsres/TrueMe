'use client';

const cards = [
  // Row 1
  {
    id: 1,
    type: 'text',
    title: "We don't give lectures - we invite them into real experiences.",
    backgroundColor: '#ff751f',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 2,
    type: 'text',
    title: 'There is space for depth, creativity, honest sharing, and fun - for being together in a real way.',
    backgroundColor: '#a8cb5e',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    type: 'video',
    src: '/vid_030_01.mp4',
    poster: '/vid_030_01-poster.jpg',
    colSpan: 1,
    rowSpan: 1,
  },
  // Row 2
  {
    id: 4,
    type: 'video',
    src: '/vid_030_02.mp4',
    poster: '/vid_030_02-poster.jpg',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 5,
    type: 'text',
    title: 'We bring teenagers together and create a space with clear rules and shared values.',
    backgroundColor: '#427047',
    colSpan: 1,
    rowSpan: 1,
  },
  // Row 3
  {
    id: 7,
    type: 'text',
    title: 'They talk, listen, create, negotiate, and learn to move forward together.\n\nThey try, make mistakes, receive feedback from each other, and start to open up.',
    backgroundColor: '#ff751f',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 6,
    type: 'video',
    src: '/vid_030_03.mp4',
    poster: '/vid_030_03-poster.jpg',
    colSpan: 1,
    rowSpan: 1,
  },
  // Row 4
  {
    id: 8,
    type: 'text',
    title: 'They begin to understand what works for them, feel more confident in themselves, and less alone.',
    backgroundColor: '#ff751f',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 10,
    type: 'video',
    src: '/vid_030_04.mp4',
    poster: '/vid_030_04-poster.jpg',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 9,
    type: 'text',
    title: 'They speak openly, hear others, see that they are not the only ones, and try new ways of being.',
    backgroundColor: '#a8cb5e',
    colSpan: 1,
    rowSpan: 1,
  },
];

export default function WhatSection030() {
  return (
    <section className="w-full px-3 lg:px-[20%] py-16 lg:py-24" style={{ backgroundColor: '#F5F1ED', position: 'relative', zIndex: 1, overflow: 'visible' }}>
      <div className="mx-auto" style={{ maxWidth: '1440px', width: '100%' }}>
        {/* 3x4 Grid with mixed content - all square cells */}
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: '8px', paddingLeft: '40px', paddingRight: '40px', width: '100%' }}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden gpu-accelerated"
              style={{
                gridColumn: `span ${card.colSpan}`,
                gridRow: `span ${card.rowSpan}`,
                backgroundColor: card.type === 'video' ? '#C4A574' : card.backgroundColor,
                aspectRatio: card.colSpan === 2 ? '2 / 1' : '1 / 1',
                borderRadius: '60px',
                paddingLeft: card.type === 'video' ? '0px' : '30px',
                paddingRight: card.type === 'video' ? '0px' : '30px',
              }}
            >
              {card.type === 'video' ? (
                <video
                  className="w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={card.poster}
                  style={{ objectFit: 'cover' }}
                >
                  <source src={card.src} type="video/mp4" />
                </video>
              ) : (
                <div className="p-8 h-full flex items-center justify-center">
                  <p
                    className="tm_body text-center whitespace-pre-line"
                    style={{ color: 'white' }}
                  >
                    {card.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
