import React from 'react';
import { CaseStudyTemplate } from '../../Organisms/Templates/CaseStudy/CaseStudy.template';
import natoursImage from '../../../assets/images/natours.png';
import natoursImageMobile from '../../../assets/images/natours-small.png';

const Natours: React.FC = () => (
  <CaseStudyTemplate
    backgroundColor='purple'
    createdDate='January 2022'
    problemText='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur, eveniet a eum sint assumenda sed harum, error veritatis in
    quo voluptatum doloremque pariatur similique, perspiciatis accusamus ratione quas quisquam eaque?'
    headerImage={{
      alt: 'project',
      url: natoursImage,
    }}
    headerImageMobile={natoursImageMobile}
    solutionText='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur, eveniet a eum sint assumenda sed harum, error veritatis in
    quo voluptatum doloremque pariatur similique, perspiciatis accusamus ratione quas quisquam eaque?'
    subTitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit'
    title='Natours'
    projectUrl='https://github.com/kevinmcgrady/Natours-front-end'
  />
);

export default Natours;
