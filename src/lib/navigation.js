/** Resolve hash links for cross-page navigation without full reload */
export function resolveNavHref(href, pathname = '/') {
  if (!href) return '/';
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (href.startsWith('#') && pathname !== '/') {
    return `/${href}`;
  }
  return href;
}

export function isExternalHref(href) {
  return (
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  );
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  }
}
