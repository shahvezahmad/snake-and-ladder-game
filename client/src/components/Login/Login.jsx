import React from 'react';
import "./Login.css";
import Header from "../Header/Header"
import Register from "../Register/Register";
const Login = () => {

  return (
    <>
      <div className='bg-slate-300 absolute h-[100%] w-[100%] sm:hidden'>
        <Header />
        <Register/>
      </div>

      <div className='shows mobilel bg-slate-300 h-[100%] absolute'>
        <div className=''>
          <div className='bg-slate-600 h-[50px] flex flex-row justify-between items-start'>
            <div className='white px-4 p-[auto] font-medium big'>
              Snake and Ladder
            </div>
          </div>
        </div>
        <Register />
      </div>

      <div className='footer1 relative top-[95vh]'>
        <a href="https://www.github.com/shahvezahmad">
          Snake & Ladder - Shahvez
        </a>
      </div>
    </>
  )
}

export default Login;