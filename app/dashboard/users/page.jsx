import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import UserTable from "@/app/ui/dashboard/user/table/table";

const UserPage = () => {
  return (
    <div
      className="mt-5 p-5 rounded-xl flex flex-col"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <div className="heading flex justify-between">
        <Search placeholder="Search for a User" />
        <button className="px-4 py-2 bg-purple-700 text-white rounded-lg">
          Add new
        </button>
      </div>
      <div className="table">
        <UserTable />
      </div>
      <div className="pagination">
        <Pagination/>
      </div>
    </div>
  );
};

export default UserPage;
