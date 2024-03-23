import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [last, setLast] = useState("");
  const [first, setFirst] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const submitDetails = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        const uuid = user.uid;
        const userData = setDoc(doc(db, "users", uuid), {
          teacher: isTeacher,
          first_name: first,
          last_name: last,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="flex w-full h-screen justify-center items-center p-5">
      <div className="flex gap-10 flex-col p-10 bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full shadow-lg">
        <h1 className="text-5xl text-center font-bold">Signup</h1>
        <input
          type="text"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="First Name"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          type="text"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Last Name"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
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
        <button
          className="p-2 rounded-md border border-neutral-700"
          onClick={() => setIsTeacher(!isTeacher)}
        >
          {isTeacher ? "Teacher" : "Student"}
        </button>
        <button
          className="p-2 rounded-md bg-neutral-400 text-neutral-950"
          onClick={submitDetails}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
