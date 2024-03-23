import { useState } from "react";
import { useNavigate } from "react-router";
import { collection, addDoc } from "firebase/firestore";

const AddItem = () => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex w-full h-screen justify-center items-center p-5">
      <div className="flex gap-10 flex-col p-10 bg-neutral-900 border border-neutral-800 rounded-lg max-w-2xl w-full shadow-lg">
        <h1 className="text-5xl text-center font-bold">Add Item</h1>
        <input
          type="text"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="p-2 bg-neutral-800 rounded-md"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="p-2 rounded-md bg-neutral-400 text-neutral-950"
          onClick
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default AddItem;
