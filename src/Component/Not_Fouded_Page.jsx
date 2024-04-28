import { Link } from 'react-router-dom';

const Not_Founded_Page = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back Home
      </Link>
    </div>
  );
};

export default Not_Founded_Page;
