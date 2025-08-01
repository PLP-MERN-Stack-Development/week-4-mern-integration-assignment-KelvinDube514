import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import { useFormValidation } from '../utils/validation';

const NewsletterSignup = ({ className = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    resetForm
  } = useFormValidation({
    email: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Error subscribing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-green-400 text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-bold text-white mb-2">Welcome to LuxeLane!</h3>
        <p className="text-white/80 mb-4">
          You're now subscribed to our newsletter. Look out for the latest fashion trends and exclusive content!
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          size="sm"
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <div className="text-3xl mb-3">📧</div>
        <h3 className="text-xl font-bold text-white mb-2">Stay in the Loop</h3>
        <p className="text-white/80 text-sm">
          Get the latest fashion trends, style tips, and exclusive content delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            placeholder="Your name"
            required
          />
          
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          fullWidth
          size="lg"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>

        <p className="text-white/60 text-xs text-center">
          By subscribing, you agree to receive marketing emails from LuxeLane. 
          You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup; 