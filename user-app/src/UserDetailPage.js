import React from "react";

const UserDetailPage = ({ userId }) => {
  // Get ID from props (when used as microfrontend) or from URL (when used standalone)
  const actualId = userId || window.location.pathname.match(/\/users\/(\d+)/)?.[1];
  
  // Debug information
  console.log('UserDetailPage - User ID from props:', userId);
  console.log('UserDetailPage - Current URL:', window.location.pathname);
  console.log('UserDetailPage - Final ID:', actualId);
  
  return (
    <div>
      <h2>User Detail Page (from Users App)</h2>
      <p>User ID: {actualId || 'No ID provided'}</p>
      <p>User ID received from host app: {actualId}</p>
      <p>This is a detailed view of the user information.</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>User Details for ID: {actualId}</h3>
        <ul>
          <li>Name: John Doe</li>
          <li>Email: john.doe@example.com</li>
          <li>Role: Administrator</li>
          <li>Last Login: Today</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetailPage;
