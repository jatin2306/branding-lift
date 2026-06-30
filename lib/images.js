const PLACEHOLDER = '/images/service-placeholder.svg';

/** Normalize external image URLs for reliable loading on static hosts */
export function getRemoteImageUrl(url) {
  if (!url) return PLACEHOLDER;

  try {
    if (url.includes('images.unsplash.com')) {
      const parsed = new URL(url);
      parsed.searchParams.set('auto', 'format');
      parsed.searchParams.set('fit', 'crop');
      parsed.searchParams.set('w', '800');
      parsed.searchParams.set('q', '80');
      return parsed.toString();
    }
  } catch {
    return PLACEHOLDER;
  }

  return url;
}

export { PLACEHOLDER as IMAGE_PLACEHOLDER };
