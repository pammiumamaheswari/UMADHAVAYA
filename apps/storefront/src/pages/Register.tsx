import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';

export const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register({ firstName, lastName, email, phone, password });
      navigate('/account');
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Failed to create account. Please verify your details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-14 sm:py-20">
      <div className="bg-white p-8 border border-[#E8D3A2]/60 rounded-sm shadow-card-lux">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
            BECOME A PATRON
          </span>
          <h1 className="font-royal text-3xl font-bold text-stone-900">
            Create an Account
          </h1>
          <p className="text-xs text-stone-500 mt-1">Enjoy royal privileges, loom updates, and private sales</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">First Name *</label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Gayatri"
                className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Last Name *</label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Devi"
                className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="patron@domain.com"
              className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Password (min. 8 characters) *</label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-xs p-3 border border-stone-300 rounded focus:border-[#C5A059] outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#5B0E2D] hover:bg-[#721121] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest rounded shadow-md flex items-center justify-center gap-2 transition-all mt-4"
          >
            <span>{loading ? 'Registering Patron...' : 'Join Royal Privilege Club'}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-100 text-center text-xs text-stone-500">
          Already have an account?{' '}
          <Link to="/login" className="text-[#5B0E2D] font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
