import RightPanel from "./rigpt-panel";
import LeftPanel from "./left-panel";

const Main = () => {
  return (
    <div className="absolute left-0 top-[90%] w-full  gap-x-4 bg-purple-50 flex flex-col lg:flex-row px-3 lg:px-20  py-4 h-screen justify-between ">
      <RightPanel />
      <LeftPanel />
    </div>
  );
};
export default Main;
