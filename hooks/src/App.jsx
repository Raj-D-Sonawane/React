import {BrowserRouter,  Route, Routes} from "react-router-dom";
import './App.css'
import UseState from "./hooks/UseState";
import UseRef from "./hooks/UseRef";
import UseCallback from "./hooks/UseCallback";
import UseEffect from "./hooks/UseEffect";
import Navbar from "./Navbar";


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = '/' element={<UseState />} />
      <Route path= '/useRef' element={<UseRef />} />
      <Route path= '/useCallback' element={<UseCallback />} />
      <Route path= '/useEffect' element={<UseEffect />} />



    </Routes>
    </BrowserRouter>
    
     
    
  )
}

export default App
