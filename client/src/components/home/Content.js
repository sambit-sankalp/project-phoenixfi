import { getTextAlign } from '../../utils/helper';

export const Content = ({ className = '', alignment, children }) => {
  const alignClass = getTextAlign(alignment);
  return (
    <div
      className={`w-full flex max-w-3xl items-center justify-center text-center text-xl text-black/60 ${
        className && className
      } ${alignClass && alignClass}`}
    >
      {children}
    </div>
  );
};
