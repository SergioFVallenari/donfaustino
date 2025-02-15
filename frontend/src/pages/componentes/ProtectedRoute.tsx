import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem('token');
  console.log(token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; 
};

export default ProtectedRoute;