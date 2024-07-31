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
      <div className="path capitalize">{pathname.split("/").pop()}</div>
      <div className="flex ms-auto">
        <div
          className="search flex items-center p-2 rounded-xl me-2 "
          style={{ backgroundColor: "var(--bg)" }}
        >
          <MdSearch size={25} className="cursor-pointer me-2" />
          <input
            style={{ backgroundColor: "var(--bg)" }}
            type="text"
            placeholder="Search..."
            
          />
        </div>
        <div className="icons flex items-center">
          <MdOutlineMessage size={25} className="mx-2" />
          <MdNotifications size={25} className="mx-2" />
          <MdPublic size={25} className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
