import Image from "next/image";

const ProductInfo = () => {
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
          src="/noavatar.png"
          alt=""
        />
        <p className="p-2">i phone</p>
      </div>
      <form
        className="col-span-2 flex flex-col p-5 rounded-3xl"
        style={{ backgroundColor: "var(--bgsoft)" }}
      >
        <label htmlFor="productname">Product Name</label>
        <input
          placeholder="I-phone12"
          className="p-3 rounded-lg"
          type="text"
          name="username"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="number">
          Pice
        </label>
        <input
          placeholder="$125"
          className="p-3 rounded-lg"
          type="number"
          name="price"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="number">
          Stock
        </label>
        <input
          placeholder="222"
          className="p-3 rounded-lg"
          type="number"
          name="stock"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="color">
          color
        </label>
        <input
          placeholder="red"
          className="p-3 rounded-lg"
          type="text"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="size">
          Size
        </label>
        <textarea
          className="p-3 rounded-lg"
          name="desc"
          id="desc"
          style={{ backgroundColor: "var(--bg)" }}
        >
          Description
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
          <option className="border-none outline-none p-1" value="yes">machines</option>
          <option className="border-none outline-none p-1" value="no">clothes</option>
        </select>
      </form>
    </div>
  );
};

export default ProductInfo;
