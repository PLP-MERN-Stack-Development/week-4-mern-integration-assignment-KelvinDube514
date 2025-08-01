import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useFormValidation } from '../utils/validation.js';

const LoginForm = ({ onSwitchToRegister }) => {
  const { login, error, clearError } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll
  } = useFormValidation({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    const result = await login(formData);
    setIsSubmitting(false);

    if (result.success) {
      // Login successful - user will be redirected automatically
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-glow p-8 border border-white/20 relative z-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-2">Welcome Back</h2>
        <p className="text-black/70">Sign in to your account</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg backdrop-blur-sm">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black/90 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors text-black placeholder-black/60 backdrop-blur-sm ${
              errors.email && touched.email
                ? 'border-red-400/50 focus:ring-red-400/50'
                : 'border-white/20'
            }`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {errors.email && touched.email && (
            <p className="mt-1 text-sm text-red-800">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-black/90 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            className={`w-full px-4 py-3 bg-black/20 border rounded-lg focus:ring-2 focus:ring-white/50 focus:border-transparent transition-colors text-black placeholder-black/60 backdrop-blur-sm ${
              errors.password && touched.password
                ? 'border-red-400/50 focus:ring-red-400/50'
                : 'border-white/20'
            }`}
            placeholder="Enter your password"
            disabled={isSubmitting}
          />
          {errors.password && touched.password && (
            <p className="mt-1 text-sm text-red-800">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white/20 text-black py-3 px-4 rounded-lg font-medium hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 backdrop-blur-sm"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
              Signing in...
            </div>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-black/70">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-black hover:text-black/80 font-medium transition-colors underline decoration-black/40 hover:decoration-black/60"
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm; 