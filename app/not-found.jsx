export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
