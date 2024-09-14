import Image from "next/image";
import { Mail, Phone } from "lucide-react";
const LeftPanel = () => {
  return (
    <div className=" flex flex-col  w-full lg:w-[30%] lg:-mt-14  gap-y-4 ">
      <div className="flex flex-col w-full lg:w-[100%] gap-y-4 text-slate-600  ">
        <div className="w-full  bg-white rounded-lg p-5 border shadow-md">
          <h1 className="text-xl font-bold mb-4">Exhibitor Contact</h1>

          <div className="mb-2 flex flex-row">
            <span className="font-semibold w-[30%]">Name: </span>
            <p className="w-[70%] "> Rajesh Kumar</p>
          </div>

          <div className="mb-2 flex flex-row">
            <span className="font-semibold w-[30%]">Email: </span>
            <a href="mailto:Rajeshkumar@gmail.com" className="text-blue-600">
              <p className="w-[70%] ">Rajeshkumar@gmail.com</p>
            </a>
          </div>

          <div className="mb-2 flex flex-row">
            <span className="font-semibold w-[30%]">Phone: </span>

            <p className="w-[70%]">+91 6230126530</p>
          </div>

          <div className="mb-2 flex flex-row  ">
            <span className="font-semibold w-[30%]">Address: </span>
            <p className="w-[70%]">
              B702, Pramukh Plaza, Cardinal Gracious Rd, near Western Express
              Metro Station, Andheri East, Mumbai, Maharashtra 400059
            </p>
          </div>

          <div className="mb-2 flex flex-row">
            <span className="font-semibold w-[30%]">Website: </span>
            <a
              href="https://www.zolonihere.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 inline items-center gap-1 "
            >
              <p className="w-[70%] ">www.zolonihere.com</p>
            </a>
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-[100%] gap-y-4 text-slate-600  ">
        <div className="w-full  bg-white rounded-lg p-5 border shadow-md">
          <h1 className="text-xl font-bold mb-4">Zaloni Past exhibition </h1>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-4">
              <Image
                src="/expologo1.png"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg "
              />
              <div className="flex flex-col self-center ">
                <h3 className="font text-lg font-semibold text-black">
                  Saudi food Expo
                </h3>
                <p className=" text-xs font-semibold">
                  {" "}
                  12 July - 18 July 2024
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <Image
                src="/expologo.avif"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg "
              />
              <div className="flex flex-col self-center ">
                <h3 className="font text-lg font-semibold text-black">
                  South Asia food Expo
                </h3>
                <p className=" text-xs font-semibold">
                  {" "}
                  12 July - 18 July 2024
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <Image
                src="/expologo2.jpg"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg "
              />
              <div className="flex flex-col self-center ">
                <h3 className="font text-lg font-semibold text-black">
                  Autralia food Expo
                </h3>
                <p className=" text-xs font-semibold">
                  {" "}
                  12 July - 18 July 2024
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <Image
                src="/expologo2.jpeg"
                alt="logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg "
              />
              <div className="flex flex-col self-center ">
                <h3 className="font text-lg font-semibold text-black">
                  Antartica food Expo
                </h3>
                <p className=" text-xs font-semibold">
                  {" "}
                  12 July - 18 July 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[100%] gap-y-4 text-slate-600  ">
        <div className="w-full  bg-white rounded-lg p-5 border shadow-md">
          <h1 className="text-xl font-bold mb-4">Members </h1>

          <div className="flex flex-col gap-y-4">
            <div className="border-[1px] shadow-lg border-gray-300  rounded-md px-6 py-3">
              <div className="flex flex-row gap-x-2 mb-2">
                <Image
                  src="/profile.webp"
                  alt="profile"
                  width={60}
                  height={60}
                  className="rounded-full "
                />
                <div className=" self-center">
                  <h3 className="font-semibold">Aditi Sharma</h3>
                  <p className="text-xs font-semibold text-gray-500 ">
                    Marketing Head
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-x-4 text-xs  text-gray-500 ">
                <p>
                  <Phone className="inline mr-2" width={18} height={18} /> +91
                  9418208685
                </p>
                <p>
                  <Mail className="inline mr-2" width={18} height={18} />{" "}
                  aditi2121@jawar.com
                </p>
              </div>
            </div>
            <div className="border-[1px] shadow-lg border-gray-300  rounded-md px-6 py-3">
              <div className="flex flex-row gap-x-2 mb-2">
                <Image
                  src="/profile.webp"
                  alt="profile"
                  width={60}
                  height={60}
                  className="rounded-full "
                />
                <div className=" self-center">
                  <h3 className="font-semibold">Aditi Sharma</h3>
                  <p className="text-xs font-semibold text-gray-500 ">
                    Marketing Head
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-x-4 text-xs flex-wrap text-gray-500 ">
                <p>
                  <Phone className="inline mr-2" width={18} height={18} /> +91
                  9418208685
                </p>
                <p>
                  <Mail className="inline mr-2" width={18} height={18} />{" "}
                  aditi2121@jawar.com
                </p>
              </div>
            </div>
            <div className="border-[1px] shadow-lg border-gray-300  rounded-md px-6 py-3">
              <div className="flex flex-row gap-x-2 mb-2">
                <Image
                  src="/profile.webp"
                  alt="profile"
                  width={60}
                  height={60}
                  className="rounded-full "
                />
                <div className=" self-center">
                  <h3 className="font-semibold">Aditi Sharma</h3>
                  <p className="text-xs font-semibold text-gray-500 ">
                    Marketing Head
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-x-4 text-xs  text-gray-500 ">
                <p>
                  <Phone className="inline mr-2" width={18} height={18} /> +91
                  9418208685
                </p>
                <p>
                  <Mail className="inline mr-2" width={18} height={18} />{" "}
                  aditi2121@jawar.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
