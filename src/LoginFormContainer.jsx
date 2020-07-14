import React from 'react';

export default function LoginFormContainer() {
  return (
    <>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-password"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
        />
      </div>
      <div>
        <button
          type="button"
        >
          Log In
        </button>
      </div>
    </>
  );
}
