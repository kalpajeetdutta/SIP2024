const Mentors = ({pageRef}) => {
  return (
    <div ref={pageRef} className="w-full h-screen flex flex-row-reverse relative">
        <div className="absolute top-0 left-[50px] [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[439.3px] h-[716.3px] [transform:_rotate(-5.4deg)] [transform-origin:0_0] -z-10" />
      <div className="w-[30%] h-full flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          alt=""
          src="/tezpur-university-1@2x.png"
        />
      </div>
      <div className="w-[70%] h-full">
        <div className="font-semibold text-5xl text-center py-20">
          <span className="text-darkturquoise-300">MENTORS</span>
          <span className="text-black"> CONTRIBUTED TO THIS INTERNSHIP</span>
        </div>
        <div className="w-full flex justify-center gap-20 z-50">
          <div className="w-[300px] h-[427px] bg-slate-300 flex-shrink-0"></div>
          <div className="w-[300px] h-[427px] bg-slate-300 flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
