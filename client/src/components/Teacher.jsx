import { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { Context } from "../App";

const Teacher = () => {
  const ctx = useContext(Context);

  const [items, setItems] = useState([
    {
      name: "Tissues",
      quantity: 10,
    },
    {
      name: "Binder Paper",
      quantity: 15,
    },
    {
      name: "Glue",
      quantity: 3,
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!ctx.user) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex w-full justify-center px-5 py-10">
      <div className="max-w-5xl w-full flex flex-col gap-2">
        <div className="pb-5">
          <h1 className="text-4xl">Good morning, Teacher!</h1>
        </div>
        <h1 className="text-lg">Requested Items</h1>
        <div className="max-w-2xl w-full flex-col flex border border-neutral-700">
          {items.map((item) => (
            <div className="flex justify-between border-b border-neutral-700 p-5 items-center">
              <h1 className="text-xl">{item.name}</h1>
              <div className="flex gap-5">
                <h1>quantity</h1>
                <h1 className="text-xl">{item.quantity}</h1>
                <h1 className="text-neutral-700">X</h1>
              </div>
            </div>
          ))}
          <button
            className="text-center p-5 bg-neutral-700/10 hover:bg-neutral-700/50 transition-all"
            onClick={() => navigate("/add-item")}
          >
            Add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
