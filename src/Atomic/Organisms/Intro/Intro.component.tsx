import React from 'react';
import { Typography } from '../../Atoms/Typography/Typography.component';
import { Link } from '../../Atoms/Link/Link.component';
import { Column, Grid, Row } from '../../Molecules/Grid';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { ScrollingAnimation } from '../Animations/ScrollAnimation/ScrollAnimation';

export const Intro: React.FC = () => (
  <Grid>
    <Row>
      <Column size={7}>
        <Spacer bottom='md' top='lg'>
          <ScrollingAnimation>
            <Typography variant='title'>Hey, there</Typography>
            <Typography className='hide-mobile' variant='gradiant'>
              I'm Kev McGrady
            </Typography>
            <Typography className='hide-desktop' variant='gradiant'>
              I'm Kev
            </Typography>
          </ScrollingAnimation>
        </Spacer>
        <ScrollingAnimation isDelay>
          <Typography variant='subtitle'>
            I'm a Full Stack Web Developer currently living in Glasgow. I enjoy
            creating web applications that enhance user connectivity and spread
            the love ❤️.
          </Typography>
          <Spacer bottom='sm' />
          <Typography variant='subtitle'>
            All the fun stuff, latest projects and learnings can be found on{' '}
            <Link variant='external' to='https://github.com/kevinmcgrady'>
              GitHub
            </Link>
            .
          </Typography>
        </ScrollingAnimation>
      </Column>
    </Row>
  </Grid>
);
