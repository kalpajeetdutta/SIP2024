import {FaArrowRight} from 'react-icons/fa';

const Landing = ({pageRef, scrollToPage}) => {
  return (
      <div ref={pageRef.home} className="relative w-full h-screen font-jaldi overflow-hidden">
        {/* <div className="absolute top-[225px] left-[0px] bg-white w-[1440px] h-[1024px]" /> */}
        <img
          className="absolute bottom-0 left-0 h-[300px] -z-10"
          alt=""
          src="/rectangle-37.svg"
        />
        <div className="-z-10 absolute top-0 left-[1382.4px] [filter:blur(20px)] [background:linear-gradient(180deg,_rgba(9,_225,_255,_0.1),_rgba(255,_255,_255,_0.1))] w-[1145.8px] h-[457.9px] [transform:_rotate(67.6deg)] [transform-origin:0_0]" />
        <div className="-z-10 absolute top-0 left-0 right-0 [filter:blur(20px)] [background:linear-gradient(180deg,_rgba(9,_225,_255,_0.1),_rgba(255,_255,_255,_0.1))] h-[315px]" />
        <div className="flex items-center justify-between h-[60px] px-20 z-50">
          <b className="text-[35px]">Intern</b>
          <div className="flex justify-evenly w-[50%]">
            <div className="hover:font-semibold text-base cursor-pointer progress-bar block relative" onClick={() => scrollToPage(pageRef.about)}>About Us</div>
            <div className="hover:font-semibold text-base cursor-pointer progress-bar block relative" onClick={() => scrollToPage(pageRef.members)}>Members</div>
            <div className="hover:font-semibold text-base cursor-pointer progress-bar block relative" onClick={() => scrollToPage(pageRef.mentors)}>Mentors</div>
            <div className="hover:font-semibold text-base cursor-pointer progress-bar block relative" onClick={() => scrollToPage(pageRef.contact)}>Contact Us</div>
          </div>
        </div>
        <div className="w-full flex h-[calc(100vh-60px)] z-50">
          <div className=" flex flex-col justify-center flex-1 pl-32">
            <div className='-translate-y-[10%]'>
            <i className="text-[32px] font-semibold font-inter text-gray text-wrap">
              “Humanity is acquiring all the right technology for all the wrong
              reasons”
            </i>
            <div className="text-sm font-inter text-slate-700 text-wrap mt-5">
              This portal explores the impact of screen time on language
              development in Indian children aged 2-5 years, assessing screen
              exposure, language milestones, and parental practices to provide
              insightful recommendations.
            </div>
            <button className="btn-progress w-fit mt-5 cursor-pointer border-2 rounded-full px-5 py-3 bg-transparent flex justify-center items-center">
              <span className="font-semibold mr-2">Quick Queries</span>
              <FaArrowRight size={14} color="black" />
            </button>
            </div>
          </div>
          <div className="relative flex w-[40%] justify-center items-center">
            <img className="w-[80%]" alt="" src="/polygon-1.svg" />
            <img
              className="w-[80%] absolute object-cover"
              alt=""
              src="/whatsapp-image-20240625-at-10130-pmremovebgpreview-1@2x.png"
            />
          </div>
        </div>
      </div>
  );
};

export default Landing;
