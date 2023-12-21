import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
const Navbar = () => {
  const auth = UserAuth();
  if (!auth) {
    throw new Error("Auth context is null");
  }
  const { user, logOut } = auth
  const navigate=useNavigate()
  const hadleLogOut=async()=>{
 try {
    await logOut()
   navigate('/')
 } catch (error) {
  console.log(error);
  
 }
  }
  
  return (
    <div className="flex items-center justify-between p-4 w-full z-[100] absolute">
      <Link to={'/'}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
      </Link> 
      {
        user?.email?
          <div className="flex flex-col justify-center items-center sm:flex-row  item-center">
            <Link to={'/account'}>
              <button className="bg-red-600 rounded px-6 py-2" >Account</button>
            </Link>
    
            <button onClick={hadleLogOut} className=" px-6 py-2 mr-4">LogOut</button>
        
          </div>
          :
          <div className="flex flex-col justify-center items-center sm:flex-row  item-center">
            <Link to={'/login'}>
              <button className="bg-red-600 rounded px-6 py-2" >Sign IN</button>
            </Link>
            <Link to={'/signUp'}>
              <button className=" px-6 py-2 mr-4">Sign up</button>
            </Link>
          </div>
      }
       
    </div>
  )
}

export default Navbar
