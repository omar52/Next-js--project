import Image from "next/image";
import MenuLink from "./menulink/menulink";
import "./sidebar.css";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdOutlineShoppingBag,
  MdPeople,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdOutlineShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className="sticky top-5 h-screen p-5">
      <div className="user flex items-center gap-5   mb-5">
        <Image
          className=" rounded-full object-cover"
          src="/noavatar.png"
          alt="user"
          width="50"
          height="50"
        />
        <div className="details flex flex-col">
          <span className=" font-medium	">Omar Abdou</span>
          <span style={{ color: "var(--textsoft)" }} className=" text-xs	">
            Adminstrator
          </span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span
              className=" my-2 mx-0 font-bold text-xs"
              style={{ color: "var(--textsoft)" }}
            >
              {cat.title}
            </span>
            <hr className=" mb-2" />
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
