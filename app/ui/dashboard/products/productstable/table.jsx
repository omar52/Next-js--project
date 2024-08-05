import { deleteProduct } from "@/app/lib/actions";
import Image from "next/image";
import Link from "next/link";

const ProductsTable = ({ products }) => {
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
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td className="my-0.5 flex flex-row gap-1 items-center py-3">
                  <Image
                    width={40}
                    height={40}
                    alt="pic"
                    src={product.img || "/noproduct.jpg"}
                    className="w-5 h-5 rounded-full bg-gray-600    opacity-20"
                  />
                  {product.title}
                </td>
                <td className="my-0.5">{product.desc}</td>
                <td className="my-0.5">${product.price}</td>
                <td className="my-0.5">
                  {product.createdAt?.toString().slice(0, 15)}
                </td>
                <td className="my-0.5">{product.stock}</td>
                <td className="my-0.5">
                  <div className="flex">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className=" bg-green-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400  cursor-pointer">
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button type="submit" className=" bg-red-700 text-white p-0.5 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
                        Dismiss
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
