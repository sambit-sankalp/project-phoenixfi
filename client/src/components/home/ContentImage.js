import { SectionContainer } from '../commons/SectionContainer';
import { v4 as uuid } from 'uuid';

const ContentImageData = [
  {
    id: uuid(),
    title: 'Stake FIL',
    content: 'Select an amount of FIL to stake on Collectif DAO application.',
    align: 'right',
    image: '/features1.png',
  },
  {
    id: uuid(),
    title: 'Receive Rewards',
    content:
      'Receive clFIL which automatically increases in value from Filecoin mining rewards',
    align: 'left',
    image: '/features2.png',
  },
  {
    id: uuid(),
    title: 'Expand Network',
    content:
      'Help growing Filecoin with storage capacity by allocating FIL to network’s top Storage Providers',
    align: 'right',
    image: '/features2.png',
  },
];

export const ContentImage = () => {
  return (
    <SectionContainer className="mt-16 flex w-10/12 flex-col items-center justify-center space-y-16">
      {ContentImageData.map((item) => (
        <div id={item.id} key={item.id} className="grid gap-y-8 md:grid-cols-2">
          <div
            className={`rounded-3xl ${
              item.align === 'left' ? 'md:order-1' : ''
            }`}
          >
            <img
              src={item.image}
              objectFit="cover"
              alt="Process Banner 1"
              className="offset-y-0 offset-x-8 blur-16 w-full drop-shadow-xl"
            />
          </div>
          <div
            className={`flex items-start justify-center flex-col ${
              item.align === 'left'
                ? 'ml-auto md:pr-16 lg:pr-24 xl:pr-32'
                : 'mr-auto md:pl-16 lg:pl-24  xl:pl-32'
            } content my-auto text-black/60`}
          >
            <h3 className="md:h3 mb-2 text-[30px] font-semibold text-white">
              {item.title}
            </h3>
            <div className="mt-0 w-36 border-b-4 border-secondary-500"></div>
            <p className="text-secondary-200 !text-[15px] mt-2 opacity-60">{item.content}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
