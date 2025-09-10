import React from "react";
import "./index.css";

const UserDetailPage = ({ userId }) => {
  // Get ID from props (when used as microfrontend) or from URL (when used standalone)
  const actualId = userId || window.location.pathname.match(/\/users\/(\d+)/)?.[1];
  
  // Debug information
  console.log('UserDetailPage - User ID from props:', userId);
  console.log('UserDetailPage - Current URL:', window.location.pathname);
  console.log('UserDetailPage - Final ID:', actualId);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">User Detail Page (from Users App)</h2>
      <p className="text-gray-600 mb-2">User ID: {actualId || 'No ID provided'}</p>
      <p className="text-gray-600 mb-2">User ID received from host app: {actualId}</p>
      <p className="text-gray-700 mb-4">This is a detailed view of the user information.</p>
      <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">User Details for ID: {actualId}</h3>
        <ul className="space-y-2">
          <li className="flex items-center"><span className="font-medium w-20">Name:</span> John Doe</li>
          <li className="flex items-center"><span className="font-medium w-20">Email:</span> john.doe@example.com</li>
          <li className="flex items-center"><span className="font-medium w-20">Role:</span> Administrator</li>
          <li className="flex items-center"><span className="font-medium w-20">Last Login:</span> Today</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetailPage;
