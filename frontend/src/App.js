import Navbar from "./components/Navbar"
import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <h1>hello</h1>
    <Navbar />
    <Routes>
      <Route 
        path='/'
        element={<Home />}
      />
      <Route 
        path='/add-todo'
        element={<AddTodo />}
      />
    </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App