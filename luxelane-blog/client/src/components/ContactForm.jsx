import React, { useState } from 'react';
import FormField from './FormField';
import Button from './Button';
import { useFormValidation } from '../utils/validation';

const ContactForm = () => {
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
    name: '',
    email: '',
    subject: '',
    message: ''
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="text-green-400 text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-white/80 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
        <p className="text-white/80">
          Have a question or want to collaborate? We'd love to hear from you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            placeholder="Your full name"
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

        <FormField
          label="Subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors.subject}
          touched={touched.subject}
          placeholder="What's this about?"
          required
        />

        <FormField
          label="Message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors.message}
          touched={touched.message}
          placeholder="Tell us more about your inquiry..."
          rows={6}
          required
        />

        <div className="flex items-center justify-between pt-4">
          <div className="text-sm text-white/60">
            * Required fields
          </div>
          
          <Button
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>

      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-pink-400 text-2xl mb-2">📧</div>
            <h4 className="font-semibold text-white mb-1">Email</h4>
            <p className="text-white/60 text-sm">hello@luxelane.com</p>
          </div>
          
          <div>
            <div className="text-pink-400 text-2xl mb-2">📱</div>
            <h4 className="font-semibold text-white mb-1">Phone</h4>
            <p className="text-white/60 text-sm">+1 (555) 123-4567</p>
          </div>
          
          <div>
            <div className="text-pink-400 text-2xl mb-2">📍</div>
            <h4 className="font-semibold text-white mb-1">Location</h4>
            <p className="text-white/60 text-sm">New York, NY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 