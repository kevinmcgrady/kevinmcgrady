import React from 'react';
import { CaseStudyTemplate } from '../../Organisms/Templates/CaseStudy/CaseStudy.template';
import crownClothing from '../../../assets/images/crown-clothing.png';
import crownClothingMobile from '../../../assets/images/crown-clothing-small.png';

const CrownClothing: React.FC = () => (
  <CaseStudyTemplate
    backgroundColor='orange'
    createdDate='January 2022'
    problemText='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur, eveniet a eum sint assumenda sed harum, error veritatis in quo
    voluptatum doloremque pariatur similique, perspiciatis accusamus ratione quas quisquam eaque?'
    headerImage={{
      alt: 'project',
      url: crownClothing,
    }}
    headerImageMobile={crownClothingMobile}
    solutionText='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur, eveniet a eum sint assumenda sed harum, error veritatis in
    quo voluptatum doloremque pariatur similique, perspiciatis accusamus ratione quas quisquam eaque?'
    subTitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
    title='Crown Clothing'
    projectUrl='https://github.com/kevinmcgrady/Crown-Clothing'
  />
);

export default CrownClothing;
