'use client';

import { useState } from 'react';
import { getRemoteImageUrl, IMAGE_PLACEHOLDER } from '@/lib/images';

export default function RemoteImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
}) {
  const [failed, setFailed] = useState(false);
  const imageSrc = failed ? IMAGE_PLACEHOLDER : getRemoteImageUrl(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
