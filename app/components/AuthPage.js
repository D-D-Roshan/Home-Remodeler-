import styles from './AuthPage.module.css';

import { signIn } from 'next-auth/react';

const AuthPage = () => {
  const handleAuth = (action) => {
    signIn('google', { callbackUrl: '/' });
  };

  return (
    <div>
      <h1 className={styles.welcome}>Welcome to VHR!</h1>
      <p className={styles.byline}>Please log in or sign up to continue.</p>
      <div className={styles.container}>
      <button className={styles.actionButton} onClick={() => handleAuth('login')}>Log In with Google</button>
      <button className={styles.actionButton} onClick={() => handleAuth('signup')}>Sign Up with Google</button>
      </div>
    </div>
  );
};

export default AuthPage;
