import { faArrowRight, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { BadgeGroup, BadgeIcon, BadgeMessage } from '../home/Badge';
import { ButtonGroup } from '../Button';
import { Content } from '../home/Content';
import { MotionBTTContainer } from '../commons/MotionBTTContainer';
import { SectionContainer } from '../commons/SectionContainer';
import { PageTitle } from '../commons/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const HomeBanner = () => {
  return (
    <SectionContainer className="flex items-center justify-center py-16">
      <SectionContainer className="wrap wrap-px z-10 flex flex-col items-center justify-center">
        {/* Appear Second */}
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
          <PageTitle className="mx-auto text-center text-white" type="heavy">
            The effortless way to lend the storage with exchange of Reputation
            Score.
          </PageTitle>
        </MotionBTTContainer>
        {/* Appear Third */}
        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
          <Content
            className="mt-3 text-center text-secondary-300 opacity-50"
            alignment="center"
          >
            <p>
              Streamline your storage lending and achieve your product goals
              with ease.{' '}
            </p>
          </Content>
          <div className="mb-16 mt-6 flex items-center justify-center text-center">
            <div className="block">
              <Link
                to="/stake"
                className="mr-3 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2  text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto"
              >
                Have FIL? Stake Now
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
            <div className="block">
              <Link
                to="/sp"
                className="ml-3 inline-flex w-full cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-secondary-500 px-8 py-2  text-xl font-semibold text-black transition-colors duration-300 hover:bg-secondary-500 md:w-auto"
              >
                Storage Provider? Explore
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </MotionBTTContainer>
        {/* Appear Fourth */}
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
          <div className="page-banner--image">
            <img
              src="/rect1195.png"
              alt="Page Banner"
              objectFit="cover"
              className="mx-auto h-[630px] w-[1024px]"
            />
          </div>
        </MotionBTTContainer>
      </SectionContainer>
    </SectionContainer>
  );
};
