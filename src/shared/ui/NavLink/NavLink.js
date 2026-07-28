'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isExternalHref, resolveNavHref, scrollToSection } from '@/lib/navigation';

export default function NavLink({
  href,
  className = '',
  children,
  onClick,
  ...props
}) {
  const pathname = usePathname();

  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  const resolvedHref = resolveNavHref(href, pathname);

  if (href.startsWith('#') && pathname === '/') {
    const sectionId = href.slice(1);
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(sectionId);
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={resolvedHref} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
