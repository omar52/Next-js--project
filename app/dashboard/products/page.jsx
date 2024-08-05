import ProductsTable from "@/app/ui/dashboard/products/productstable/table";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import { fetchProducts } from "@/app/lib/data";

const ProductsPage = async({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,products} = await fetchProducts(q, page);
  return (
    <div
      className="mt-5 p-5 rounded-xl flex flex-col"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <div className="heading flex justify-between">
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className="px-4 py-2 bg-purple-700 text-white rounded-lg">
            Add new
          </button>
        </Link>
      </div>
      <div className="table">
        <ProductsTable products={products} />
      </div>
      <div className="pagination">
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default ProductsPage;
