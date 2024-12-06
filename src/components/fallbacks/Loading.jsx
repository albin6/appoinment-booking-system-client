import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Loading...
        </h2>
        <p className="mt-2 text-gray-600">
          Please wait while we fetch your data.
        </p>
      </div>
    </div>
  );
};

export default Loading;
