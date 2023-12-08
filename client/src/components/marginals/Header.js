import { SectionContainer } from '../commons/SectionContainer';
import { ButtonGroup } from '../Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faWallet } from '@fortawesome/free-solid-svg-icons';

export const Header = ({ isStakePage = false }) => {
  return (
    <header
      id="header"
      className="fixed left-0 top-0 z-30 flex w-full items-center justify-center bg-bgprimary bg-opacity-95 py-5 backdrop-blur-md backdrop-filter"
    >
      <SectionContainer className="wrap wrap-px flex w-[80%] items-center justify-center ">
        <div className="header-logo--container">
          <h1 className="logo mb-0">
            <Link to="/">
              <h1 className="text-[25px] font-bold text-white">Storeoli</h1>
            </Link>
          </h1>
        </div>
        <SectionContainer className="ml-auto flex items-center">
          <ButtonGroup className="block">
            <div className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-secondary-500 bg-transparent px-8 text-xl py-2 font-semibold text-white transition-colors duration-300 hover:bg-secondary-500 hover:text-black md:w-auto">
              67.6
              <img src="./filecoin-logo.svg" alt="fccoin" className="h-7 w-7" />
            </div>
          </ButtonGroup>
          <ButtonGroup className="block">
            <Link
              to="/admin"
              className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-secondary-500 bg-transparent px-8 text-xl py-2 font-semibold text-white transition-colors duration-300 hover:bg-secondary-500 hover:text-black md:w-auto"
            >
              Admin
            </Link>
          </ButtonGroup>
          {!isStakePage && (
            <ButtonGroup className="block">
              <Link
                to="/stake"
                className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-secondary-500 bg-transparent px-8 text-xl py-2 font-semibold text-white transition-colors duration-300 hover:bg-secondary-500 hover:text-black md:w-auto"
              >
                Stake Now
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </ButtonGroup>
          )}

          <ButtonGroup className="block">
            <div className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2 font-semibold text-black transition-colors text-xl duration-300 hover:bg-secondary-500 md:w-auto">
              <FontAwesomeIcon icon={faWallet} />
              Connect Wallet
            </div>
          </ButtonGroup>
        </SectionContainer>
      </SectionContainer>
    </header>
  );
};
