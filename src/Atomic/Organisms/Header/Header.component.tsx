import React from 'react';
import { Grid, Column, Row } from '../../Molecules/Grid';
import { Navigation } from '../../Molecules/Navigation/Navigation.component';
import { Link } from '../../Atoms/Link/Link.component';
import { Urls } from '../../../utils/urls';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';

import './Header.styles.scss';

export const Header: React.FC = () => (
  <Grid>
    <Row>
      <Column size={12}>
        <Spacer top='md'>
          <div className='header'>
            <Link variant='cta' to={Urls.mainNavigation.homepage}></Link>
            <Navigation />
          </div>
        </Spacer>
      </Column>
    </Row>
  </Grid>
);
