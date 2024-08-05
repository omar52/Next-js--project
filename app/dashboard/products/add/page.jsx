import { addProduct } from "@/app/lib/actions";

const AddProduct = () => {
  return (
    <form
      action={addProduct}
      className="  mt-5 rounded-lg grid grid-cols-2 gap-4 p-5"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <input
        className="p-4 w-3/4 rounded-xl"
        type="text"
        placeholder="title"
        name="title"
        required
        style={{ backgroundColor: "var(--bg)" }}
      />
      <select
        className="p-1.5 w-3/4 ms-auto rounded-xl"
        name="cat"
        id="cat"
        style={{ backgroundColor: "var(--bg)" }}
      >
        <option value="general">Choose a category</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Funiture</option>
        <option value="industrial">Industrial</option>
      </select>
      <input
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl p-4 w-3/4 "
        type="number"
        placeholder="price"
        name="price"
        required
      />
      <input
        style={{ backgroundColor: "var(--bg)" }}
        className="rounded-xl p-4 w-3/4 ms-auto"
        type="number"
        placeholder="stock"
        name="stock"
        required
      />
      <input
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl p-4 w-3/4"
        type="text"
        placeholder="color"
        name="color"
      />
      <input
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl p-4 w-3/4 ms-auto"
        type="text"
        placeholder="size"
        name="size"
      />

      <textarea
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl w-auto p-4 col-span-2"
        required
        name="desc"
        id="desc"
        rows="16"
        placeholder="Description"
      ></textarea>

      <button
        type="submit"
        className="  col-span-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
