import React from 'react';
import { Page } from '../../../Organisms/Page/Page.component';
import {
  Background,
  Color,
} from '../../../Atoms/Background/Background.component';
import { Grid, Column, Row } from '../../../Molecules/Grid';
import { Typography } from '../../../Atoms/Typography/Typography.component';
import { Image } from '../../../Atoms/Image/Image.component';
import { Spacer } from '../../../Molecules/Spacer/Spacer.component';
import { ScrollingAnimation } from '../../Animations/ScrollAnimation/ScrollAnimation';
import { Link } from '../../../Atoms/Link/Link.component';

interface ICaseStudyTemplateProps {
  backgroundColor: Color;
  title: string;
  subTitle: string;
  headerImage: { url: string; alt: string };
  headerImageMobile: string;
  createdDate: string;
  problemText: string;
  solutionText: string;
  projectUrl: string;
}

export const CaseStudyTemplate: React.FC<ICaseStudyTemplateProps> = ({
  backgroundColor,
  title,
  subTitle,
  headerImage,
  createdDate,
  problemText,
  solutionText,
  projectUrl,
  headerImageMobile,
}) => (
  <Background color={backgroundColor}>
    <Page>
      <Grid>
        <Row>
          <Column size={12}>
            <Spacer top='md' />
            <ScrollingAnimation>
              <Typography variant='title' center>
                {title}
              </Typography>
              <Typography variant='subtitle' center>
                {subTitle}
              </Typography>
            </ScrollingAnimation>
            <Spacer top='md' bottom='md'>
              <ScrollingAnimation isDelay>
                <Image
                  url={headerImage.url}
                  alt={headerImage.alt}
                  mobileUrl={headerImageMobile}
                  width='70%'
                  center
                />
              </ScrollingAnimation>
            </Spacer>
            <Typography center>
              <strong>{createdDate}</strong>
            </Typography>
          </Column>
        </Row>
      </Grid>
      <Spacer bottom='lg' />
      <Background gutter>
        <Grid>
          <Row>
            <Column size={6}>
              <ScrollingAnimation>
                <Typography variant='smalltitle'>Project Overview</Typography>
              </ScrollingAnimation>
            </Column>
            <Column size={6}>
              <ScrollingAnimation>
                <Typography variant='subtitle'>Problem:</Typography>
                <Typography>{problemText}</Typography>
              </ScrollingAnimation>
              <Spacer bottom='md' />
              <ScrollingAnimation>
                <Typography variant='subtitle'>Solution:</Typography>
                <Typography>{solutionText}</Typography>
              </ScrollingAnimation>
              <Spacer bottom='md' />
              <ScrollingAnimation>
                <Typography variant='subtitle'>Solution:</Typography>
                <Typography>{solutionText}</Typography>
              </ScrollingAnimation>
              <Spacer bottom='md' />
              <ScrollingAnimation>
                <Link to={projectUrl} variant='gradient-external'>
                  VIEW PROJECT
                </Link>
              </ScrollingAnimation>
            </Column>
          </Row>
        </Grid>
      </Background>
    </Page>
  </Background>
);
