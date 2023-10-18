import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-5xl font-bold text-red-500">404</div>
        <div className="text-xl text-gray-700">Page Not Found</div>
        <div className="text-lg text-gray-500 mb-4">
          Oops! The page you are looking for doesn't exist.
        </div>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Home
        </Link>
        <div className="mt-8">
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="bi bi-arrow-up text-blue-500"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 16a.5.5 0 0 1-.354-.854l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 13.707l-2.938 2.937a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .354-.146z"
              />
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
