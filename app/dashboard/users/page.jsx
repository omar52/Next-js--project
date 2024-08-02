import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import UserTable from "@/app/ui/dashboard/user/table/table";
import Link from "next/link";
import { fetchUsers } from "@/app/lib/data";

const UserPage = async () => {
  const users = await fetchUsers();
  console.log(users);

  return (
    <div
      className="mt-5 p-5 rounded-xl flex flex-col"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <div className="heading flex justify-between">
        <Search placeholder="Search for a User" />
        <Link href="/dashboard/users/add">
          <button className="px-4 py-2 bg-purple-700 text-white rounded-lg">
            Add new
          </button>
        </Link>
      </div>
      <div className="table">
        <UserTable users={users} />
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default UserPage;
