'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isExternalHref, resolveNavHref } from '@/lib/navigation';
import './Button.css';

function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const classNames = `btn btn--${variant} ${className}`.trim();
  const pathname = usePathname();

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a href={href} className={classNames} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={resolveNavHref(href, pathname)} className={classNames} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;
