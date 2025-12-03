import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="max-w-md mx-auto px-4 pt-10 pb-10 text-center">
    <h1 className="text-3xl font-bold mb-2">404</h1>
    <p className="text-sm text-gray-600">We couldn’t find that page.</p>
    <Link
      to="/"
      className="mt-4 inline-block px-4 py-2 rounded-full bg-primary text-white text-sm"
    >
      Back to Home
    </Link>
  </div>
);

export default NotFoundPage;
