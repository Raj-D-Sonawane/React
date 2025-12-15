import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }))
    setEditId(null)
  }

  return (
    <>
      <div className="text-xl font-bold">Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {/* TEXT / INPUT */}
            {editId === todo.id ? (
              <input
                className="px-2 py-1 rounded"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            {/* BUTTONS */}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 px-3 py-1 rounded"
                >
                  💾
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 px-3 py-1 rounded"
                >
                  ✏️
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-3 py-1 rounded"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
