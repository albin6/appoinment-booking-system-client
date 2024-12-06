import React from "react";
import { XCircleIcon, HomeIcon } from "lucide-react";

const Error = ({
  statusCode = 500,
  title = "An error occurred",
  message = "We're sorry, but something went wrong.",
}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <XCircleIcon className="mx-auto h-16 w-16 text-red-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {statusCode}: {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{message}</p>
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Return to Home
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-600">
        If you continue to experience issues, please contact our support team.
      </p>
    </div>
  );
};

export default Error;
