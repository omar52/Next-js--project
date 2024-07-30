"use client";
import { usePathname } from "next/navigation";
import {
  MdOutlineMessage,
  MdNotifications,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className="flex items-center  p-5 rounded-xl "
      style={{ backgroundColor: "var(--bgsoft)", height: "60px" }}
    >
      <div className="path">{pathname.split("/").pop()}</div>
      <div className="flex ms-auto">
        <div
          className="search flex items-center p-2 rounded-xl "
          style={{ backgroundColor: "var(--bg)" }}
        >
          <MdSearch className="cursor-pointer me-2" />
          <input
            style={{ backgroundColor: "var(--bg)" }}
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="icons flex items-center">
          <MdOutlineMessage className="mx-2" />
          <MdNotifications className="mx-2" />
          <MdPublic className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
