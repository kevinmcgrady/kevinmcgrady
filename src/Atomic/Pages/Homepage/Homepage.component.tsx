import React from 'react';
import { Page } from '../../Organisms/Page/Page.component';
import { Intro } from '../../Organisms/Intro/Intro.component';
import { ProjectsTemplate } from '../../Organisms/Templates/Projects-template/Projects.component';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { Background } from '../../Atoms/Background/Background.component';

const Homepage = () => {
  return (
    <Background>
      <Page>
        <Intro />
        <Spacer bottom='lg' />
        <ProjectsTemplate />
      </Page>
    </Background>
  );
};

export default Homepage;
