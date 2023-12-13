import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();

  //effect to check if user exist, if does. Then navigate to the home page
  useEffect(() => {
    let doesUserExistOnLogin = localStorage.getItem('userName');
    if (doesUserExistOnLogin) {
      navigate('/home');
    }
  }, []);

  //user login handler
  function handleUserLogin() {
    let doesUserExist = localStorage.getItem('userName');
    if (!doesUserExist) {
      localStorage.setItem('userName', userName);
      navigate('/home');
    } else if (doesUserExist) {
      navigate('/');
    }
    setUserName('');
  }
  return (
    <>
      <h2>Login To Proceed to the Store</h2>
      <div>
        <label htmlFor='userName'>User name:</label>
        <input
          id='userName'
          type='text'
          name='userName'
          value={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserName(e.target.value)
          }
        />
      </div>
      <br />
      <div>
        <button
          type='submit'
          onClick={handleUserLogin}
          disabled={userName === ''}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
