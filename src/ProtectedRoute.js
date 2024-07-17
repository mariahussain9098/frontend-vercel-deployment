import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './contextAPI/contextAPI';

const ProtectedRoute = ({ MyComponent }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return user ? <MyComponent /> : null;
};

export default ProtectedRoute;
