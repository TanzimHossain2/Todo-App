import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Registration = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Registration;
