'use client';

interface AboutDetailSectionProps {
  isOpen: boolean;
}

export default function AboutDetailSection({ isOpen }: AboutDetailSectionProps) {
  if (!isOpen) return null;

  const challenges = [
    { name: 'Self-doubt', icon: '/icon_022_02.png' },
    { name: 'Fear of being judged', icon: '/icon_022_03.png' },
    { name: 'Loneliness', icon: '/icon_022_04.png' },
    { name: 'Body insecurity', icon: '/icon_022_05.png' },
    { name: 'Difficulty expressing emotions', icon: '/icon_022_06.png' },
    { name: 'Conflicts with others', icon: '/icon_022_07.png' },
    { name: 'Not knowing where they belong', icon: '/icon_022_02.png' },
  ];

  return (
    <section className="py-20 lg:py-section-gap px-3 lg:px-[20%] bg-trueme-bg">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16" style={{ gridTemplateRows: 'auto auto auto' }}>

          {/* Row 1, Column 1: Text block */}
          <div>
            <p className="tm_heading mb-6" style={{ color: '#ff751f' }}>
              Teenagehood is a time when a lot is happening inside.
            </p>
            <div className="space-y-6">
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                Teenagers are trying to understand who they are and where they belong.
              </p>
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                They want to be themselves. But they are also afraid that if they really show who they are, they might not be accepted.
              </p>
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                So they move between trying to fit in and trying to stand out.
              </p>
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                And this creates confusion, pressure, and doubt.
              </p>
            </div>
          </div>

          {/* Row 1, Column 2: Text block */}
          <div>
            <p className="tm_heading mb-6" style={{ color: '#427047' }}>
              We create a space where they don't have to go through this alone.
            </p>
            <div className="space-y-6">
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                Many teenagers feel alone in this, even when they are surrounded by people. They talk, but don't always feel understood.
              </p>
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                They carry things inside that they don't really know how to say out loud.
              </p>
              <p className="tm_body" style={{ color: '#2B2B2B' }}>
                Through real experience - not lectures - teenagers spend time together, talk, listen, share, create, support each other, and slowly begin to open up.
              </p>
            </div>
          </div>

          {/* Row 2, Column 1: Dashed line */}
          <div>
            <hr style={{ borderColor: '#ff751f', borderStyle: 'dashed', margin: '3rem 0' }} />
          </div>

          {/* Row 2, Column 2: Dashed line */}
          <div>
            <hr style={{ borderColor: '#ff751f', borderStyle: 'dashed', margin: '3rem 0' }} />
          </div>

          {/* Row 3, Column 1: Challenges with icons */}
          <div>
            <p className="tm_heading mb-8" style={{ color: '#427047' }}>
              At the same time, we work with what many of them go through:
            </p>
            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img
                    src={challenge.icon}
                    alt={challenge.name}
                    style={{
                      width: '48px',
                      height: '48px',
                      objectFit: 'contain',
                      flexShrink: 0,
                    }}
                  />
                  <p className="tm_body" style={{ color: '#2B2B2B', paddingTop: '8px' }}>
                    {challenge.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3, Column 2: Large background image */}
          <div
            style={{
              backgroundImage: 'url(/icon_022_01.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
              borderRadius: '60px',
              overflow: 'hidden',
            }}
          />

        </div>
      </div>
    </section>
  );
}
