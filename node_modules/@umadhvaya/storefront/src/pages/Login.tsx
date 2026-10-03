import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/account');
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Invalid email or password credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 sm:py-24">
      <div className="bg-white p-8 border border-[#E8D3A2]/60 rounded-sm shadow-card-lux">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
            PRIVILEGE PORTAL
          </span>
          <h1 className="font-royal text-3xl font-bold text-stone-900">
            Sign In to UMADHVAYA
          </h1>
          <p className="text-xs text-stone-500 mt-1">Access your bespoke saree orders & wishlist</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="patron@domain.com"
                className="w-full text-xs p-3 pl-9 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
              <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs p-3 pl-9 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
              <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#5B0E2D] hover:bg-[#721121] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest rounded shadow-md flex items-center justify-center gap-2 transition-all mt-4"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-100 text-center text-xs text-stone-500">
          New to UMADHVAYA?{' '}
          <Link to="/register" className="text-[#5B0E2D] font-bold hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};
