import { SectionContainer } from '../commons/SectionContainer';
import { ButtonGroup } from '../Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faWallet } from '@fortawesome/free-solid-svg-icons';
import Web3Context from '../../contexts';
import { useContext } from 'react';

export const Header = ({ isStakePage = false }) => {
  const { connectWallet, account } = useContext(Web3Context);
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
            <div className='transform active:scale-75 transition-transform bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] rounded-lg p-[1.6px]'>
              <div className="bg-black inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-md whitespace-nowrap  bg-transparent px-8 text-xl py-2 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#01ACE4] hover:via-[#00C1BD] hover:to-[#00FFFA] hover:text-black md:w-auto">
                67.6
                <img src="./filecoin-logo.svg" alt="fccoin" className="h-7 w-7" />
              </div>
            </div>
          </ButtonGroup>
          <ButtonGroup className="block">
            <Link
              to="/admin"
              className="ml-4 transform active:scale-75 transition-transform bg-gradient-to-r from-[#7F00FF] to-[#E100FF] rounded-lg p-[1.6px]"
            >
                <div className='bg-black inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-md whitespace-nowrap  bg-transparent px-8 text-xl py-2 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#7F00FF] hover:to-[#E100FF] hover:text-black md:w-auto'>

                  Admin
               </div>

            </Link>
          </ButtonGroup>
          {!isStakePage && (
            <ButtonGroup className="block">
              <Link
                to="/stake"
                className="ml-4 transform active:scale-75 transition-transform bg-gradient-to-r from-[#7F00FF] to-[#E100FF] rounded-lg p-[1.7px]"
              >
                <div className='bg-black inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-md whitespace-nowrap  bg-transparent px-8 text-xl py-2 font-semibold text-white transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#7F00FF] hover:to-[#E100FF] hover:text-black md:w-auto'>
                  Stake Now
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </Link>
            </ButtonGroup>
          )}

          {/* <ButtonGroup className="block">
            <div className="ml-4 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#01ACE4] via-[#00C1BD] to-[#00FFFA] px-8 py-2 font-semibold text-black transition-colors text-xl duration-300 hover:bg-secondary-500 md:w-auto">
              <FontAwesomeIcon icon={faWallet} />
              Connect Wallet
            </div>
          </ButtonGroup> */}
           {account.currentAccount == null ? (
          <div
            className="mr-24 cursor-pointer text-white bg-secondary-2 w-52 h-10 text-center rounded-xl pt-2 px-4"
            onClick={connectWallet}
          >
            + Connect Wallet
          </div>
        ) : (
          <div className="w-1/3 flex justify-center items-center mr-24 text-black">
            Hey,{' '}
            {`${String(account.currentAccount).slice(0, 9)}...${String(
              account.currentAccount
            ).slice(String(account.currentAccount).length - 9)}`}
          </div>
        )}
        </SectionContainer>
      </SectionContainer>
    </header>
  );
};
