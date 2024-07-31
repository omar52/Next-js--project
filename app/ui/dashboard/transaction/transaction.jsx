import { MdPerson3 } from "react-icons/md";

const Transaction = () => {
  return (
    <div
      className="me-2 rounded-lg mt-2 p-3"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <h2>Latest Transaction</h2>
      <table className=" w-full mt-5 ms-3 p-5">
        <thead className="text-xs mb-3 ">
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex flex-row items-center gap-1 my-3">
              <MdPerson3 />
              Moustafah
            </td>
            <td className="my-3">
              <span className=" bg-yellow-800 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 ">
                pending
              </span>
            </td>
            <td className="my-3">14.02.2023</td>
            <td className="my-3">$3.200</td>
          </tr>
          <tr>
            <td className="flex flex-row items-center gap-1 my-3">
              <MdPerson3 />
              Moustafah
            </td>
            <td className="my-3">
              <span className="  bg-green-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 ">
                done
              </span>
            </td>
            <td className="my-3">14.02.2023</td>
            <td className="my-3">$3.200</td>
          </tr>
          <tr>
            <td className="flex flex-row items-center gap-1 my-3">
              <MdPerson3 />
              Moustafah
            </td>
            <td className="my-3">
              <span className=" bg-red-800 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 ">
                cancelled
              </span>
            </td>
            <td className="my-3">14.02.2023</td>
            <td className="my-3">$3.200</td>
          </tr>
          <tr>
            <td className="flex flex-row items-center gap-1 my-3">
              <MdPerson3 />
              Moustafah
            </td>
            <td className="my-3">
              <span className=" bg-yellow-800 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 ">
                pending
              </span>
            </td>
            <td className="my-3">14.02.2023</td>
            <td className="my-3">$3.200</td>
          </tr>
          <tr>
            <td className="flex flex-row items-center gap-1 my-3">
              <MdPerson3 />
              Moustafah
            </td>
            <td className="my-3">
              <span className="  bg-green-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 ">
                done
              </span>
            </td>
            <td className="my-3">14.02.2023</td>
            <td className="my-3">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
