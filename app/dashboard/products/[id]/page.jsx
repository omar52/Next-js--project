import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";

const ProductInfo = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  // console.log(product);
  
  return (
    <div className="grid grid-cols-3  mt-5 gap-20">
      <div
        className="info w-6/9 p-5 rounded-3xl h-fit"
        style={{ backgroundColor: "var(--bgsoft)" }}
      >
        <Image
          className=" w-full p-2 rounded-2xl"
          height={50}
          width={50}
          src={product.img || "/noavatar.png"}
          alt="aa"
        />
        <p className="p-2">{product.title}</p>
      </div>
      <form
        action={updateProduct}
        className="col-span-2 flex flex-col p-5 rounded-3xl"
        style={{ backgroundColor: "var(--bgsoft)" }}
      >
        <input type="hidden" value={product.id} name="id" />
        <label htmlFor="title">Product Name</label>
        <input
          placeholder={product.title}
          className="p-3 rounded-lg"
          type="text"
          name="title"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="number">
          Pice
        </label>
        <input
          placeholder={product.price}
          className="p-3 rounded-lg"
          type="number"
          name="price"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="number">
          Stock
        </label>
        <input
          placeholder={product.stock}
          className="p-3 rounded-lg"
          type="number"
          name="stock"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="color">
          color
        </label>
        <input
          placeholder={product.color}
          className="p-3 rounded-lg"
          name="color"
          type="text"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="size">
          Size
        </label>
        <input
          placeholder={product.size}
          className="p-3 rounded-lg"
          name="size"
          type="text"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="desc">
          Description
        </label>
        <textarea
          className="p-3 rounded-lg"
          name="desc"
          id="desc"
          style={{ backgroundColor: "var(--bg)" }}
        >
          {product.desc}
        </textarea>

        <label className="mt-2 mb-1" htmlFor="isactive">
          Category
        </label>
        <select
          className="p-3 rounded-lg border-none outline-none"
          name="cat"
          id="cat"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <option className="border-none outline-none p-1" value="yes">
            machines
          </option>
          <option className="border-none outline-none p-1" value="no">
            clothes
          </option>
        </select>
        <button  className="mt-3 p-5 bg-green-800 text-white  text-xs font-medium me-2   rounded dark:bg-gray-700 dark:text-gray-400  cursor-pointer">
          Updated
        </button>
      </form>
    </div>
  );
};

export default ProductInfo;
