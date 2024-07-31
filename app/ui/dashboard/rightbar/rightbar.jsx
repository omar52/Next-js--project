import Image from "next/image";
import {
  MdOutlineLocalFireDepartment,
  MdOutlinePlayCircleFilled,
  MdOutlineRocketLaunch,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Rightbar = () => {
  return (
    <>
      <div
        className=" rounded-lg p-5 text-start"
        style={{ backgroundColor: "var(--bgsoft)" , position:"relative"  }}
      >
        <Image
        className="opacity-20	"
          height="150"
          width="150"
          src="/astronaut.png"
          alt="ast"
          style={{ position: "absolute", bottom: "20px", right: "20px"  }}
        />
        <h3 className="flex items-center font-semibold gap-2	   ">
          <MdOutlineLocalFireDepartment size={30} className="text-orange-600" />
          Available Now!
        </h3>
        <p className=" font-semibold my-8">
          How to use the new version of admin dashboard
        </p>
        <small className="text-gray-600 ">Take 4 minutes to learn </small>
        <p className="mt-8" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aut.
        </p>
        <button className="flex items-center mt-3 gap-3 bg-purple-700 px-5 py-3 rounded-lg">
          {" "}
          <MdOutlinePlayCircleFilled />
          Watch
        </button>
      </div>
      <div
        className=" rounded-lg p-5 text-start"
        style={{ backgroundColor: "var(--bgsoft)" }}
      >
        <h3 className="flex items-center font-semibold gap-2	   ">
          <MdOutlineRocketLaunch size={30} className="text-orange-600" />
          Available Now!
        </h3>
        <p className=" font-semibold my-8">
          New Server Actions Are Available,partial pre-rendering is coming up
        </p>
        <small className="text-gray-600 ">Boost Your Productivity </small>
        <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, aut.
        </p>
        <button className="flex items-center mt-3 gap-3 bg-purple-700 px-5 py-3 rounded-lg">
          {" "}
          <MdOutlineKeyboardDoubleArrowRight />
          Watch
        </button>
      </div>
    </>
  );
};

export default Rightbar;
