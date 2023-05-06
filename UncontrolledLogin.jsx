//==============================================================================================================================================
//Exercise Forms - `UncontrolledLogin` component
/*
import React, { useRef } from 'react';

function UncontrolledLogin({ onLogin }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleLoginClick = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    onLogin({ username, password, email });
  };

  const handleResetClick = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div>
      <h1>Login (Uncontrolled)</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
        <button type="button" onClick={handleResetClick}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default UncontrolledLogin;
*/
//==============================================================================================================================================
//Exercise Forms - Automatic focus
/*
import React, { useRef, useEffect } from 'react';

function UncontrolledLogin({ onLogin }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleLoginClick = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    onLogin({ username, password, email });
  };

  const handleResetClick = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div>
      <h1>Login (Uncontrolled)</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
        <button type="button" onClick={handleResetClick}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default UncontrolledLogin;
*/