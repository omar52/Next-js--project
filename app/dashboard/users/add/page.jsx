const AddUser = () => {
  return (
    <form
      className="  mt-5 rounded-lg grid grid-cols-2 gap-4 p-5"
      style={{ backgroundColor: "var(--bgsoft)" }}
    >
      <input
        className="p-4 w-3/4 rounded-xl"
        name="username"
        type="text"
        required
        placeholder="Username"
        style={{ backgroundColor: "var(--bg)" }}
      />
    
      <input
        className="p-4 w-3/4 ms-auto rounded-xl"
        style={{ backgroundColor: "var(--bg)" }}
        name="email"
        type="email"
        required
        placeholder="Email"
      />
      <input
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl p-4 w-3/4 "
        name="password"
        type="password"
        required
        placeholder="Password"
      />
      <input
        style={{ backgroundColor: "var(--bg)" }}
        className="rounded-xl p-4 w-3/4 ms-auto"
        name="phone"
        type="number"
        required
        placeholder="Phone"
      />
      <select
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl p-4 w-3/4"
        name="is Admin"
        id="is admin"
      >
        <option value="general">Is Admin</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl p-4 w-3/4 ms-auto"
      >
        <option value="general">Is Active</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <textarea
        style={{ backgroundColor: "var(--bg)" }}
        className=" rounded-xl w-auto p-4 col-span-2"
        name="address"
        id="address"
        placeholder="Address"
        rows={5}
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

export default AddUser;
