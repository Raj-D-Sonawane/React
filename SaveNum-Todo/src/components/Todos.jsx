import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updatePhone, removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [phone, setPhone] = useState("");

  // 🔹 LocalStorage sync
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const startEdit = (todo) => {
    setEditId(todo.id);
    setPhone(todo.phone);
  };

  const save = (id) => {
    dispatch(updatePhone({ id, phone }));
    setEditId(null);
  };

  return (
    <ul className="mt-6 space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="bg-zinc-800 px-4 py-3 rounded flex justify-between items-center"
        >
          <div className="text-white">
            <p className="font-semibold">{todo.name}</p>

            {editId === todo.id ? (
              <input
                className="mt-1 px-2 py-1 rounded bg-zinc-700 outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <p className="text-sm text-zinc-400">{todo.phone}</p>
            )}
          </div>

          <div className="flex gap-2">
            {editId === todo.id ? (
              <button
                onClick={() => save(todo.id)}
                className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => startEdit(todo)}
                className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-black"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
