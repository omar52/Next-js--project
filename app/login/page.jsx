const Login = () => {
  return (
    <div className=" flex flex-col min-h-screen justify-center items-center ">
      <form
        className="flex flex-col p-5 rounded-lg text-start w-1/5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        
      >
        <h2 className="mb-10 font-extrabold text-6xl  ">Login</h2>
        <label className="text-xs font-thin text-black" htmlFor="username">
          User Name
        </label>
        <input
          className="outline-none border-none px-3 my-2 py-1.5 rounded-md"
          type="text"
          id="username"
          placeholder="Name"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <label className="text-xs font-thin text-black" htmlFor="password">
          Password
        </label>
        <input
          className="outline-none border-none px-3 mt-2 py-1.5 rounded-md"
          type="text"
          id="password"
          placeholder="Password"
          style={{ backgroundColor: "var(--bg)" }}
        />
        <button className="mt-4 bg-green-600  px-3 py-1.5 rounded-md text-black">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
