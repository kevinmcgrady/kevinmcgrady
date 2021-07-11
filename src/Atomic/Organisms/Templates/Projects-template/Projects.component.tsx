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
        bodyText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        quaerat, facilis tenetur numquam reiciendis dignissimos quasi, vitae
        amet reprehenderit, libero adipisci tempore corrupti! Consequatur
        quam et tempore ad rem ea!'
        link={{ url: Urls.caseStudys.clownClothing, text: 'VIEW CASE STUDY' }}
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
        bodyText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        quaerat, facilis tenetur numquam reiciendis dignissimos quasi, vitae
        amet reprehenderit, libero adipisci tempore corrupti! Consequatur
        quam et tempore ad rem ea!'
        link={{ url: Urls.caseStudys.natours, text: 'VIEW CASE STUDY' }}
      />
    </ScrollingAnimation>
  </Grid>
);
