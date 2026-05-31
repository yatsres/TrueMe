import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-trueme-bg px-4">
      <div className="text-center">
        <h1 className="tm_title mb-6" style={{ color: '#ff751f' }}>
          404
        </h1>
        <p className="tm_body mb-8" style={{ color: '#427047' }}>
          Page not found. Let's get you back home.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 text-white rounded-full tm_button"
          style={{ backgroundColor: '#ff751f' }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
