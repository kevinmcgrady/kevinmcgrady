import React from 'react';
import { Page } from '../../Organisms/Page/Page.component';
import { Background } from '../../Atoms/Background/Background.component';
import { Grid, Column, Row } from '../../Molecules/Grid';
import { Typography } from '../../Atoms/Typography/Typography.component';
import { Link } from '../../Atoms/Link/Link.component';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { Image } from '../../Atoms/Image/Image.component';

import aboutImage from '../../../assets/images/me.webp';

import './About.styles.scss';

const About: React.FC = () => {
  return (
    <Background>
      <Page>
        <Spacer top='sm' />
        <Grid>
          <Row>
            <Column size={5}>
              <div className='about-image hide-mobile'>
                <Image url={aboutImage} alt='' width='100%' />
                <Spacer bottom='md' />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  veniam cum consequuntur dicta veritatis aspernatur ipsum et
                  autem libero sed iste.
                </Typography>
              </div>
            </Column>
            <Column size={7}>
              <Typography variant='gradiant'>Who am I?</Typography>
              <Spacer bottom='md' />
              <Typography variant='smalltitle'>
                Lorem ipsum dolor sit amet consectetur
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                veniam cum consequuntur dicta veritatis aspernatur ipsum et
                autem libero sed iste.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odit veniam cum consequuntur dicta veritatis
                aspernatur ipsum et autem libero sed iste.
              </Typography>
              <Spacer bottom='md' />
              <Typography variant='smalltitle'>
                Lorem ipsum dolor sit amet consectetur
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                veniam cum consequuntur dicta veritatis aspernatur ipsum et
                autem libero sed iste.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odit veniam cum consequuntur dicta veritatis
                aspernatur ipsum et autem libero sed iste.
              </Typography>
              <Spacer bottom='md' />
              <Typography variant='smalltitle'>
                Lorem ipsum dolor sit amet consectetur
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                veniam cum consequuntur dicta veritatis aspernatur ipsum et
                autem libero sed iste.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odit veniam cum consequuntur dicta veritatis
                aspernatur ipsum et autem libero sed iste.Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Odit veniam cum consequuntur
                dicta veritatis aspernatur ipsum et autem libero sed iste.
              </Typography>
              <Spacer top='md' />
              <Link to='/' variant='gradient'>
                VIEW CV
              </Link>
            </Column>
          </Row>
          <Spacer bottom='md' />
        </Grid>
        <Background gutter color='blue'>
          <Grid>
            <Row>
              <Column size={12}>
                <Typography variant='smalltitle'>
                  Recently Active in:
                </Typography>
              </Column>
            </Row>
            <Row>
              <Column size={4}>
                <Typography variant='footertitle'>Learning</Typography>
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias alias asperiores pariatur
                </Typography>
              </Column>
              <Column size={4}>
                <Typography variant='footertitle'>Want to learn</Typography>
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Molestias alias asperiores pariatur
                </Typography>
              </Column>
              <Column size={4}>
                <Typography variant='footertitle'>Absolutly loving</Typography>
                <Typography>
                  Korean horror films and their masterful ability to always
                  introduce a zombie subplot.
                </Typography>
              </Column>
            </Row>
          </Grid>
        </Background>
      </Page>
    </Background>
  );
};

export default About;
