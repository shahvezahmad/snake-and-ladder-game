import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    
  const [rpassword, changerp] = useState("");
  const [rname, changern] = useState("");
  const [rpassword2, changerp2] = useState("");
  const [rm, changerm] = useState("");
  const [rpassword3, changerp23] = useState("");
  const [rm3, changerm3] = useState("");
  const [showdd, showd] = useState(true);
  const [resetform, setResetForm] = useState(true);
  const signin = async () => {
    if (!rpassword3 || !rm3) {
      toast("All fields are necessary")
      return;
    }
    const reply = await axios.post("https://snake-ladder-server.onrender.com/api/v1/login", {
      email: rm3,
      password: rpassword3
    }).then((res) => {
      const msg = res.data.msg;
      if (msg === "OK") {
        localStorage.setItem("email", rm3);
        localStorage.setItem("Verified", true)
        localStorage.setItem("start", false)
        localStorage.setItem("slide1", 1)
        localStorage.setItem("n1", 0);
        localStorage.setItem("n2", 0);
        localStorage.setItem("n3", 0);
        localStorage.setItem("n4", 0);
        window.location.reload();
      }
      else if (msg === "PLEASE VERIFY YOUR EMAIL FIRST") {
        toast(msg);
      }
      else {
        toast("Credentials do not match");
      }
    }).catch((err) => {
      toast("AN ERROR OCCURRED");
    })
    window.location.reload();
  }

  useEffect(() => {
    changerp("");
    changern("");
    changerp2("");
    changerm("");
    setResetForm(false);
  }, [resetform])

  const notify = async () => {
    if (!rpassword || !rpassword2 || !rm || !rname) {
      toast("All fields are necessary")
      return;
    }
    if (rpassword !== rpassword2) {
      toast("Password do not match");
      return;
    }
    await axios.post("https://snake-ladder-server.onrender.com/api/v1/verify/report", {
      email: rm,
      name: rname,
      password: rpassword
    })
      .then((res) => {
        console.log(res);
        if (res.data.msg && res.data.msg === "Already Registered") {
          toast("ALREADY REGISTERED")
          return;
        }
        else {
          toast(`Verify Your Mail....${res.data.datas}`)
          setResetForm(true);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.msg === true) {
          toast("ALREADY REGISTERED")
          return;
        }
        toast(`An Error Occurred, Please Try Again Later`)
      })
  };

  return (
    <>
      <div className='bg-slate-300 my-[15%] md:my-[20%] lg:my-[10%] gap-5 mx-auto grid grid-cols-2 justify-around md:grid-rows-2 md:grid-cols-1 '>
        <div className='align-centre col-start-1  md:row-start-2 px-5 w-[] md:w-[100%] '>
          <h1 className='font-bold head align-left'>
            General Instructions
          </h1>
          <div className=''>
            <ul style={{ listStyleType: "disc" }} className='ml-[10px]'>
              <li>
                Snake and ladder Game
              </li>
              <li>
                To Finish the game, player have to reach 100
              </li>
              <li>
                Tip: Player can climb the ladder and snake can eat the player
              </li> 
              <li>
                Multiplayer functionality, allowing a maximum of 4 players to play together
              </li>
              <li>
                Register with a valid email, click the link sent to your email for verification, <br/> then log in to play the game.
              </li>
              <li>
                Test: <br/>
                Email: shahvezahmad5786@gmail.com <br/>
                Password: shahvez
              </li>
            </ul>
          </div>
        </div>
        <div className='col-start-2 md:col-start-1 md:row-start-1  flex flex-col'>
          <form className={`${showdd ? "" : "hidden"} flex flex-col relative mr-10 md:px-[20%] mb-10 mt-[-20px]`}>
            <label>Enter Your Username</label>
            <input
              required
              className='rform'
              type="text"
              placeholder='Username'
              onChange={e => { changern(e.target.value) }}
            />
            <label>Enter Your Email</label>
            <input
              required
              placeholder='Valid Email'
              className='rform'
              type="email"
              onChange={e => { changerm(e.target.value) }}
            />
            <label>Enter Your Password</label>
            <input
              required
              placeholder='Password (>5)'
              className='rform'
              type="password"
              onChange={e => { changerp(e.target.value) }}
            />
            <label>Confirm Your Password</label>
            <input
              required
              placeholder='Password'
              className='rform'
              onChange={e => { changerp2(e.target.value) }}
              type="password"
            />
            <button type="button" onClick={notify} className='bg-green-300 font-semibold text-lg max-w-fit px-4 rounded-sm mx-auto mt-4 border-red-300 btnr'>Register</button>
          </form>
          <form className={`${showdd ? "hidden" : ""} shows flex flex-col w-[90%] mx-auto`}>
            <label className='mb-0'>
              Enter your Email
            </label>
            <input
              required
              className='mt-0 mb-3'
              type='email'
              placeholder='Email'
              onChange={(e) => changerm3(e.target.value)}
              value={rm3}
            />
            <label className='mt-0 mb-0'>
              Enter your Password
            </label>
            <input
              className='mt-0'
              type="password"
              placeholder='Password'
              onChange={(e) => { changerp23(e.target.value) }}
              value={rpassword3}
            />
            <button type="button" onClick={signin} className='text-slate-200 mt-4 bg-blue-500 px-4 rounded-sm h-[30px] gap-3 ' >Sign In</button>
          </form>
          <div className='shows cursor-pointer text-green-700 ml-[-29px]' >
            <p className={`${showdd ? "" : "hidden"}  px-auto text-center ml-[-30px]  `} onClick={() => showd(showdd = false)}>
              Already Registered? Login Here
            </p>
            <p className={`${showdd ? "hidden" : ""} ml-10`} onClick={() => showd(showdd = true)}>
              Register Here!
            </p>
          </div>
        </div>

      </div>

      <ToastContainer />
    </>
  )
}

export default Register