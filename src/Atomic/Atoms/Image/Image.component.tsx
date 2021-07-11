import React from 'react';
import './Image.styles.scss';

interface IImageProps {
  url: string;
  width?: string;
  alt: string;
  center?: boolean;
  mobileUrl?: string;
}
export const Image: React.FC<IImageProps> = ({
  url,
  width,
  alt,
  center = false,
  mobileUrl,
}) => {
  return mobileUrl ? (
    <picture>
      <source srcSet={mobileUrl} media='(max-width: 800px)' />
      <img
        src={url}
        width={width ? width : 'auto'}
        alt={alt}
        className={center ? 'image-center' : ''}
        loading='lazy'
      />
    </picture>
  ) : (
    <img
      src={url}
      width={width ? width : 'auto'}
      alt={alt}
      className={center ? 'image-center' : ''}
      loading='lazy'
    />
  );
};
