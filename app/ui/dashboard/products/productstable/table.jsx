import Link from "next/link";
import { MdPerson3 } from "react-icons/md";

const ProductsTable = () => {
  return (
    <div
      className="rounded-lg mt-5 p-3"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <table className=" w-full mt-5 ms-3 p-5 ">
        <thead className="text-xs mb-3 ">
          <tr>
            <td>Tilte</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="my-0.5 flex flex-row gap-1 items-center py-3">
              <MdPerson3
                size={25}
                className="w-5 h-5 rounded-full bg-gray-600    opacity-20"
              />
              Iphone-10
            </td>
            <td className="my-0.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              sit?
            </td>
            <td className="my-0.5">15</td>
            <td className="my-0.5">Oct 20 2021</td>
            <td className="my-0.5">$123</td>
            <td className="my-0.5  gap-1">
              <Link href="/dashboard/products/productinfo">
                <button className=" bg-green-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400  cursor-pointer">
                  view
                </button>
              </Link>
              <span className=" bg-red-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
                dismiss
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
