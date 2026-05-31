'use client';

const cards = [
  {
    id: 1,
    title: 'Belong',
    description: 'Find your people and feel less alone.',
    iconSrc: '/icon_022_02.png',
  },
  {
    id: 2,
    title: 'Discover',
    description: 'Understand yourself and what truly matters to you.',
    iconSrc: '/icon_022_03.png',
  },
  {
    id: 3,
    title: 'Be Real',
    description: 'Feel safe being exactly who you are.',
    iconSrc: '/icon_022_04.png',
  },
  {
    id: 4,
    title: 'Connect',
    description: 'Build real friendships and learn how to be close to others.',
    iconSrc: '/icon_022_05.png',
  },
  {
    id: 5,
    title: 'Dream',
    description: 'Reconnect with your dreams and what excites you.',
    iconSrc: '/icon_022_06.png',
  },
  {
    id: 6,
    title: 'Experience',
    description: 'Find your own answers through real experience, not just theoretical ideas.',
    iconSrc: '/icon_022_07.png',
  },
];

export default function CardGrid() {
  return (
    <section id="experience" className="w-full px-3 lg:px-[20%] py-16 lg:py-24" style={{ backgroundColor: '#F5F1ED' }}>
      <div className="mx-auto w-full">
        {/* Grid layout - 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon */}
              <img
                src={card.iconSrc}
                alt={card.title}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                }}
              />

              {/* Title */}
              <h3
                className="tm_heading"
                style={{ color: '#2B2B2B' }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="tm_body"
                style={{ color: '#2B2B2B' }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
