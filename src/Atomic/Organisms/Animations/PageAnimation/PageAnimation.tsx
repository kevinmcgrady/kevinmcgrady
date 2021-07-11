import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../../../utils/styles/transitions';

export const PageAnimation: React.FC = ({ children }) => (
  <motion.div
    initial={{
      y: '50px',
      opacity: '0',
    }}
    animate={{
      y: 0,
      opacity: '1',
      transition: pageTransition,
    }}
  >
    {children}
  </motion.div>
);
