import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/c9dbf687-1db4-4ae1-9d36-f3500ac09859/TR-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white ">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold"> Sign In</h1>
            <form className="w-full flex flex-col py-4"  >
              <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="email" autoComplete="email" />
              <input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="password" />
              <button className="bg-red-600 py-3 my-6 rounded font-bold" >Sign In</button>
              <div className="flex justify-between text-sm text-gray-600 " >
                <p> <input className="mr-2" type="checkbox" />Remember Me </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8"  ><span className="text-gray-600 " >New to Netflix?</span>
              <Link className="ml-2" to="/login" >Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login
