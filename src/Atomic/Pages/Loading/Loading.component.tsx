import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoadingAnimation } from '../../Organisms/Animations/LoadingAnimation/LoadingAnimation';

import './Loading.styles.scss';

const Loading: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className='loading-page'>
      <LoadingAnimation pathName={pathname} />
    </div>
  );
};

export default Loading;
