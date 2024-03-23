import {useState} from "react";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const[email, setEmail] = useState("");
  const[password,setPassword] = useState("");
  const submitDetails = (e)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
  return (
    <div className="flex w-full h-screen justify-center items-center p-5">
      <div className="flex gap-10 flex-col p-10 bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full shadow-lg">
        <h1 className="text-5xl text-center font-bold">Signup</h1>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-2 rounded-md bg-neutral-400 text-neutral-950" onClick={submitDetails}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
