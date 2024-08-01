import Image from "next/image";

const UserInfo = () => {
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
        <p className="p-2">Hello</p>
      </div>
      <form
        className="col-span-2 flex flex-col p-5 rounded-3xl"
        style={{ backgroundColor: "var(--bgsoft)" }}
      >
        <label htmlFor="username">User Name</label>
        <input
          placeholder="hello"
          className="p-3 rounded-lg"
          type="text"
          name="username"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="email">
          E-mail
        </label>
        <input
          placeholder="hello@gmail.com"
          className="p-3 rounded-lg"
          type="email"
          name="email"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="password">
          Password
        </label>
        <input
          placeholder="123456"
          className="p-3 rounded-lg"
          type="password"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="Phone">
          Phone
        </label>
        <input
        placeholder="010000"
          className="p-3 rounded-lg"
          type="number"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="Address">
          Adress
        </label>
        <textarea
          className="p-3 rounded-lg"
          name="Address"
          id="address"
          style={{ backgroundColor: "var(--bg)" }}
        >
          addres
        </textarea>
        <label className="mt-2 mb-1" htmlFor="isadmin">
          Is Admin
        </label>
        <select
          className="p-3 rounded-lg"
          name="isadmin"
          id="isadmin"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label className="mt-2 mb-1" htmlFor="isactive">
          Is Active
        </label>
        <select
          className="p-3 rounded-lg"
          name="isadmin"
          id="isadmin"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </form>
    </div>
  );
};

export default UserInfo;
