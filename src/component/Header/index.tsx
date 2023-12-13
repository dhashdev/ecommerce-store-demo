import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  let userName = localStorage.getItem('userName');
  //logout User
  function handleUserLogout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('addedProduct');

    navigate('/');
  }
  return (
    <>
      <div className='NavBarContainer'>
        <Link to='/cart'>
          <div>Store</div>
        </Link>
        <div>{userName}</div>
        <div>
          <button type='submit' onClick={handleUserLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
