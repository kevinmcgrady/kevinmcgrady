import React from 'react';
import { Typography } from '../../Atoms/Typography/Typography.component';
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            delectus! Autem quas velit iusto! Iure impedit sed quod, magni, fuga
            ipsam qui ipsa consequatur similique, provident assumenda quia
            consequuntur nisi?
          </Typography>
          <Spacer bottom='sm' />
          <Typography variant='subtitle'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          </Typography>
        </ScrollingAnimation>
      </Column>
    </Row>
  </Grid>
);
