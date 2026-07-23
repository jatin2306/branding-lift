import React from 'react';
import './Button.css';

/**
 * Reusable button. Use variant="primary" | "secondary" | "ghost"
 */
function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const classNames = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;
