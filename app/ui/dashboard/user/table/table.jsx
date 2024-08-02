import Image from "next/image";
import Link from "next/link";
import { MdPerson3 } from "react-icons/md";

const UserTable = ({ users }) => {
  return (
    <div
      className="rounded-lg mt-5 p-3"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <table className=" w-full mt-5 ms-3 p-5 ">
        <thead className="text-xs mb-3 ">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Action</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <>
              <tr>
                <td className="mt-0.5 flex flex-row gap-1 items-center py-3">
                  <Image
                    alt="pic"
                    width={25}
                    height={25}
                    href={user.img}
                    className="w-5 h-5 rounded-full bg-gray-600    opacity-20"
                  />
                  {user.username}
                </td>
                <td className="mt-0.5">{user.email}</td>
                <td className="mt-0.5">OCt 30 2023</td>
                <td className="mt-0.5">client</td>
                <td className="mt-0.5">{user.isActive}</td>
                <td className="mt-0.5  gap-1">
                  <Link href="/dashboard/users/userinfo">
                    <button className=" bg-green-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400  cursor-pointer">
                      view
                    </button>
                  </Link>
                  <button className=" bg-red-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
                    dismiss
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
