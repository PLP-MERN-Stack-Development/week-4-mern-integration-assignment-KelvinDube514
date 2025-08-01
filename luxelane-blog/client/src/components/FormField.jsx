import React from 'react';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  rows = 4,
  options = [],
  ...props
}) => {
  const baseInputClasses = 'w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-pink-400/50 transition-all duration-300';
  const errorClasses = error && touched ? 'border-red-400 focus:ring-red-400/50 focus:border-red-400/50' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={`${baseInputClasses} ${errorClasses} ${disabledClasses} resize-vertical`}
            {...props}
          />
        );

      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            className={`${baseInputClasses} ${errorClasses} ${disabledClasses}`}
            {...props}
          >
            <option value="">{placeholder || 'Select an option'}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              name={name}
              checked={value}
              onChange={onChange}
              disabled={disabled}
              className={`w-4 h-4 text-pink-500 bg-white/10 border-white/20 rounded focus:ring-pink-400/50 focus:ring-2 ${disabledClasses}`}
              {...props}
            />
            {label && (
              <label htmlFor={name} className="ml-2 text-white/80">
                {label}
              </label>
            )}
          </div>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={`${baseInputClasses} ${errorClasses} ${disabledClasses}`}
            {...props}
          />
        );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && type !== 'checkbox' && (
        <label htmlFor={name} className="block text-white font-semibold">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      {renderField()}
      
      {error && touched && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField; 