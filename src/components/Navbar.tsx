const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full z-[100] absolute"> 
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
        <div>
            <button className=" px-6 py-2 mr-4">Sign up</button>
            <button className="bg-red-600 rounded px-6 py-2" >Sign IN</button>
        </div>
 </div>
  )
}

export default Navbar
