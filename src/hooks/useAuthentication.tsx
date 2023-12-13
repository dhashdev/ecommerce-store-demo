import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAutheticate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const doesUserExist = localStorage.getItem('userName');
    if (!doesUserExist) {
      navigate('/');
    }
  }, [navigate]);
};
