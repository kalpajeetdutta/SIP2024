const About = ({pageRef}) => {
  // console.log("ref",pageRef)

  return (
      <div ref={pageRef} className="w-full h-screen text-lg">
        {/* <div className="absolute bottom-0 left-[calc(50%_-_782px)] [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[400px] h-[637.7px] [transform:_rotate(-29.5deg)] [transform-origin:0_0]" /> */}
        <div className="w-full h-[100px] flex flex-col items-center justify-center text-[36px]">
          <div className="font-semibold">About Us</div>
          <div className="bg-darkturquoise-200 w-24 rounded-full h-1.5" />
        </div>
        <div className="flex w-full h-[calc(100vh-100px)]">
          <div className="flex flex-col justify-center flex-1 pl-20">
            <div className="text-21xl uppercase font-extrabold text-wrap">
              <p className="m-0">
                <span>{`It's not a faith in `}</span>
                <span className="text-darkturquoise-300">technology</span>
                <span className="text-black">{` It's faith in `}</span>
                <span className="text-darkturquoise-300">people</span>
              </p>
            </div>
            <div className="text-dimgray font-inter text-sm mt-5">
              This portal explores the impact of screen time on language
              development in Indian children aged 2-5 years. It examines factors
              such as screen exposure duration, types of screens, key language
              milestones, and parental screen usage practices. The goal is to
              understand how screen time affects early language skills and
              provide recommendations for parents and caregivers to foster
              healthier screen habits and support optimal language development.
            </div>
          </div>
          <div className="relative w-[40%]">
            <div className="absolute top-[20%] right-[5%] bg-lightturquoise w-[347px] h-[421px]" />
            <img
              className="absolute top-[35%] right-[20%] w-[347px] h-[421px] object-cover"
              alt=""
              src="/e931034185a648689806153b624e65c0-1@2x.png"
            />
          </div>
        </div>
      </div>
  );
};

export default About;
