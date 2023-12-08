import { SectionContainer } from '../commons/SectionContainer';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer id="footer" className="bg-bgprimary">
      <SectionContainer className="relative z-10 text-white flex items-center justify-center">
        <div className="wrap !text-[16px] wrap-px py-6">
          <p className="my-0">
            © {year} runtime_error. All rights reserve.
            <span className="font-normal">A product by runtime_error.</span>
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};
