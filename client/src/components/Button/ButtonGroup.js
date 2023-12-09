import { getTextAlign } from '../../utils/helper';
import { SectionContainer } from '../commons/SectionContainer';

export const ButtonGroup = ({ className = '', alignment, children }) => {
  const alignClass = getTextAlign(alignment);
  return (
    <SectionContainer className="w-full">
      <div
        className={`flex flex-row items-center justify-center ${
          className && className
        } ${alignClass && alignClass}`}
      >
        {children}
      </div>
    </SectionContainer>
  );
};
