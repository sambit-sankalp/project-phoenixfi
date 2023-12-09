import { Link } from 'react-router-dom';
import { SectionContainer } from '../../commons/SectionContainer';
import { getTextAlign } from '../../../utils/helper';

export const BadgeGroup = ({ alignment, link, children, className }) => {
  const Element = link ? Link : 'div';
  const href =
    typeof link === 'string' ? link : link?.href != null ? link.href : '';
  const alignClass = getTextAlign(alignment);

  return (
    <SectionContainer className="inline-flex w-full text-[14px]">
      <Element
        to={href}
        className={`mb-8 inline-flex w-auto items-center rounded-full border border-secondary-500 bg-secondary-500 px-5 py-3 font-medium text-black ${
          link ? 'transition-colors duration-300' : ''
        } ${alignClass ? alignClass : ''} ${className && className}`}
      >
        {children}
      </Element>
    </SectionContainer>
  );
};
