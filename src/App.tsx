import { Route, Routes } from "react-router-dom"
import  Navbar  from "./components/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Account from "./Pages/Account"
import SignUp from "./Pages/SignUp"
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/signup' element={<SignUp/>}> </Route>
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute> }> </Route>
      </Routes>
      </AuthContextProvider>
    </>
    )
}

export default App 