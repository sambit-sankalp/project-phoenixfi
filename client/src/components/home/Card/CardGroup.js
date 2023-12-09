import { SectionContainer } from '../../commons/SectionContainer';

export const CardGroup = ({ children, className = '' }) => {
  return (
    <SectionContainer className="w-full flex items-center justify-center">
      <div
        className={`w-10/12 flex items-center justify-center ${
          className && className
        }`}
      >
        {children}
      </div>
    </SectionContainer>
  );
};
