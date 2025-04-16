'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/authSlice'; // Assurez-vous que le chemin est correct
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const users = useSelector((state) => state.auth?.users || []); // Vérifiez que `auth` existe dans le store
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
    const userExists = users.some(user => user.email === form.email);
    if (userExists) {
      setError('Cet utilisateur existe déjà.');
      return;
    }
    dispatch(register(form)); // Appel de l'action Redux
    router.push('/'); // Redirection vers la route http://localhost:3000
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="input-field"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Connexion</button>
      </form>

      <style jsx>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f0f2f5;
        }

        .register-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .register-form input {
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 8px;
          transition: border-color 0.3s;
        }

        .register-form input:focus {
          outline: none;
          border-color: #0070f3;
        }

        .register-form button {
          padding: 12px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .register-form button:hover {
          background-color: #005bb5;
        }

        .error-message {
          color: red;
          font-size: 14px;
          margin: -5px 0 5px 0;
        }
      `}</style>
    </div>
  );
}
