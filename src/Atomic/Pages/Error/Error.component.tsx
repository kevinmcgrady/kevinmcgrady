import React from 'react';
import { Typography } from '../../Atoms/Typography/Typography.component';
import { Link } from '../../Atoms/Link/Link.component';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { Page } from '../../Organisms/Page/Page.component';
import { Background } from '../../Atoms/Background/Background.component';

import './Error.styles.scss';

const Error = () => (
  <Background>
    <Page>
      <div className='error-page'>
        <Typography variant='smalltitle' center>
          Oops, well this is embarrassing 😅
        </Typography>
        <Spacer bottom='md' />
        <Typography>
          <Link to='/' variant='gradient'>
            GO HOME
          </Link>
        </Typography>
      </div>
    </Page>
  </Background>
);

export default Error;
