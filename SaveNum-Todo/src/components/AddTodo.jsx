import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (!name || phone.length !== 10) return;

    dispatch(addTodo({ name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-lg flex gap-3">
      <input
        className="flex-1 px-3 py-2 rounded bg-zinc-700 text-white outline-none"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-40 px-3 py-2 rounded bg-zinc-700 text-white outline-none"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={submitHandler}
        className="bg-green-500 hover:bg-green-600 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
