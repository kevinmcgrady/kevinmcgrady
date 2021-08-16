import React from 'react';
import { Page } from '../../Organisms/Page/Page.component';
import { Background } from '../../Atoms/Background/Background.component';
import { Grid, Column, Row } from '../../Molecules/Grid';
import { Typography } from '../../Atoms/Typography/Typography.component';
import { Link } from '../../Atoms/Link/Link.component';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { Image } from '../../Atoms/Image/Image.component';
import { Urls } from '../../../utils/urls';

import aboutImage from '../../../assets/images/me.webp';

import './About.styles.scss';

const About: React.FC = () => {
  return (
    <Background>
      <Page>
        <div>
          <Spacer top='md' />
        </div>
        <Grid>
          <Row>
            <Column size={5}>
              <div className='hide-desktop'>
                <Typography className='hide-desktop' variant='gradiant'>
                  Who am I?
                </Typography>
                <Spacer bottom='md' />
              </div>
              <div className='about-image'>
                <Image url={aboutImage} alt='' width='100%' />
                <Spacer bottom='md' />
                <Typography>
                  Absolutely loving life on the shore of Loch Lomond! The
                  weather was great, the company was even better and the step
                  count definitely clocked high!
                </Typography>
                <Spacer bottom='md' />
              </div>
            </Column>
            <Column size={7}>
              <div className='hide-mobile'>
                <Typography className='hide-mobile' variant='gradiant'>
                  Who am I?
                </Typography>
                <Spacer bottom='md' />
              </div>
              <Typography variant='smalltitle'>
                Everything Web Development
              </Typography>
              <Typography>
                In the beginning, I studied Web Development at The City of
                Glasgow College where I achieved an HND in Web Development. I
                loved every moment of it. I then moved on to The University of
                the West of Scotland where I was awarded a BSc in Web &amp;
                Mobile Development with Distinction. While at university I was
                lucky enough to be awarded the Court Medal for my efforts!
              </Typography>
              <Spacer bottom='sm' />
              <Typography>
                I am currently employed as a mid-level developer with Waracle
                where I am based in the ScottishPower team.💡
              </Typography>
              <Spacer bottom='md' />
              <Typography variant='smalltitle'>Outside of work</Typography>
              <Typography>
                I enjoy learning and experiencing what the world has to offer! I
                am currently interested in machine learning and ethical hacking.
                I feel these topics have great value when it comes to the web!
              </Typography>
              <Spacer bottom='sm' />
              <Typography>
                When I am not at my laptop, I enjoy travelling to new places,
                experiencing new activities and finding a good cycle route! 🚲
              </Typography>
              <Spacer top='md' />
              <Link to={Urls.documents.cv} variant='gradient-external'>
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
                  I am currently learning the basics of Ethical Hacking and
                  loving it! On a design level, I am dipping my toe in Atomic
                  Design.
                </Typography>
              </Column>
              <Column size={4}>
                <Typography variant='footertitle'>Want to learn</Typography>
                <Typography>
                  I would like to study and investigate Machine Learning. Baking
                  a good sourdough loaf is also on the cards.
                </Typography>
              </Column>
              <Column size={4}>
                <Typography variant='footertitle'>Absolutly loving</Typography>
                <Typography>
                  I enjoy watching Mr Robot and being able to take care of my
                  plants without them dying 🌱.
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
