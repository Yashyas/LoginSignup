import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Welcome</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate('/login')}>
          Login
        </button>
        <button style={styles.button} onClick={() => navigate('/signup')}>
          Signup
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '1rem',
    backgroundColor: '#f4f4f4',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: '#1976d2',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
