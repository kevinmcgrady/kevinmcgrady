import React from 'react';
import { CaseStudyTemplate } from '../../Organisms/Templates/CaseStudy/CaseStudy.template';
import natoursImage from '../../../assets/images/natours.png';
import natoursImageMobile from '../../../assets/images/natours-small.png';
import { Urls } from '../../../utils/urls';

const Natours: React.FC = () => (
  <CaseStudyTemplate
    backgroundColor='purple'
    createdDate='January 2020'
    frontEnd={[
      `Natours was built using React, Redux, Redux Observables and the Atomic design methodology.`,
      `This application was a fun one to build and includes loads of business logic!
      Natours allows users to book unique locations, pay using Stripe and also update their booking after checkout.`,
      `This application also has an interactive map showcasing the various stops on each tour.
      There is also a built-in admin page that allows the owner of the application to monitor each tour.
      Finally, Natours allows the user to leave reviews on tours they have attended.`,
    ]}
    headerImage={{
      alt: 'project',
      url: natoursImage,
    }}
    headerImageMobile={natoursImageMobile}
    backEnd={[
      `The back-end of this application was built using NodeJS, Express and MongoDB.`,
      `The main focus around Natours was security and the business logic for the application.
      This application was broken down into four main entities; the user, bookings, reviews and tours.`,
      `The user can create an account, log in and update their password. The user can also request a
      reset password request that is sent by email to the registered user's email address.`,
      `The fun part for me was the tours. The user has full CRUD actions on a tour and also can pay with Stripe.
      Additional functionality was included to show the top five tours in the user's location and display the monthly
      plan to the admin of the application.`,
      `This application was based on an Udemy course where I introduced additional learning and functionality.
      Both the front-end and the back-end code can be found below with a list of all the features.`,
    ]}
    subTitle='The all in one application to book unique tours'
    title='Natours'
    projectUrl={Urls.caseStudys.natours}
  />
);

export default Natours;
