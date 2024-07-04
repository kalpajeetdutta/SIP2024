const Contact = ({pageRef}) => {
  return (
      <div ref={pageRef} className="w-full h-screen relative">
        <div className="absolute bottom-0 left-[calc(50%_+_170.95px)] [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[439.3px] h-[716.3px] [transform:_rotate(-37.3deg)] [transform-origin:0_0] -z-10" />
        <div className="absolute bottom-0 left-[calc(50%_-_954.35px)] [filter:blur(500px)] rounded-[50%] bg-lightcyan w-[403.3px] h-[544.7px] [transform:_rotate(-63.1deg)] [transform-origin:0_0] -z-10" />
        <div className="text-11xl h-[100px] flex justify-center items-center font-inder">
          CONTACT US
        </div>
        <div className="w-full h-[calc(100vh-160px)] flex">
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="font-inder mb-10 text-5xl">ONLINE INQUIRY</div>
            <div className="flex flex-col gap-5 w-[40%] flex-shrink-0">
              <input
                className="bg-slate-200 p-2 w-full rounded-md text-base placeholder:text-sm indent-2 font-inder"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-slate-200 p-2 w-full rounded-md text-base placeholder:text-sm indent-2 font-inder"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-slate-200 p-2 w-full rounded-md text-base placeholder:text-sm indent-2 font-inder"
                type="number"
                placeholder="Number"
              />
              <textarea
                className="bg-slate-200 p-2 w-full rounded-md text-base placeholder:text-sm indent-2 font-inder"
                placeholder="Message"
                rows={4}
              />
            </div>
            <div className="w-[40%] mt-10">
              <button className="w-full bg-darkturquoise-300 text-white text-lg font-inder cursor-pointer hover:bg-darkturquoise-400 py-4 rounded-full">
                Submit
              </button>
            </div>
          </div>
          <div className="flex w-[40%] items-center">
            <img
              className="w-full object-cover mix-blend-multiply"
              alt=""
              src="/imgg-1@2x.png"
            />
          </div>
        </div>
        <div className="bg-darkturquoise-500 w-full h-[60px] flex justify-center items-center">
          <div className="font-medium font-inter">
            2024 Summer Internship, Tezpur University
          </div>
        </div>
      </div>
  );
};

export default Contact;
