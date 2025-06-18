import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, form);
      alert('Signup successful');
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Create an Account</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign Up</button>
        <p style={styles.loginText}>
          Already have an account? <span onClick={() => navigate('/login')} style={styles.link}>Login</span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#e3f2fd',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#0d47a1',
  },
  input: {
    padding: '12px',
    margin: '8px 0',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    marginTop: '12px',
    backgroundColor: '#1976d2',
    color: '#ffffff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginText: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
  },
  link: {
    color: '#1976d2',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '5px',
  },
};
