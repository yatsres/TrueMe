'use client';

interface FloatingTextProps {
  text: string;
  duration: number;
  offset: number;
  className?: string;
}

export default function FloatingText({ text, duration, offset, className = '' }: FloatingTextProps) {
  const keyframes = `
    @keyframes float-rotate {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(${offset}px) rotate(180deg);
      }
      100% {
        transform: translateY(0) rotate(360deg);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        className={className}
        style={{
          animation: `float-rotate ${duration}s ease-in-out infinite`,
        }}
      >
        {text}
      </div>
    </>
  );
}
