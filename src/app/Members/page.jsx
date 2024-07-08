import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';
import {TbCircleDot} from 'react-icons/tb';
import SliderComponent from '../components/slider';
import Image from 'next/image';

const Members = ({pageRef}) => {
  const items = [
    {
      name: 'Kalpajeet Dutta',
      desc: 'B.Tech CSE, Kaziranga University (3rd year)',
      img: '/kalpajeet.jpg'
    },
    {
      name: 'Prachurjya Goswami',
      desc: 'B.Tech CSE, Kaziranga University (3rd year)',
      img: '/prachurjya.png'
    },
    {
      name: 'Priyanuj Bhowmick',
      desc: 'B.Tech CSE, Kaziranga University (3rd year)',
      img: '/priyanuj.png'
    },
    {
      name: 'Sharbanee Kalita',
      desc: 'B.Tech CSE, Kaziranga University (3rd year)',
      img: '/sharbanee.jpeg'
    },
    {
      name: 'Moushree Dey',
      desc: 'M.Tech CSE, IIIT-Guwahati',
      img: '/moushree.jpeg'
    },
    {
      name: 'Kangkan J Borah',
      desc: 'B.Tech CSE, Kaziranga University (3rd year)',
      img: '/ku.png'
    },
  ];

  return (
    <div ref={pageRef} className="relative w-full h-screen">
      <div className="absolute bottom-0 -right-20 [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[400px] h-[637.7px] [transform:_rotate(20deg)] [transform-origin:0_0] -z-10" />
      <div className="absolute top-0 left-[50px] [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[439.3px] h-[716.3px] [transform:_rotate(-5.4deg)] [transform-origin:0_0] -z-10" />
      <div className="w-full h-full px-10 py-5">
        <div className="w-full flex flex-col items-center">
          <h1 className="m-0 p-0 text-3xl font-bold">Our Team</h1>
          <p className="mt-2 p-0 text-sm text-slate-600">
            Get to know the faces behind the product
          </p>
        </div>
        <div className="w-full h-[calc(100vh-140px)] grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mt-5">
          {items.map(({name, desc, img}, _i) => {
            return (
              <div key={_i} className="w-full h-full flex flex-col items-center justify-center">
                <div className='w-fit'>
                <div className="w-[150px] md:w-[220px] h-[150px] md:h-[220px]">
                  <Image
                    className="bg-red-500 w-full h-full object-cover"
                    src={img}
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
                <div className="w-[150px] md:w-[220px] text-center bg-white py-2 px-2">
                  <h4 className='m-0 p-0 text-xs md:text-base font-bold'>{name}</h4>
                  <p className='m-0 p-0 text-[10px] md:text-xs font-light mt-1 md:mt-2'>{desc}</p>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Members;
