import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-4" style={{ background: '#f9f6ee', backgroundColor: '#f3efe3' }}>
      <h1 className="fw-bold" style={{ color: '#222' }}>Hello Rohan!</h1>
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg" // Placeholder avatar
        alt="User Avatar"
        style={{ width: 60, height: 60, borderRadius: '50%', border: '3px solid #e0e0e0' }}
      />
    </div>
  );
} 