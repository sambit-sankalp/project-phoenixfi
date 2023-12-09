import { Link } from 'react-router-dom';
import { SectionContainer } from '../../commons/SectionContainer';
import clsx from 'clsx';

const CardType = {
  default: '',
  bordered: 'border-[1px] border-neutral-200 text-primary-500 p-8',
};

export const Card = ({
  link = '',
  className = '',
  children,
  target = '',
  type = 'default',
}) => {
  const Element = link ? Link : 'div';
  const href =
    typeof link === 'string' ? link : link?.href != null ? link.href : '';
  return (
    <SectionContainer
      className={clsx(
        'm-3 overflow-hidden rounded-lg bg-bgprimary',
        {
          [CardType.default]: type === 'default',
          [CardType.bordered]: type === 'bordered',
        },
        className
      )}
    >
      <Element
        to={href}
        target={link ? target : '_self'}
        className="bg-bgprimary"
      >
        {children}
      </Element>
    </SectionContainer>
  );
};
