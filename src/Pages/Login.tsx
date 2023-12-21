import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { User, UserCredential } from 'firebase/auth';

type AuthContextType = {
  signUP: (email: string, password: string) => Promise<UserCredential>,
  logIn: (email: string, password: string) => Promise<UserCredential>,
  logOut: () => Promise<void>,
  user: User | null
};
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const[error,setError]=useState('')
  const navigate = useNavigate()

  const auth = UserAuth();
  if (!auth) {
    throw new Error("Auth context is null");
  }
  const { user, logIn }: AuthContextType = auth;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate('/')
    } catch (err:any) {
      console.log(err.message);
      setError(err?.message)

    }

  }
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflixBG" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" ></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-width-[450px] h-[500px] sm:w-96  mx-auto bg-black/75 ">
            <div className="max-w-[320px] mx-auto  py-16">
              <h1 className="text-3xl font-bold ">SIGN IN</h1>
              {error ? <p className='bg-red-600 h-14 text-center items-center flex p-3 mt-3'>Please Check your credentials</p>: null }
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-3 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
                <input onChange={(e) => setpassword(e.target.value)} className="p-3 my-3 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign UP</button>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <p><input className="mr-2" type="checkbox" />Remember ME</p>
                  <p>Need Help</p>
                </div>
                <p className="py-8"><span className="text-gray-400">New to netflix ? </span><Link to={'/signup'}>Sign Up</Link> </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login