import Image from "next/image";
const HeroBanner = () => {
  return (
    <div className="absolute top-14 backdrop-blur-3xl left-0 lg:w-[50%] md:w-full h-[100%] bg-gradient-to-r from-[#0000009d] via-transparent to-backdrop-blur-xl ">
      <div className=" flex flex-row  text-white py-8 px-20 gap-x-4">
        <div className="flex flex-row gap-x-2  border-r-[1px]  pr-3 border-slate-200">
          <Image
            alt="Zeloni"
            src="/deerlogo.jpg"
            width={60}
            height={5}
            className="p-2 rounded-xl"
          />
          <div className="hidden lg:block  flex-col">
            <h4 className="font-bold text-lg">Zoloni</h4>
            <p className="font-semibold text-xs">Research and Development</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-3">
          <Image
            alt="Zeloni"
            src="/deerlogo.jpg"
            width={60}
            height={5}
            className="p-2"
          />
          <div className="hidden lg:block  flex-col">
            <h4 className="font-bold text-lg">Zoloni</h4>
            <p className="font-semibold text-xs">Research and Development</p>
          </div>
        </div>
      </div>

      <div className=" text-white px-20">
        <h1 className="text-4xl lg:text-5xl font-bold">Welcome to Zeloni </h1>
        <h2 className="text-4xl lg:text-5xl font-bold mb-10">
          Exhibiting at Bharat Food Tech 2024
        </h2>
        <div className="flex flex-col lg:flex-row gap-x-4 mb-10 gap-y-1">
          <div className=" flex flex-row gap-x-2  px-3 lg:border-r-[1px] border-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p className="text-sm ">New Delhi, India</p>
          </div>

          <div className=" flex flex-row gap-x-2  px-3 lg:border-r-[1px] border-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p className="text-sm "> New Delhi, India</p>
          </div>

          <div className="flex flex-row gap-x-2  px-3  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <p className="text-sm ">New Delhi, India</p>
          </div>
        </div>
        <button className="w-[50%] bg-purple-600 p-2 rounded-md">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
