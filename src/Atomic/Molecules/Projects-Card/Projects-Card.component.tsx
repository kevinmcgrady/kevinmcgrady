import React from 'react';
import { Column, Row } from '../../Molecules/Grid';
import { Typography } from '../../Atoms/Typography/Typography.component';
import { Spacer } from '../../Molecules/Spacer/Spacer.component';
import { Link } from '../../Atoms/Link/Link.component';
import { HoverImage } from '../../Atoms/HoverImage/HoverImage.component';

import './Projects-Card.styles.scss';

interface IProjectsCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  bodyText: string;
  link: {
    url: string;
    text: string;
  };
}

export const ProjectsCard: React.FC<IProjectsCardProps> = ({
  image,
  title,
  bodyText,
  link,
}) => (
  <Row>
    <div className='project-card'>
      <Column size={4}>
        <div className='project-image'>
          <Link variant='cta' to={link.url}>
            <HoverImage src={image.src} alt={image.alt} width='100%' />
          </Link>
        </div>
      </Column>
      <Column size={6}>
        <Typography variant='smalltitle'>{title}</Typography>
        <Typography variant='body'>{bodyText}</Typography>
        <Spacer top='sm' />
        <Link to={link.url} variant='gradient'>
          {link.text}
        </Link>
      </Column>
    </div>
  </Row>
);
