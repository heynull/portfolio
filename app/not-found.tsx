import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-8">Page not found.</p>
        <Link href="/" className="underline hover:opacity-70">
          Back to home
        </Link>
      </div>
    </main>
  );
}
