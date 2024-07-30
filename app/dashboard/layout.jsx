import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import "../ui/dashboard/dashborad.css";

const layout = ({ children }) => {
  return (
    <div className="flex flex-row" >
      <div className="basis-1/5	p-5" style={{backgroundColor:"var(--bgsoft)"}}>
        <Sidebar />
      </div>

      <div className="basis-4/5 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
