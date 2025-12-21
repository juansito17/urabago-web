import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/dashboard');
        } catch (err) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-slate-900">
            <div className="bg-slate-800 p-8 rounded-lg shadow-xl w-96 border border-slate-700">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">UrabáGo 🍌</h1>
                <h2 className="text-xl text-white text-center mb-8">Admin Partner</h2>

                {error && <div className="bg-red-500 text-white p-2 rounded mb-4 text-sm text-center">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-slate-300 mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600 focus:border-primary outline-none"
                            placeholder="admin@urabago.com"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-300 mb-1 text-sm">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-slate-700 text-white p-2 rounded border border-slate-600 focus:border-primary outline-none"
                            placeholder="••••••"
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary text-slate-900 font-bold py-2 rounded hover:bg-yellow-300 transition-colors">
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}
