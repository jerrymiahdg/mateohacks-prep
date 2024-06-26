import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitDetails = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex w-full h-screen justify-center items-center p-5">
      <div className="flex gap-10 flex-col p-10 bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full shadow-lg">
        <h1 className="text-5xl text-center font-bold">Login</h1>
        <input
          type="text"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 rounded-md bg-neutral-400 text-neutral-950"
          onClick={submitDetails}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
