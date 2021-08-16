import React from 'react';
import { CaseStudyTemplate } from '../../Organisms/Templates/CaseStudy/CaseStudy.template';
import { Urls } from '../../../utils/urls';
import crownClothing from '../../../assets/images/crown-clothing.png';
import crownClothingMobile from '../../../assets/images/crown-clothing-small.png';

const CrownClothing: React.FC = () => (
  <CaseStudyTemplate
    backgroundColor='orange'
    createdDate='March 2020'
    frontEnd={[
      `Crown Clothing is an online clothing store. The front-end was built with React, Redux and Redux-Saga.`,
      `This project allows customers to purchase clothing and add items to their basket.
      The basket uses a persist-reducer to persist the items in the user's basket after page reload.`,
      `The front-end of this application also uses styled-components and the Atomic design methodology to better structure the project.`,
    ]}
    headerImage={{
      alt: 'project',
      url: crownClothing,
    }}
    headerImageMobile={crownClothingMobile}
    backEnd={[
      `The back-end of this project is pretty simple and uses Firebase.`,
      `Firebase is used for authentication and allows the user to create an account and log in to their account.`,
      `Firebase Firestore is also used to store clothing items. This makes the process of adding new items easier.`,
      `Finally, the customers can log in with Google. This functionality was added to simplify the authentication step for the customer.`,
    ]}
    subTitle='The one-stop clothing store for fashion'
    title='Crown Clothing'
    projectUrl={Urls.gitHub.crownClothing}
  />
);

export default CrownClothing;
