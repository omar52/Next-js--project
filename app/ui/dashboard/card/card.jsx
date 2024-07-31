import { MdOutlinePeopleOutline } from "react-icons/md";

const Card = () => {
  return (
    <div
      className="basis-1/3 text-center  rounded-lg p-5 flex flex-row  items-start  "
      style={{ backgroundColor: "var(--bgsoft)", maxHeight: "150px" }}
    >
      <div
        className="image rounded-full p-0.5"
        style={{ backgroundColor: "grey" }}
      >
        <MdOutlinePeopleOutline size={30} />
      </div>
      <div className="content ">
        <p className=" text-xs mb-3">Totsl Users</p>
        <p>10,595</p>
        <p className="text-xs mt-3">
          <span className=" text-lime-400 ">12% </span>{" "}
          <small>more than previous work</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
