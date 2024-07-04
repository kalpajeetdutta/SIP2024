import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";
import SliderComponent from "../components/slider";

const Members = ({pageRef}) => {
  const items = [
    {
      name: "Item 1",
      desc: "Description of Item 1"
    },
    {
      name: "Item 2",
      desc: "Description of Item 2"
    },
    {
      name: "Item 3",
      desc: "Description of Item 3"
    },
    {
      name: "Item 4",
      desc: "Description of Item 4"
    },
    {
      name: "Item 5",
      desc: "Description of Item 5"
    },
    {
      name: "Item 6",
      desc: "Description of Item 6"
    }
  ];
  
  return (
      <div ref={pageRef} className="relative w-full h-screen">
        <div className="absolute bottom-0 -right-20 [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[400px] h-[637.7px] [transform:_rotate(20deg)] [transform-origin:0_0] -z-10" />
        <div className="absolute top-0 left-[50px] [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[439.3px] h-[716.3px] [transform:_rotate(-5.4deg)] [transform-origin:0_0] -z-10" />
        <div className="flex w-full h-full">
          <div className="w-[30%] h-full flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              alt=""
              src="/ku-img@2x.png"
            />
          </div>
          <div className="w-[70%] h-full">
            <div className="font-semibold text-5xl text-center py-20">
              <span className="text-darkturquoise-300">MEMBERS</span>
              <span className="text-black">
                {' '}
                CONTRIBUTED TO THIS INTERNSHIP
              </span>
            </div>
              <div className="w-full -translate-x-20 z-50 overflow-x-visible">
                <SliderComponent items={items} />
              </div>
              {/* <div className="w-full flex gap-2 justify-center items-center mt-10">
                <FiArrowLeftCircle size={30} color="black" />
                <TbCircleDot size={18} color="black" />
                <TbCircleDot size={18} color="black" />
                <TbCircleDot size={18} color="black" />
                <TbCircleDot size={18} color="black" />
                <TbCircleDot size={18} color="black" />
                <TbCircleDot size={18} color="black" />
                <FiArrowRightCircle size={30} color="black" />
              </div> */}
          </div>
        </div>
        {/* <img
          className="absolute top-[1210px] left-[928px] w-[423px] h-[60px]"
          alt=""
          src="/carousel.svg"
        /> */}
      </div>
  );
};

export default Members;
