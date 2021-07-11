import React from 'react';
import { Grid, Column, Row } from '../../Molecules/Grid';
import { Typography } from '../../Atoms/Typography/Typography.component';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { Link } from '../../Atoms/Link/Link.component';

export const Footer: React.FC = () => (
  <Grid>
    <Row>
      <Column size={7}>
        <Spacer bottom='md' top='md'>
          <Typography variant='footertitle'>Wanna say hey?</Typography>
          <Spacer bottom='sm' />
          <Typography variant='footertext'>
            Send me an email at{' '}
            <Link variant='external' to='mailto:kevinmcgrady47@gmail.com'>
              kevinmcgrady47@gmail.com
            </Link>
          </Typography>
          <Spacer bottom='sm' />
          <Link variant='external' to='https://github.com/kevinmcgrady'>
            GitHub
          </Link>
          <Link
            variant='external'
            to='https://www.linkedin.com/in/kevin-mcgrady-639851102/'
            hasPadding
          >
            LinkedIn
          </Link>
          <Spacer bottom='sm' />
          <Typography variant='footertext'>☕️ Let's get a coffee</Typography>
          <Spacer bottom='sm' />
          <Typography variant='footertext'>
            📍 Currently based: Glasgow, Scotland
          </Typography>
        </Spacer>
      </Column>
    </Row>
  </Grid>
);
