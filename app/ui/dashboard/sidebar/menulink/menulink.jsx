"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      className={
        pathname === item.path
          ? " flex flex-row items-center gap-3 p-3 my-2 rounded hover:bg-gray-400 bg-gray-400"
          : "flex flex-row items-center gap-3 p-3 my-2 rounded hover:bg-gray-400"
      }
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
