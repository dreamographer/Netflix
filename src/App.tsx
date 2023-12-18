import { Route, Routes } from "react-router-dom"
import  Navbar  from "./components/Navbar"
import Home from "./Pages/Home"

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
    </Routes>
    </>
    )
}

export default App 