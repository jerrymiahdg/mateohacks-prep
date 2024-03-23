const Login = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center p-5">
      <div className="flex gap-10 flex-col p-10 bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full shadow-lg">
        <h1 className="text-5xl text-center font-bold">Login</h1>
        <input
          type="text"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Username"
        />
        <input
          type="password"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Password"
        />
        <button className="p-2 rounded-md bg-neutral-400 text-neutral-950">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
