import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface IScrollingAnimationProps {
  isDelay?: boolean;
}

export const ScrollingAnimation: React.FC<IScrollingAnimationProps> = ({
  children,
  isDelay = false,
}) => {
  return (
    <ScrollAnimation
      animateOnce
      animateIn={`${isDelay ? 'slide-top-with-delay' : 'slide-top'}`}
    >
      {children}
    </ScrollAnimation>
  );
};
