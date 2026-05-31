'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function FAQSection() {
  const { ref, isInView } = useInView();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'Is the camp safe?',
      answer: 'Yes. We have 2 lead facilitators and an assistant team (1 assistant per 5 teenagers). The territory is private and closed, and every participant is covered by medical insurance.',
    },
    {
      id: 2,
      question: 'What about food?',
      answer: 'We provide 5 meals per day. A vegetarian option is always available.',
    },
    {
      id: 3,
      question: 'Will teenagers use their phones?',
      answer: 'Phones are not used during sessions or after lights out. During breaks and free time, they have access to them. We don\'t take phones away — we create an environment where they are simply not needed.',
    },
    {
      id: 4,
      question: 'What is included in the price?',
      answer: 'The full program, accommodation, meals, medical insurance, materials, post-camp support, and two online follow-up sessions are included.',
    },
    {
      id: 5,
      question: 'What is not included in the price?',
      answer: 'Travel to and from the camp and personal expenses are not included.',
    },
    {
      id: 6,
      question: 'What if my teenager is not sure about joining?',
      answer: 'This is very common and completely normal. We invite your teenager to have a conversation with us. In most cases, it already helps a lot. They hear what the camp is about from the people who created it, ask questions, and decide for themselves. When the decision comes from them, everything works much better.',
    },
    {
      id: 7,
      question: 'Do parents receive any kind of support?',
      answer: 'We know that being a parent of a teenager is not easy. And many times, it can feel quite lonely. We don\'t take sides. We are on the side of the family. Our role is to help parents and teenagers come a little closer again. Before the camp, we speak with both parents and teenagers to understand your situation. During the program we work directly with teenagers, but our team stays available. After the camp, we offer a meeting for parents and teenagers to share, ask questions, and receive guidance for what comes next.',
    },
    {
      id: 8,
      question: 'What is the preparation process?',
      answer: 'If you choose to join us, we begin with a personal conversation about your teenager, your family situation, and anything important for us to know. We will also ask you to fill out a short questionnaire, so we can better understand your child and their needs. After that, we schedule individual conversations with both parents and the teenager. This helps us get to know you better and adapt the experience to each participant.',
    },
  ];

  return (
    <section
      ref={ref}
      id="121_faq"
      className={`w-full px-3 lg:px-[20%] py-16 lg:py-24 gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
      style={{ backgroundColor: '#F5F1ED' }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: '1440px' }}>
        {/* Section heading - centered */}
        <div className="text-center" style={{ marginBottom: '10px' }}>
          <h2
            className="tm_heading mb-8"
            style={{ color: '#ff751f' }}
          >
            What Parents Often Ask
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 lg:space-y-4 flex flex-col items-center w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              style={{
                width: '70%',
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-8 lg:px-10 py-4 lg:py-5 flex items-center justify-between transition-colors duration-300 gpu-accelerated overflow-hidden relative"
                style={{
                  backgroundColor: 'white',
                  color: '#ff751f',
                  borderRadius: '60px',
                  border: 'none',
                  textAlign: 'left',
                  minHeight: '120px',
                  boxShadow: 'none',
                  zIndex: 20,
                }}
              >
                <span
                  className="tm_subheader_2"
                  style={{
                    flex: 1,
                    color: '#427047',
                  }}
                >
                  {faq.question}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{
                    color: '#427047',
                    transform: expandedId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    flexShrink: 0,
                    marginLeft: '20px',
                  }}
                >
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div
                  style={{
                    animation: 'slideDown 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '0 0 60px 60px',
                      marginTop: '-60px',
                      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
                      position: 'relative',
                      zIndex: 10,
                    }}
                  >
                    <div
                      className="px-8 lg:px-10 py-6 lg:py-8"
                      style={{
                        paddingTop: '60px',
                      }}
                    >
                      <p
                        className="tm_body leading-relaxed"
                        style={{ color: '#2B2B2B' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
