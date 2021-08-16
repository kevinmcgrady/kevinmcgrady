import React from 'react';
import { Grid } from '../../../Molecules/Grid';
import { Spacer } from '../../../Molecules/Spacer/Spacer.component';
import { ProjectsCard } from '../../../Molecules/Projects-Card/Projects-Card.component';
import { ScrollingAnimation } from '../../Animations/ScrollAnimation/ScrollAnimation';
import { Urls } from '../../../../utils/urls';

import natoursImage from '../../../../assets/images/natours-small.png';
import crownClothing from '../../../../assets/images/crown-clothing-small.png';

export const ProjectsTemplate: React.FC = () => (
  <Grid>
    <ScrollingAnimation>
      <ProjectsCard
        image={{
          src: crownClothing,
          alt: 'project',
        }}
        title='Crown Clothing'
        bodyText={`Crown Clothing is a modern full-stack e-commerce clothing website offering
          secure online transactions and a pleasant user experience.
          This website provides users with a quick and easy way to shop for clothing.`}
        link={{ url: Urls.caseStudys.crownClothing, text: 'VIEW CASE STUDY' }}
      />
    </ScrollingAnimation>
    <Spacer bottom='md' />
    <ScrollingAnimation>
      <ProjectsCard
        image={{
          src: natoursImage,
          alt: 'project',
        }}
        title='Natours'
        bodyText={`Natours is an online event booking platform.
        This application allows users to book securely book tours to unique destinations.
        This application is also a full-stack application with the main focus on security.`}
        link={{ url: Urls.caseStudys.natours, text: 'VIEW CASE STUDY' }}
      />
    </ScrollingAnimation>
  </Grid>
);
