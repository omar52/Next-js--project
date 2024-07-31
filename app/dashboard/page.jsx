import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transaction/transaction";

const Dashboard = () => {
  return (
    <div className="flex flex-row mt-2 gap-2 ">
      <div className="left-coloum flex  flex-col basis-3/4">
        <div className="cards flex ">
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div
        className="rightbar basis-1/4 text-center rounded-lg gap-2 flex flex-col "
        
      >
        <Rightbar />
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
