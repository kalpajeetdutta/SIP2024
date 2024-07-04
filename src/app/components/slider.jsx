import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi';
import { TbCircleDot } from 'react-icons/tb';
import { useState } from 'react';

const SliderComponent = ({items}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrowRight />,
    prevArrow: <CustomArrowLeft />,
    appendDots: dots => (
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 flex">
        {dots}
      </div>
    ),
    customPaging: i => <CustomDots key={i} />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {items.map(({name, desc}, _i) => {
          return (
            <div key={_i} className="w-full h-full">
              <div className="py-3 px-5">
                <Image
                  className="w-full block object-cover"
                  src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="img1"
                  width={300}
                  height={300}
                />
                <div className="text-center bg-white/80 backdrop-blur-md py-3">
                  <div className="text-base font-semibold">{name}</div>
                  <div className="text-xs text-slate-500 mt-2">{desc}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const CustomArrowLeft = ({onClick}) => (
  <div className="absolute -bottom-20 left-1 transform -translate-x-1/2">
    <button className="bg-transparent cursor-pointer" onClick={onClick}>
      <FiArrowLeftCircle size={30} color="black" />
    </button>
  </div>
);
const CustomArrowRight = ({onClick}) => (
  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 ml-20">
    <button className="bg-transparent cursor-pointer" onClick={onClick}>
      <FiArrowRightCircle size={30} color="black" />
    </button>
  </div>
);
const CustomDots = ({onClick, active}) => (
    <TbCircleDot className={`${active ? 'opacity-100' : 'opacity-50'}`} size={18} color="black" onClick={onClick}/>
);

export default SliderComponent;
