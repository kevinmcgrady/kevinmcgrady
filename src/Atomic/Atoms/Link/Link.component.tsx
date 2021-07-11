import React from 'react';
import './Link.styles.scss';
import { Link as RouterLink, LinkProps, NavLink } from 'react-router-dom';

type Variant =
  | 'navigation'
  | 'cta'
  | 'gradient'
  | 'external'
  | 'gradient-external';

interface ILinkProps extends LinkProps {
  variant?: Variant;
  hasPadding?: boolean;
}

export const Link: React.FC<ILinkProps> = ({
  to,
  variant = 'navigation',
  hasPadding,
  children,
}) => {
  if (variant === 'navigation') {
    return (
      <NavLink
        exact
        activeClassName='active'
        to={to}
        className='navigation-link'
      >
        {children}
      </NavLink>
    );
  } else if (variant === 'cta') {
    return (
      <RouterLink to={to} className='cta-link'>
        {children}
      </RouterLink>
    );
  } else if (variant === 'gradient') {
    return (
      <main className='gradient-link'>
        <span>
          <RouterLink to={to}>{children}</RouterLink>
        </span>
      </main>
    );
  } else if (variant === 'external') {
    return (
      <a
        href={to as string}
        target='_blank'
        className={`${hasPadding ? 'link-padding' : ''} cta-link`}
        rel='noreferrer'
      >
        {children}
      </a>
    );
  } else if (variant === 'gradient-external') {
    return (
      <main className='gradient-link'>
        <span>
          <a
            href={to as string}
            target='_blank'
            className={`${hasPadding ? 'link-padding' : ''} cta-link`}
            rel='noreferrer'
          >
            {children}
          </a>
        </span>
      </main>
    );
  }

  return null;
};
