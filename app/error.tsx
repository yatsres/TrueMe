'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-trueme-bg px-4">
      <div className="text-center">
        <h1 className="tm_title mb-6" style={{ color: '#ff751f' }}>
          Oops!
        </h1>
        <p className="tm_body mb-8" style={{ color: '#427047' }}>
          Something went wrong. Please try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-ff751f text-white rounded-full tm_button"
          style={{ backgroundColor: '#ff751f' }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
