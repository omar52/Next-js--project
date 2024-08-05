import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const UserInfo = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  // console.log(user);

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
          src={"/noavatar.png"}
          alt="aa"
        />
        <p className="p-2">{user.username}</p>
      </div>
      <form
        action={updateUser}
        className="col-span-2 flex flex-col p-5 rounded-3xl"
        style={{ backgroundColor: "var(--bgsoft)" }}
      >
        <input type="hidden" value={user.id} name="id" />
        <label htmlFor="username">User Name</label>
        <input
          placeholder={user.username}
          className="p-3 rounded-lg"
          type="text"
          name="username"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="email">
          E-mail
        </label>
        <input
          placeholder={user.email}
          className="p-3 rounded-lg"
          type="email"
          name="email"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="mt-2 mb-1" htmlFor="password">
          Password
        </label>
        <input
          placeholder={user.password}
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
          {user.address}
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
          <option value="yes" selected={user.isAdmin}>
            Yes
          </option>
          <option value="no" selected={!user.isAdmin}>
            No
          </option>
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
          <option value="yes" selected={user.isActive}>
            Yes
          </option>
          <option value="no" selected={!user.isActive}>
            No
          </option>
        </select>
        <button className="mt-3 p-5 bg-green-800 text-white  text-xs font-medium me-2   rounded dark:bg-gray-700 dark:text-gray-400  cursor-pointer">
          Updated
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
