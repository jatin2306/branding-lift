export function serviceSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9-]/g, '');
}

export function getAllServices(config) {
  return (config?.serviceCategories || []).flatMap((cat) => cat.services);
}

export function getServiceBySlug(slug, config) {
  const services = getAllServices(config);
  return services.find((s) => serviceSlug(s.name) === slug) || null;
}