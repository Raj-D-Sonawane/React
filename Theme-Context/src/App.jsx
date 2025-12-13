import { useContext } from 'react'
import { ThemeContext } from './Context/Themecontext';



function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center 
        bg-white text-black 
        dark:bg-gray-900 dark:text-white transition-all">

        <h1 className="text-3xl font-bold mb-6">
          Tailwind Dark / Light Mode
        </h1>

        <button
          onClick={toggleTheme}
          className="px-6 py-3 rounded-lg text-lg font-semibold 
          bg-gray-800 text-white 
          dark:bg-yellow-400 dark:text-black 
          transition-all"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  )
}

export default App
