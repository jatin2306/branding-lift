export function imageUrl(src) {
  if (!src) return '';
  const baseUrl = process.env.PUBLIC_URL || '';
  return src.startsWith('http') ? src : `${baseUrl}${src}`;
}

export function buildWhatsAppUrl(number, message) {
  const cleanNumber = number.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message || '');
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}