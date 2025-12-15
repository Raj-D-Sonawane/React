import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 flex justify-center items-center">
      <div className="w-full max-w-xl p-6">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          📱 Phone Todo App
        </h1>

        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
