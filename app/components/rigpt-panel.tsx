import Image from "next/image";

const data = [
  { "Company Type": ["Contact Manufacturing", "Export", "White"] },
  { "Product Categories": ["Juices", "Vegetables", "Grain", "Grain", "Grain"] },
  { "Product Items": ["Item01", "Item 02", "Item 03"] },
];

const RightPanel = () => {
  return (
    <div className="flex flex-col w-full lg:w-[70%] gap-y-4  lg:-mt-14  mb-4">
      <div className="w-full bg-white rounded-lg p-5 border-[1px] shadow-md">
        <h1 className="text-xl font-bold mb-8"> Company&apos;s Business</h1>

        {data.map((element) => (
          <div key={0} className="flex flex-col gap-y-3 mb-2">
            <h1 className="font-bold text-sm">{Object.keys(element)}</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {Object.values(element).map((item) =>
                item.map((val: string) => (
                  <p
                    key={0}
                    className="p-2 text-sm font-semibold text-gray-500 rounded-2xl shadow-md border-[#00000039] border-[1px] "
                  >
                    {val}
                  </p>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-white rounded-lg p-5 border-[1px] shadow-md">
        <h1 className="text-xl font-bold mb-4"> Company Overview</h1>
        <p className="p-2 text-sm font-semibold text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint veniam
          possimus laborum! Ea facilis, pariatur nemo, perspiciatis aspernatur
          quod nesciunt, corrupti praesentium dolore delectus numquam voluptates
          animi atque nostrum quam? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptatum dolores necessitatibus eveniet excepturi
          voluptas nihil quam dolorem, saepe eaque ex harum eius ullam pariatur
          exercitationem quod! Libero cupiditate adipisci voluptates.
        </p>
      </div>
      <div className="w-full bg-white rounded-lg p-5 border-[1px] shadow-md ">
        <h1 className="text-xl font-bold mb-4">Videos and Images</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-2">
          <Image
            src="/people.jpg"
            alt="photo"
            width={400}
            height={100}
            className=" object-cover lg:w-[500px] lg:h-[200px]"
          />
          <Image
            src="/photo2.jpeg"
            alt="photo"
            width={400}
            height={100}
            className=" object-cover lg:w-[250px] lg:h-[200px]" // same size for all images
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-2">
          <Image
            src="/photo3.jpeg"
            alt="photo"
            width={400}
            height={100}
            className="object-cover lg:w-[250px] lg:h-[200px]"
          />
          <Image
            src="/photo4.jpeg"
            alt="photo"
            width={400}
            height={100}
            className=" object-cover lg:w-[500px] lg:h-[200px]"
          />
        </div>

        {/* Show All Link */}
        <div className="flex justify-center items-center">
          <a href="#" className="text-purple-600 font-semibold underline">
            Show All
          </a>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg p-5 border-[1px] shadow-md">
        <h1 className="text-xl font-bold mb-4"> Files</h1>
        <div className="flex flex-col lg:flex-row flex-wrap gap-3 justify-center align-middle">
          <div className="w-[80%] lg:w-[30%]  p-2 border-[1px] shadow-lg rounded-md self-center">
            <Image
              src="/photo5.png"
              alt="photo"
              width={200}
              height={100}
              className="mb-2 w-[100%]"
            />
            <p className="text-center font-semibold ">File Name 01</p>
          </div>
          <div className="w-[80%] lg:w-[30%]  p-2 border-[1px] shadow-lg rounded-md self-center">
            <Image
              src="/photo5.png"
              alt="photo"
              width={200}
              height={100}
              className="mb-2 w-[100%]"
            />
            <p className="text-center font-semibold ">File Name 02</p>
          </div>
          <div className="w-[80%] lg:w-[30%]  p-2 border-[1px] shadow-lg rounded-md self-center">
            <Image
              src="/photo5.png"
              alt="photo"
              width={200}
              height={100}
              className="mb-2 w-[100%]"
            />
            <p className="text-center font-semibold ">File Name 03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
