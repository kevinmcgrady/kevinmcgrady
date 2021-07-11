import React from 'react';
import { motion } from 'framer-motion';
import { hoverTransition } from '../../../utils/styles/transitions';

interface IHoverImageProps {
  src: string;
  alt: string;
  width: string;
}

export const HoverImage: React.FC<IHoverImageProps> = ({ src, alt, width }) => (
  <motion.img
    src={src}
    whileHover={{ scale: 1.1 }}
    transition={hoverTransition}
    width={width}
    alt={alt}
  />
);
