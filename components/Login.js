// components/Login.js
import React from 'react';
import { useState } from 'react';
import styles from './Login.module.css';  // Import the CSS module
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Validate email format
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (!usernameInput || !passwordInput) {
      console.error('Unable to find username or password input elements');
      return;
    }

    const usernameValue = usernameInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(usernameValue)) {
      alert('Please enter a valid email address');
      return;
    }

    // Validate password format
    const passwordValue = passwordInput.value.trim();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;

    if (!passwordRegex.test(passwordValue)) {
      alert('Password must contain an uppercase letter, a number, and only allow @ as a special character.');
      return;
    }

    // Check if the entered password is correct
    if (passwordValue === 'SmartServTest@123') {
      // Redirect to the dashboard page
      router.push('/dashboard');
    } else {
      alert('Incorrect password');
    }
  };

  const handleForgotPassword = () => {
    // Open the default email client with a pre-filled email to support@smartserv.io
    window.location.href = 'mailto:support@smartserv.io?subject=Password Reset Request';
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.entryContainer}>
          <img src="img.png" alt="logo" width="300px" />
          <label htmlFor="username" className={styles.label}></label>
          <input type="text" id="username" className={styles.input} placeholder="Username" />
        </div>
        <div className={styles.entryContainer}>
          <label htmlFor="password" className={styles.label}></label>
          <input type="password" id="password" className={styles.input} placeholder="Password" />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.loginButton} onClick={handleLogin}>Login</button>
        </div>
        <div className={styles.linkContainer}>
          <a href="#" className={styles.forgotPassword} onClick={handleForgotPassword}>
            Forgot Your Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;