import React from 'react';
import { Header } from '../Header/Header.component';
import { Footer } from '../Footer/Footer.component';
import { PageAnimation } from '../Animations/PageAnimation/PageAnimation';

import './Page.styles.scss';

export const Page: React.FC = ({ children }) => (
  <PageAnimation>
    <div className='page'>
      <Header />
      {children}
      <Footer />
    </div>
  </PageAnimation>
);
