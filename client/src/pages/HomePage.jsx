import { SectionContainer } from '../components/commons/SectionContainer';
import { PageTitle } from '../components/commons/PageTitle';
import { Layout } from '../components/Layout/Layout';
import { HomeBanner } from '../components/home/HomeBanner';
import { ContentImage } from '../components/home/ContentImage';
import { Content } from '../components/home/Content';
import { MotionBTTContainer } from '../components/commons/MotionBTTContainer';
import {
  CardBody,
  CardGroup,
  CardHeader,
  CardImage,
  Card,
} from '../components/home/Card';

const HomePage = () => {
  return (
    <Layout className="">
      <div className="main-wrapper relative z-10 bg-bgsecondary pb-20 pt-20 ">
        {/* { Page Banner } */}
        <HomeBanner />
        {/* Components Container */}
        <SectionContainer className="wrap wrap-px flex flex-col items-center justify-center">
          {/* Features */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer
              id="features"
              className="features flex flex-col items-center justify-center"
            >
              <PageTitle
                className="mx-auto text-center text-white"
                type="default"
              >
                How to get started?
              </PageTitle>
              <Content
                className="mt-5 text-center !text-[14px] text-secondary-200 opacity-50"
                alignment="center"
              >
                Hey there! Welcome to Storeoli, follow these steps to get
                started with ease with the platform:
              </Content>
              <ContentImage />
            </SectionContainer>
          </MotionBTTContainer>
          {/* Card Container Tabs */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer className="feature-tabs flex flex-col items-center justify-center">
              <PageTitle
                className="mt-10 text-center text-white"
                type="default"
              >
                Our Features
              </PageTitle>
              <Content
                className="mt-3 text-center !text-[16px] text-secondary-200 opacity-50"
                alignment="center"
              >
                <p>
                  Our platform is packed with features that will help you
                  achieve your goals.
                </p>
              </Content>
              <CardGroup className="mt-10 flex w-[3/5] items-center justify-center">
                <Card className="">
                  <CardBody className="w-full bg-bgprimary p-12">
                    <CardImage
                      src="/features4.png"
                      alt="Customizable Layouts image used."
                    />
                    <CardHeader className="mt-5 !text-[20px] !font-bold !text-white !opacity-100">
                      Slashing Protection
                    </CardHeader>
                    <p className="!text-[16px] text-secondary-100 opacity-50">
                      We require Storage Providers to cover potential slashing
                      risks, ensuring your investments are protected, stable and
                      secure.
                    </p>
                  </CardBody>
                </Card>
                <Card className="">
                  <CardBody className="w-full bg-bgprimary p-12">
                    <CardImage
                      src="/features4.png"
                      alt="Customizable Layouts image used."
                    />
                    <CardHeader className="mt-5 !text-[20px] !font-bold !text-white !opacity-100">
                      Maximized Profitability
                    </CardHeader>
                    <p className="!text-[16px] text-secondary-100 opacity-50">
                      CPartnering with Collectif DAO allows Storage Providers to
                      earn up to 40% more in mining fees, maximizing rewards for
                      stakers.
                    </p>
                  </CardBody>
                </Card>
                <Card className="">
                  <CardBody className="w-full bg-bgprimary p-12">
                    <CardImage
                      src="/features4.png"
                      alt="Customizable Layouts image used."
                    />
                    <CardHeader className="mt-5 !text-[20px] !font-bold !text-white !opacity-100">
                      Optimal Distribution
                    </CardHeader>
                    <p className="!text-[16px] text-secondary-100 opacity-50">
                      Your capital is allocated to top-tier, geographically
                      distributed Storage Providers in the Filecoin network for
                      enhanced efficiency.
                    </p>
                  </CardBody>
                </Card>
              </CardGroup>
            </SectionContainer>
          </MotionBTTContainer>
        </SectionContainer>
      </div>
    </Layout>
  );
};

export default HomePage;
