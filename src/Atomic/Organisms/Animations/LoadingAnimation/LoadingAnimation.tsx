import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../../../utils/styles/transitions';

interface ILoadingAnimationProps {
  pathName: string;
}

const backgroundColor = (pathName: string) => {
  const isPageOrange = pathName.includes('crown-clothing');
  const isPagePurple = pathName.includes('natours');

  if (isPageOrange) {
    return '#f3966f';
  } else if (isPagePurple) {
    return '#d3d3ed';
  }

  return '#fdf6f0';
};

export const LoadingAnimation: React.FC<ILoadingAnimationProps> = ({
  pathName,
}) => {
  return (
    <>
      <motion.div
        initial={{ flex: 0 }}
        animate={{
          flex: 1,
          top: 0,
        }}
        style={{
          width: '100%',
          backgroundColor: '#192a51',
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
        }}
        transition={pageTransition}
      />
      <motion.div
        initial={{ flex: 0 }}
        animate={{ flex: 1 }}
        style={{
          width: '100%',
          backgroundColor: backgroundColor(pathName),
          position: 'relative',
        }}
        transition={{ delay: 0.5, ...pageTransition }}
      />
    </>
  );
};
