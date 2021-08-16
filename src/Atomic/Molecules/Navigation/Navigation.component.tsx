import React from 'react';
import './Navigation.styles.scss';
import { Link } from '../../Atoms/Link/Link.component';
import { Urls } from '../../../utils/urls';

export const Navigation: React.FC = () => (
  <div className='navigation'>
    <ul className='navigation-list'>
      <li>
        <Link variant='navigation' to={Urls.mainNavigation.work}>
          Work
        </Link>
      </li>
      <li>
        <Link variant='navigation' to={Urls.mainNavigation.about}>
          About
        </Link>
      </li>
    </ul>
  </div>
);
