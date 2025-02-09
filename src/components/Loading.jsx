import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-8 border-gray-300 rounded-full opacity-30"></div>
        <div className="absolute inset-0 border-8 border-t-transparent border-l-transparent border-r-gray-100 border-b-gray-100 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;